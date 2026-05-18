import express from "express";

const router = express.Router();

import protect from "../middleware/authMiddleware.js";

import validate from "../middleware/validateMiddleware.js";

import { fileValidator } from "../validators/fileValidator.js";

import {
  createFile,
  getFiles,
  getFileById,
  updateFile,
  deleteFile
} from "../controllers/fileController.js";

router.post(
  "/",
  protect,
  createFile
);
router.get("/", protect, getFiles);

router.get("/:id", protect, getFileById);

router.put(
  "/:id",
  protect,
  fileValidator,
  validate,
  updateFile
);

router.delete("/:id", protect, deleteFile);

export default router;