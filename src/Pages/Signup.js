import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    alert("Signup successful! Please login.");
    navigate("/login"); 
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Account ✨</h2>
        <p className="subtitle">Join MyShop and start shopping</p>

        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Full Name" required /><br />
          <input type="email" placeholder="Enter your email" required /><br />
          <input type="password" placeholder="Enter your password" required /><br />
          <button type="submit">Signup</button>
        </form>

        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
