import './css/footer.scss';

 function Footer () {
    return (
        <footer className="content-wrapper">
           
                <nav className="footer-padding">
                    <div className="name logo">
                    <a href="index.html" className="logo-link">ghaiquol@gmail.com</a>
                    </div>

                    <ul className = "links links--footer">
                        <li><a  href="#">Projects</a></li>
                        <li><a  href="#">contact</a></li>
                        <li><a  href="#">About</a></li>
                    </ul>
                </nav>
            
        </footer>
    );
}

export default Footer;