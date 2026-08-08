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


taskRouter.post(
  "/create",
  validate(taskSchema),
  createTaskController
);


taskRouter.get(
  "/",
  getAllTasksController
)


taskRouter.get(
  "/:id",
  getTaskController
)


taskRouter.put(
  "/:id",
  validate(taskSchema),
  updateTaskController
)


export default taskRouter;