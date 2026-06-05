import {Link,useNavigate} from "react-router-dom";
import "../styles/Register.css";
import { useState } from "react";

function Register() {
    const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Registration Successful ✅");
    navigate("/login");
  };

  return (
    <div className="login-container">
        <form className="auth-form" onSubmit={handleSubmit}>
      <div className="login-card">
        <h1>FreshBasket</h1>
        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
           value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
           value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <button className="login-btn" type="submit">
          Register
        </button>
        <p>Already have an account?{" "}</p>
        <Link to="/login">Login</Link>
      </div>
      </form>
    </div>
  );
}

export default Register;