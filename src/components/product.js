import React from 'react';
import '../css/product.css';
import { Link } from 'react-router-dom';

const Product = props => (
    <Link className="itemLink" to={"/"+props.product.id}>
    <div className="product" key={props.product.id}>
        <div className="title">{props.product.title}</div>
        <img src={props.product.img} alt={props.product.title} />
        <b><div className="price">{props.product.price}</div></b>
    </div>
    </Link>
);

export default Product;