import react from "react";
import "../styles/Login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please register first");
      return;
    }

    if (
      email === user.email &&
      password === user.password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login Successful ✅");
      navigate("/");
    } else {
      alert("Invalid Email or Password");
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