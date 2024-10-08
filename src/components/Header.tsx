import React from "react";
import { Link } from "react-router-dom";
import '../style/Header.css';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h3>Trip Mate へようこそ！！</h3>
            </div>

            <nav>
                <ul>
                    <li className="first">
                        <Link to="/">ホーム</Link>
                    </li>
                    <li>
                        <Link to="/loginform">Account</Link>
                    </li>
                    <li>
                        <Link to="/contact">お問い合わせ</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;