const express = require("express");
const server = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/mern_g4");
mongoose.connection.on("connected",()=>{
    console.log("Database is connected");
})
mongoose.connection.on("error",()=>{
    console.log("Database connection error");
})

const {createTodo,getTodo,updateDetails,updateStatus,deleteTodo} = require("./src/controllers/controller");

server.use(cors());
server.use(bodyParser.json());
server.get("/get-todo",getTodo);
server.post("/create-todo",createTodo);
server.put("/update-details",updateDetails);
server.put("/update-status",updateStatus);
server.delete("/delete-todo",deleteTodo);


server.listen("4001",()=>{
    console.log("Server started at port 4001");
})