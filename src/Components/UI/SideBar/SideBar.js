import React from "react";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";

const style = theme => ({
    SideDrawer: {
        display: 'block',
        background: "#282c34",
        boxShadow: "2px 0 5px rgba(0,0,0,0.5)",
        position: 'fixed',
        height: '100%',
        top: 0,
        left: 0,
        transition:"0.5s",
        zIndex: '200',
    },
    SideDrawerLi: {
        fontSize: "25px" ,
        fontFamily: "Lucida Console",
        margin: '20px',
    },
    Closer: {
        cursor: "pointer"
    }
})

const SideBar = props => {
    const {classes} = props;
    return (
        <div>
            <nav className={classes.SideDrawer}>
                <Typography align={'right'}>
                    <button className={classes.Closer} onClick={props.menuToggle}>X</button>
                </Typography>
                <ul style={{listStyle: 'none', padding: '50px'}}>
                    <li className={classes.SideDrawerLi}><NavLink onClick={props.menuToggle} to="/profile">Account</NavLink></li>
                    <li className={classes.SideDrawerLi}><NavLink onClick={props.menuToggle} to="/settings">Settings</NavLink></li>
                    <li className={classes.SideDrawerLi}><NavLink onClick={props.menuToggle} to="/support">Support</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default withStyles(style)(SideBar);
