import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./database/databaseConnection.js";
import cors from "cors";
import { videoRoutes } from "./routes/videoRoutes.js";
import { rateLimiter } from "./middleware/rateLimiter.js";
import helmet from "helmet";
dotenv.config();

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

connectDatabase();
app.use("/api", rateLimiter, videoRoutes);

export default app;