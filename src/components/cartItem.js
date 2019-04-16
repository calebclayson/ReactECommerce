import React, { Component } from 'react';
import '../css/current.css';
import { connect } from 'react-redux';

class CartItem extends Component {
    state={inputVal:this.props.quantity}

    render() {
        return (
            <div className="product" key={this.props.product.id}>
                <div className="title">{this.props.product.title}</div>
                <img className="img" src={this.props.product.img} alt={this.props.product.title} />
                <b><div className="price">{this.props.product.price}</div></b>
                <b><div>Quantity: {this.props.quantity}</div></b>
                <div className="addCart">
                    <button onClick={() => this.props.delete(this.props.product.id)}>Delete</button>
                    <input type="number" value={this.state.inputVal} onChange={this.handleChange} />
                    <button onClick={() => this.props.passID(this.props.product.id, this.state.inputVal)}>Save</button>
                </div>
            </div>
        );
    }

    handleChange = (e) => {
        this.setState({inputVal: Number(e.target.value)});
    }
}

function checkQuantity(num) {
    if(num <= 0) {
        return Number(1);
    } else {
        return Number(num);
    }
}

const mapDispatchToProps = dispatch => {
    return {
        passID: (id, quantity) => {
            dispatch({
                type: 'UPDATE_CART',
                cart: {
                    id: id,
                    quantity: checkQuantity(quantity)
                }
            })
        },
        delete: (id) => {
            dispatch({
                type: 'DELETE_CART_ITEM',
                id: id
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(CartItem);