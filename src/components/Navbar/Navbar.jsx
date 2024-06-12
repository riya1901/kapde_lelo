import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar({handlecategory,handlefilter}) {
    const [cart, setCart] = useState(0);
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    const closeMenu = () => {
        setMenuActive(false);
    };

    return (
        <>
            <header className="head">
                <nav className="nav">
                    <Link to='/' onClick={handlefilter}>
                        <div className='nav-logo'>
                            <img className='logo' src="src/assets/shop.png" alt="Logo" />
                            <p className='logo-name'>Kapde Lelo</p>
                        </div>
                    </Link>
                    <ul className={`nav-menu ${menuActive ? 'active' : ''}`}>
                        <li className="nav-item">
                            <NavLink to='/Mens' value="mens wear" className={({isActive})=>`navbar-link${isActive?"-active":""}`} onClick={handlecategory}>Men's clothing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/womens' className={({isActive})=>`navbar-link${isActive?"-active":""}`} onClick={handlecategory}>Women's clothing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/kids' className={({isActive})=>`navbar-link${isActive?"-active":""}`} onClick={handlecategory}>Kids wear</NavLink>
                        </li>
                    </ul>
                    <div className='search'>
                        <div className="group">
                            <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                                <g>
                                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                </g>
                            </svg>
                            <input placeholder="Search" type="search" className="input" />
                        </div>
                        <li className="cart">
                            <Link to='/'>
                                <img className='prof' src="src/assets/shopping-bag.png" alt="Cart" />
                            </Link>
                            <p>{cart}</p>
                        </li>
                        <li className="profile">
                            <Link to='/'>
                                <img className='prof' src="src/assets/user.png" alt="Profile" />
                            </Link>
                        </li>
                        <div className="hamburger" onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                    </div>
                    
                </nav>
            </header>
        </>
    );
}

export default Navbar;
