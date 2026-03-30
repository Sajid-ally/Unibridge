import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/notes.css";

function Notes() {
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
          <a href="#notes" className="active"><i className="fas fa-sticky-note"></i>Notes</a>
          <a href="#leaderboard"><i className="fas fa-trophy"></i>Leaderboard</a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="profile">U</div>
        </div>
      </div>

      <div className="container">
        <div className="header-row">
          <div className="title-area">
            <h1>Study Resources</h1>
            <p>Share and discover high-quality notes from peers.</p>
          </div>

          <div className="action-area">
            <div className="search-subjects">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search subjects..." />
            </div>
            <button className="upload-btn">
              <i className="fas fa-plus"></i> Upload Notes
            </button>
          </div>
        </div>

        <div className="notes-grid">

          <div className="note-card">
            <div className="file-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <div className="note-tag">ih</div>
            <div className="note-info">
              <h3>ij</h3>
              <p>By <span className="author">Sajid</span></p>
              <p>ijh</p>
            </div>
            <div className="helpful-btn">
              <i className="fas fa-arrow-up"></i> 1 Helpful
            </div>
          </div>

          <div className="note-card">
            <div
              className="file-icon"
              style={{ color: "#ffcc00", background: "rgba(255, 204, 0, 0.1)" }}
            >
              <i className="fas fa-file-code"></i>
            </div>
            <div className="note-tag">CS</div>
            <div className="note-info">
              <h3>Data Structures</h3>
              <p>By <span className="author">Aryan</span></p>
              <p>Complete guide to Trees & Graphs.</p>
            </div>
            <div className="helpful-btn">
              <i className="fas fa-arrow-up"></i> 12 Helpful
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Notes;