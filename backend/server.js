const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

console.log("Server file loaded"); // 👈 IMPORTANT

app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is running 🚀" });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Backend running on port " + PORT);
});