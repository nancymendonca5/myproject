// models/User.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ["student", "teacher"], default: "student" },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }, // hashed password
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);
