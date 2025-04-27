import mongoose, { Schema } from "mongoose";
const shareVideo = new Schema({
  videoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
    required: true,
  },
  platform: { type: String, required: true },
});

export const Share = mongoose.model("share", shareVideo);
