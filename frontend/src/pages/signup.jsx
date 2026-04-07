import { Link } from "react-router-dom";
import "../styles/signup.css";

function SignupPage() {
  return (
    <div className="signup-wrapper"> {/* ✅ CENTER WRAPPER */}

      <div className="login-card">

        <div className="logo-container">
          <div className="logo"></div>
          <div className="welcome-text">WELCOME TO UNIBRIDGE</div>
        </div>

        <h1 className="brand-name">UNIBRIDGE</h1>
        <p className="tagline">CONNECT. COLLABORATE. CONQUER.</p>

        <form>

          <div className="input-group">
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className="flex-group">
            <div className="input-group">
              <select required>
                <option value="">Select Course</option>
                <option>Btech</option>
                <option>BBA</option>
                <option>BCOM</option>
                <option>BCA</option>
                <option>MBA</option>
                <option>MCA</option>
              </select>
            </div>

            <div className="input-group">
              <input type="text" placeholder="Year" required />
            </div>
          </div>

          <div className="input-group">
            <input type="text" placeholder="College Name" required />
          </div>

          <div className="input-group">
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="checkbox-container">

            <input type="checkbox" id="privacy" required />

            <label htmlFor="privacy" className="checkbox-text">
              I accept the privacy policy
            </label>

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
              alt="Google"
            />
            CONTINUE WITH GOOGLE
          </button>

          <div className="footer-links">
            Already have an account?{" "}
            <Link to="/signin">Sign In</Link>
          </div>

        </form>

      </div>

    </div>
  );
}

export default SignupPage;