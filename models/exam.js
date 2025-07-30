import mongoose from "mongoose";
const {Schema,model}=mongoose;

const ExamSchema=new Schema({
    title:String,
    description:String,
    StartTime:Date,
    duration:Number,
    totalMarks:Number,
    createdBy:{type:Schema.Types.ObjectId,ref:'User'},
    questitions:[{type:Schema.Types.ObjectId,ref:'Question'}]

});
const Exam=model('Exam',ExamSchema);
export default Exam;