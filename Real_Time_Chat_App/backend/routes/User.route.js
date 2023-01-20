const express = require("express");
const userRouter = express.Router();

const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
} = require("../Controllers/User.controller");

userRouter.post("/login", login);
userRouter.post("/register", register);
userRouter.get("/allusers/:id", getAllUsers);
userRouter.post("/setavatar/:id", setAvatar);
userRouter.get("/logout/:id", logOut);

module.exports = {
  userRouter,
};
