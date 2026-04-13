import { NavLink, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "nav-link active" : "nav-link";

  return (
    <nav className="glass-nav">
      <div className="nav-container">

        {/* LEFT */}
        <div className="nav-left">
          <span className="logo-icon">🔗</span>
          <span className="logo-text">UniBridge</span>
        </div>

        {/* CENTER */}
        <div className="nav-center">
          <NavLink to="/home" className={isActive("/home")}>🏠 Home</NavLink>
          <NavLink to="/projects" className={isActive("/projects")}>📁 Projects</NavLink>
          <NavLink to="/leaderboard" className={isActive("/leaderboard")}>🏆 Leaderboard</NavLink>
          <NavLink to="/events" className={isActive("/events")}>📅 Events</NavLink>
          <NavLink to="/feed" className={isActive("/feed")}>💬 Feed</NavLink>
          <NavLink to="/notes" className={isActive("/notes")}>📝 Notes</NavLink>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>

          {/* PROFILE BUTTON */}
          <NavLink to="/profile" className="profile-square">
            <span className="profile-initial">S</span>
          </NavLink>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;