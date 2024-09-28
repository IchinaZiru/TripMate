import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css'; // Headerコンポーネントに対応するCSSファイルをインポート

const Header: React.FC = () => {
    return (
        <header className="header">
            <Link to="/" className="logo">
                My Restaurant
            </Link>
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/menu">Menu</Link>
                    </li>
                    <li>
                        <Link to="/locations">Locations</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
