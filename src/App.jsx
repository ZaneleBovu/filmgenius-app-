import ProjectCreation from './pages/ProjectCreation.jsx';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RequireAuth from "./components/RequireAuth";

function Home() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Welcome to FilmGenius 🎬</h1>
      <p>
        <Link to="/signup">Sign Up</Link> | <Link to="/login">Log In</Link>
      </p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
<Route
  path="/create"
  element={
    <RequireAuth>
      <ProjectCreation />
    </RequireAuth>
  }
/>

      </Routes>
    </Router>
  );
}

export default App;
