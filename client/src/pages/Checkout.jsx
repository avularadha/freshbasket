import { useState } from "react";
import "../styles/Checkout.css";
import { useLocation } from "react-router-dom";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const location = useLocation();
  const totalAmount = location.state?.totalPrice || 0
   
  console.log(location.state)
  console.log(totalAmount)
  

  return (
    <div className="checkout-page">
      <div className="checkout-container">

        <div className="checkout-header">
          <h1>Checkout</h1>
          <p>Complete your delivery details</p>
        </div>

        <div className="checkout-grid">

          <div className="left-section">

            <div className="card">
              <h2>📍 Delivery Address</h2>

              <form className="address-form">
                <input
                  type="text"
                  placeholder="Full Name"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                />

                <input
                  type="text"
                  placeholder="House / Flat No"
                />

                <input
                  type="text"
                  placeholder="Street"
                />

                <div className="row">
                  <input
                    type="text"
                    placeholder="City"
                  />

                  <input
                    type="text"
                    placeholder="Pincode"
                  />
                </div>
              </form>
            </div>

            <div className="card">
              <h2>💳 Payment Method</h2>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "COD"}
                  onChange={() =>
                    setPaymentMethod("COD")
                  }
                />
                Cash on Delivery
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "UPI"}
                  onChange={() =>
                    setPaymentMethod("UPI")
                  }
                />
                UPI Payment
              </label>

              <label className="payment-option">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "CARD"}
                  onChange={() =>
                    setPaymentMethod("CARD")
                  }
                />
                Credit / Debit Card
              </label>
            </div>

          </div>

          <div className="right-section">

            <div className="summary-card">
              <h2>🧾 Order Summary</h2>

              <div className="summary-row">
                <span>Items Total</span>
                <span>{totalAmount}</span>
              </div>

              <div className="summary-row">
                <span>Delivery Fee</span>
                <span>₹25</span>
              </div>

              <div className="summary-row">
                <span>Discount</span>
                <span className="green">
                  -₹0
                </span>
              </div>

              <hr />

              <div className="summary-total">
                <span>Total Amount</span>
                <span>₹{totalAmount + 25}</span>
              </div>

              <button
                className="place-order-btn"
                onClick={()=>navigate("/order-success")}
              >
                Place Order
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Checkout;