import React from "react"
import {withStyles} from "@material-ui/core";

const style = theme => ({
     BackDrop: {
         position: "fixed",
         height: "100%",
         background: "rgba(0,0,0,0.3)",
         zIndex: "100",
         width: "100%"
     }
    }
)


const BackDrop = props => {
    const {classes} = props;
    return (
    <div className={classes.BackDrop}/>
    )
}

export default withStyles(style)(BackDrop);