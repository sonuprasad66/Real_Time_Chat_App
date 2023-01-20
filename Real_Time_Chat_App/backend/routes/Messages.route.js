const express = require("express");
const messageRouter = express.Router();

const {
  addMessage,
  getMessages,
} = require("../Controllers/Message.controller");

messageRouter.post("/addmsg/", addMessage);
messageRouter.post("/getmsg/", getMessages);

module.exports = {
  messageRouter,
};
