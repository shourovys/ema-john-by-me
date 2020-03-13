import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="logo"> <img src={logo} alt=""/> </div>
            <div className="navbar">
                <a href="/shop">Shop</a>
                <a href="/home">Home</a>
                <a href="/system">System</a>
            </div>
        </div>
    );
};

export default Header;