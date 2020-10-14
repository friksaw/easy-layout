import logo from "../images/logo.svg";
import React from "react";


const ButtonsNextBlock = () => (
    <div className="arrow__box">
        <button disabled="disabled" className="button button-outline">
            <svg width={15} height={35} viewBox="0 0 15 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__prev">
                <rect x="6.44745" width="1.84211" height="27.6316" rx="0.921053" fill="#22223B" />
                <path d="M7.36842 35L13.7497 23.9474H0.987181L7.36842 35Z" fill="#22223B" />
            </svg>
        </button>
        <button className="button button-outline">
            <svg width={15} height={35} viewBox="0 0 15 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="button__next">
                <rect x="6.44745" width="1.84211" height="27.6316" rx="0.921053" fill="#22223B" />
                <path d="M7.36842 35L13.7497 23.9474H0.987181L7.36842 35Z" fill="#22223B" />
            </svg>
        </button>
    </div>
)


export default ButtonsNextBlock;