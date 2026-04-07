const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authMiddleware = require("./middleware/authMiddleware");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(express.json());

console.log("Server file loaded");



const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
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