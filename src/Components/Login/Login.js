import React, {useState} from "react";
import {connect} from "react-redux";
import terminal from "../../Assets/HomePage/terminal.png";
import classes from "./Login.module.css";
import arrow from "../../Assets/HomePage/terminal_arrow.png";
import bg_login from "../../Assets/HomePage/bg_login.png";

const Login = (props) => {

    const [login, setLogin] = useState("");

    return (
        <div className={classes.loginBox} style={{backgroundImage: `url(${bg_login})`}}>
            <div className={classes.loginForm}>
                <div className={classes.topElements}>
                    <div className={classes.firstElement}></div>
                    <div className={classes.secondElement}></div>
                    <div className={classes.thirdElement}></div>
                </div>
                <div className={classes.formContainer}>
                    <form>
                        <div>
                            <span className={classes.text}>Log in</span>
                        </div>
                        <div>
                            <input className={classes.inputLine} placeholder="login..."/>
                        </div>
                        <div>
                            <input className={classes.inputLine} placeholder="password..."/>
                        </div>
                        <div>
                            <button className={classes.buttonLogin}>Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = () => dispatch => {

}

const mapStateToProps = (state) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
