import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const {name,img,seller,price,stock} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt=""/>
            </div>
            <div className="product-info">
                <h4>{name}</h4>
                <p><small>by : {seller}</small></p>
                <p>${price}</p>
                <p>only{stock} left in stock - odder soon</p>
                <button className="buy-btn">Add to cart</button>
            </div>
        </div>
    );
};

export default Product;