import express from "express";
import routes from "../routes";
import {
  userDetail,
  editProfile,
  changePassword
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

// Edit Profile
userRouter.get(routes.editProfile, onlyPrivate, editProfile);

// Change Password
userRouter.get(routes.changePassword, onlyPrivate, changePassword);

// User Detail
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
