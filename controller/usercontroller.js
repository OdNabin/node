const expressAsyncHandler = require('express-async-handler');
const User = require('../model/userLoginModel'); // Assuming your model is exported as User
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_key = "secertdonttel"
const signIn = expressAsyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        status: "FAILED",
        message: "Email and password are required",
      });
    }

    const findUser = await User.findOne({ email });
    if (findUser && (await bcrypt.compare(password, findUser.password))) {
      const token = jwt.sign({ objectId: findUser._id }, SECRET_key, { expiresIn: '1h' });
      res.cookie("token", token, { httpOnly: true, secure: true });
      res.json({
        status: "200",
        message: "Signin successful",
        data: findUser,
        token,
      });
    } else {
      res.status(401).json({
        status: "FAILED",
        message: "Invalid email or password",
      });
    }
  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

const signUp = expressAsyncHandler(async (req, res) => {
  try {
    const { name, email, password, dateOfBirth } = req.body;
    if (!name || !email || !password || !dateOfBirth) {
      return res.status(400).json({ status: "FAILED", message: "Empty input fields!" });
    }
    if (!/^[a-zA-Z ]*$/.test(name)) {
      return res.status(400).json({ status: "FAILED", message: "Invalid name entered" });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ status: "FAILED", message: "Invalid email entered" });
    }
    if (!new Date(dateOfBirth).getTime()) {
      return res.status(400).json({ status: "FAILED", message: "Invalid date of birth entered" });
    }
    if (password.length < 6) {
      return res.status(400).json({ status: "FAILED", message: "Password is too short" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "FAILED",
        message: "User with the provided email already exists",
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      dateOfBirth,
    });

    const savedUser = await newUser.save();
    res.json({
      status: "SUCCESS",
      message: "Signup successful",
      data: savedUser,
    });

  } catch (err) {
    res.status(500).send("Error: " + err.message);
  }
});

module.exports = { signIn, signUp };
