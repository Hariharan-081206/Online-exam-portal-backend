
import Question from '../models/questions.js';

export const createQuestion = async (req, res) => {
  try {
    console.log("Request body:", req.body); // 👈 Log incoming data
    const question = new Question(req.body);
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    console.error("Error saving question:", error); // 👈 Log exact error
    res.status(400).json({ error: error.message });
  }
};


export const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).json({ message: 'Question not found' });
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!question) return res.status(404).json({ message: 'Question not found' });
    res.status(200).json({ message: 'Question updated', question });
  } catch (error) {
    res.status(400).json({ error: error.message });
  } 
};


export const deleteQuestion = async (req, res) => {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) return res.status(404).json({ message: 'Question not found' });
    res.status(200).json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getRandomQuestions = async (req, res) => {
  try {
    const { count, subject } = req.query;
    const query = subject ? { subject } : {};
    const questions = await Question.aggregate([
      { $match: query },
      { $sample: { size: parseInt(count) || 10 } }
    ]);
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
