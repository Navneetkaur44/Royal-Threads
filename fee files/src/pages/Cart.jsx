import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useCart } from '../contexts/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [selectedPeriod, setSelectedPeriod] = useState(4);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const getRentalMultiplier = () => {
    switch (selectedPeriod) {
      case 4: return 1;
      case 7: return 1.5;
      case 14: return 2.5;
      default: return 1;
    }
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.price * getRentalMultiplier() * (item.quantity || 1));
    }, 0);
  };

  const calculateDeposit = () => {
    return Math.round(cart.reduce((total, item) => {
      return total + (item.price * 2 * (item.quantity || 1) * 0.2);
    }, 0));
  };

  const applyPromoCode = () => {
    const validCodes = {
      'ABC123': Math.round(calculateSubtotal() * 0.2),
      'ROYAL50': 500,
      'FIRST20': Math.round(calculateSubtotal() * 0.2),
      'SAVE10': Math.round(calculateSubtotal() * 0.1)
    };
    
    if (validCodes[promoCode.toUpperCase()]) {
      setDiscount(validCodes[promoCode.toUpperCase()]);
    }
  };

  const subtotal = calculateSubtotal();
  const deposit = calculateDeposit();
  const total = subtotal + deposit - discount;

  if (cart.length === 0) {
    return (
      <>
        <Header />
        <div className="breadcrumb">
          <div className="container">
            <nav className="breadcrumb-nav">
              <Link to="/">Home</Link> / <Link to="/collections">Collections</Link> / Shopping Cart
            </nav>
          </div>
        </div>
        <div className="container">
          <div className="empty-cart">
            <i className="fas fa-shopping-bag"></i>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <Link to="/collections" className="shop-now-btn">Start Shopping</Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="breadcrumb">
        <div className="container">
          <nav className="breadcrumb-nav">
            <Link to="/">Home</Link> / <Link to="/collections">Collections</Link> / Shopping Cart
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="cart-page">
          <h1 className="page-title">Shopping Cart</h1>
          
          <div className="cart-content">
            <div className="cart-items-section">
              <div className="cart-items-header">
                Shopping Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
              </div>
              <div className="cart-items-list">
                {cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} className="item-image" />
                    
                    <div className="item-details">
                      <h3>{item.title}</h3>
                      <div className="item-category">{item.category || 'Item'}</div>
                      <div className="item-rental-period">Rental: {selectedPeriod} days</div>
                    </div>
                    
                    <div className="quantity-controls">
                      <button 
                        className="quantity-btn" 
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                        disabled={item.quantity <= 1}
                      >-</button>
                      <input 
                        type="number" 
                        className="quantity-input" 
                        value={item.quantity || 1} 
                        min="1" 
                        max="3" 
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      />
                      <button 
                        className="quantity-btn" 
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                        disabled={item.quantity >= 3}
                      >+</button>
                    </div>
                    
                    <div className="item-price">
                      ₹{((item.price * getRentalMultiplier() * (item.quantity || 1)).toLocaleString())}
                    </div>
                    
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="cart-summary">
              <h3 className="summary-title">Order Summary</h3>
              
              <div className="rental-period-selector">
                <label>Rental Period:</label>
                <div className="period-options">
                  <div 
                    className={`period-option ${selectedPeriod === 4 ? 'active' : ''}`}
                    onClick={() => setSelectedPeriod(4)}
                  >4 Days</div>
                  <div 
                    className={`period-option ${selectedPeriod === 7 ? 'active' : ''}`}
                    onClick={() => setSelectedPeriod(7)}
                  >7 Days</div>
                  <div 
                    className={`period-option ${selectedPeriod === 14 ? 'active' : ''}`}
                    onClick={() => setSelectedPeriod(14)}
                  >14 Days</div>
                </div>
              </div>
              
              <div className="promo-code">
                <label>Promo Code:</label>
                <div className="promo-input-group">
                  <input 
                    type="text" 
                    className="promo-input" 
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code" 
                  />
                  <button className="promo-btn" onClick={applyPromoCode}>Apply</button>
                </div>
              </div>
              
              <div className="summary-row">
                <span>Subtotal ({selectedPeriod} days):</span>
                <span>₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Security Deposit:</span>
                <span>₹{deposit.toLocaleString()}</span>
              </div>
              {discount > 0 && (
                <div className="summary-row" style={{ color: 'var(--success)' }}>
                  <span>Discount Applied:</span>
                  <span>-₹{discount.toLocaleString()}</span>
                </div>
              )}
              <div className="summary-row">
                <span>Delivery:</span>
                <span style={{ color: 'var(--success)' }}>FREE</span>
              </div>
              <div className="summary-row total">
                <span>Total Amount:</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
              <small style={{ color: '#666', fontSize: '0.8rem' }}>
                * Security deposit will be refunded after item return
              </small>
              
              <Link to="/checkout" className="checkout-btn">
                Proceed to Checkout
              </Link>
              
              <Link to="/collections" className="continue-shopping">
                Continue Shopping
              </Link>
              
              <div className="security-info">
                <i className="fas fa-shield-alt"></i>
                <span>Secure checkout with 256-bit SSL encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

