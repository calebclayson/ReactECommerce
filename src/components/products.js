import React, { Component } from 'react';
import {connect} from 'react-redux';
import Product from './product';
import '../css/products.css';

class Products extends Component {
    createProductDiv() {
        return this.props.products.map(product => {
            return (
                <Product product={product} />
            );
        })
    }

    render() { 
        return (
            <div className="container">
                {this.createProductDiv()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      products: state.ProductReducer
    };
}

export default connect(mapStateToProps)(Products);