import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <div className="nav-bar">
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/review">Order</NavLink>
                    <NavLink to="/inventory">Inventory</NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Header;