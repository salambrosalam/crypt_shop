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

class App extends Component {
    render() {
        return (
                <BrowserRouter>
                    {this.props.menu ? <BackDrop menuToggle={this.props.toggleMenu}/>
                        : ''}
                        <Header toggleMenu={this.props.toggleMenu}/>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route path="/login" render={() => <Login/>}/>
                        <Route path="/register" render={() => <Register/>}/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
        );
    }
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
