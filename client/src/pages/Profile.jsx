import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";
import BottomNav from "../components/BottomNav";

const Profile = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        <button
          className="back-btn"
          onClick={() => navigate("/")}
        >
          ←
        </button>

        <h2>{user.name}</h2>
        <p>{user.phone}</p>
        <p>{user.email}</p>
      </div>

      <div className="profile-cards">
        <div className="small-card">
          <span>📍</span>
          <p>{user.address}</p>
        </div>

        <div className="small-card">
          <span>💳</span>
          <p>Payments</p>
        </div>

        <div className="small-card">
          <span>📦</span>
          <p>Orders</p>
        </div>

        <div className="small-card">
          <span>❤️</span>
          <p>Wishlist</p>
        </div>
      </div>

      <div className="profile-menu">
        <div className="menu-item">
          <span>📍 Saved Address</span>
          <span>›</span>
        </div>

        <div className="menu-item">
          <span>📦 My Orders</span>
          <span>›</span>
        </div>

        <div className="menu-item">
          <span>❤️ My Wishlist</span>
          <span>›</span>
        </div>

        <div className="menu-item">
          <span>🛒 Cart Items</span>
          <span>›</span>
        </div>

        <div className="menu-item">
          <span>⭐ Reviews</span>
          <span>›</span>
        </div>

        <div className="menu-item">
          <span>⚙️ Settings</span>
          <span>›</span>
        </div>
      </div>

      <button
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem("user");
          navigate("/login");
        }}
      >
        Logout
      </button>
    </div>
    
  );
};

export default Profile;