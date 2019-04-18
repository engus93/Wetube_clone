// API Router

import express from "express";
import routes from "../routes";
import {
  postRegisterView,
  postAddComment
} from "../controllers/videoController";

const apiRouter = express.Router();

// Register
apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addcomment, postAddComment);

export default apiRouter;
