import React from "react";
import { getAuth, signOut } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>📋 Dashboard</h1>
      {user ? (
        <>
          <p>Welcome, {user.email}!</p>
          <button onClick={handleLogout} style={{ marginTop: "1rem" }}>
            Log Out
          </button>
        </>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
}
