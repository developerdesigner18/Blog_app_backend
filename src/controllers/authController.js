const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { username, email, password, fullName } = req.body;

  try {
    const existingUser = await User.findOne({ $or: [{ email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ code: 400, success: false, message: "User already exists" });
    }

    const newUser = new User({
      username,
      email,
      password,
      fullName,
    });

    const addedUser = await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY);

    res.status(201).json({
      code: 200,
      success: true,
      message: "User signup success",
      data: { token, ...addedUser },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error logging in" });
  }
};

module.exports = { signup, login };
