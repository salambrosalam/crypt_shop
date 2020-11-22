import React, {Component} from 'react';
import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom"
import HomePage from "./Components/HomePage/HomePage";
import './App.css';
import Profile from "./Components/Profile/Profile"
import BackDrop from "./Components/BackDrop/BackDrop";
import {connect} from "react-redux";
import {menuToggleActionCreator} from "./Redux/reducers/AppReducer";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Register from "./Components/Register/Register";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {useRoutes} from "./Routes/routes";

const App = (props) => {
    const {token,login,logout,userId} = useAuth();
    const isAuthenticated = !!token;
    const routes = useRoutes(isAuthenticated)
        return (
                <AuthContext.Provider value={{
                    token, login,logout,userId,isAuthenticated
                }}>
                    <BrowserRouter>
                        {props.menu ? <BackDrop menuToggle={props.toggleMenu}/>
                            : ''}
                            <Header toggleMenu={props.toggleMenu}/>
                        {routes}
                        <Footer/>
                    </BrowserRouter>
                </AuthContext.Provider>
        );
}

const mapStateToProps = (state) => {
    return {
        menu: state.menu.menu,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMenu: () => dispatch(menuToggleActionCreator())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
