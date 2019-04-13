import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';

import Products from './components/products';
import Cart from './components/cart';
import Login from './components/login';

class App extends Component {
  componentDidMount() {
    fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
        .then(rsp => rsp.json())
        .then(allItems => {
            this.props.addProducts(allItems);
    });
  }

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

const mapDispatchToProps = dispatch => {
  return {
    addProducts: products => {
      dispatch({
        type: 'ADD_PRODUCTS',
        products
      })
    }
  }
}

const mapStateToProps = state => {
  return {
    products: state.ProductReducer
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
