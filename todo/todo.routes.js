import express from "express";
import { todoValidation } from "./todo.middleware.js";
import { Todo } from "./todo.model.js";

const router = express.Router();

// create add todo
router.post("/todo/add", todoValidation, async (req, res) => {
  const newTodo = req.body;

  await Todo.create(newTodo);
  return res.status(200).send({ message: "Todo is added successfully." });
});

export default router;
