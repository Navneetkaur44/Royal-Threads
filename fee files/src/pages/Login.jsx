import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validEmail = 'navjot123@gmail.com';
    const validPassword = '12345678';

    if (email === validEmail && password === validPassword) {
      setError('');
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="auth-page">
      <Link to="/" className="logo-top">
        <img
          src="/PHOTO-2025-08-31-11-15-45.jpg"
          alt="Royal Threads Logo"
          className="logo-img"
        />
        <span>
          Royal <span className="text-gold">Threads</span>
        </span>
      </Link>

      <div className="auth-card">
        <h1 className="auth-title">
          <span className="text-primary">Login to</span>
          <span className="text-gold"> Royal Threads</span>
        </h1>

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

          <div>
            <label className="form-label">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <div className="text-center text-sm">
            <Link to="/forgot-password" className="link-text">
              Forgot password?
            </Link>
          </div>

          <button type="submit" className="submit-btn">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account?
          <Link to="/signup" className="link-text"> Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;