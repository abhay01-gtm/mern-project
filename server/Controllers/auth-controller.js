const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// Home route
const home = async (req, res) => {
  try {
    res.status(200).send("Hello, World using controller!");
  } catch (error) {
    console.error("Error in home controller:", error);
  }
};

// Register user
const register = async (req, res) => {
  try {
    console.log("Register request received:", req.body);
    const { username, email, phone, password } = req.body;

    // check if user exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Save user (password hashing via pre('save'))
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).json({
      msg: "User registered successfully",
      token: await userCreated.generateAuthToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// User login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, userExist.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    res.status(200).json({
      msg: "Login successful",
      token: await userExist.generateAuthToken(),
      userId: userExist._id.toString(),
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get user details
const user = async (req, res) => {
  try {
    // ✅ token se middleware ne req.user.id set kiya hoga
    const userData = await User.findById(req.user.id).select("-password");

    if (!userData) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res.status(200).json(userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { home, register, login, user };
