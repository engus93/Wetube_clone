import routes from "./routes";
import multer from "multer";

// 파일 저장할 경로 지정
const multerVideo = multer({ dest: "videos/" });

export const localMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

// videoFile이라는 name의 Data 하나만 업로드 함
export const uploadVideo = multerVideo.single("videoFile");
