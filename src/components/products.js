import React, { Component } from 'react';
import {connect} from 'react-redux';
import Product from './product';
import '../css/products.css';

class Products extends Component {
    state={currentCategory:''}

    createProductDiv() {
        return this.props.products.map(product => {
            if(this.state.currentCategory === '') {
                return (
                    <Product key={product.id} product={product} />
                );
            } else {
                for(let i = 0; i < this.props.products.length; i++) {
                    if(product.category === this.state.currentCategory) {
                        return (
                            <Product key={product.id} product={product} />
                        )
                    }
                }
            }
            return null;
        })
    }

    createCategoryOptions() {
        return this.props.categories.map(category => {
            return (
                <option key={category} value={category}>{category}</option>
            );
        })
    }

    filterProducts = e => {
        this.setState({currentCategory:e.target.value})
    }

    render() { 
        return (
            <div className="container">
                <select key="0" onChange={this.filterProducts}>
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