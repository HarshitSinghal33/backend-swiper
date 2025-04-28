import express from "express";
import { getVideos } from "../controller/videoController.js";
import {
  checkLiked,
  likeVideo,
  unLikeVideo,
} from "../controller/likeController.js";
import { shareVideo } from "../controller/shareController.js";

const router = express.Router();

router.get("/videos", getVideos);
router.get("/videos/:videoId/checklike", checkLiked);
router.post("/like", likeVideo);
router.post("/share", shareVideo);
router.post("/unlike", unLikeVideo);

export { router as videoRoutes };
