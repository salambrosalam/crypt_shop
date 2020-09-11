import React from "react";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const style = theme => ({
    SideDrawer: {
        display: 'block',
        background: "white",
        boxShadow: "2px 0 5px rgba(0,0,0,0.5)",
        position: 'fixed',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: '200',
    },
    SideDrawerLi: {
        margin: '20px',
    }
})

const SideBar = props => {
    const {classes} = props;
    return (
        <div>
            <nav className={classes.SideDrawer}>
                <Typography align={'right'}>
                    <button onClick={props.menuToggle}>X</button>
                </Typography>
                <ul style={{listStyle: 'none', padding: '50px'}}>
                    <li className={classes.SideDrawerLi}><a href="/profile">Account</a></li>
                    <li className={classes.SideDrawerLi}><a href="/settings">Settings</a></li>
                    <li className={classes.SideDrawerLi}><a href="/support">Support</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default withStyles(style)(SideBar);