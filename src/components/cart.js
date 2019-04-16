import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './cartItem';

class Cart extends Component {
    findCartItems() {
        return this.props.products.map(product => {
            for(let i = 0; i < this.props.cart.length; i++) {
                if(product.id === this.props.cart[i].id) {
                    return <CartItem key={product.id} product={product} quantity={this.props.cart[i].quantity}/>
                }
            }
            return null;
        });
    }
    
    render() { 
        return ( <div className="container">{this.props.cart.length > 0 ? this.findCartItems() : 'No Items in Cart'}</div>);
    }
}

const mapStateToProps = state => {
    return {
      products: state.ProductReducer.products,
      cart: state.ProductReducer.cart
    };
}
 
export default connect(mapStateToProps)(Cart);