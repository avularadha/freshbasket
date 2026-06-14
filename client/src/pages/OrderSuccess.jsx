import { Link } from "react-router-dom";
import "../styles/OrderSuccess.css";

function OrderSuccess() {
  return (
    <div className="success-container">
      <div className="success-card">

        <div className="success-icon">
          ✅
        </div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Your order has been confirmed and will be
          delivered within 10 minutes.
        </p>

        <Link to="/">
          <button className="continue-btn">
            Continue Shopping
          </button>
        </Link>

      </div>
    </div>
  );
}

export default OrderSuccess;