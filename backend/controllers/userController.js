import User from "../models/User.js"; 
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

// 🔹 Create JWT token
const createToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// 🔹 User Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.json({ success: false, message: "User doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = createToken({ id: user.id, role: "user" });

    return res.json({
      success: true,
      token,
      role: "user",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      },
      message: "User login successful"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔹 Admin Login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
      const token = createToken({ email, role: "admin", isAdmin: true });
      return res.json({
        success: true,
        token,
        role: "admin",
        message: "Admin login successful"
      });
    } else {
      return res.json({ success: false, message: "Invalid admin credentials" });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔹 Register normal user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user exists
    const exists = await User.findOne({ where: { email } });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Validate email & password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please enter a valid email" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Please enter a strong password" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    const token = createToken({ id: user.id, role: "user" });

    return res.json({
      success: true,
      token,
      role: "user",
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      },
      message: "User registered successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// 🔹 Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ success: false, message: "Failed to fetch users" });
  }
};

// 🔹 Get single user by ID
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ success: false, message: "Failed to fetch user" });
  }
};

// 🔹 Delete user by ID
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCount = await User.destroy({ where: { id } });

    if (!deletedCount) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ success: false, message: "Failed to delete user" });
  }
};

export { loginUser, loginAdmin, registerUser, getAllUsers, getUserById, deleteUser };
