import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props

    const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0)

    // const total = cart.reduce((previous, current) => previous + current.price, 0)

    // let total = 0;
    // for (const product of cart) {
    //     total = total + product.price;
    // }

    const shipping = 15;
    const tax = (total + shipping) * 10 / 100;
    const grandTotal = total + shipping + tax;

    return (
        <div className="">
            <div className="cart-details">
                <h2>Order Summary</h2>
                <p>Items ordered: {cart.length}</p>
            </div>
            <p>Total Price: ${total.toFixed(2)}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;