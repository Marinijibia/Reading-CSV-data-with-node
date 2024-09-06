import express from "express";
import getPicture from "../Controller/file.controller.js";

const fileRouter = express.Router();

fileRouter.get("/", getPicture);

export default fileRouter;
