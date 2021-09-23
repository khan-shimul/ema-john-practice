import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)

    const { img, name, seller, price, stock } = props.product

    return (
        <div className="products">
            <div>
                <img src={img} alt="" />
            </div>

            <div className="product">
                <h3 className="product-name">{name}</h3>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular">add to cart</button>
            </div>
        </div>
    );
};

export default Product;