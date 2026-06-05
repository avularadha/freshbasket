import { useCart } from "../context/CartContext";
import "../styles/Cart.css";
import { useLocation, useNavigate } from "react-router-dom";

function Cart() {
  const navigate= useNavigate()
  const {
    cart,
    increaseQty,
    decreaseQty,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your Cart is Empty 🛒</h2>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">
        Your Cart ({cart.length})
      </h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="cart-item"
        >
          <img
            src={item.image}
            alt={item.name}
            className="cart-image"
          />

          <div className="cart-info">
            <h3>{item.name}</h3>

            <p>{item.weight}</p>

            <h4>₹{item.price}</h4>
          </div>

          <div className="quantity-box">
            <button
              onClick={() =>
                decreaseQty(item.id)
              }
            >
              -
            </button>
            <span>
              {item.quantity}
            </span>
            <button
              onClick={() =>
                increaseQty(item.id)
              }
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className="cart-footer">
        <h2>Total : ₹{totalPrice}</h2>

        <button className="checkout-btn" onClick={()=>navigate("/checkout",{
            state:{
                totalPrice:totalPrice,
            },
        })}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Cart;