import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import RentPage from './RentPage.js';
import AboutUs from './AboutUs.js';
import ContactPage from './ContactPage.js';
import Header from './Header.js';


class App extends Component {

    render() {
        return (
                <Router>
                  <div className="App" class='app'>
                    <Header/>
                    <Route exact path="/" component={AboutUs} />
                    <Route exact path="/stores" component={RentPage} />
                    <Route exact path="/contact" component={ContactPage} />
                  </div>
                </Router>);
    }
}

export default App;
