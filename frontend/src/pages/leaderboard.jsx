import { useState } from "react";
import "../styles/leaderboard.css";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
function Leaderboard() {
  return (
    <div className="dashboard-wrapper">
            <div className="bg-glow"></div>
      <Navbar />
    
    

        

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