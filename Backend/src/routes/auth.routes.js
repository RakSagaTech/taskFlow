import express from "express";


import { validate } from "../middlewares/validate.middleware.js";
import { registerSchema, loginSchema } from "../validations/form.validation.js";
import { registerUserController, loginUserController } from "../controllers/auth.controller.js";

const authRouter = express.Router();


/**
 * @route POST /api/v1/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post(
  "/register",
  validate(registerSchema),
  registerUserController
);


/**
 * @route POST /api/v1/auth/login
 * @desc Login an existing user
 * @access Public
 */
authRouter.post(
  "/login",
  validate(loginSchema),
  loginUserController
);



export default authRouter;