import React from 'react';

const Header = () => {
    return (
        <header className="navbar">
            <h1>Yuta Travel(仮)</h1>
            <nav className="nav-links">
                <a href="/FrontEnd/Registration/Registration.html" className="register-button">新規登録</a>
                <a href="/FrontEnd/login/login.html" className="login-button">ログイン</a>
            </nav>
        </header>
    );
};

export default Header;