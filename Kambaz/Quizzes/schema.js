import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    _id: String,
    courseId: { type: String, required: true, ref: "CourseModel" },
    questions: [{ type: String, ref: "QuestionModel" }],
    attempts: [{ type: String, ref: "AttemptModel" }],
    createdBy: { type: String, required: true, ref: "UserModel" },

    title: { type: String, required: true },
    description: { type: String, default: "" },
    isPublished: { type: Boolean, default: false },
    quizType: {
      type: String,
      enum: ["graded", "practice", "gradedSurvey", "ungradedSurvey"],
      default: "graded",
    },
    assignmentGroup: { type: String, default: "Quizzes" },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 },
    multipleAttempts: { type: Boolean, default: false },
    maxAttempts: { type: Number, default: 1 },
    showCorrectAnswers: { type: Boolean, default: false },
    accessCode: { type: String, default: "" },
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    dueDate: Date,
    availableDate: Date,
    untilDate: Date,
  },
  { collection: "quizzes" }
);

export default quizSchema;
