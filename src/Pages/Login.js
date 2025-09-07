import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      localStorage.setItem("isLoggedIn", "true"); 
      navigate("/products");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back 👋</h2>
        <p className="subtitle">Login</p>

        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Enter your email" required /><br />
          <input type="password" name="password" placeholder="Enter your password" required /><br />
          <button type="submit">Login</button>
        </form>

        <p className="signup-text">
          Don’t have an account? <Link to="/signup">Create Account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
