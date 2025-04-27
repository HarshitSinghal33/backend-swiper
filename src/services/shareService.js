import { Video } from "../models/videoModel.js";
import { Share } from "../models/videoShareModel.js";

export const shareService = async (videoId, platform) => {
  await Share.create({ videoId, platform });
  await Video.findByIdAndUpdate(videoId, { $inc: { shareCount: 1 } });
};
