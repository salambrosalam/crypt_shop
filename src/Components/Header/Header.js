import React from "react";
import header_style from "../HomePage/HomePage.module.css";
import DrawerToggleButton from "../UI/SideBar/DrawerToggleButton";
import {NavLink} from "react-router-dom";
import profile_1 from "../../Assets/HomePage/profile_1.png";
import anonymous from "../../Assets/HomePage/create_account_2_anonymous.png";

const Header = (props) => {
    return (
        <header className={header_style.homePage}>
            <div>
                <button onClick={props.toggleMenu}>
                    <DrawerToggleButton/>
                </button>
            </div>
            <div>
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
