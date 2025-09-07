import { Link } from "react-router-dom";
import "./Header.css"; 

function Header() {
  return (
    <header className="header">
      <h2 className="logo"> E-commerce</h2>
      <nav className="nav">
        <Link to="/login" className="nav-link">Login</Link>
         <Link to="/signup" className="nav-link">Signup</Link>
        <Link to="/" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
