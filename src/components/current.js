import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDetail from './productDetail';

class Current extends Component {
    getCurrentItem() {
        return this.props.products.map(product => {
            if(Number(product.id) === Number(this.props.match.params.productID)) {
                return <ProductDetail product={product}/>;
            } else {
                return null;
            }
        })
    };
    
    render() { 
        return ( 
        <div>
            {this.getCurrentItem()}
        </div> 
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.ProductReducer
    }
}
 
export default connect(mapStateToProps)(Current);