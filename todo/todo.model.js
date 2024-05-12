import mongoose, { Schema } from "mongoose";

// set rules or schema
const todoSchema = new mongoose.Schema({
  tittle: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 60,
  },
  date: {
    type: Date,
    required: true,
  },
});

// create table
export const Todo = mongoose.model("Todo", todoSchema);
