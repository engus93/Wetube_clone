// Video Controller

import { videos } from "../db";

// Home
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

// Search
export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};

// Upload
export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

// Video Detail
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

// Edit Video
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

// Delete Video
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
