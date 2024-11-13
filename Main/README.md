## 最初に実行すること!!
`  /TripMate/Main/  `
`  $ npm install  axios @mui/material @emotion/react @emotion/styled  `
`  $ yarn add @mui/icons-material  `


## 仮想環境の作成
`  /TripMate/Main/backend   `
`  python3 -m venv venv  `
`  pip install --no-cache-dir -r requirements.txt  `
`  pip install uvicorn  `


## 仮想環境の立ち上げ
`  cd "C:/TripMate/Main/backend"  `
`  \venv\Scripts\Activate  `  仮想環境をアクティベート


## gunicornの立ち上げ
ターミナルを新しく立ち上げる
`  cd "C:\develop\travel-planner-app"  `
`  cd backtend  `
`  uvicorn main:app --reload  ` 