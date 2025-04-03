import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  const enrollUserInCourse = (req, res) => {
    const { userId, courseId } = req.body;
    const enrollment = dao.enrollUserInCourse(userId, courseId);
    res.json(enrollment);
  };

  const unenrollUserFromCourse = (req, res) => {
    const { userId, courseId } = req.params;
    const status = dao.unenrollUserFromCourse(userId, courseId);
    res.send(status);
  };

  const findAllEnrollments = (req, res) => {
    const enrollments = dao.findAllEnrollments();
    res.send(enrollments);
  };

  app.get("/api/enrollments", findAllEnrollments);
  app.post("/api/enrollments", enrollUserInCourse);
  app.delete("/api/enrollments/:userId/:courseId", unenrollUserFromCourse);
};