import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    title: { type: String, required: true },
    course: { type: String, ref: "Course", required: true },
    description: { type: String, required: true },
    points: { type: Number, required: true },
    due: { type: Date, required: true },
    from: { type: Date, required: true },
    to: { type: Date, required: true },
  },
  { collection: "assignments" }
);

export default assignmentSchema;
