import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";

function SignupPage() {
  return (
    <div className="login-card">
      <div className="logo-container">
        <div className="logo"></div>
        <div className="welcome-text">WELCOME TO UNIBRIDGE</div>
      </div>

      <h1 className="brand-name">UNIBRIDGE</h1>
      <p className="tagline">CONNECT. COLLABORATE. CONQUER.</p>

      <form action="#" method="POST">
        <div className="input-group">
          <input type="text" id="fullname" placeholder="Full Name" required />
        </div>

        <div className="flex-group">
          <div className="input-group">
            <select id="course" name="course" required>
              <option value="" disabled selected>
                Select Course
              </option>
              <option value="computer_science">Btech</option>
              <option value="engineering">BBA</option>
              <option value="business">BCOM</option>
              <option value="arts">BCA</option>
              <option value="medicine">MBA</option>
              <option value="law">MCA</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="input-group">
            <input type="text" id="year" placeholder="Year" required />
          </div>
        </div>

        <div className="input-group">
          <input type="text" id="college" placeholder="College Name" required />
        </div>

        <div className="input-group">
          <input type="email" id="email" placeholder="Email Address" required />
        </div>

        <div className="checkbox-container">
          <input type="checkbox" id="privacy" required />
          <label htmlFor="privacy">
            I ACCEPT THE PRIVACY AND SAFETY CONDITIONS OF UNIBRIDGE.
          </label>
        </div>

        <button type="submit" className="submit-btn">
          ACCESS HUB
        </button>

        <div className="divider">OR</div>

        <button type="button" className="google-btn">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
            alt="Google Logo"
          />
          CONTINUE WITH GOOGLE
        </button>

        <div className="footer-links">
          Already have an account? <a href="signin">Sign In</a>
        </div>
      </form>
    </div>
  );
}

export default SignupPage;