import React from "react";
import classes from "./BitcoinBox.module.css";

const BitcoinBox = (props) => {
    return(
        <div className={classes.dropdown}>
            <div className={classes.dropbtn}>{props.bitcoinUSD} USD</div>
            <div className={classes.dropdownContent}>
                <span>{props.bitcoinEUR} EUR</span>
                <span>{props.bitcoinGBP} GBP</span>
            </div>
        </div>
    )
}

export default BitcoinBox;
