import {useCart} from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const {totalItems} = useCart();
  const navigate = useNavigate();
  return (
    <>
      <div className="top-banner">
        ⚡ 10-Minute Delivery available in your area |
        <span> FREE delivery on orders above ₹199 </span> |
        🌿 100% Fresh & Farm-Sourced
      </div>

      <nav className="navbar">
        <div className="logo-section">
          <div className="logo-box">🧺</div>
          <h2>FreshBasket</h2>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search fruits, vegetables, curry items..."
          />
          <button>🔍</button>
        </div>

        <div className="nav-actions">
          <button onClick={()=> navigate("/login")} className="login-btn" >👤</button>
          <button className="cart-btn" onClick={()=>navigate("/cart")}> 🛒 +{totalItems}</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;