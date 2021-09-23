import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <div className="nav-bar">
                    <a href="/shop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/inventory">Inventory</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;