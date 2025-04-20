import mongoose from "mongoose";

const attemptSchema = new mongoose.Schema(
  {
    _id: String,
    quizId: {
      type: String,
      required: true,
      ref: "QuizModel",
    },
    userId: { type: String, required: true, ref: "UserModel" },

    timestamp: { type: Date, default: Date.now },

    // For multiple choice, number of chosen answer
    // For true or false, "true" or "false"
    // For fill blank, answered string
    answers: [String],

    score: { type: Number, required: true },
  },
  { collection: "attempts" }
);

export default attemptSchema;
