import { VideoLike } from "../models/videoLikeModel.js";
import { Video } from "../models/videoModel.js";

export const likeVideoService = async (videoId, userIp) => {
    const alreadyLiked = await VideoLike.findOne({ videoId, ipAddress: userIp });
  
    if (alreadyLiked) {
      throw new Error("You have already liked this video");
    }
  
    await VideoLike.create({ videoId, ipAddress: userIp });
  
    const updatedVideo = await Video.findByIdAndUpdate(
      videoId,
      { $inc: { likeCount: 1 } },
      { new: true }
    );
  
    return updatedVideo.likeCount;
  };

export const unLikeVideoService = async (videoId, userIp) => {
  await VideoLike.findOneAndDelete({ videoId, ipAddress: userIp });

  const updatedVideo = await Video.findByIdAndUpdate(
    videoId,
    { $inc: { likeCount: -1 } },
    { new: true }
  );

  return updatedVideo.likeCount;
};

export const checkVideoLikedService = async (videoId, userIp) => {
  const liked = await VideoLike.findOne({ videoId, ipAddress: userIp });
  return liked;
};
