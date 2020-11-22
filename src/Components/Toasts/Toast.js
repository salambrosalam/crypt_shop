import React from "react";
import classes from "./Toast.module.css";

const Toast = (props) => {
    return (
        <div className={props.toastClass}>{props.toastMessage}</div>
    )
}

export default Toast;
