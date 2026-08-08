import express from "express";


import {
  getAllUsersController,
  getUserController,
  deleteUserController,
  getAllTasksController,
  getUserTasksController,
  getTaskController,
  deleteTaskController
} from "../controllers/admin.controller.js";



const adminRouter = express.Router();


/**
 * @route GET /api/v1/admin/users
 * @desc Get all users
 * @access Admin
 */
adminRouter.get(
  "/users",
  getAllUsersController
);


/**
 * @route GET /api/v1/admin/users/:id
 * @desc Get a specific user by ID
 * @access Admin
 */
adminRouter.get(
  "/users/:id",
  getUserController
);


/**
 * @route DELETE /api/v1/admin/users/:id
 * @desc Delete a specific user by ID
 * @access Admin
 */
adminRouter.delete(
  "/users/:id",
  deleteUserController
);



/**
 * @route GET /api/v1/admin/tasks
 * @desc Get all tasks
 * @access Admin
 */
adminRouter.get(
  "/tasks",
  getAllTasksController
);


/**
 * @route GET /api/v1/admin/users/:id/tasks
 * @desc Get all tasks created by a specific user
 * @access Admin
 */
adminRouter.get(
  "/users/:id/tasks",
  getUserTasksController
);


/**
 * @route GET /api/v1/admin/tasks/:id
 * @desc Get a specific task by ID
 * @access Admin
 */
adminRouter.get(
  "/tasks/:id",
  getTaskController
);


/**
 * @route DELETE /api/v1/admin/tasks/:id
 * @desc Delete a specific task by ID
 * @access Admin
 */
adminRouter.delete(
  "/tasks/:id",
  deleteTaskController
);


export default adminRouter;