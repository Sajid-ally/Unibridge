import { Link } from "react-router-dom";
import "../styles/signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  //backend integration
  const [formData, setFormData] = useState({
    name: "",
    email: "",
      phone: "",
    password: ""
  });
const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
// ✅ Email OR Phone validation
    if (!formData.email && !formData.phone) {
      alert("Enter Email OR Phone ❌");
      return;
    }
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const data = await res.json();

    if (data.message === "User already exists") {
      alert("Email already registered ❌");
    } else {

  // ✅ SAVE TOKEN (IMPORTANT FIX)
  if (data.token) {
    localStorage.setItem("token", data.token);
  }

  setShowSuccess(true);

  setTimeout(() => {
    navigate("/home");
  }, 2000);
}
  };



  

  return (
    <div className="signup-wrapper"> {/* ✅ CENTER WRAPPER */}
{/* ✅ SUCCESS POPUP (ANIMATED) */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-card">
            <div className="checkmark">✔</div>
            <h2>Account Created</h2>
            <p>Welcome to Unibridge 🚀</p>
          </div>
        </div>
      )}
      <div className="login-card">

        <div className="logo-container">
          <div className="logo"></div>
          <div className="welcome-text">WELCOME TO UNIBRIDGE</div>
        </div>

        <h1 className="brand-name">UNIBRIDGE</h1>
        <p className="tagline">CONNECT. COLLABORATE. CONQUER.</p>

        

          {/* ✅ CONNECTED FORM */}
        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
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
            <input
              type="email"
              name="email"
              placeholder="Email Address (optional)"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number (optional)"
              onChange={handleChange}
            />
          </div>
          {/* ✅ PASSWORD */}
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
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