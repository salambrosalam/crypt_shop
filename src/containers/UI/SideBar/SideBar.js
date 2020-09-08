import React from "react";

import SideBarStyle from "./SideBar.css"

const SideBar = props => (
        <nav className={SideBarStyle.SideDrawer}>
            <ul>
                <li><a href="/profile">Account</a></li>
                <li><a href="/settings">Settings</a></li>
                <li><a href="/support">Support</a></li>
            </ul>
        </nav>
)

export default SideBar