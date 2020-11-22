import React, {useContext} from "react";
import header_style from "../HomePage/HomePage.module.css";
import DrawerToggleButton from "../UI/SideBar/DrawerToggleButton";
import {NavLink, useHistory} from "react-router-dom";
import profile_1 from "../../Assets/HomePage/profile_1.png";
import anonymous from "../../Assets/HomePage/create_account_2_anonymous.png";
import BitcoinBoxContainer from "../BitkoinBox/BitcoinBoxContainer";
import classes from "./Header.module.css";
import {AuthContext} from "../../context/AuthContext";

const Header = (props) => {
    const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push("/login")
    }

    return (
        <AuthContext.Consumer>
            {context => (
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
                {!context.isAuthenticated ?
                <div>
                    <NavLink to="/login">
                        <img className={header_style.profile_sizer} src={anonymous} alt=""/>
                    </NavLink>
                </div>
                    :
                    <div>
                            <button onClick={logoutHandler} className={classes.buttonLogin}>Logout</button>
                    </div>}
            </header>
            )}
        </AuthContext.Consumer>

    )
}

export default Header;
