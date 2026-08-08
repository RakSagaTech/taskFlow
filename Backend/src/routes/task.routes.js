import express from "express";


import { validate } from "../middlewares/validate.middleware.js";
import { taskSchema } from "../validations/task.validation.js";
import {
  createTaskController,
  getAllTasksController,
  getTaskController,
  updateTaskController,
  deleteTaskController
} from "../controllers/task.controller.js";

const taskRouter = express.Router();


/**
 * @route POST /api/v1/tasks
 * @desc Create a new task
 * @access Private
 */
taskRouter.post(
  "/create",
  validate(taskSchema),
  createTaskController
);


/**
 * @route GET /api/v1/tasks
 * @desc Get all tasks for the authenticated user
 * @access Private
 */
taskRouter.get(
  "/",
  getAllTasksController
);


/**
 * @route GET /api/v1/tasks/:id
 * @desc Get a task by ID
 * @access Private
 */
taskRouter.get(
  "/:id",
  getTaskController
);


/**
 * @route PATCH /api/v1/tasks/:id
 * @desc Update a task by ID
 * @access Private
 */
taskRouter.put(
  "/:id",
  validate(taskSchema),
  updateTaskController
);


/**
 * @route DELETE /api/v1/tasks/:id
 * @desc Delete a task by ID
 * @access Private
 */
taskRouter.delete(
  "/:id",
  deleteTaskController
);


export default taskRouter;