import { useNavigate } from "react-router-dom";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-bg">
      <div className="login-card">
        <h2>UniBridge</h2>
        <p className="subtitle">Connect Your Campus</p>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button onClick={() => navigate("/home")}>
          Login
        </button>

        <p className="footer-text">
          © 2026 UniBridge
        </p>
      </div>
    </div>
  );
}

export default Login;