const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        Title : String,
        Description : String,
        isCompleted : Boolean
    }
);

const ToDoList = mongoose.model("To Do List", todoSchema);

module.exports = {ToDoList};