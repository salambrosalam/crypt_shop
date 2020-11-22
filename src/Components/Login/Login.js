import React, {useContext, useState} from "react";
import {connect} from "react-redux";
import classes from "./Login.module.css";
import bg_login from "../../Assets/HomePage/bg_login.png";
import {NavLink} from "react-router-dom";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";

const Login = (props) => {
    const auth = useContext(AuthContext);

    const {isFetching,error,request} = useHttp();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const changeHandler = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const loginHandler = async() => {
        try{
            const data = await request("/api/auth/login", "POST", {...form})
            console.log("Data",data);
            auth.login(data.token, data.userId);
        }catch(e){

        }
    }


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
                            <div className={classes.text}>Log in</div>
                        </div>
                        <div>
                            <input className={classes.inputLine}
                                   name="email"
                                   placeholder="login..."
                                   onChange={changeHandler}/>
                        </div>
                        <div>
                            <input className={classes.inputLine}
                                   name="password"
                                   placeholder="password..."
                                   onChange={changeHandler}/>
                        </div>
                        <div>
                            <button
                                className={classes.buttonLogin}
                                onClick={loginHandler}
                                disabled={isFetching}
                            >Sign In</button>
                        </div>
                        <div className={classes.text2}>No account yet?</div>
                        <NavLink to={"/register"}>
                            <div className={classes.text3}>Sign Up</div>
                        </NavLink>
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
