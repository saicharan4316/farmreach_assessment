import express from "express";

const router = express.Router();

import {
  registerUser,
  loginUser
} from "../controllers/authController.js";

import validate from "../middleware/validateMiddleware.js";

import {
  registerValidator,
  loginValidator
} from "../validators/authValidator.js";

router.post(
  "/register",
  registerValidator,
  validate,
  registerUser
);

router.post(
  "/login",
  loginValidator,
  validate,
  loginUser
);

export default router;