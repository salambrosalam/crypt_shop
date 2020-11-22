import React from "react";
import {Switch,Route,Redirect} from "react-router-dom";
import Profile from "../Components/Profile/Profile";
import HomePage from "../Components/HomePage/HomePage";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

export const useRoutes = isAuthenticated => {
    if(isAuthenticated){
        return (
            <Switch>
                <Switch>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/" component={HomePage}/>
                    <Redirect to={"/profile"}/>
                </Switch>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/login" render={() => <Login/>}/>
            <Route path="/register" render={() => <Register/>}/>
            <Redirect to={"/"}/>
        </Switch>
    )
}
