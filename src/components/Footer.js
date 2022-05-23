import React from "react";
import Facebook from "../images/Facebook Icon.svg";
import Github from "../images/GitHub Icon.svg";
import Twitter from "../images/Twitter Icon.svg";
import Instagram from "../images/Instagram Icon.svg";

export default function Footer(){
    return(
        <div className="footer">
            <div className="social">
                <a href="#"><img src={Twitter}></img></a>
                <a href="#"><img src={Facebook}></img></a>
                <a href="#"><img src={Instagram}></img></a>
                <a href="#"><img src={Github}></img></a>
            </div>
        </div>
    );
}