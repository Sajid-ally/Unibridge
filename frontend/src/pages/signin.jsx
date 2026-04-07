import { Link } from "react-router-dom";
import "../styles/signin.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SigninPage() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  // ✅ AUTO REDIRECT IF LOGGED IN
  useEffect(() => {
    const token =
      localStorage.getItem("token") ||
      sessionStorage.getItem("token");

    if (token) navigate("/home");
  }, []);

  // ✅ INPUT HANDLE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ LOGIN FUNCTION
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    setLoading(false);

    if (data.token) {

      // ✅ REMEMBER ME LOGIC
      if (rememberMe) {
        localStorage.setItem("token", data.token);
      } else {
        sessionStorage.setItem("token", data.token);
      }

      // ✅ SHOW ANIMATION
      setShowSuccess(true);

      // ✅ DELAY REDIRECT
      setTimeout(() => {
        navigate("/home");
      }, 2000);

    } else {
      alert("Account not found ❌");

      setTimeout(() => {
        navigate("/signup");
      }, 1500);
    }
  };

  return (
    <div className="login-wrapper">

      {/* ✅ SUCCESS POPUP */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-card">
            <div className="checkmark">✔</div>
            <h2>Login Successful</h2>
            <p>Welcome Back 🚀</p>
          </div>
        </div>
      )}

      <div className="login-card">

        <div className="logo-container">
          <div className="logo"></div>

          <div className="logo-wrapper">
            <div className="welcome-text">
              WELCOME 
            </div>
          </div>
        </div>

        <h1 className="brand-name">UNIBRIDGE</h1>
        <p className="tagline">CONNECT. COLLABORATE. CONQUER.</p>

        {/* ✅ FIXED FORM */}
        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </div>

          <div className="options-row">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="remember"
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Remember Me</label>
            </div>

            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          {/* ✅ SINGLE BUTTON */}
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Checking..." : "ACCESS HUB"}
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button type="button" className="google-btn">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
              alt="Google"
              className="google-logo"
            />
            Sign in with Google
          </button>

          <div className="footer-links">
            <p>
              Don't have an account?{" "}
              <Link to="/signup">Create Account</Link>
            </p>
          </div>

        </form>

      </div>
    </div>
  );
}

export default SigninPage;