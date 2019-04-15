import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  getLogin,
  postLogin,
  getJoin,
  postJoin,
  logout
} from "../controllers/userController";

const globalRouter = express.Router();

// Home
globalRouter.get(routes.home, home);

// Search
globalRouter.get(routes.search, search);

// Join
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

// Log In
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

// Log Out
globalRouter.get(routes.logout, logout);

export default globalRouter;
