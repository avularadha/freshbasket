import react from "react";
import "../styles/Login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import  {toast} from "react-toastify";
import axios from "axios";
function Login() {
    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "https://freshbasket-1-8qqf.onrender.com/api/auth/login",
      { email, password }
    );

    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

    localStorage.setItem("token", response.data.token);

    toast.success("Login Successful ✅");
    navigate("/");
  } catch (error) {
    toast.error(error.response?.data?.message || "Invalid Email or Password ❌");
  }
};
  return (
    <div className="login-container">
        <form onSubmit={handleSubmit}>
      <div className="login-card">
        <h1>FreshBasket</h1>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          required
        />

        <button className="login-btn" type="submit">
          Login
        </button>

        <p>
          New User?{" "}
          <Link to="/register">
            Register Here
          </Link>
        </p>
      </div>
      </form>
    </div>
  );
}

export default Login;