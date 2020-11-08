import React from "react";
import header_style from "../HomePage/HomePage.module.css";
import profile_1 from "../../Assets/HomePage/profile_1.png";
import {BrowserRouter} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={header_style.footerPage + " " + header_style.footer}>
            <div className={header_style.wrapperFooter}>
                <img style={{width:"50px", height:"50px"}} src={profile_1} alt=""/>
            </div>
            <div className={header_style.wrapperFooter}>
                <span>Copyright © 2020 crypt_shop, Inc.</span>
            </div>
            <div className={header_style.wrapperFooter}>
                <span>support:crypt_shop@anonymous.com</span>
            </div>
        </footer>
    )
}

export default Footer;
