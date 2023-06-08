import { Router } from 'express';
import {
  createTodo,
  deleteToDo,
  getToDos,
  updateToDo,
} from '../controllers/todos';

const router = Router();

router.post('/', createTodo);
router.get('/', getToDos);
router.patch('/:id', updateToDo);
router.delete('/:id', deleteToDo);

export default router;
