import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/feed.css";

function Feed() {
  return (
    <div>

      <div className="navbar">
        <div className="logo">
          <img src="Picsart_26-03-03_03-18-27-701.png" alt="UniBridge Logo" />
          <span>UniBridge</span>
        </div>

        <div className="navlinks">
          <a href="#home"><i className="fas fa-home"></i>Home</a>
          <a href="#project"><i className="fas fa-project-diagram"></i>Project</a>
          <a href="#leaderboard"><i className="fas fa-trophy"></i>Leaderboard</a>
          <a href="#events"><i className="fas fa-calendar-alt"></i>Events</a>
          <a href="#feed" className="active"><i className="fas fa-comments"></i>Feed</a>
          <a href="#notes"><i className="fas fa-sticky-note"></i>Notes</a>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="profile">S</div>
        </div>
      </div>

      <div className="container">

        <div className="share-box">
          <h2>Share something</h2>
          <input type="text" className="input-field" placeholder="Post Title..." />
          <textarea className="input-field" placeholder="What's on your mind? Got an idea?"></textarea>

          <div className="share-footer">
            <select className="select-tag">
              <option>General</option>
              <option>Project Help</option>
              <option>Career</option>
            </select>
            <input
              type="text"
              className="input-field"
              style={{ marginBottom: 0, flex: 1 }}
              placeholder="Tags (comma separated)"
            />
            <button className="post-btn">Post</button>
          </div>
        </div>

        <div className="post-card">
          <div className="post-header">
            <div className="user-block">
              <div className="avatar">S</div>
              <div className="meta">
                <h4>sajid</h4>
                <span>21 days ago</span>
              </div>
            </div>
            <div className="badge">General</div>
          </div>
          <div className="post-body">
            <h3>I got new ideas for my projects</h3>
            <p>
              Hii everyone I developing an WEB ai tool which helps to create
              website most easier i want suggestion on this what you expect from me
            </p>
          </div>
          <div className="post-actions">
            <div className="action"><i className="far fa-heart"></i> 1</div>
            <div className="action"><i className="far fa-comment"></i> 0</div>
            <div className="action" style={{ marginLeft: "auto" }}>
              <i className="fas fa-share-alt"></i>
            </div>
          </div>
        </div>

        <div className="post-card">
          <div className="post-header">
            <div className="user-block">
              <div className="avatar" style={{ background: "var(--c4)" }}>S</div>
              <div className="meta">
                <h4>sajid</h4>
                <span>21 days ago</span>
              </div>
            </div>
            <div className="badge">Team</div>
          </div>
          <div className="post-body">
            <h3>Humko kuch sikha do koi</h3>
            <p>Btech krliya h pta nhi kyapadhaya h kuch pdha do humko</p>
          </div>
          <div className="post-actions">
            <div className="action"><i className="far fa-heart"></i> 0</div>
            <div className="action"><i className="far fa-comment"></i> 0</div>
            <div className="action" style={{ marginLeft: "auto" }}>
              <i className="fas fa-share-alt"></i>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Feed;