import express, { Router } from "express";
import {
  registerUser,
  signinUser,
  viewAllUser,
} from "../controller/userController";
import multer from "multer";
const uploads = multer().single("avatar");
let router = express.Router();
router.route("/create-user").post(uploads, registerUser);
router.route("/view-all-user").get(viewAllUser);
router.route("/signin").post(signinUser);
export default router;
