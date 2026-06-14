import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/Wishlist";
import "../styles/ProductDetails.css";
import BottomNav from "../components/BottomNav";
import ProductCard from "../components/ProductCard";
function ProductDetails() {
  const { id } = useParams();

  const { cart,addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const product = products.find(
    (item) => item.id === Number(id)
  );
 const cartItem = cart.find(
  (item)=>item.id === product.id
 );
  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );
  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
    item.id !== product.id
  )
 //console.log(relatedProducts)

  return (
    <>
    <div className="product-details-page">
      <div className="product-image-section">
        <img
          src={product.image}
          alt={product.name}
          className="details-image"
        />
      </div>

      <div className="details-info">
        <p className="delivery">⚡ 10-Min Delivery</p>

        <h1>{product.name}</h1>

        <p className="rating">
          ⭐ 4.5 (120 Reviews)
        </p>

        <p className="details-weight">{product.weight}</p>

        <h2 className="details-price">
          ₹{product.price}
        </h2>

        <div className="buttons">
          {!cartItem ? (
  <button
    className="cart-btn"
    onClick={() => addToCart(product)}
  >
    Add to Cart
  </button>
) : (
  <button className="cart-btn">
    Added ({cartItem.quantity})
  </button>
)}

          <button
            className="details-wishlist-btn"
            onClick={() => toggleWishlist(product)}
          >
            {isWishlisted ? "❤️" : "🤍"}
          </button>
        </div>

        <div className="details-box">
          <h3>Product Details</h3>
          <p>
            Fresh and high-quality {product.name}.
            Carefully selected and delivered
            fresh to your doorstep.
          </p>
        </div>
         <div className ="related-section">
          <h2>Related Products</h2>
          <div className="related-products">
            {relatedProducts.slice(0,4).map((item)=>(
              <ProductCard
              key={item.id}
              {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
     <BottomNav/>
     </>
  );
}

export default ProductDetails;