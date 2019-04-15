// User Controller

import routes from "../routes";

// Join
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do: Register User
    // To Do: Log user in
    res.redirect(routes.home);
  }
};

// Log In
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });

export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

// Log Out
export const logout = (req, res) =>
  res.render("logout", { pageTitle: "Log Out" });

// User Detail
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });

// Edit Profile
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

// Change Password
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
