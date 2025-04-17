import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  const enrollUserInCourse = async (req, res) => {
    const { userId, courseId } = req.body;
    const enrollment = await dao.enrollUserInCourse(userId, courseId);
    res.json(enrollment);
  };

  const unenrollUserFromCourse = async (req, res) => {
    const { userId, courseId } = req.params;
    const status = await dao.unenrollUserFromCourse(userId, courseId);
    res.send(status);
  };

  const findAllEnrollments = async (req, res) => {
    const enrollments = await dao.findAllEnrollments();
    res.send(enrollments);
  };

  app.get("/api/enrollments", findAllEnrollments);
  app.post("/api/enrollments", enrollUserInCourse);
  app.delete("/api/enrollments/:userId/:courseId", unenrollUserFromCourse);
};