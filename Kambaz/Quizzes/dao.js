import QuizModel from "./model.js";
import QuestionModel from "./Questions/model.js";
import AttemptModel from "./Attempts/model.js";

export async function findQuizzesForCourse(courseId) {
  return QuizModel.find({ courseId });
}

export async function findQuizById(quizId) {
  return QuizModel.findById(quizId).populate("questions");
}

export async function createQuiz(quizData) {
  return QuizModel.create(quizData);
}

export async function updateQuiz(quizId, updates) {
  return QuizModel.findByIdAndUpdate(quizId, updates, { new: true });
}

export async function deleteQuiz(quizId) {
  await QuestionModel.deleteMany({ quizId });
  await AttemptModel.deleteMany({ quizId });
  return QuizModel.findByIdAndDelete(quizId);
}

export async function toggleQuizPublish(quizId, isPublished) {
  return QuizModel.findByIdAndUpdate(quizId, { isPublished }, { new: true });
}

export async function addQuestionToQuiz(quizId, questionData) {
  const question = await QuestionModel.create({ ...questionData, quizId });
  await QuizModel.findByIdAndUpdate(quizId, { $push: { questions: question._id } });
  return question;
}

export async function updateQuestion(questionId, updates) {
  return QuestionModel.findByIdAndUpdate(questionId, updates, { new: true });
}

export async function deleteQuestion(questionId) {
  const question = await QuestionModel.findByIdAndDelete(questionId);
  if (question) {
    await QuizModel.findByIdAndUpdate(question.quizId, { $pull: { questions: questionId } });
  }
  return question;
}

export async function createAttempt(attemptData) {
  const attempt = await AttemptModel.create(attemptData);
  await QuizModel.findByIdAndUpdate(attempt.quizId, { $push: { attempts: attempt._id } });
  return attempt;
}

export async function getLastAttempt(quizId, userId) {
  return AttemptModel.findOne({ quizId, userId }).sort({ timestamp: -1 });
}

export async function getAllAttemptsForUser(quizId, userId) {
  return AttemptModel.find({ quizId, userId }).sort({ timestamp: -1 });
}
