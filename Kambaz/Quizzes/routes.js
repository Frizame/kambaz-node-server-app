import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  const findQuizzesForCourse = async (req, res) => {
    const quizzes = await dao.findQuizzesForCourse(req.params.courseId);
    res.json(quizzes);
  };

  const findQuizById = async (req, res) => {
    const quiz = await dao.findQuizById(req.params.quizId);
    res.json(quiz);
  };

  const createQuiz = async (req, res) => {
    const quiz = await dao.createQuiz(req.body);
    res.json(quiz);
  };

  const updateQuiz = async (req, res) => {
    const updated = await dao.updateQuiz(req.params.quizId, req.body);
    res.json(updated);
  };

  const deleteQuiz = async (req, res) => {
    const deleted = await dao.deleteQuiz(req.params.quizId);
    res.json(deleted);
  };

  const togglePublish = async (req, res) => {
    const updated = await dao.toggleQuizPublish(
      req.params.quizId,
      req.body.isPublished
    );
    res.json(updated);
  };

  const addQuestion = async (req, res) => {
    const question = await dao.addQuestionToQuiz(req.params.quizId, req.body);
    res.json(question);
  };

  const updateQuestion = async (req, res) => {
    const updated = await dao.updateQuestion(req.params.questionId, req.body);
    res.json(updated);
  };

  const deleteQuestion = async (req, res) => {
    const deleted = await dao.deleteQuestion(req.params.questionId);
    res.json(deleted);
  };

  const createAttempt = async (req, res) => {
    const attempt = await dao.createAttempt(req.body);
    res.json(attempt);
  };

  const getLastAttempt = async (req, res) => {
    const { quizId, userId } = req.params;
    const attempt = await dao.getLastAttempt(quizId, userId);
    res.json(attempt);
  };

  const getAllAttempts = async (req, res) => {
    const { quizId, userId } = req.params;
    const attempts = await dao.getAllAttemptsForUser(quizId, userId);
    res.json(attempts);
  };

  app.get("/api/quizzes/course/:courseId", findQuizzesForCourse);
  app.get("/api/quizzes/:quizId", findQuizById);
  app.post("/api/quizzes", createQuiz);
  app.put("/api/quizzes/:quizId", updateQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);
  app.patch("/api/quizzes/:quizId/publish", togglePublish);

  app.post("/api/quizzes/:quizId/questions", addQuestion);
  app.put("/api/questions/:questionId", updateQuestion);
  app.delete("/api/questions/:questionId", deleteQuestion);

  app.post("/api/quizzes/:quizId/attempts", createAttempt);
  app.get("/api/quizzes/:quizId/attempts/:userId", getLastAttempt);
  app.get("/api/quizzes/:quizId/attempts/:userId/all", getAllAttempts);
}
