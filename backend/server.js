const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

console.log("Server file loaded");

// ✅ MongoDB Connection
mongoose.connect("mongodb://unibridge_user:a3TASwuAiN4NO5hw@ac-8tmiyp1-shard-00-00.idgn27s.mongodb.net:27017,ac-8tmiyp1-shard-00-01.idgn27s.mongodb.net:27017,ac-8tmiyp1-shard-00-02.idgn27s.mongodb.net:27017/unibridge?ssl=true&replicaSet=atlas-eiljw9-shard-0&authSource=admin&retryWrites=true&w=majority")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
// ✅ Test Route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

// ✅ Auth Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// ✅ Protected Route
app.get("/api/protected", authMiddleware, (req, res) => {
  res.json({ message: "You are authorized 🎉" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Backend running on port " + PORT);
});