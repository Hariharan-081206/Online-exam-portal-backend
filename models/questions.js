import mongoose from "mongoose";
const { Schema, model } = mongoose;

const QuestionSchema = new Schema({
  examId: { type: Schema.Types.ObjectId, ref: 'Exam' },
  type: { type: String, enum: ['mcq', 'fillups'], required: true },
  questionText: String,
  options: [String],
  correctAnswer: String,
  marks: Number
});

const Question = model('Question', QuestionSchema);
export default Question;
