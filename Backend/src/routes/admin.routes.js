import express from "express";

import {
  getAllUsersController,
  getUserController,
  getAllTasksController,
  getUserTasksController,
  deleteUserController,
  deleteTaskController,
} from "../controllers/admin.controller.js";

import authenticate from "../middleware/auth.middleware.js";
import authorize from "../middleware/role.middleware.js";

const router = express.Router();

/**
 * Users
 */
router.get(
  "/users",
  authenticate,
  authorize("admin"),
  getAllUsersController
);

router.get(
  "/users/:id",
  authenticate,
  authorize("admin"),
  getUserController
);

router.delete(
  "/users/:id",
  authenticate,
  authorize("admin"),
  deleteUserController
);

/**
 * Tasks
 */
router.get(
  "/tasks",
  authenticate,
  authorize("admin"),
  getAllTasksController
);

router.get(
  "/users/:id/tasks",
  authenticate,
  authorize("admin"),
  getUserTasksController
);

router.delete(
  "/tasks/:id",
  authenticate,
  authorize("admin"),
  deleteTaskController
);

export default router;