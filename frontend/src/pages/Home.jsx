import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
function Home() {
  const events = [
    { id: 1, tag: 'Conference', title: 'UP Tech Summit', desc: 'Join innovators across Uttar Pradesh.' },
    { id: 2, tag: 'Hackathon', title: 'Hack-A-Thon 2026', desc: 'Build something amazing with students.' },
    { id: 3, tag: 'Workshop', title: 'AI Bootcamp', desc: 'Hands-on AI development workshop.' },
  ];

  const discussions = [
    { id: 1, tag: 'Discussion', title: 'Best AI tools for students?', desc: 'Share your productivity stack.' },
    { id: 2, tag: 'Debate', title: 'Is AI replacing programmers?', desc: 'Hot topic in tech clubs.' },
    { id: 3, tag: 'Campus', title: 'Best coding clubs in UP?', desc: 'Students sharing recommendations.' },
    { id: 4, tag: 'Tech', title: 'React vs Next.js', desc: 'Which one should you learn first?' },
    { id: 5, tag: 'Help', title: 'Vite build error', desc: 'Looking for a fix for build 404s.' },
    { id: 6, tag: 'Social', title: 'Weekend plans?', desc: 'Any meetups happening in Lucknow?' },
  ];

  return (
    <div className="dashboard-wrapper">
      <div className="bg-glow"></div>

      <nav className="glass-nav">
        <div className="nav-container">
          <div className="nav-left">
            <span className="logo-icon">🔗</span>
            <span className="logo-text">UniBridge</span>
          </div>

          <div className="nav-center">
            
            <Link to="/home" className="nav-link active">🏠Home</Link>
            <Link to="/projects" className="nav-link">📁 Project</Link>
            <Link to="/leaderboard" className="nav-link">🏆 Leaderboard</Link>
            <Link to="/events" className="nav-link">📅 Events</Link>
            <Link to="/feed" className="nav-link">💬 Feed</Link>
            <Link to="/notes" className="nav-link">📝 Notes</Link>
          </div>

          <div className="nav-right">
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <span className="search-icon"></span>
            </div>
            <div className="profile-square">S</div>
          </div>
        </div>
      </nav>

      <main className="content-container">
        <section className="hero-section glass-tile">
          <h1>Hello, Student!</h1>
          <p>Your campus community has 3 trending discussions for you.</p>
          <button className="hero-btn">Explore Discussions</button>
        </section>

        <section className="dashboard-section">
          <div className="section-header">
            <h3>TRENDING EVENTS</h3>
            <a href="#">View All →</a>
          </div>
          <div className="horizontal-scroll">
            {events.map(e => (
              <div key={e.id} className="event-card glass-tile">
                <div className="card-meta">
                  <span className="tag">{e.tag}</span>
                  <span className="arrow">↗</span>
                </div>
                <div className="card-body">
                  <h2>{e.title}</h2>
                  <p>{e.desc}</p>
                </div>
              </div>
            ))}
            <div className="view-more-tile glass-tile">
              <span className="plus">+</span>
              <span>View More</span>
            </div>
          </div>
        </section>

        <section className="dashboard-section">
          <div className="section-header">
            <h3>TOP DISCUSSIONS</h3>
            <a href="#">View All →</a>
          </div>
          <div className="vertical-grid">
            {discussions.map(d => (
              <div key={d.id} className="discussion-card glass-tile">
                <div className="card-meta">
                  <span className="tag disc-tag">{d.tag}</span>
                  <span className="arrow">↗</span>
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;