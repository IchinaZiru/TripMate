
## ディレクトリ構造
` 
TripMate/
├── backend/
│   ├── main.py
│   ├── model_training.py
│   ├── requirements.txt
│   └── models/
│       └── processed_data.pkl
├── frontend/
│   ├── package.json
│   ├── package-lock.json
│   └── src/
│       ├── index.js
│       ├── App.js
│       ├── App.css
│       ├── Recommendations.js
│       ├── Recommendations.css
│       └── components/
│           ├── Modal.js
│           └── Modal.css
├── docker-compose.yml
└── README.md
'



TripMate/
├── backend/
│   ├── main.py
│   ├── model_training.py
│   ├── requirements.txt
│   ├── Dockerfile
│   ├── data/
│   │   └── Fukushima.jsonl
│   ├── models/
│   │   ├── tfidf_vectorizer.pkl
│   │   └── processed_data.pkl
│   └── utils/
│       ├── __init__.py
│       └── data_processing.py
├── frontend/
│   ├── package.json
│   ├── package-lock.json
│   └── src/
│       ├── index.js
│       ├── App.js
│       ├── App.css
│       ├── components/
│       │   ├── HomePage.js       // ホームページ
│       │   ├── Login.js          // ログインページ
│       │   ├── SignUp.js         // 新規会員登録ページ
│       │   ├── About.js          // サイト説明ページ
│       │   ├── TravelSuggestion.js // 旅行先提案ページ
│       │   ├── Recommendations.js
│       │   └── Modal.js
│       └── styles/
│           ├── App.css
│           ├── HomePage.css
│           ├── Login.css
│           ├── SignUp.css
│           ├── About.css
│           ├── TravelSuggestion.css
│           ├── Recommendations.css
│           └── Modal.css
├── README.md
└── docker-compose.yml


TripMate/
├── backend/
│   ├── Dockerfile
│   ├── main.py
│   ├── model_training.py
│   ├── requirements.txt
│   ├── data/
│   │   ├── Fukushima.json
│   │   └── processed_data.csv
│   ├── models/
│   │   ├── tfidf_vectorizer.pkl
│   │   └── processed_data.pkl
│   └── utils/
│       ├── __init__.py
│       └── data_processing.py
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── package-lock.json
│   ├── public/
│   └── src/
│       ├── App.js
│       ├── index.js
│       └── components/
│           ├── RecommendationForm.js
│           └── Recommendations.js
├── docker-compose.yml
└── README.md




TripMate
├── backend
│   ├── __pycache__
│   ├── data
│   │   └── Fukushima.json
│   ├── models
│   ├── utils
│   ├── Dockerfile
│   ├── main.py
│   ├── model_training.py
│   └── requirements.txt
├── frontend
│   ├── node_modules
│   ├── public
│   └── src
│       ├── components
│       │   ├── About.js
│       │   ├── Description.js
│       │   ├── Footer.js
│       │   ├── Header.js
│       │   ├── HomePage.js
│       │   ├── Login.js
│       │   ├── Main.js
│       │   ├── Modal.js
│       │   ├── RecommendationForm.js
│       │   ├── Recommendations.js
│       │   ├── Registration.js
│       │   ├── SignUp.js
│       │   ├── Slideshow.js
│       │   └── TravelSuggestion.js
│       ├── images
│       ├── styles
│       │   ├── About.css
│       │   ├── App.css
│       │   ├── Description.css
│       │   ├── HomePage.css
│       │   ├── Login.css
│       │   ├── Main.css
│       │   ├── Modal.css
│       │   ├── Recommendations.css
│       │   ├── Registration.css
│       │   ├── SignUp.css
│       │   └── Slideshow.css
│       ├── App.js
│       ├── App.test.js
│       ├── index.css
│       ├── index.js
│       ├── logo.svg
│       ├── reportWebVitals.js
│       ├── setupTests.js
│       ├── Dockerfile
│       ├── package-lock.json
│       ├── package.json
│       └── .gitignore
├── docker-compose.yml
└── README.md







## 作業ディレクトリへの移動
'  cd develop/TripMate/  '