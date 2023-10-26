import { Request, Response, response } from "express";
import bcrypt from "bcrypt";
import userModel from "../model/userModel";
import { streamUpload } from "../config/streamifier";
import jwt from "jsonwebtoken";

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password, userName, bio } = req.body;
    const { secure_url, public_id }: any = await streamUpload(req);
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const user = await userModel.create({
      email,
      password: hashed,
      userName,
      avatar: secure_url,
      avatarID: public_id,
      bio,
    });
    return res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "Error occured while creating user",
      error: error?.message,
    });
  }
};

export const viewAllUser = async (req: Request, res: Response) => {
  try {
    const user = await userModel.find();
    return res.status(200).json({
      message: "Viewing all users",
      data: user,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured while viewing all users",
    });
  }
};

export const signinUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (user) {
      const pass = await bcrypt.compare(password, user.password!);
      if (pass) {
        const token = jwt.sign(
          {
            id: user?._id,
          },
          "secret"
        );
        return res.status(200).json({
          message: "User signed in successfully",
          data: token,
        });
      } else {
        return res.status(401).json({
          message: "Invalid Password",
        });
      }
    } else {
      return res.status(404).json({
        message: "User errror",
      });
    }
  } catch (error: any) {
    return res.status(400).json({
      message: "Error occured while signin-in",
      error: error?.message,
    });
  }
};
