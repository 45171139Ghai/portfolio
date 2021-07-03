import {Link} from 'react-router-dom';

import './css/footer.scss';

 function Footer () {
    return (
        <footer className="content-wrapper">
           
                <nav className="footer-padding">
                    <div className="name logo">
                    <a href="index.html" className="logo-link">ghaiquol@gmail.com</a>
                    </div>

                    <ul className = "links links--footer">
                        <li><Link to="/projects" className="a" href="#">Projects</Link></li>
                        <li><Link to="/contact" className="a" href="#">Contact</Link></li>
                        <li><Link to="/" className="a" href="#">Home</Link></li>
                    </ul>
                </nav>
            
        </footer>
    );
}

export default Footer;