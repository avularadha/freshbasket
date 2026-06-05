import { useCart } from "../context/CartContext";
import "../styles/ProductCard.css";

const ProductCard = ({
  id,
  name,
  price,
  image,
  weight,
}) => {
  const {
    cart,
    addToCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  const cartItem = cart.find(
    (item) => item.id === id
  );

  return (
    <div className="product-card">
      <div className="product-image-container">
        
        <button className="wishlist-btn">
          ♡
        </button>

        <img
          src={image}
          alt={name}
          className="product-image"
        />
      </div>

      <div className="product-details">
        <h3>{name}</h3>

        <p className="weight">{weight}</p>

        <div className="price-section">
          <span className="price">
            ₹{price}
          </span>
        </div>

        {!cartItem ? (
          <button
            className="add-btn"
            onClick={() =>
              addToCart({
                id,
                name,
                price,
                image,
                weight,
              })
            }
          >
            + Add
          </button>
        ) : (
          <div className="quantity-control">
            <button
              onClick={() =>
                decreaseQty(id)
              }
            >
              −
            </button>

            <span>
              {cartItem.quantity}
            </span>

            <button
              onClick={() =>
                increaseQty(id)
              }
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;