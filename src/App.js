import React, {Component} from 'react';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom"
import HomePage from "./Components/HomePage/HomePage";
import './App.css';
import header_style from "./Components/HomePage/HomePage.module.css";
import profile_1 from "./Assets/HomePage/profile_1.png";
import anonymous from "./Assets/HomePage/create_account_2_anonymous.png";
import Profile from "./Components/Profile/Profile"
import DrawerToggleButton from "./Components/UI/SideBar/DrawerToggleButton";
import BackDrop from "./Components/BackDrop/BackDrop";
import {connect} from "react-redux";
import menuToggle from './Redux/actions/MenuToggleAction'


class App extends Component {
    render() {
        debugger;
        return (
            <BrowserRouter>
                {this.props.menu ? <BackDrop menuToggle={this.props.menuToggle}/>
                    : ''}
                <header className={header_style.homePage}>
                    <div>
                        <button onClick={this.props.menuToggle}>
                            <DrawerToggleButton/>
                        </button>
                    </div>
                    <div>
                        <NavLink to="/">
                            <img className={header_style.profile_sizer} src={profile_1} alt=""/>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/profile">
                            <img className={header_style.profile_sizer} src={anonymous} alt=""/>
                        </NavLink>
                    </div>
                </header>

                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/profile" component={Profile}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu.menu,
    }
}

export default connect(mapStateToProps, {menuToggle})(App);
