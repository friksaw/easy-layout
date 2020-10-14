import React from "react";
import HeaderLogo from "./HeaderLogo";


const Header = () => (
    <div className="Header">
        <div className="header-wrapper">
            <div className="header-logo">
                <HeaderLogo/>
                <span className="header-logo-h">
                    Эксперт
                </span>
            </div>
            <button className="header-button">
                <h-xs>Заполнить заявку</h-xs>
            </button>
        </div>
    </div>


)


export default Header;