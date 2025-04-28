import {
  checkVideoLikedService,
  likeVideoService,
  unLikeVideoService,
} from "../services/likeService.js";

const likeVideo = async (req, res) => {
  try {
    const { videoId } = await req.body;
    const userIp = req.ip;

    const likeCount = await likeVideoService(videoId, userIp);

    res.status(200).json({ liked: true, likeCount });
  } catch (error) {
    console.error("Error liking video:", error);
    if (error.message === "You have already liked this video") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Server Error" });
  }
};

const unLikeVideo = async (req, res) => {
  try {
    const { videoId } = await req.body;
    const userIp = req.ip;
    const likeCount = await unLikeVideoService(videoId, userIp);
    res.status(200).json({ liked: false, likeCount });
  } catch (error) {
    console.error("Error liking video:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const checkLiked = async (req, res) => {
  try {
    const { videoId } = await req.params;
    let userIp = req.ip;

    const like = await checkVideoLikedService(videoId, userIp);

    if (like) {
      return res.json({ liked: true });
    } else {
      return res.json({ liked: false });
    }
  } catch (error) {
    console.error("Error checking like status:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { likeVideo, unLikeVideo, checkLiked };
