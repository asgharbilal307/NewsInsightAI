import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem("user") || "null");
  } catch {
    user = null;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  const isAdmin = user.role === "admin";

  return (
    <div className="dashboard-page">
      <div className="dash-header">
        <div>
          <h1>Hello, {user.name}</h1>
          <p className="sub">Here’s a snapshot of your session.</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", alignItems: "center" }}>
          <span className={`role-pill${isAdmin ? " admin" : ""}`}>
            {isAdmin ? "Admin" : "Member"}
          </span>
          <button type="button" className="btn btn-ghost" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>

      <div className="dash-grid">
        <div className="dash-card">
          <h3>User ID</h3>
          <div className="value">#{user.id}</div>
          <p className="hint">Your unique identifier in the system.</p>
        </div>
        <div className="dash-card">
          <h3>Access level</h3>
          <div className="value">{isAdmin ? "Elevated" : "Standard"}</div>
          <p className="hint">
            {isAdmin
              ? "You have admin capabilities for this workspace."
              : "Standard user access for everyday use."}
          </p>
        </div>
        <div className="dash-card">
          <h3>Status</h3>
          <div className="value" style={{ color: "var(--accent)" }}>
            Active
          </div>
          <p className="hint">Session stored locally until you log out.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
