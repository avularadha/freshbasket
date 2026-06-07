import {
  createContext,
  useContext,
  useState,
} from "react";
import BottomNav from "../components/BottomNav";
const WishlistContext = createContext();

export const WishlistProvider = ({
  children,
}) => {
  const [wishlist, setWishlist] =
    useState([]);

  const toggleWishlist = product => {
    const exists = wishlist.find(
      item => item.id === product.id
    );

    if (exists) {
      setWishlist(
        wishlist.filter(
          item => item.id !== product.id
        )
      );
    } else {
      setWishlist([
        ...wishlist,
        product,
      ]);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};