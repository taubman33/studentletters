// models/todo-model.js

const mongoose = require('../db/connection');

const ToDoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);


// Make sure to name the model with the singular Todo!
// Mongoose pluralizes and lowercases the name of the model
// to name the collection of documents in the database that
// correspond to this model.
const Todo = mongoose.model('Todo', ToDoSchema);

module.exports = Todo;