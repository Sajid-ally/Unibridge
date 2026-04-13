import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Profile.css";

export default function Profile() {

  const [userProfile, setUserProfile] = useState({
    name: "Sayem Ahmed",
    status: "Student",
    college: "IIT Kanpur",
    degree: "B.Tech in Computer Science",
    bio: "Passionate developer interested in building community tools for universities.",
    pic: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sayem",
    contacts: [
      { type: "linkedin", value: "linkedin.com/in/sayem-dev" },
      { type: "mail", value: "sayem@uni.edu" }
    ]
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [formData, setFormData] = useState({ ...userProfile });

  const iconMap = {
    linkedin: "💼",
    github: "🐱",
    twitter: "🐦",
    mail: "✉️",
    globe: "🌐",
    instagram: "📷"
  };

  const handleOpenModal = () => {
    setFormData({ ...userProfile });
    setIsModalOpen(true);
    setIsSettingsOpen(false);
  };

  const saveProfile = (e) => {
    e.preventDefault();
    setUserProfile({ ...formData });
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen text-white">

      {/* NAVBAR */}
      <nav className="nav-blur sticky top-0 px-6 py-3 flex items-center justify-between">

        <div className="flex items-center gap-8">

          <div className="flex items-center gap-2 text-xl font-bold">
            <span>🔗</span>
            <span>UniBridge</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">

            <Link to="/dashboard">🏠 Home</Link>
            <Link to="/project">📁 Project</Link>
            <Link to="/leaderboard">🏆 Leaderboard</Link>
            <Link to="/events">📅 Events</Link>
            <Link to="/feed">📰 Feed</Link>
            <Link to="/notes">📝 Notes</Link>

          </div>
        </div>

        <div className="flex items-center gap-4">

          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-sm">
            {userProfile.name.charAt(0)}
          </div>

          <button
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
          >
            ⚙️
          </button>

          {isSettingsOpen && (
            <div className="absolute right-6 top-16 bg-[#0d1526] p-3 rounded-lg border border-white/10">

              <button
                onClick={handleOpenModal}
                className="block w-full text-left py-1 hover:text-blue-400"
              >
                👤 Edit Profile
              </button>

              <button className="block w-full text-left py-1 text-red-400">
                🚪 Logout
              </button>

            </div>
          )}

        </div>

      </nav>

      {/* PROFILE HEADER */}

      <main className="max-w-6xl mx-auto px-6 py-12">

        <section className="flex flex-col md:flex-row gap-8 mb-12">

          <div className="w-32 h-32 rounded-xl overflow-hidden border border-blue-500">
            <img src={userProfile.pic} alt="Profile" className="w-full h-full object-cover" />
          </div>

          <div>

            <h1 className="text-4xl font-bold">{userProfile.name}</h1>

            <p className="text-blue-400 mt-1">{userProfile.status}</p>

            <p className="mt-2">
              🎓 {userProfile.college} | {userProfile.degree}
            </p>

            <div className="flex gap-3 mt-4 flex-wrap">

              {userProfile.contacts.map((c, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-[#0d1526] rounded border border-blue-500/20 text-blue-400"
                >
                  {iconMap[c.type]} {c.value}
                </span>
              ))}

            </div>

          </div>

        </section>

        {/* BIO */}

        <div className="card-bg p-6 rounded-xl mb-6">
          <h3 className="text-xl mb-3">👤 Bio</h3>
          <p>{userProfile.bio}</p>
        </div>

        {/* SKILLS */}

        <div className="card-bg p-6 rounded-xl mb-6">
          <h3 className="text-xl mb-3">🧠 Skills</h3>

          <div className="flex flex-wrap gap-2">

            {["React", "Node.js", "Python", "Arduino", "UI/UX"].map(skill => (
              <span
                key={skill}
                className="px-3 py-1 bg-[#161f30] rounded text-sm"
              >
                {skill}
              </span>
            ))}

          </div>
        </div>

      </main>

      {/* EDIT PROFILE MODAL */}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80">

          <div className="card-bg p-6 rounded-xl w-96">

            <h2 className="text-xl mb-4">Edit Profile</h2>

            <input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full mb-3 p-2 input-dark rounded"
            />

            <textarea
              value={formData.bio}
              onChange={(e) =>
                setFormData({ ...formData, bio: e.target.value })
              }
              className="w-full mb-3 p-2 input-dark rounded"
            />

            <div className="flex justify-end gap-3">

              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={saveProfile}
                className="bg-blue-600 px-4 py-2 rounded"
              >
                Save
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}