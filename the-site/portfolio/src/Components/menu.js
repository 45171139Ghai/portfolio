import React from 'react';
import {Link} from 'react-router-dom';
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
                        <li><Link className="a" to="/">Home</Link></li>
                        <li><Link className="a" to="/projects">Projects</Link></li>
                        <li><Link className="a" to="/contact">contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Menu;