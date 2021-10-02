import React from 'react';

const ReviewItem = (props) => {
    const { key, name, price, quantity } = props.product;
    return (
        <div className="products">
            <div className="product">
                <h2 className="product-name">{name}</h2>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button
                    onClick={() => props.handleRemove(key)}
                    className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;