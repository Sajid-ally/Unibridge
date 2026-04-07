import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/signin";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Notes from "./pages/notes";
import Feed from "./pages/feed";
import Leaderboard from "./pages/leaderboard";
import Signup from "./pages/signup";
import ProtectedRoute from "./ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            (localStorage.getItem("token") || sessionStorage.getItem("token"))
              ? <Home />
              : <Login />
          }
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/notes" element={<Notes />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;