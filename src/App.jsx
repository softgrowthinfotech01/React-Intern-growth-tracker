import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css"
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import InternDashboard from "./pages/InternDashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  // Check login status from localStorage
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const savedRole = localStorage.getItem("role");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
      setRole(savedRole);
    }
  }, []);

  return (
    <Router>
      <Routes>
        {/* Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={
            isLoggedIn && role === "admin"
              ? <AdminDashboard setIsLoggedIn={setIsLoggedIn} />
              : <Navigate to="/login" />
          }
        />



        {/* Intern Dashboard */}
        <Route
          path="/intern-dashboard"
          element={
            isLoggedIn && role === "intern"
              ? <InternDashboard setIsLoggedIn={setIsLoggedIn} />
              : <Navigate to="/login" />
          }
        />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} setRole={setRole} />}
        />

        <Route path="/register" element={<Register />} />

        {/* Default */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
