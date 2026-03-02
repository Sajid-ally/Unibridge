import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [msg, setMsg] = useState("Loading...");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch(() => setMsg("Backend not connected"));
  }, []);

  return (
    <div>
      <h2>Home Page</h2>
      <p>{msg}</p>
      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
}

export default Home;