import React from "react";
import header_style from "../HomePage/HomePage.module.css";
import DrawerToggleButton from "../UI/SideBar/DrawerToggleButton";
import {NavLink} from "react-router-dom";
import profile_1 from "../../Assets/HomePage/profile_1.png";
import anonymous from "../../Assets/HomePage/create_account_2_anonymous.png";
import BitcoinBoxContainer from "../BitkoinBox/BitcoinBoxContainer";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <header className={header_style.homePage}>
            <div className={classes.currencyStyle}>
                <button onClick={props.toggleMenu}>
                    <DrawerToggleButton/>
                </button>
                <div className={classes.wrapper}>
                    <BitcoinBoxContainer/>
                </div>
            </div>
            <div className={classes.mainLink}>
                <NavLink to="/">
                    <img className={header_style.profile_sizer} src={profile_1} alt=""/>
                </NavLink>
            </div>
            <div>
                <NavLink to="/login">
                    <img className={header_style.profile_sizer} src={anonymous} alt=""/>
                </NavLink>
            </div>
        </header>
    )
}

export default Header;
