import mongoose from "mongoose";
import attemptSchema from "./schema.js";

const model = mongoose.model("AttemptModel", attemptSchema);
export default model;
