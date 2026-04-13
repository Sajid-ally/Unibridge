import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/feed.css";
import Navbar from "../components/Navbar";
function Feed() {
  return (
          <div className="dashboard-wrapper">
            <div className="bg-glow"></div>
      <Navbar />
          
               

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