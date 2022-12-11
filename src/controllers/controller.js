
const {ToDoList} = require("../models/model");

const createTodo = async (request,response)=>{
    await ToDoList.create(request.body);
    return response.json({data: "ToDo Created Successfully"});
};

const getTodo = async (request,response)=>{
    var id = request.query.id;
    if(id){
        var allTodos = await ToDoList.findById(id);
    }else{
        var allTodos = await ToDoList.find();
    }
    return response.json(allTodos);
};

const updateDetails = async (request,response)=>{
    var id = request.query.id;
    await ToDoList.findByIdAndUpdate(id,request.body);
    return response.json({data: "ToDo Details Updated Successfully"});
};

const updateStatus = async (request,response)=>{
    var id = request.query.id;
    await ToDoList.findByIdAndUpdate(id,request.body);
    return response.json({data: "ToDo Status Updated Successfully"});
};

const deleteTodo = async (request,response)=>{
    var id = request.query.id;
    await ToDoList.findByIdAndDelete(id);
    return response.json({data: "ToDo Deleted Successfully"});
};

module.exports = {createTodo,getTodo,updateDetails,updateStatus,deleteTodo};