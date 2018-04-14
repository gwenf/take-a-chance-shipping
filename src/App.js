import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
//https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm
import Store from "./Store";
import Home from "./Home";
import Shipping from "./Shipping";
import QR from "./QR";

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './css/skeleton.css'
import './css/normalize.css'
import './css/custom.css'
import './App.css'

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/store">Store</NavLink></li>
            <li><NavLink to="/shipping">Shipping</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/shipping/:sid" component={Shipping} />
            <Route exact path="/shipping" component={Shipping} />
            <Route exact path="/qr/:code" component={QR} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App
