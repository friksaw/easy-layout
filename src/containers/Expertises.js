import logo from "../images/logo.svg";
import React from "react";
import ButtonsNextBlock from "../components/ButtonsNextBlock";

//TODO: ButtonsNextBlock/> after expertises-container
const Expertise = () => (
            <div className="Expertises">
                <h2>
                    Осуществляемые экспертизы
                </h2>
                <div data-flickity-options='{ "wrapAround": true }' className="expertises-container">
                    <div className="expertises-slide-style1">
                        <img className="expertises-img" src="https://admin.nvrsk-expert.ru/images/images/eddba7cb79e9cd4957e3cd293c37967f.svg"/>
                        <p className="expertises-text">
                            Строительно-техническая
                        </p>
                    </div>
                    <div className="expertises-slide-style2">
                        <img className="expertises-img" src="https://admin.nvrsk-expert.ru/images/images/avtotex.svg"/>
                        <p className="expertises-text">
                            Автотехническая
                        </p>
                    </div>
                    <div className="expertises-slide-style3">
                        <img className="expertises-img" src="https://admin.nvrsk-expert.ru/images/images/дштп.svg"/>
                        <p className="expertises-text">
                            Лингвистическая
                        </p>
                    </div>
                    <div className="expertises-slide-style4">
                        <img className="expertises-img" src="https://admin.nvrsk-expert.ru/images/images/инженерно.svg"/>
                        <p className="expertises-text">
                            Инженерно-техническая
                        </p>
                    </div>
                    <div className="expertises-slide-style1">
                        <img className="expertises-img" src="https://admin.nvrsk-expert.ru/images/images/комп.svg"/>
                        <p className="expertises-text">
                            Компьютерно-техническая
                        </p>
                    </div>
                    <div className="expertises-slide-style2">
                        <img className="expertises-img" src="https://admin.nvrsk-expert.ru/images/images/пож.svg"/>
                        <p className="expertises-text">
                            Пожарно-техническая
                        </p>
                    </div>
                    <div className="expertises-slide-style3">
                        <img className="expertises-img" src="https://admin.nvrsk-expert.ru/images/images/тов.svg"/>
                        <p className="expertises-text">
                            Товароведческая
                        </p>
                    </div>
                    <div className="expertises-slide-style4">
                        <img className="expertises-img" src="https://admin.nvrsk-expert.ru/images/images/бух.svg" alt="Бухгалтерская" />
                        <p className="expertises-text">
                            Бухгалтерская
                        </p>
                    </div>
                    <div className="expertises-slide-style1">
                        <img className="expertises-img" src="https://admin.nvrsk-expert.ru/images/images/фин.svg"/>
                        <p className="expertises-text">
                            Финансово-экономическая
                        </p>
                    </div>
                    <div className="expertises-slide-style2">
                        <img className="expertises-img" src="https://admin.nvrsk-expert.ru/images/images/вид.svg"/>
                        <p className="expertises-text">
                            Видеотехническая
                        </p>
                    </div>
                    <div className="expertises-slide-style3">
                        <img className="expertises-img" src="https://admin.nvrsk-expert.ru/images/images/автор.svg"/>
                        <p className="expertises-text">
                            Автороведческая
                        </p>
                    </div>
                </div>
            </div>
)


export default Expertise;