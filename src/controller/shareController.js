import { shareService } from "../services/shareService.js";

const shareVideo = async (req, res) => {
  try {
    const { videoId, platform } = req.body;
    await shareService(videoId, platform);
    res.send({ message: "successful" });
  } catch (error) {
    console.log(error);
    res.send({ message: error.message });
  }
};

export { shareVideo };
