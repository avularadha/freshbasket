import {Link,useNavigate} from "react-router-dom";
import "../styles/Register.css";
import { useState } from "react";
import {toast} from "react-toastify";
function Register() {
    const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone,setPhone] = useState("")
  const [address,setAddress] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      phone,
      address,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    toast.success("Registration Successful ✅");
    navigate("/");
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
         <input
          type="text"
          placeholder="Phone Number"
           value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          required
        />
         <input
          type="text"
          placeholder="Address"
           value={address}
          onChange={(e)=>setAddress(e.target.value)}
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