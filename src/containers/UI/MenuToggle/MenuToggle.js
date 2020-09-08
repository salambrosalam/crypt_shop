import React from "react";
import classes from "./MenuToggle.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons/faCoffee";

const MenuToggle = props => {
    const coffe = <FontAwesomeIcon icon={faCoffee}/>
    const github = <FontAwesomeIcon icon={["fab", "github"]}/>
    const cls = [
        classes.MenuToggle
    ]
    if(props.isOpen){
        cls.push(coffe)
        cls.push(classes.open)
    }else{
        cls.push(github)
    }

    return (
        <i
            className={cls.join(" ")}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle