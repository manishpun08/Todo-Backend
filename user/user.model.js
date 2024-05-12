import mongoose from "mongoose";

// set schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 55,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    maxlength: 55,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    maxlength: 15,
    unique: true,
  },
});

// create table
export const User = mongoose.model("User", userSchema);
