import React from "react";
import Thais from "../images/Thais.png";
import LinkedIn from "../images/Vector.svg";
import Icon from "../images/Icon.svg";

export default function Info() {
    return(
        <div className="info">
            <img src={Thais} className="profile" alt=" profile photo "></img>
            <h2 className="name">Thaís Rodeiro</h2>
            <h3 className="dev">Frontend Developer</h3>
            <h4 className="website">trodeiro.xyz</h4>
            <div className="buttons">
                <button type="button" className="button">
                    <img src={Icon} className="mail"></img>
                    Email
                </button>
                <button type="button" className="button lkd_btn">
                    <img src={LinkedIn} className="lkd"></img>
                    LinkedIn
                </button>
            </div>
        </div>
    );
}