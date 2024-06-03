import React from "react";
import logo1 from './../../assets/img/bot.svg';
import "./style.scss"

function Footer() {
    return (
        <div className="footer-div">
            <div className="footer">
                <div className="left">
                    <img src={logo1} alt="logo" width={100} />
                </div>
                <span>© 2024 TGSPAM</span>
                <a href="/privacy_policy">Политика конфиденциальности</a>
                <span className="separator">|</span>
                <a href="/terms_of_use">Пользовательское соглашение</a>
                <span className="separator">|</span>
                <a href="/about">О проекте</a>
            </div>
            <div className="bottom">
                <a href="/">Контакты</a>
                <a href="/">Контакты 1</a>
                <a href="/">Контакты 2</a>
            </div>
     
        </div>
    );
}

export default Footer;