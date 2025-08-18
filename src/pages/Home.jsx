import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>🎬 Welcome to FilmGenius</h1>
      <p>Your creative journey begins here.</p>
      <div style={{ marginTop: "1.5rem" }}>
        <Link to="/login" style={{ marginRight: "1rem" }}>Log In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
}
