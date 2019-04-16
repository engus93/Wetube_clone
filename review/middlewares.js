// Middle Wares
import multer from "multer";
import routes from "./routes";

// 파일 저장할 경로 지정
const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = req.user;
  next();
};

// videoFile이라는 name의 Data 하나만 업로드 함
export const uploadVideo = multerVideo.single("videoFile");
