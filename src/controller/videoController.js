import { videoService } from "../services/videoService.js";

const getVideos = async (req, res) => {
  try {
    const videos = await videoService();
    res.status(200).json(videos);
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export { getVideos };
