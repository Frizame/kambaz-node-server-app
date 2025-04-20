import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    _id: String,
    quizId: {
      type: String,
      required: true,
      ref: "QuizModel",
    },

    title: { type: String, required: true },
    type: {
      type: String,
      enum: ["multipleChoice", "trueFalse", "fillBlank"],
      required: true,
    },

    question: { type: String, required: true }, // Must be WYSIWYG
    choices: [String], // for fill in blank only

    // For multiple choice, will be array with numbers of answers that could be right
    // For true or false, single element array with "true" or "false"
    // For fill blank, array of accepted answers
    correctAnswer: { type: [String], required: true },

    points: { type: Number, required: true },
  },
  { collection: "questions" }
);

export default questionSchema;
