import express from "express";
import {
  createFriend,
  getFriend,
  getFriends,
} from "../Controller/friends.controller.js";

const friendRoute = express.Router();

friendRoute.use((req, res, next) => {
  console.log(`User ip: ${req.ip}`);
  next();
});

friendRoute.get("/", getFriends);
friendRoute.get("/:friendId", getFriend);

friendRoute.post("/", createFriend);

export default friendRoute;
