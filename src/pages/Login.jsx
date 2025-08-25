import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn, setRole }) {   // ✅ accept setRole
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setIsLoggedIn(true);
      setRole(storedUser.role);   // ✅ update role state
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", storedUser.role);

      if (storedUser.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/intern-dashboard");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit">Login</button>
      </form>
      <p onClick={() => navigate("/register")}>Don’t have an account? Register</p>
    </div>
  );
}
