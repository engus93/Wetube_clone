import express from "express";
import routes from "../routes";
import {
  videoDetail,
  editVideo,
  deleteVideo,
  getUpload,
  postUpload
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);

// Edit Video
videoRouter.get(routes.editVideo, editVideo);

// Delete Video
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
