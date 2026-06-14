import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx"
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Checkout from "./pages/Checkout.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Profile from "./pages/Profile.jsx";
import {ToastContainer} from "react-toastify";
import ProductDetails from "./pages/ProductDetails.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";
function App() {
   const user =JSON.parse(
    localStorage.getItem("user")
   )
  return (
    <> <Routes>
        <Route path="/" element={user ?<Home />:<Navigate to="/"/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/order-success" element={<OrderSuccess/>}/>
         </Routes>
      <ToastContainer
      position="top-center"
      autoClose={2000} /> </> );}
export default App;