import { useCart } from "../context/CartContext";
import "../styles/ProductCard.css";
import { useWishlist } from "../context/Wishlist";
import {Link} from "react-router-dom";
const ProductCard=({
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
  const {wishlist,toggleWishlist} = useWishlist();
  const isWishlisted = wishlist.some(item => item.id ===id);


  return (
    <Link to ={`/product/${id}`} className="product-link">
    <div className="product-card">
      <div className="product-image-container">
        
        <button
  className="wishlist-btn"
  onClick={() =>
    toggleWishlist({
      id,
      name,
      price,
      image,
      weight,
    })
  }
>
  {isWishlisted ? "❤️" : "🤍"}
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
    </Link>
  );
};

export default ProductCard;