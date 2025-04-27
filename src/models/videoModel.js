import mongoose, { Schema } from "mongoose";

const videoSchema = new Schema({
  id: { type: String, required: true },
  url: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  likeCount: { type: Number, required: true },
  shareCount: { type: Number, required: true },
});

export const Video = mongoose.model("video", videoSchema);
