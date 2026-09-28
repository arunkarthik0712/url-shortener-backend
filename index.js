const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const urlRoutes = require("./routes/urlRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Health check for UptimeRobot.
// Performs a MongoDB ping so the request counts as database activity.
app.get("/health", async (req, res) => {
  try {
    await mongoose.connection.db.command({ ping: 1 });
    res.status(200).json({ status: "ok", database: "connected" });
  } catch (error) {
    console.error("Health check failed:", error);
    res.status(503).json({ status: "error", database: "disconnected" });
  }
});

app.use("/api/auth", authRoutes);
app.use("/api/urls", urlRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
