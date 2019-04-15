// Video Controller
import { videos } from "../db";
import routes from "../routes";

// Home
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

// Search
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

// Upload
export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  res.redirect(routes.videoDetail(324393));
};

// Video Detail
export const videoDetail = (req, res) => {
  res.render("videoDetail", { pageTitle: "Video Detail" });
};

// Edit Video
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

// Delete Video
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
