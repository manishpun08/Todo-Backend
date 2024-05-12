import express from "express";
import { todoValidationSchema } from "./todo.validation.js";

export const todoValidation = async (req, res, next) => {
  const newTodo = req.body;
  try {
    await todoValidationSchema.validate(newTodo);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
  next();
};
