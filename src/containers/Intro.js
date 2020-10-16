import logo from "../images/logo.svg";
import React from "react";
import Header from "../components/Header";
import ScrollSVG from "../components/ScrollSVG";


const Intro = () => (
    <div className="Intro">
        <div className="intro-container">
            <h1 className="intro-h">
                <br/>Мы -
                <br/>независимые
                <br/>эксперты
            </h1>
            <p className="h-intro">
                Судебные и досудебные экспертизы
            </p>
        </div>
        <ScrollSVG/>
    </div>
)


export default Intro;