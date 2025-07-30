import mongoose from "mongoose";
const { Schema, model, Types } = mongoose;

const SubmissionSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: 'User',
    required: true
  },
  examId: {
    type: Types.ObjectId,
    ref: 'Exam',
    required: true
  },
  answers: [
    {
      questionId: {
        type: Types.ObjectId,
        ref: 'Question',
        required: true
      },
      selectedAnswer: {
        type: String,
        required: true
      },
      isCorrect: Boolean,
      obtainedMarks: Number
    }
  ],
  totalObtained: Number,
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

const Submission = model("Submission", SubmissionSchema);
export default Submission;
