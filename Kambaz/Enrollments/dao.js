import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function enrollUserInCourse(userId, courseId) {
  const enrollment = { _id: uuidv4(), user: userId, course: courseId };
  Database.enrollments.push(enrollment);
  return enrollment;
}

export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(e => !(e.user === userId && e.course === courseId));
  return { status: "ok" };
}

export function findAllEnrollments() {
  const { enrollments } = Database;
  return enrollments;
}