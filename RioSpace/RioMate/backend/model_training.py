import pandas as pd
import json
import pickle
import os
from janome.tokenizer import Tokenizer

# データの読み込み
data = []
prefectures = ['Fukushima']  # 他の県のデータがある場合はリストに追加
for pref in prefectures:
    with open(f'data/{pref}.jsonl', 'r', encoding='utf-8') as f:
        for line in f:
            data.append(json.loads(line))

# データフレームに変換
df = pd.DataFrame(data)

# データフレームの行数を表示
print(f'DataFrameの行数: {len(df)}')

# 必要なカラムのマッピング
df['名称'] = df['名称']
df['説明'] = df['説明']
df['住所'] = df['住所']
df['画像'] = df['画像']
df['詳細URL'] = df['詳細URL']

# "費用" の設定
df['費用'] = df['料金・値段']

# "所要時間" の設定
def calculate_average_duration(row):
    if '滞在時間(平均)' in row and row['滞在時間(平均)']:
        return row['滞在時間(平均)']
    elif '訪問者の特徴' in row and isinstance(row['訪問者の特徴'], dict):
        if '滞在時間' in row['訪問者の特徴'] and isinstance(row['訪問者の特徴']['滞在時間'], dict):
            durations = row['訪問者の特徴']['滞在時間']
            total = 0
            count = 0
            duration_mapping = {
                '1時間未満': 30,
                '1〜2時間': 90,
                '2〜3時間': 150,
                '3時間以上': 210
            }
            for k, v in durations.items():
                if k in duration_mapping:
                    total += duration_mapping[k] * v
                    count += v
            if count > 0:
                average_minutes = total / count
                hours = int(average_minutes // 60)
                minutes = int(average_minutes % 60)
                if hours > 0 and minutes > 0:
                    return f"{hours}時間{minutes}分"
                elif hours > 0:
                    return f"{hours}時間"
                else:
                    return f"{minutes}分"
    return None

df['所要時間'] = df.apply(calculate_average_duration, axis=1)

# "おすすめな人" の設定
def get_top_recommendations(row):
    if '旅行タイプ別評価' in row and isinstance(row['旅行タイプ別評価'], dict) and row['旅行タイプ別評価']:
        ratings = row['旅行タイプ別評価']
        sorted_ratings = sorted(ratings.items(), key=lambda x: x[1], reverse=True)
        top_two = [item[0] for item in sorted_ratings[:2]]
        return '、'.join(top_two)
    else:
        return None

df['おすすめな人'] = df.apply(get_top_recommendations, axis=1)

# "属性" の設定
def get_attributes(row):
    attributes = []
    if 'ジャンル' in row and isinstance(row['ジャンル'], dict) and row['ジャンル']:
        for key in ['メイン', 'サブ', 'タグ']:
            value = row['ジャンル'].get(key)
            if value:
                attributes.append(value)
    return ' '.join(attributes)

df['属性'] = df.apply(get_attributes, axis=1)

# "ジャンル" の整形（重複削除）
def format_genre(row):
    if 'ジャンル' in row and isinstance(row['ジャンル'], dict):
        genres = []
        for key in ['メイン', 'サブ', 'タグ']:
            value = row['ジャンル'].get(key)
            if value:
                genres.append(value)
        # 重複を削除
        unique_genres = list(dict.fromkeys(genres))
        return '、'.join(unique_genres)
    else:
        return ' - '

df['ジャンル_表示'] = df.apply(format_genre, axis=1)

# 都道府県の抽出関数
def extract_prefecture_from_address(address):
    if not isinstance(address, str):
        return ''
    prefectures = [
        '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
        # ... 他の都道府県名を含める
    ]
    for pref in prefectures:
        if address.startswith(pref):
            return pref.replace('県', '').replace('府', '').replace('都', '').replace('道', '')
    return ''

# 都道府県カラムの追加
df['都道府県'] = df['住所'].apply(extract_prefecture_from_address)

# テキストのトークナイズ関数（リストを返す）
def tokenize_text_list(text):
    try:
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
    except Exception as e:
        print(f"Error tokenizing text: {text}")
        print(e)
        return []

# 学習用テキストの作成
df['学習用テキスト'] = df['説明'].fillna('') + ' ' + df['属性'].fillna('') + ' ' + df['都道府県']

# 学習用テキストをトークナイズしてリスト化
df['トークンリスト'] = df['学習用テキスト'].apply(tokenize_text_list)

# 必要なカラムを選択
df = df[['名称', 'トークンリスト', '住所', '都道府県', '画像', '詳細URL', '費用', '所要時間', 'おすすめな人', 'ジャンル_表示']]

# データフレームの行数を表示
print(f'最終的なDataFrameの行数: {len(df)}')

# データの保存
os.makedirs('models', exist_ok=True)

with open('models/processed_data.pkl', 'wb') as f:
    pickle.dump(df, f)
