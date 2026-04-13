import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/notes.css";
import Navbar from "../components/Navbar";
function Notes() {
  return (
    <div className="dashboard-wrapper">
            <div className="bg-glow"></div>
      <Navbar />
    
    
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