import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/signin.css";

function SigninPage() {
  return (
    <div className="login-card">
      <div className="logo-container">
        <div className="logo"></div>
        <div className="logo-wrapper">
          <div className="welcome-text">WELCOME BACK TO UNIBRIDGE</div>
        </div>
      </div>

      <h1 className="brand-name">UNIBRIDGE</h1>
      <p className="tagline">CONNECT. COLLABORATE. CONQUER.</p>

      <form action="#" method="POST">
        <div className="input-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address / Username"
            required
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>

        <div className="options-row">
          <div className="checkbox-container">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="submit-btn">
          ACCESS HUB
        </button>

        <div className="divider">
          <span>OR</span>
        </div>

        <button type="button" className="google-btn">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
            alt="Google Logo"
            className="google-logo"
          />
          Sign in with Google
        </button>

        <div className="footer-links">
          <p>
            Don't have an account?{" "}
            <a href="signup">Create Account</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SigninPage;