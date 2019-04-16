import React from 'react';
import '../css/current.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let inputVal = '';

const ProductDetail = props => (
    <div className="detail-product" key={props.product.id}>
        <div className="title">{props.product.title}</div>
        <img className="detail-img" src={props.product.img} alt={props.product.title} />
        <div className="description">{props.product.description}</div>
        <b><div className="detail-price">{props.product.price}</div></b>
        <div className="addCart">
            <Link to="/"><button>Cancel</button></Link>
            <input type="number" onChange={handleChange}/>
            <Link to="/"><button onClick={() => props.passID(props.product.id, inputVal)}>Add To Cart</button></Link>
        </div>
    </div>
);

function handleChange(val) {
    inputVal = val.target.value;
}

function noZero(num) {
    if(Number(num) <= 0) {
        return Number(1);
    } else {
        return Number(num);
    }
}

const mapDispatchToProps = dispatch => {
    return {
      passID: (id, quantity) => {
        dispatch({
            type: 'ADD_TO_CART',
            cart: {
                id: id,
                quantity: noZero(quantity)
            }
        })
        inputVal = '';
      }
    }
  }

export default connect(null, mapDispatchToProps)(ProductDetail);