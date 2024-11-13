from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np
from rank_bm25 import BM25Okapi
from fastapi.middleware.cors import CORSMiddleware
from janome.tokenizer import Tokenizer
from typing import List, Optional

# モデルとデータの読み込み
with open('models/processed_data.pkl', 'rb') as f:
    df = pickle.load(f)

# トークンリストを取得
tokenized_corpus = df['トークンリスト'].tolist()

# BM25モデルの初期化
bm25 = BM25Okapi(tokenized_corpus)

# FastAPI の設定
app = FastAPI()

# CORSミドルウェアの追加
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 必要に応じてオリジンを指定
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class UserInput(BaseModel):
    zipcode: str
    address: str
    destinations: List[str]
    transport: List[str]
    departDate: str
    returnDate: str
    budget: Optional[int] = None
    travelerCount: Optional[str] = None
    genres: Optional[List[str]] = []
    attributes: Optional[List[str]] = []
    duration: Optional[str] = None

# テキストのトークナイズ関数（リストを返す）
def tokenize_text_list(text):
    if not isinstance(text, str):
        return []
    t = Tokenizer()
    tokens = t.tokenize(text)
    words = []
    for token in tokens:
        part_of_speech = token.part_of_speech.split(',')[0]
        if part_of_speech in ['名詞', '形容詞', '動詞', '副詞']:
            words.append(token.base_form)
    return words

# 都道府県名を正規化する関数
def normalize_prefecture_name(pref_name):
    if not isinstance(pref_name, str):
        return ''
    return pref_name.replace('県', '').replace('府', '').replace('都', '').replace('道', '')

@app.post("/api/recommendations")
def get_recommendations(user_input: UserInput):
    # クエリトークンの作成
    normalized_destinations = [normalize_prefecture_name(d) for d in user_input.destinations]
    query_tokens = []
    query_tokens.extend(normalized_destinations)
    query_tokens.extend(user_input.transport)
    query_tokens.extend(user_input.genres)
    query_tokens.extend(user_input.attributes)
    if user_input.duration:
        query_tokens.append(user_input.duration)
    # 日付情報はクエリトークンに含めない

    # クエリトークンを表示（デバッグ用）
    print(f"Query Tokens: {query_tokens}")

    # BM25によるスコア計算
    scores = bm25.get_scores(query_tokens)

    # スコアを表示（デバッグ用）
    print(f"Scores: {scores}")

    # スコアに基づくランキング
    indices = np.argsort(scores)[::-1]
    recommendations = df.iloc[indices]

    # フィルタリング
    # フィルタリング前の件数を表示（デバッグ用）
    print(f"フィルタリング前の件数: {len(recommendations)}")

    # 目的地でフィルタリング
    if user_input.destinations:
        recommendations = recommendations[recommendations['都道府県'].isin(normalized_destinations)]
        print(f"目的地フィルタリング後の件数: {len(recommendations)}")

    # ジャンルでフィルタリング
    if user_input.genres and '全て' not in user_input.genres:
        recommendations = recommendations[recommendations['ジャンル_表示'].str.contains('|'.join(user_input.genres), na=False)]
        print(f"ジャンルフィルタリング後の件数: {len(recommendations)}")

    # 属性でフィルタリング
    if user_input.attributes:
        recommendations = recommendations[recommendations['おすすめな人'].str.contains('|'.join(user_input.attributes), na=False)]
        print(f"属性フィルタリング後の件数: {len(recommendations)}")

    # 予算でフィルタリング（必要に応じて実装）
    if user_input.budget:
        # 費用の列を数値に変換（例として数字のみ抽出）
        recommendations['費用_数値'] = recommendations['費用'].str.extract('(\d+)').astype(float)
        recommendations = recommendations[recommendations['費用_数値'] <= user_input.budget]
        print(f"予算フィルタリング後の件数: {len(recommendations)}")

    # レスポンス用にデータを整形
    result = recommendations[['名称', '住所', '画像', '詳細URL', '費用', '所要時間', 'おすすめな人', 'ジャンル_表示']]

    # NaN を None に置き換え
    result = result.replace({np.nan: None})

    # リスト形式の辞書に変換
    result = result.to_dict(orient='records')

    return {"recommendations": result}
