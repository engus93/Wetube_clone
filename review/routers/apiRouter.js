// API Router

import express from "express";
import routes from "../routes";
import {
  postRegisterView,
  postAddComment,
  postDelComment
} from "../controllers/videoController";

const apiRouter = express.Router();

// Register
apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addcomment, postAddComment);
apiRouter.post(routes.delcomment, postDelComment);

export default apiRouter;
