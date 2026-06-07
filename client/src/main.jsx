import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/Wishlist";
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <BrowserRouter>
  <CartProvider>
   <WishlistProvider>
     <App/>
   </WishlistProvider>
  </CartProvider>
  </BrowserRouter>
 </React.StrictMode>
);