import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-about">
            <div className="footer-logo">Royal <span>Threads</span></div>
            <p>Rent the runway. Own the moment. Premium fashion rentals for every occasion.</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/collections">Collections</Link></li>
              <li><a href="#membership">Membership</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Style Guides</h3>
            <ul>
              <li><a href="#">Wedding Guest</a></li>
              <li><a href="#">Business Attire</a></li>
              <li><a href="#">Vacation Looks</a></li>
              <li><a href="#">Date Night</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p><i className="fas fa-map-marker-alt"></i> Aulakh, Gurdaspur, Punjab</p>
            <p><i className="fas fa-phone-alt"></i> +91 9872748176</p>
            <p><i className="fas fa-envelope"></i> query@royalthreads.com</p>
            <p><i className="fas fa-clock"></i> Mon-Fri: 9AM-6PM EST</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Royal Threads. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

