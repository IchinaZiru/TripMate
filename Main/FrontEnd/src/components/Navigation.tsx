import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {

    return (
        <nav className="header-navigation">
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
        </nav>
    );
};

export default Navigation;
