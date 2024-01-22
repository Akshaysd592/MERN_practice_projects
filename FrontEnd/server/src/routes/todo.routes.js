import {Router} from  'express'
import {createTodo} from '../controllers/createTodo.controller.js'
import { updateTodo } from '../controllers/updateTodo.controller.js';
import {deleteTodo} from '../controllers/deleteTodo.controller.js'
import { getTodo } from '../controllers/getTodo.controller.js';
import { getAllTodos } from '../controllers/getAllTodos.controller.js';


const router = Router();

router.route("/createtodo").post(createTodo);
router.route("/update-todo/:id").put(updateTodo);
router.route("/delete-todo/:id").delete(deleteTodo);
router.route("/get-todo/:id").get(getTodo);
router.route("/get-all-todos").get(getAllTodos);


export default router;



