import React, { Component } from 'react';
import {connect} from 'react-redux';
import Product from './product';
import '../css/products.css';

class Products extends Component {
    createProductDiv() {
        return this.props.products.map(product => {
            return (
                <Product key={product.id} product={product} />
            );
        })
    }

    createCategoryOptions() {
        return this.props.categories.map(category => {
            return (
                <option key={category} value={category}>{category}</option>
            );
        })
    }

    render() { 
        return (
            <div className="container">
                <select key="0">
                    {this.createCategoryOptions()}
                </select>
                {this.createProductDiv()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
      products: state.ProductReducer.products,
      categories: state.ProductReducer.categories
    };
}

export default connect(mapStateToProps)(Products);