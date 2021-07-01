import React from 'react';
import './css/menu.scss';
import '../index.scss'

 function Menu () {
    return (
        <header>
            <div className="content-wrapper">
                <nav>
                    <div className="logo">
                    <a href="index.html" className="logo-link">Alex Thon Ghai</a>
                    </div>
                    <ul className = "links">
                        <li><a  href="#">Projects</a></li>
                        <li><a  href="#">contact</a></li>
                        <li><a  href="#">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Menu;