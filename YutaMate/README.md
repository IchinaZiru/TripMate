## ディレクトリ構造
YutaMate
├── backend                          # バックエンドのFastAPIサーバー関連ファイルを管理
│   ├── data
│   │   └── Fukushima.jsonl          # 福島県に関する観光地データを格納したJSON Lines形式のファイル
│   ├── models                       # 機械学習モデルや前処理済みデータの保存用ディレクトリ
│   │   ├── processed_data.pkl       # 前処理済みの観光地データ（特徴量や各種フィールドを含む）
│   │   └── tfidf_vectorizer.pkl     # TF-IDFベクトライザー（検索クエリとデータの類似度計算に使用）
│   ├── Dockerfile                   # バックエンドのDocker設定ファイル（依存パッケージや実行環境を定義）
│   ├── main.py                      # FastAPIエントリーポイント。APIエンドポイントや検索処理を含む
│   ├── model_training.py            # モデル学習用のスクリプト。データの前処理や特徴量の生成を行う
│   └── requirements.txt             # バックエンドのPython依存パッケージリスト（例：FastAPI, scikit-learn）
├── frontend                         # フロントエンドのReactアプリケーション関連ファイルを管理
│   ├── .gitignore                   # Gitで管理しないファイルやディレクトリを指定
│   ├── Dockerfile                   # フロントエンドのDocker設定ファイル
│   ├── package-lock.json            # フロントエンドの依存パッケージのバージョンを固定するためのファイル
│   ├── package.json                 # フロントエンドのプロジェクト設定と依存パッケージリスト
│   ├── public                       # 公開ファイルを格納するディレクトリ（index.htmlなどの静的ファイル）
│   └── src                          # Reactアプリのソースコードを格納するディレクトリ
│       ├── components               # UIコンポーネントを格納するディレクトリ
│       │   ├── Recommendation.js    # 検索結果表示用のコンポーネント
│       │   └── RecommendationForm.js # 検索フォームのコンポーネント
│       ├── App.css                  # 全体のスタイルシート
│       ├── App.js                   # メインアプリケーションコンポーネント
│       ├── index.js                 # Reactアプリのエントリーポイント
│       └── reportWebVitals.js       # パフォーマンス計測用のスクリプト
├── README.md                        # プロジェクトの概要、セットアップ手順、使用方法を記載
├── docker-compose.yml               # フロントエンドとバックエンドのDockerコンテナを管理する設定ファイル
└── YutaMate.code-workspace          # VSCode用ワークスペース設定ファイル

## 作業する上での基本項目
1.観光地データを学習させる
　` python model_training.py  ( /YutaMait/backend/ ) `

2.Dockerコンテナ起動
　` docker-compose down　       ( /YutaMait/ )`
　` docker-compose up --build　 ( /YutaMait/ )` 



