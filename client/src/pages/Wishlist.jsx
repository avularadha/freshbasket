import Navbar from "../components/Navbar";
import { useWishlist } from "../context/Wishlist";
import "../styles/Wishlist.css";
import BottomNav from "../components/BottomNav";
const Wishlist = () => {
  const { wishlist, toggleWishlist } =
    useWishlist();

  return (
    <>
      <Navbar />

      <div className="wishlist-container">
        <h1 className="wishlist-title">
          ❤️ My Wishlist
        </h1>

        {wishlist.length === 0 ? (
          <div className="empty-wishlist">
            <h2>No items in wishlist</h2>

            <p>
              Add products to your wishlist.
            </p>
          </div>
        ) : (
          <div className="wishlist-grid">
            {wishlist.map(item => (
              <div
                key={item.id}
                className="wishlist-card"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="wishlist-image"
                />

                <h3>{item.name}</h3>

                <p>{item.weight}</p>

                <h2>₹{item.price}</h2>

                <button
                  className="remove-btn"
                  onClick={() =>
                    toggleWishlist(item)
                  }
                >
                  Remove ❤️
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
       <BottomNav/>
    </>
  );
   
};

export default Wishlist;