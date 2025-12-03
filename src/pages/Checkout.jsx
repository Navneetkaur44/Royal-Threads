import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { useCart } from '../contexts/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    deliveryDate: '',
    paymentMethod: 'card',
    idType: '',
    idNumber: ''
  });

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    alert('Order placed successfully!');
  };

  return (
    <>
      <Header />
      <div className="breadcrumb">
        <div className="container">
          <nav className="breadcrumb-nav">
            <Link to="/">Home</Link> / <Link to="/collections">Collections</Link> / <Link to="/cart">Cart</Link> / Checkout
          </nav>
        </div>
      </div>

      <div className="container">
        <div className="checkout-page">
          <h1 className="page-title">Checkout</h1>
          
          <div className="form-steps">
            <div className={`step ${currentStep === 1 ? 'active' : currentStep > 1 ? 'completed' : ''}`}>
              <div className="step-number">1</div>
              <div className="step-label">Delivery Details</div>
            </div>
            <div className={`step ${currentStep === 2 ? 'active' : currentStep > 2 ? 'completed' : ''}`}>
              <div className="step-number">2</div>
              <div className="step-label">Payment Method</div>
            </div>
            <div className={`step ${currentStep === 3 ? 'active' : ''}`}>
              <div className="step-number">3</div>
              <div className="step-label">ID Verification</div>
            </div>
          </div>
          
          <div className="checkout-content">
            <div className="checkout-form">
              {currentStep === 1 && (
                <div className="checkout-form-section">
                  <h2 className="section-title">Delivery Details</h2>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First Name</label>
                      <input type="text" name="firstName" className="form-input" value={formData.firstName} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name</label>
                      <input type="text" name="lastName" className="form-input" value={formData.lastName} onChange={handleInputChange} required />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" name="email" className="form-input" value={formData.email} onChange={handleInputChange} required />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" name="phone" className="form-input" value={formData.phone} onChange={handleInputChange} required />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Delivery Address</label>
                    <input type="text" name="address" className="form-input" placeholder="Street address" value={formData.address} onChange={handleInputChange} required />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">City</label>
                      <input type="text" name="city" className="form-input" value={formData.city} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">State</label>
                      <select name="state" className="form-select" value={formData.state} onChange={handleInputChange} required>
                        <option value="">Select State</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Karnataka">Karnataka</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">PIN Code</label>
                      <input type="text" name="pincode" className="form-input" value={formData.pincode} onChange={handleInputChange} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Delivery Date</label>
                      <input type="date" name="deliveryDate" className="form-input" value={formData.deliveryDate} onChange={handleInputChange} required />
                    </div>
                  </div>
                  
                  <button className="place-order-btn" onClick={nextStep}>Continue to Payment</button>
                </div>
              )}

              {currentStep === 2 && (
                <div className="checkout-form-section">
                  <h2 className="section-title">Payment Method</h2>
                  
                  <div className="payment-methods">
                    <label className={`payment-method ${formData.paymentMethod === 'card' ? 'selected' : ''}`}>
                      <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleInputChange} />
                      <div className="payment-method-label">
                        <div className="payment-icon">💳</div>
                        Credit/Debit Card
                      </div>
                    </label>
                    
                    <label className={`payment-method ${formData.paymentMethod === 'upi' ? 'selected' : ''}`}>
                      <input type="radio" name="paymentMethod" value="upi" checked={formData.paymentMethod === 'upi'} onChange={handleInputChange} />
                      <div className="payment-method-label">
                        <div className="payment-icon">📱</div>
                        UPI
                      </div>
                    </label>
                    
                    <label className={`payment-method ${formData.paymentMethod === 'cod' ? 'selected' : ''}`}>
                      <input type="radio" name="paymentMethod" value="cod" checked={formData.paymentMethod === 'cod'} onChange={handleInputChange} />
                      <div className="payment-method-label">
                        <div className="payment-icon">💰</div>
                        Cash on Delivery
                      </div>
                    </label>
                  </div>
                  
                  <div className="form-row">
                    <button className="place-order-btn" style={{ background: '#666' }} onClick={prevStep}>Back</button>
                    <button className="place-order-btn" onClick={nextStep}>Continue to Verification</button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="checkout-form-section">
                  <h2 className="section-title">ID Verification</h2>
                  
                  <p style={{ marginBottom: '20px', color: '#666' }}>
                    For security and to prevent fraud, we require a government-issued ID proof.
                  </p>
                  
                  <div className="form-group">
                    <label className="form-label">ID Type</label>
                    <select name="idType" className="form-select" value={formData.idType} onChange={handleInputChange} required>
                      <option value="">Select ID Type</option>
                      <option value="aadhaar">Aadhaar Card</option>
                      <option value="pan">PAN Card</option>
                      <option value="driving">Driving License</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">ID Number</label>
                    <input type="text" name="idNumber" className="form-input" value={formData.idNumber} onChange={handleInputChange} required />
                  </div>
                  
                  <div className="form-row">
                    <button className="place-order-btn" style={{ background: '#666' }} onClick={prevStep}>Back</button>
                    <button className="place-order-btn" onClick={placeOrder}>Place Order</button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="order-summary">
              <h3 className="summary-title">Order Summary</h3>
              
              <div className="summary-items">
                {cart.map(item => (
                  <div key={item.id} className="summary-item">
                    <img src={item.image} alt={item.title} className="summary-item-image" />
                    <div className="summary-item-details">
                      <div className="summary-item-title">{item.title}</div>
                      <div className="summary-item-info">Size: M • 4 days rental</div>
                    </div>
                    <div className="summary-item-price">₹{item.price.toLocaleString()}</div>
                  </div>
                ))}
              </div>
              
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>₹{cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0).toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Security Deposit:</span>
                <span>₹{(cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0) * 0.2).toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Delivery:</span>
                <span style={{ color: 'var(--success)' }}>FREE</span>
              </div>
              <div className="summary-row total">
                <span>Total Amount:</span>
                <span>₹{(cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0) * 1.2).toLocaleString()}</span>
              </div>
              
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

export default Checkout;

