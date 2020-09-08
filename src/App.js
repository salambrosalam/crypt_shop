import React, {Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch, Router} from "react-router-dom"
import HomePage from "./containers/HomePage/HomePage";
import './App.css';
import header_style from "./containers/HomePage/HomePage.module.css";
import menu_logo from "./containers/HomePage/menu_logo.png";
import profile_1 from "./containers/HomePage/profile_1.png";
import anonymous from "./containers/HomePage/create_account_2_anonymous.png";
import Profile from "./containers/Profile/Profile"
import SideBar from "./containers/UI/SideBar/SideBar"
import DrawerToggleButton from "./containers/UI/SideBar/DrawerToggleButton";
import BackDrop from "./containers/BackDrop/BackDrop";
import MenuToggle from "./containers/UI/MenuToggle/MenuToggle";

class App extends Component{

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

  render(){
    return(
        <BrowserRouter>

            <header className={header_style.homePage}>
                <div>
                    <MenuToggle
                        onToggle={this.toggleMenuHandler}
                        isOpen={this.state.menu}/>
                </div>
                <div>
                    <a href="/">
                        <img className={header_style.profile_sizer} src={profile_1} alt=""/>
                    </a>
                </div>
                <div>
                    <a href="/profile">
                        <img className={header_style.profile_sizer} src={anonymous} alt=""/>
                    </a>
                </div>
            </header>
            <SideBar/>
            <BackDrop/>

            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/profile" component={Profile}/>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
