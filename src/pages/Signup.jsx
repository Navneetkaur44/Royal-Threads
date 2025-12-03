import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Login.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      signup(formData);
      navigate('/Login');
    }
  };

  return (
    <div className="auth-page">
      <Link to="/" className="logo-top">
        <img src="/PHOTO-2025-08-31-11-15-45.jpg" alt="Royal Threads Logo" className="logo-img" />
        <span>Royal <span className="text-gold">Threads</span></span>
      </Link>

      <div className="auth-card">
        <h1 className="auth-title">
          <span className="text-primary">Signup to</span>
          <span className="text-gold"> Royal Threads</span>
        </h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div>
            <label className="form-label">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="form-label">Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="form-label">Password</label>
            <input 
              type="password" 
              placeholder="Create a password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="form-label">Confirm Password</label>
            <input 
              type="password" 
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>

        <p className="auth-footer">
          Already have an account?
          <Link to="/login" className="link-text"> Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

