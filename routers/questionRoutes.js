import express from 'express';
import {
  createQuestion,
  getAllQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion,
  getRandomQuestions
} from '../controllers/questionController.js'; // ✅ include .js

const router = express.Router();

router.post('/', createQuestion);
router.get('/', getAllQuestions);
router.get('/random', getRandomQuestions);
router.get('/:id', getQuestionById);
router.put('/:id', updateQuestion);
router.delete('/:id', deleteQuestion);

export default router;