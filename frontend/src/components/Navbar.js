import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function readStoredUser() {
  try {
    const raw = localStorage.getItem("user");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function Navbar() {
  const location = useLocation();
  const [user, setUser] = useState(() => readStoredUser());

  useEffect(() => {
    setUser(readStoredUser());
  }, [location.pathname]);

  return (
    <header className="nav-shell">
      <nav className="nav-inner" aria-label="Main">
        <Link to="/" className="nav-brand">
          <span className="nav-brand-mark" aria-hidden="true">
            ◈
          </span>
          News Insight
        </Link>
        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            Home
          </NavLink>
          {user ? (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `nav-link nav-cta${isActive ? " active" : ""}`
                }
              >
                Dashboard
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `nav-link nav-cta${isActive ? " active" : ""}`
                }
              >
                Log in
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
              >
                Sign up
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
