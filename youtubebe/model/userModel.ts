import mongoose from "mongoose";

interface iUser {
  userName?: string;
  email?: string;
  password?: string;
  bio?: string;
  avatar?: string;
  avatarID?: string;
}

interface iUserData extends iUser, mongoose.Document {}
const userModel = new mongoose.Schema({
  userName: { type: String },
  email: { type: String, unique: true },
  avatar: { type: String },
  bio: { type: String },
  password: { type: String },
  avatarID: { type: String },
});

export default mongoose.model<iUserData>("users", userModel);
