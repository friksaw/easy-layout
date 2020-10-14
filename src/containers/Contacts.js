import logo from "../images/logo.svg";
import React from "react";
import Watermark from "../components/Watermark";
import MailMeForm from "../components/MailMeForm";


const Contacts = () => (
            <div className="Contacts">
                <h2>
                    Контакты
                </h2>
                <div id="contacts-container">
                    <div className="contacts-call">
                        <h3>
                            Звоните
                        </h3>
                        <a href="tel:+78617627503" className="contacts-link">
                            +7 (8617) 62‒75‒03
                        </a>
                    </div>
                    <div className="contacts-come">
                        <h3>
                            Приходите
                        </h3>
                        <p className="h-s">
                            город Новороссийск, улица Рубина, дом 11, офис 311
                        </p>
                    </div>
                    <div className="contacts-write">
                        <h3>
                            Пишите
                        </h3>
                        <a href="mailto:info@expert-nvrsk.ru" className="contacts-link">
                            info@expert-nvrsk.ru
                        </a>
                    </div>
                    <div className="contacts-mailme">
                        <h3>
                            С Вами связаться?
                        </h3>
                        <MailMeForm/>
                    </div>
                </div>
                <Watermark/>
            </div>
)


export default Contacts;