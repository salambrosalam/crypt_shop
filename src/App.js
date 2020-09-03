import React, {Component} from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import HomePage from "./containers/HomePage/HomePage";
import './App.css';

class App extends Component{
  render(){
    return(
          <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePage} />
            </Switch>
          </BrowserRouter>
    );
  }
}

export default App;
