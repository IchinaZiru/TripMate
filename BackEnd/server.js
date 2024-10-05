const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // Reactと連携するためCORSを有効化
app.use(express.json()); // JSONデータを受け取る

// MySQLの接続設定
const db = mysql.createConnection({
    host: 'localhost',    // データベースサーバーのホスト名
    user: 'root',         // MySQLユーザー名
    password: 'yutatravel5', // MySQLのパスワード
    database: 'test_db'   // 使用するデータベース名
});

// MySQLに接続
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL server.');
});

// GETリクエストでデータを取得
app.get('/api/users', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});

// POSTリクエストでデータを追加
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.query(sql, [name, email], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json({ message: 'User added successfully', userId: result.insertId });
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


app.get('/api/users', (req, res) => {
    res.json([
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
    ]);
});