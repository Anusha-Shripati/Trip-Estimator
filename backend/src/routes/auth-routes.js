import express from "express";
import {
  signupController,
  signinController,
} from "../controllers/auth.controller.js";
import upload from "../middleware/upload.middleware.js";
import validate from "../middleware/auth.validate.js";
import { signupSchema } from "../validators/signup.schema.js";
import { signinSchema } from "../validators/signin.schema.js";
const router = express.Router();

router.post(
  "/signup",
  upload.single("profileImage"),
  validate(signupSchema),
  signupController,
);
router.post("/signin", validate(signinSchema), signinController);

export default router;
