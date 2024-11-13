import pandas as pd
import pickle
from sklearn.feature_extraction.text import TfidfVectorizer

# データの読み込み
data = pd.read_json('data/Fukushima.jsonl', lines=True)

# NaN値を含む行を削除
data = data.dropna(subset=['説明'])

# 所要時間を計算する関数
def calculate_average_stay_time(stay_time_dict):
    if not isinstance(stay_time_dict, dict):
        return None
    total_percentage = 0
    total_time = 0.0
    time_mapping = {
        "1時間未満": 0.5,
        "1〜2時間": 1.5,
        "2〜3時間": 2.5,
        "3時間以上": 3.5  # 平均値として3.5時間を使用
    }
    for time_range, percentage in stay_time_dict.items():
        if time_range in time_mapping:
            total_percentage += percentage
            total_time += time_mapping[time_range] * percentage
    if total_percentage == 0:
        return None
    average_time = total_time / total_percentage
    return average_time

# おすすめな人を取得する関数
def get_top_two_recommendations(travel_type_ratings):
    if not isinstance(travel_type_ratings, dict):
        return None
    sorted_ratings = sorted(travel_type_ratings.items(), key=lambda x: x[1], reverse=True)
    top_two = [k for k, v in sorted_ratings[:2] if v > 0]
    return ', '.join(top_two) if top_two else None

# ジャンルを取得する関数（重複を削除）
def get_genre_display(genre_dict):
    if not isinstance(genre_dict, dict):
        return None
    genres = set()
    for key in ['メイン', 'サブ', 'タグ']:
        value = genre_dict.get(key)
        if isinstance(value, list):
            genres.update(value)
        elif isinstance(value, str):
            genres.add(value)
    return ', '.join(genres) if genres else None

# 所要時間、おすすめな人、ジャンル、画像をデータフレームに追加
data['所要時間'] = data['訪問者の特徴'].apply(lambda x: calculate_average_stay_time(x.get('滞在時間')) if isinstance(x, dict) else None)
data['おすすめな人'] = data['旅行タイプ別評価'].apply(lambda x: get_top_two_recommendations(x) if isinstance(x, dict) else None)
data['ジャンル_表示'] = data['ジャンル'].apply(lambda x: get_genre_display(x) if isinstance(x, dict) else None)
data['画像_URL'] = data['画像'].apply(lambda imgs: imgs[0] if isinstance(imgs, list) and imgs else None)

# 必要な前処理（説明列を使用してTF-IDF特徴量を生成）
vectorizer = TfidfVectorizer()
tfidf_features = vectorizer.fit_transform(data['説明'])

# 特徴量とともにデータを保存
processed_data = {
    '名称': data['名称'].tolist(),
    '住所': data['住所'].tolist(),
    '費用': data['料金・値段'].tolist(),  # "費用" の代わりに "料金・値段" を使用
    '詳細URL': data['詳細URL'].tolist(),
    '所要時間': data['所要時間'].tolist(),
    'おすすめな人': data['おすすめな人'].tolist(),
    'ジャンル_表示': data['ジャンル_表示'].tolist(),
    '画像_URL': data['画像_URL'].tolist(),
    'tfidf_features': tfidf_features
}

# 特徴量とデータ全体を保存
with open('models/processed_data.pkl', 'wb') as f:
    pickle.dump(processed_data, f)

# TF-IDFベクトライザーも別途保存
with open('models/tfidf_vectorizer.pkl', 'wb') as f:
    pickle.dump(vectorizer, f)

print("モデルのトレーニングと保存が完了しました。")
