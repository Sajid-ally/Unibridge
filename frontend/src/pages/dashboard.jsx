import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // ✅ FIXED
import "../styles/dashboard.css";

function Dashboard() {
  const [msg, setMsg] = useState("Loading...");
  const [activeCard, setActiveCard] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch(() => setMsg("Backend not connected"));
  }, []);

  const toggleCard = (id) => {
    setActiveCard(activeCard === id ? null : id);
  };

  const toggleMenu = () => {
    document.getElementById("navlinks")?.classList.toggle("active");
    document.querySelector(".hamburger")?.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  };

  return (
    <>
      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo">
          <img src="Picsart_26-03-03_03-18-27-701.png" alt="UniBridge Logo" />
          <span>UniBridge</span>
        </div>

        <div className="navlinks" id="navlinks">
          <Link to="/dashboard" className="active">Home</Link>
          <Link to="/project">Project</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/events">Events</Link>
          <Link to="/feed">Feed</Link>
          <Link to="/notes">Notes</Link>
        </div>

        <div className="nav-right">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>

          <div className="profile">S</div>

          <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="container">
        <div className="hero">
          <h2>Hello, Sayem!</h2>
          <p>Your campus community has 3 trending discussions for you.</p>

          {/* ✅ FIXED BUTTON */}
          <button className="btn" onClick={() => navigate("/feed")}>
            Explore Discussions
          </button>

          <p style={{ marginTop: "10px" }}>{msg}</p>

          {/* LOGOUT */}
          <button onClick={() => navigate("/")}>Logout</button>
        </div>

        <div className="main-grid">

          {/* EVENTS */}
          <div className="column-box">
            <div className="column-header">
              <div className="section-title">TRENDING EVENTS</div>

              {/* ✅ VIEW ALL FIX */}
              <button
                className="view-all-btn"
                onClick={() => navigate("/events")}
              >
                View All →
              </button>
            </div>

            <div className="grid">
              {[1,2,3].map((id) => (
                <div
                  key={id}
                  className={`card ${activeCard === id ? "active" : ""}`}
                  onClick={() => toggleCard(id)}
                >
                  <div className="card-header">
                    <div>
                      <div className="tag">Event</div>
                      <div className="card-title">Event {id}</div>
                      <div className="card-desc">Description here</div>
                    </div>
                    <div className="card-toggle">{">"}</div>
                  </div>

                  <div className="dropdown">
                    <div className="dropdown-inner">
                      <p>More details about event</p>

                      {/* ✅ REGISTER BUTTON FIX */}
                      <button
                        className="btn"
                        onClick={(e) => {
                          e.stopPropagation(); // prevents card toggle
                          navigate("/events");
                        }}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DISCUSSIONS */}
          <div className="column-box">
            <div className="column-header">
              <div className="section-title">TOP DISCUSSIONS</div>

              <button
                className="view-all-btn"
                onClick={() => navigate("/feed")}
              >
                View All →
              </button>
            </div>

            <div className="grid">
              {[1,2,3].map((id) => (
                <div
                  key={id}
                  className={`card ${activeCard === id+10 ? "active" : ""}`}
                  onClick={() => toggleCard(id+10)}
                >
                  <div className="card-header">
                    <div>
                      <div className="tag">Discussion</div>
                      <div className="card-title">Topic {id}</div>
                      <div className="card-desc">Discussion preview</div>
                    </div>
                    <div className="card-toggle">{">"}</div>
                  </div>

                  <div className="dropdown">
                    <div className="dropdown-inner">
                      <p>Discussion content</p>

                      {/* ✅ JOIN BUTTON FIX */}
                      <button
                        className="btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate("/feed");
                        }}
                      >
                        Join
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;