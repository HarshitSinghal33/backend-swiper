import mongoose, { Schema } from "mongoose";
const videoLikeSchema = new Schema(
  {
    ipAddress: { type: String, required: true },
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
      required: true,
    },
  },
  { timestamps: true }
);

export const VideoLike = mongoose.model("VideoLike", videoLikeSchema);
