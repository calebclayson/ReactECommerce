import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Products from './components/products';
import Cart from './components/cart';
import Login from './components/login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="header">
          <Link className="link" to="/">
            Products
          </Link>
          <Link className="link" to="/cart">
            Cart
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
        </div>
        <Route path="/" exact component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
      </Router>
    );
  }
}

export default App;
