import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset
  };

  return (
    <div className="auth-page">
      <div className="auth-card" style={{ maxWidth: '448px' }}>
        <h1 className="auth-title" style={{ fontSize: '36px', marginBottom: '12px' }}>
          <span className="text-primary">Royal</span>
          <span className="text-gold"> Threads</span>
        </h1>

        <p className="text-center text-sm" style={{ marginBottom: '24px', color: '#4b5563' }}>
          Enter your registered email to reset your password
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div>
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Reset Password
          </button>
        </form>

        <p className="auth-footer">
          Remembered your password?
          <Link to="/login" className="link-text"> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;

