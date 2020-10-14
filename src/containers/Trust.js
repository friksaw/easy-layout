import logo from "../images/logo.svg";
import React from "react";
import img from "../images/trust-review.PNG";


const Trust = () => (
            <div className="Trust">
                <h2>
                    Нам доверяют
                </h2>
                <div data-flickity-options='{ "wrapAround": true }' className="trust-partners">
                    <div className="trust-partner">
                        <img src="https://admin.nvrsk-expert.ru/images/images/лого1.svg"/>
                    </div>
                    <div className="trust-partner">
                        <img src="https://admin.nvrsk-expert.ru/images/images/лого2.svg"/>
                    </div>
                    <div className="trust-partner">
                        <img src="https://admin.nvrsk-expert.ru/images/images/лого3.svg"/>
                    </div>
                    <div className="trust-partner">
                        <img src="https://admin.nvrsk-expert.ru/images/images/лого4.svg"/>
                    </div>
                    <div className="trust-partner">
                        <img src="https://admin.nvrsk-expert.ru/images/images/лого5.svg"/>
                    </div>
                    <div className="trust-partner">
                        <img src="https://admin.nvrsk-expert.ru/images/images/лого7.svg"/>
                    </div>
                    <div className="trust-partner">
                        <img src="https://admin.nvrsk-expert.ru/images/images/лого8.svg"/>
                    </div>
                    <div className="trust-partner">
                        <img src="https://admin.nvrsk-expert.ru/images/images/лого9.svg"/>
                    </div>
                </div>

                <div data-flickity-options='{ "wrapAround": true }' className="trust-reviews">
                    <div className="trust-review">
                        <img src={img}/>
                    </div>
                    <div className="trust-review">
                        <img src={img}/>
                    </div>
                    <div className="trust-review">
                        <img src={img}/>
                    </div>
                    <div className="trust-review">
                        <img src={img}/>
                    </div>
                    <div className="trust-review">
                        <img src={img}/>
                    </div>
                </div>
            </div>
)


export default Trust;