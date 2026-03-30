import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/leaderboard.css";

function Leaderboard() {
  return (
    <div>

      <div className="navbar">
        <div className="logo">
          <img src="Picsart_26-03-03_03-18-27-701.png" alt="Logo" />
          <span>UniBridge</span>
        </div>

        <div className="navlinks">
          <a href="#home"><i className="fas fa-home"></i>Home</a>
          <a href="#events"><i className="fas fa-calendar-alt"></i>Events</a>
          <a href="#feed"><i className="fas fa-comments"></i>Feed</a>
          <a href="#project"><i className="fas fa-project-diagram"></i>Projects</a>
          <a href="#notes"><i className="fas fa-sticky-note"></i>Notes</a>
          <a href="#leaderboard" className="active"><i className="fas fa-trophy"></i>Leaderboard</a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="profile">U</div>
        </div>
      </div>

      <div className="container">
        <div className="title-section">
          <div className="trophy-glow">
            <i className="fas fa-trophy"></i>
          </div>
          <h1>Campus Legends</h1>
          <p>
            Top contributors ranked by points earned from helpful notes, active
            participation, and community building.
          </p>
        </div>

        <div className="leaderboard-card">
          <div className="table-header">
            <div>Rank</div>
            <div>Student</div>
            <div style={{ textAlign: "right" }}>Points</div>
          </div>

          <div className="rank-row">
            <div className="rank-icon rank-1">
              <i className="fas fa-award"></i>
            </div>
            <div className="student-info">
              <div className="avatar" style={{ background: "#7b2ff7" }}>s</div>
              <div className="details">
                <h4>sajid</h4>
                <p><i className="fas fa-chart-line"></i> Active Contributor</p>
              </div>
            </div>
            <div className="points">2</div>
          </div>

          <div className="rank-row">
            <div className="rank-icon rank-2">
              <i className="fas fa-medal"></i>
            </div>
            <div className="student-info">
              <div className="avatar" style={{ background: "#0f427e" }}>U</div>
              <div className="details">
                <h4>User 2</h4>
                <p><i className="fas fa-chart-line"></i> Active Contributor</p>
              </div>
            </div>
            <div className="points">1</div>
          </div>

          <div className="rank-row">
            <div className="rank-icon rank-3">
              <i className="fas fa-medal"></i>
            </div>
            <div className="student-info">
              <div className="avatar" style={{ background: "#032c4f" }}>U</div>
              <div className="details">
                <h4>User 3</h4>
                <p><i className="fas fa-chart-line"></i> Active Contributor</p>
              </div>
            </div>
            <div className="points">0</div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Leaderboard;