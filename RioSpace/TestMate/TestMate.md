## 目的
`  YutaMateをTS化します  `


TestMate
├── backend
│   ├── data
│   │   └── Fukushima.jsonl
│   ├── models
│   │   ├── processed_data.pkl
│   │   └── tfidf_vectorizer.pkl
│   ├── Dockerfile
│   ├── main.py
│   ├── model_training.py
│   └── requirements.txt
├── frontend
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── Recommendation.js
│   │   │   ├── Recommendations.js
│   │   │   ├── SearchForm.css
│   │   │   └── SearchForm.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── reportWebVitals.js
│   ├── .gitignore
│   ├── Dockerfile
│   ├── package-lock.json
│   └── package.json
└── docker-compose.yml