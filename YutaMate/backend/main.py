from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import pickle
import re
import logging
from sklearn.metrics.pairwise import cosine_similarity

app = FastAPI()

# CORSの設定
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ログ設定
logging.basicConfig(level=logging.INFO)

# モデルとデータの読み込み
try:
    with open("models/tfidf_vectorizer.pkl", "rb") as f:
        vectorizer = pickle.load(f)
    with open("models/processed_data.pkl", "rb") as f:
        processed_data = pickle.load(f)
    logging.info("モデルとデータを正常に読み込みました。")
except Exception as e:
    logging.error(f"モデルの読み込みに失敗しました: {e}")

# リクエストとレスポンスのデータモデル
class RecommendationRequest(BaseModel):
    departure_date: str
    arrival_date: str
    destination: str
    number_of_people: int
    budget: int
    preferences: Optional[str] = None

class Recommendation(BaseModel):
    名称: str
    住所: Optional[str]
    費用: Optional[int]
    詳細URL: Optional[str]
    所要時間: Optional[float]
    おすすめな人: Optional[str]
    ジャンル_表示: Optional[str]
    画像_URL: Optional[str]

# 費用を整数に変換する関数
def parse_cost(cost_str):
    if not cost_str:
        return None
    # 数字部分のみを抽出
    match = re.search(r'\d+', cost_str.replace(",", ""))
    return int(match.group()) if match else None

@app.post("/api/recommendations", response_model=List[Recommendation])
async def get_recommendations(request: RecommendationRequest):
    logging.info(f"検索条件: {request.dict()}")

    # 検索条件をベクトル化
    query = f"{request.destination} {request.preferences}"
    try:
        query_vec = vectorizer.transform([query])
        logging.info(f"検索クエリをベクトル化しました: {query}")
    except Exception as e:
        logging.error(f"ベクトル化に失敗しました: {e}")
        raise HTTPException(status_code=500, detail="ベクトル化に失敗しました。")

    # コサイン類似度によるマッチング
    try:
        similarities = cosine_similarity(query_vec, processed_data["tfidf_features"]).flatten()
        top_indices = similarities.argsort()[-5:][::-1]  # 上位5件の結果
        logging.info(f"類似度計算結果（上位5件のインデックス）: {top_indices}")
    except Exception as e:
        logging.error(f"類似度計算に失敗しました: {e}")
        raise HTTPException(status_code=500, detail="類似度計算に失敗しました。")

    # マッチした結果を返す
    recommendations = []
    for idx in top_indices:
        # 住所の辞書を文字列に変換
        address = processed_data["住所"][idx]
        if isinstance(address, dict):
            postal_code = address.get('郵便番号', '')
            address_str = f"{postal_code} {address.get('住所', '')}"
        else:
            address_str = address

        # 費用の変換
        cost = parse_cost(processed_data["費用"][idx])

        item = {
            "名称": processed_data["名称"][idx],
            "住所": address_str,
            "費用": cost,
            "詳細URL": processed_data["詳細URL"][idx],
            "所要時間": processed_data["所要時間"][idx],
            "おすすめな人": processed_data["おすすめな人"][idx],
            "ジャンル_表示": processed_data["ジャンル_表示"][idx],
            "画像_URL": processed_data["画像_URL"][idx]
        }
        recommendations.append(item)
        logging.info(f"フィルタリング結果: {item}")

    if not recommendations:
        logging.warning("検索条件に一致する結果がありませんでした。")

    return recommendations
