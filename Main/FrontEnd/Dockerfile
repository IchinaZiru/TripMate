# ベースイメージの指定（Node.js環境のインストール）
FROM node:16

# 作業ディレクトリの作成と設定
WORKDIR /workspace

# package.json と package-lock.json をコピーして依存関係をインストール
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-router-dom
RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm install axios
RUN npm install @mui/icons-material



# 残りのアプリケーションファイルをコピー
COPY . .

# ポート3000をコンテナで公開
EXPOSE 3000

# アプリケーションの起動
CMD ["npm", "start"]
