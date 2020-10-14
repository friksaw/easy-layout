import logo from "../images/logo.svg";
import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";


const MailMeForm = () => (
    <div className="mailme">
        <div className="mailme-container">
            <TextField
                className="mailme-input"
                label="Почтовый адрес или номер телефона"
                fullWidth
            />
            <button className="mailme-button">
                СВЯЖИТЕСЬ
            </button>
            <p className="mailme-input-error">
            </p>
        </div>

        <input className="mailme-check" type="checkbox"/>
        <label className="mailme-check-label">
            Я принимаю условия Пользовательского соглашения
        </label>
    </div>
)


export default MailMeForm;