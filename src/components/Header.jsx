import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="app-header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src="/PHOTO-2025-08-31-11-15-45.jpg" alt="Royal Threads Logo" className="logo-img" />
          Royal <span>Threads</span>
        </Link>

        <nav>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/collections">Collections</Link></li>
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/cart" className="cart-icon">
            <i className="fas fa-shopping-bag"></i>
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

