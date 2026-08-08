import Joi from "joi";


const username = Joi.string()
  .trim()
  .min(4)
  .max(20)
  .required()
  .messages({
      "string.empty": "Username is required",
      "string.min": "Username must be at least 4 characters",
      "string.max": "Username cannot exceed 20 characters",
      "any.required": "Username is required",
  });


const email = Joi.string()
  .trim()
  .lowercase()
  .email()
  .required()
  .messages({
    "string.email": "Please provide a valid email address",
    "string.empty": "Email is required",
    "any.required": "Email is required",
  });


const password = Joi.string()
  .min(6)
  .max(20)
  .required()
  .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 6 characters",
      "string.max": "Password cannot exceed 20 characters",
      "any.required": "Password is required",
  });



export const registerSchema = Joi.object({
  username,
  email,
  password
});


export const loginSchema = Joi.object({
  email,
  password
});