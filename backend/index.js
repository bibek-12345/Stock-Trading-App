require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware/auth");

const User = require("./model/User");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const app = express();
const PORT = process.env.PORT; // MUST use Render's PORT
const url = process.env.MONGO_URL;

// Define corsOptions first
const corsOptions = {
  origin: [
    "https://stock-frontend-hazg.onrender.com",
    "https://stock-dashboard-p38l.onrender.com",
    "http://localhost:3000",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

// Use CORS middleware
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(bodyParser.json());

// Connect to MongoDB Atlas
mongoose
  .connect(url)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ROUTES
app.get("/allHoldings", authMiddleware, async (req, res) => {
  const allHoldings = await HoldingsModel.find();
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find();
  res.json(allPositions);
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "Required" });

  const existingUser = await User.findOne({ username });
  if (existingUser) return res.status(400).json({ message: "Username exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  await newUser.save();

  res.json({ message: "Signup successful!", username: newUser.username });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "Required" });

  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "Login successful", token, username: user.username });
});

// Listen on Render's PORT
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
