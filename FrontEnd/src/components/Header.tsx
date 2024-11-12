import React from "react";
import { Link } from "react-router-dom";
import "../style/Header.css";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h3>
                    <ul>
                        <Link to="/">Trip Mate</Link>
                    </ul>
                </h3>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/registerform">新規登録</Link>
                    </li>
                    <li>
                        <Link to="/loginform">ログイン</Link>
                    </li>
                    {/* 
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    */}
                    <li>
                        <Link to="/contact">お問い合わせ</Link>
                    </li>
                    <li>
                        <Link to="/testdb">DB</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;