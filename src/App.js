import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Products from './components/products';
import Cart from './components/cart';
import Login from './components/login';
import Current from './components/current';

class App extends Component {
  componentDidMount() {
    fetch('https://my-json-server.typicode.com/tdmichaelis/json-api/products')
      .then(rsp => rsp.json())
      .then(allItems => {
        this.props.addProducts(allItems);
      });
    fetch('https://my-json-server.typicode.com/tdmichaelis/typicode/categories')
      .then(rsp => rsp.json())
      .then(allItems => {
        this.props.addCategories(allItems);
      });
  }

  createUserDiv() {
    return <div className="white-text">{this.props.user.name}</div>;
  }

  render() {
    return (
      <Router>
        <div className="header">
          <div className="left">
            <Link className="link" to="/">
              Products
            </Link>
            <Link className="link" to="/cart">
              Cart
            </Link>
          </div>
          <div className="right">
            {
              this.props.user.in ?
              this.createUserDiv()
              : <Link className="link" to="/login">
              Login
            </Link>
            }   
          </div>
        </div>
        <Route path="/" exact component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/:productID" component={Current} />
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
    },
    addCategories: categories => {
      dispatch({
        type: 'ADD_CATEGORIES',
        categories
      })
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.ProductReducer.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
