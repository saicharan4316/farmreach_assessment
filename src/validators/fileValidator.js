import { body } from "express-validator";

export const fileValidator = [
  body("fileName")
    .notEmpty()
    .withMessage("File name required"),

  body("fileType")
    .notEmpty()
    .withMessage("File type required"),

  body("fileSize")
    .isNumeric()
    .withMessage("File size must be number"),

  body("fileUrl")
    .isURL()
    .withMessage("Valid URL required")
];