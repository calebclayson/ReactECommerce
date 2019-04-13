import React from 'react';
import '../css/product.css';

const Product = props => (
    <div className="product" key={props.product.id}>
        <div className="title">{props.product.title}</div>
        <img src={props.product.img} alt={props.product.title} />
        <div className="description">{props.product.description}</div>
    </div>
);

export default Product;