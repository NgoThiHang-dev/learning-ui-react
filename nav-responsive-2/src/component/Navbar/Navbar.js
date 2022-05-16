import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../../assets/css/navbar.css"

export const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <div className="navbar-section">
            {/* <i class="fa-solid fa-bars"></i> */}
            <nav className="navbar">
                <h3 className="logo">Logo</h3>
                <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                    <Link to="/" className="nav-home">
                        <li>Home</li>
                    </Link>
                    <Link to="/product" className="nav-product">
                        <li>Product</li>
                    </Link>
                    <Link to="/about" className="nav-about">
                        <li>About</li>
                    </Link>
                    <Link to="/contact" className="nav-contact">
                        <li>Contact</li>
                    </Link>
                    <Link to="/sign-up" className="nav-sign-up">
                        <li>Sign Up</li>
                    </Link>
                </ul>
                <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? (
                        <i className="fa-solid fa-x"></i>
                    ) : (

                        <i className="fa-solid fa-bars"></i>
                    )}
                </button>
            </nav>
        </div>
    )
}
