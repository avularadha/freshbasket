import { Link, useLocation } from "react-router-dom";
import "../styles/BottomNav.css";
import { useCart } from "../context/CartContext";
const BottomNav = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const location = useLocation();
  const {totalItems} = useCart();

  return (
    <div className="bottom-nav">
      <Link
        to="/"
        className={location.pathname === "/" ? "active" : ""}
      >
        <span className="icon">🏠</span>
      </Link>
        
        <Link to={user ? "/profile":"/register"}><span>👤</span></Link>
       
      <Link
        to="/wishlist"
        className={
          location.pathname === "/wishlist"
            ? "active"
            : ""
        }
      >
        <span className="icon">❤️</span>
       
      </Link>

      <Link
        to="/cart"
        className={location.pathname === "/cart" ? "active" : ""}
      >
        <span className="icon">🛒+{totalItems}</span>
        
      </Link>
    </div>
  );
};

export default BottomNav;