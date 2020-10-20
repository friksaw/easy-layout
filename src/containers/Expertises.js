import logo from "../images/logo.svg";
import React from "react";
import ButtonsNextBlock from "../components/ButtonsNextBlock";
import data from "../data";


const Expertise = () => (
            <div className="Expertises">
                <h2>
                    Осуществляемые экспертизы
                </h2>
                <div data-flickity-options='{ "wrapAround": true }' className="expertises-container">
                    {
                        data[2].expertises.map((expertise) =>
                            <div className={"expertises-slide-style" + expertise.style}>
                                <img className="expertises-img" src={expertise.image}/>
                                <p className="expertises-text">
                                    {expertise.title}
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
)


export default Expertise;