##  TRIP MATE
![TripMateBunner](https://github.com/user-attachments/assets/1c7bb5af-fee0-4309-8a65-78004fb0502f)

<div id="top"></div>

## 使用技術一覧

<!-- シールド一覧 -->
<!-- 該当するプロジェクトの中から任意のものを選ぶ-->
<p style="display: inline">
  <!-- フロントエンドのフレームワーク一覧 -->
  <img src="https://img.shields.io/badge/-Node.js-000000.svg?logo=node.js&style=plastic">
  <img src="https://img.shields.io/badge/-Next.js-000000.svg?logo=next.js&style=plastic">
  <img src="https://img.shields.io/badge/-Express.js-000000.svg?logo=Express&style=plastic">
  <img src="https://img.shields.io/badge/-TailwindCSS-000000.svg?logo=tailwindcss&style=plastic">
  <img src="https://img.shields.io/badge/-React-20232A?style=plastic&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/-Npm-CB3837.svg?logo=npm&style=plastic">
    <!-- フロントエンドの言語一覧 -->
  <img src="https://img.shields.io/badge/-TypeScript-65ADF1.svg?logo=typescript&style=plastic">
  <img src="https://img.shields.io/badge/-Javascript-F7DF1E.svg?logo=javascript&style=plastic">
  
  <!-- バックエンドのフレームワーク一覧 -->
  <img src="https://img.shields.io/badge/-Django-092E20.svg?logo=django&style=plastic">
  <img src="https://img.shields.io/badge/-Flask-000000.svg?logo=flask&style=plastic">

  <!-- バックエンドの言語一覧 -->
  <img src="https://img.shields.io/badge/-Python-F2C63C.svg?logo=python&style=plastic">
  <!-- ミドルウェア一覧 -->
  <img src="https://img.shields.io/badge/-Nginx-269539.svg?logo=nginx&style=plastic">
  <img src="https://img.shields.io/badge/-MySQL-4479A1.svg?logo=mysql&style=plastic&logoColor=white">
  <img src="https://img.shields.io/badge/-PostgreSQL-4169E1.svg?logo=postgresql&style=plastic&logoColor=white">
  <img src="https://img.shields.io/badge/-Firebase-FFCA28.svg?logo=firebase&style=plastic">
  <img src="https://img.shields.io/badge/-Gunicorn-199848.svg?logo=gunicorn&style=plastic&logoColor=white">
  <!-- インフラ一覧 -->
  <img src="https://img.shields.io/badge/-Docker-1488C6.svg?logo=docker&style=plastic">
  <!-- デザイン一覧 -->
  <img src="https://img.shields.io/badge/-Figma-F24E1E.svg?logo=figma&style=plastic">
</p>

## 目次

1. [プロジェクトについて](#プロジェクトについて)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [開発環境構築](#開発環境構築)
5. [トラブルシューティング](#トラブルシューティング)

<!-- READMEの作成方法のドキュメントのリンク -->

<!-- Dockerfileのドキュメントのリンク -->

<!-- プロジェクト名を記載 -->

## プロジェクト名
TripMate

<!-- プロジェクトについて -->

## プロジェクトについて

新AI旅行プラン作成サービス

<!-- プロジェクトの概要を記載 -->

  <p align="left">
    <br />
    <!-- プロジェクト詳細にBacklogのWikiのリンク -->
    <a href="https://yutatravel.com/"><strong>プロジェクト詳細 »</strong></a>
    <br />
    <br />

<p align="right">(<a href="#top">トップへ</a>)</p>

## 環境

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| Django                | x.x.x      |
| Python                | 3.11.5     |
| Nginx                 | x.x.x      |
| MySQL                 | x.x.x      |
| PostgreSQL            | x.x.x      |
| Gunicorn              | x.x.x      |
| Docker                | 27.1.1     |
| Node.js               | 22.9.0     |
| Next.js               | xx.x.x     |
| Express.js            | xx.x.x     |
| React                 | 18.3.1     |
| TypeScript            | 4.9.5      |

その他のパッケージのバージョンは pyproject.toml と package.json を参照してください

<p align="right">(<a href="#top">トップへ</a>)</p>

## ディレクトリ構成

<!-- Treeコマンドを使ってディレクトリ構成を記載 -->

>FrontEnd
```
.
│  .gitignore
│  json-server.json
│  package-lock copy.json
│  package-lock.json
│  package.json
│  README.md
│  stub.json
│  tree.txt
│  tsconfig.json
│  yarn.lock
│  
├─public
│      favicon.ico
│      index.html
│      logo192.png
│      logo512.png
│      manifest.json
│      robots.txt
│      
└─src
    │  App.css
    │  App.test.tsx
    │  App.tsx
    │  index.css
    │  index.tsx
    │  logo.svg
    │  react-app-env.d.ts
    │  reportWebVitals.ts
    │  setupTests.ts
    │  vite.config.ts
    │  
    ├─components
    │  │  Header.tsx
    │  │  Navigation.tsx
    │  │  SearchForm.tsx
    │  │  SearchResults.tsx
    │  │  VideoPlayer.tsx
    │  │  
    │  └─Rio
    │      │  Footer.js
    │      │  Header.js
    │      │  Main.js
    │      │  Modal.js
    │      │  Slideshow.css
    │      │  Slideshow.js
    │      │  
    │      └─images
    │              1.jpg
    │              
    ├─images
    │      1.jpg
    │      sakura.mp4
    │      water_1.mp4
    │      water_2.mp4
    │      
    ├─pages
    │      Contact.tsx
    │      Home.tsx
    │      LoginForm.tsx
    │      RegisterForm.tsx
    │      Search.tsx
    │      Testbd.tsx
    │      
    ├─style
    │      Header.css
    │      LoginForm.css
    │      SearchForm.css
    │      
    └─utils
            InitialTransition.tsx
            Memo.txt
```

>BackEnd
```
.

```

<p align="right">(<a href="#top">トップへ</a>)</p>

## 開発環境構築

<!-- コンテナの作成方法、パッケージのインストール方法など、開発環境構築に必要な情報を記載 -->

### コンテナの作成と起動

.env ファイルを以下の環境変数例と[環境変数の一覧](#環境変数の一覧)を元に作成

.env ファイルを作成後、以下のコマンドで開発環境を構築

make prepare

### 動作確認

> http://xxx.x.x.x:xxxx にアクセスできるか確認

アクセスできたら成功

### コンテナの停止

> docker-compose down

以下のコマンドでコンテナを停止することができます

make down

### 環境変数の一覧

| 変数名                 | 役割                                      | デフォルト値                       | DEV 環境での値                           |
| ---------------------- | ----------------------------------------- | ---------------------------------- | ---------------------------------------- |
| MYSQL_ROOT_PASSWORD    | MySQL のルートパスワード（Docker で使用） | root                               |                                          |
| MYSQL_DATABASE         | MySQL のデータベース名（Docker で使用）   | django-db                          |                                          |
| MYSQL_USER             | MySQL のユーザ名（Docker で使用）         | django                             |                                          |
| MYSQL_PASSWORD         | MySQL のパスワード（Docker で使用）       | django                             |                                          |
| MYSQL_HOST             | MySQL のホスト名（Docker で使用）         | db                                 |                                          |
| MYSQL_PORT             | MySQL のポート番号（Docker で使用）       | 3306                               |                                          |
| SECRET_KEY             | Django のシークレットキー                 | secretkey                          | 他者に推測されないランダムな値にすること |
| ALLOWED_HOSTS          | リクエストを許可するホスト名              | localhost 127.0.0.1 [::1] back web | http://172.23.0.2:3001                    |
| DEBUG                  | デバッグモードの切り替え                  | True                               | False                                    |
| TRUSTED_ORIGINS        | CORS で許可するオリジン                   | http://localhost                   |                                          |
| DJANGO_SETTINGS_MODULE | Django アプリケーションの設定モジュール   | project.settings.local             | project.settings.dev                     |

### コマンド一覧

| Make                | 実行する処理                                                            | 元のコマンド                                                                               |
| ------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| make prepare        | node_modules のインストール、イメージのビルド、コンテナの起動を順に行う | docker-compose run --rm front npm install<br>docker-compose up -d --build                  |
| make up             | コンテナの起動                                                          | docker-compose up -d                                                                       |
| make build          | イメージのビルド                                                        | docker-compose build                                                                       |
| make down           | コンテナの停止                                                          | docker-compose down                                                                        |
| make loaddata       | テストデータの投入                                                      | docker-compose exec app poetry run python manage.py loaddata crm.json                      |
| make makemigrations | マイグレーションファイルの作成                                          | docker-compose exec app poetry run python manage.py makemigrations                         |
| make migrate        | マイグレーションを行う                                                  | docker-compose exec app poetry run python manage.py migrate                                |
| make show_urls      | エンドポイントをターミナル上で一覧表示                                  | docker-compose exec app poetry run python manage.py show_urls                              |
| make shell          | テストデータの投入                                                      | docker-compose exec app poetry run python manage.py debugsqlshell                          |
| make superuser      | スーパーユーザの作成                                                    | docker-compose exec app poetry run python manage.py createsuperuser                        |
| make test           | テストを実行                                                            | docker-compose exec app poetry run pytest                                                  |
| make test-cov       | カバレッジを表示させた上でテストを実行                                  | docker-compose exec app poetry run pytest --cov                                            |
| make format         | black と isort を使ってコードを整形                                     | docker-compose exec app poetry run black . <br> docker-compose exec app poetry run isort . |
| make update         | Poetry 内のパッケージの更新                                             | docker-compose exec app poetry update                                                      |
| make app            | アプリケーション のコンテナへ入る                                       | docker exec -it app bash                                                                   |
| make db             | データベースのコンテナへ入る                                            | docker exec -it db bash                                                                    |
| make pdoc           | pdoc ドキュメントの作成                                                 | docker-compose exec app env CI_MAKING_DOCS=1 poetry run pdoc -o docs application           |
| make init           | Terraform の初期化                                                      | docker-compose -f infra/docker-compose.yml run --rm terraform init                         |
| make fmt            | Terraform の設定ファイルをフォーマット                                  | docker-compose -f infra/docker-compose.yml run --rm terraform fmt                          |
| make validate       | Terraform の構成ファイルが正常であることを確認                          | docker-compose -f infra/docker-compose.yml run --rm terraform validate                     |
| make show           | 現在のリソースの状態を参照                                              | docker-compose -f infra/docker-compose.yml run --rm terraform show                         |
| make apply          | Terraform の内容を適用                                                  | docker-compose -f infra/docker-compose.yml run --rm terraform apply                        |
| make destroy        | Terraform で構成されたリソースを削除                                    | docker-compose -f infra/docker-compose.yml run --rm terraform destroy                      |

### リモートデバッグの方法

リモートデバッグ を使用する際は以下の url を参考に設定してください<br>
[Django のコンテナへリモートデバッグしよう！](https://qiita.com/shun198/items/9e4fcb4479385217c323)

## トラブルシューティング


<p align="right">(<a href="#top">トップへ</a>)</p>
