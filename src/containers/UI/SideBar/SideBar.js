import React from "react";
import {withStyles} from "@material-ui/core";

const style = theme => ({
    SideDrawer: {
        display: 'none',
        background: "white",
        boxShadow: "2px 0 5px rgba(0,0,0,0.5)",
        position: 'fixed',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: '1',
    },
    SideDrawerLi: {
        margin: '20px',
    }
})

const SideBar = props => {
    const {classes} = props;
    return (
        <nav className={classes.SideDrawer}>
            <ul style={{listStyle: 'none', padding: '50px'}}>
                <li className={classes.SideDrawerLi}><a href="/profile">Account</a></li>
                <li className={classes.SideDrawerLi}><a href="/settings">Settings</a></li>
                <li className={classes.SideDrawerLi}><a href="/support">Support</a></li>
            </ul>
        </nav>
    )
}

export default withStyles(style)(SideBar);