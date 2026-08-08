import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      unique: true,
      minLength: [4, "Username must be at least 4 characters"],
      maxLength: [20, "Username cannot exceed 20 characters"],
      required: [true, "Username is required"],
    },

    email: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      match: [
        /^\S+@\S+\.\S+$/,
        "Please enter a valid email address",
      ],
      required: [true, "Email is required"],
    },

    password: {
      type: String,
      minLength: [6, "Password must be at least 6 characters"],
      select: false,
      required: [true, "Password is required"],
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

export default User;