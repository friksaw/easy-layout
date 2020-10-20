import logo from "../images/logo.svg";
import React from "react";
import data from "../data";


const Trust = () => (
            <div className="Trust">
                <h2>
                    Нам доверяют
                </h2>
                <div data-flickity-options='{ "wrapAround": true }' className="trust-partners">
                    <div className="trust-partner">
                        <img src="https://admin.nvrsk-expert.ru/images/images/лого1.svg" className="trust-partner-img"/>
                    </div>
                    <div className="trust-partner">
                        <img src="https://admin.nvrsk-expert.ru/images/images/лого2.svg" className="trust-partner-img"/>
                    </div>
                    <div className="trust-partner">
                        <img src="https://admin.nvrsk-expert.ru/images/images/лого3.svg" className="trust-partner-img"/>
                    </div>
                    <div className="trust-partner">
                        <img src="https://admin.nvrsk-expert.ru/images/images/лого4.svg" className="trust-partner-img"/>
                    </div>
                    <div className="trust-partner">
                        <img src="https://admin.nvrsk-expert.ru/images/images/лого5.svg" className="trust-partner-img"/>
                    </div>
                    <div className="trust-partner">
                        <img src="https://admin.nvrsk-expert.ru/images/images/лого7.svg" className="trust-partner-img"/>
                    </div>
                    <div className="trust-partner">
                        <img src="https://admin.nvrsk-expert.ru/images/images/лого8.svg" className="trust-partner-img"/>
                    </div>
                    <div className="trust-partner">
                        <img src="https://admin.nvrsk-expert.ru/images/images/лого9.svg" className="trust-partner-img"/>
                    </div>
                </div>

                <div data-flickity-options='{ "wrapAround": true }' className="trust-reviews">
                    {
                        data[1].certificates.map((certificate) =>
                            <div className="trust-review">
                                <img src={certificate.certificate} className="trust-review-img"/>
                            </div>
                        )
                    }
                </div>
            </div>
)


export default Trust;