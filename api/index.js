import app from "../src/server";
import Serverless from "serverless-http";

export default Serverless(app);