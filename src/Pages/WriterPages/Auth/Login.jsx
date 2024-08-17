import React from 'react';
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

function Login() {
    const routeTo = useNavigate()

    function routeToWritePage() {
        routeTo('/write')
    }
  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-title">Welcome Back to TBBlog</h2>
        <form className="login-form">
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            required
          />
          <button type="submit" className="login-button" onClick={routeToWritePage}>
            Login
          </button>
        </form>
        <p className="login-message">
          Don't have an account? Reach out to us:
        </p>
        <div className="login-icons">
          <FaWhatsapp className="icon" />
          <FaLinkedin className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Login;
