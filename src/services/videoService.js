import { Video } from "../models/videoModel.js";

export const videoService = async () => {
    const videos = await Video.find({});
    return videos;
}