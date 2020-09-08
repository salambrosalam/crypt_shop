import React from "react";

import button_styles from "./ToggleButton.module.css";

const drawerToggleButton = props => (
    <div className={button_styles.toggleButton}>
        <div className={button_styles.toggleButton_line}/>
        <div className={button_styles.toggleButton_line}/>
        <div className={button_styles.toggleButton_line}/>
    </div>
)

export default drawerToggleButton;