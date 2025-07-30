import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["student", "host"],
    default: "student",
  },
  registeredExams: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exam",
    },
  ],
});

const User = model("User", UserSchema);
export default User;
