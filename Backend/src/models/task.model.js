import mongoose from "mongoose";


const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      minlength: [3, "Task title must be at least 3 characters"],
      maxlength: [100, "Task title cannot exceed 100 characters"],
      required: [true, "Task title is required"]
    },

    description: {
      type: String,
      trim: true,
      minlength: [3, "Task description must be at least 3 characters"],
      maxlength: [500, "Task description cannot exceed 500 characters"],
      required: [true, "Task description is required"],
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },

    status: {
      type: String,
      enum: ["to-do", "in-progress", "completed"],
      default: "to-do",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);


const Task = mongoose.model("Task", taskSchema);

export default Task;