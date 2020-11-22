import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import classes from "./Register.module.css";
import bg_login from "../../Assets/HomePage/bg_login.png";
import {useHttp} from "../../hooks/http.hook";
import Toast from "../Toasts/Toast";
import toastClasses from "../Toasts/Toast.module.css";

const Login = (props) => {

    const {isFetching,error,request,clearError} = useHttp();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [toastclass, setToastClass] = useState(toastClasses.snackbar);
    const [toastMessage, setToastMessage] = useState("");

    useEffect(() => {
        console.log("Error: ",error)
        if(error) {
            setToastMessage(error);
            showFailToast();
        }
        clearError();
    }, [error,clearError])

    const changeHandler = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const registerHandler = async() => {
        try{
            const data = await request("/api/auth/register", "POST", {...form})
            console.log("Data",data);
            setToastMessage(data.message);
            showSuccessToast();
        }catch(e){

        }
    }

    const showFailToast = () => {
        setToastClass(toastClasses.showFail)
        setTimeout( () => setToastClass(toastClasses.snackbar),3000);
    }
    const showSuccessToast = () => {
        setToastClass(toastClasses.showSuccess)
        setTimeout( () => setToastClass(toastClasses.snackbar),3000);
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
                            <div className={classes.text}>Registration</div>
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
                                onClick={registerHandler}
                                disabled={isFetching}
                            >
                                Create Account</button>
                        </div>
                        <Toast toastClass={toastclass} toastMessage={toastMessage}/>
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
