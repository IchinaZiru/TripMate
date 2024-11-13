# ベースイメージの指定（Node.js環境のインストール）
FROM node:16

# 作業ディレクトリの作成と設定
WORKDIR /app

# package.json と package-lock.json をコピーして依存関係をインストール
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# 残りのアプリケーションファイルをコピー
COPY . .

# ポート3000をコンテナで公開
EXPOSE 3000

# アプリケーションの起動
CMD ["npm", "start"]
