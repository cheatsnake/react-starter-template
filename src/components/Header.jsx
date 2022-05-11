import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">App</div>
            <div className="header__menu">
                <Link className="header__link" to="/">
                    Home
                </Link>
                <Link className="header__link" to="/test">
                    Test
                </Link>
            </div>
        </div>
    );
};
export default Header;
