# backend/Dockerfile

# ベースイメージとして公式の Python 3.9 イメージを使用
FROM python:3.9-slim

# 作業ディレクトリを設定
WORKDIR /app

# 必要なライブラリをインストール
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションコードをコピー
COPY . .

# モデルの訓練を実行（必要に応じて）
# 既にモデルが訓練済みであれば、この行はコメントアウトできます
# RUN python model_training.py

# FastAPI サーバーを起動
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
