"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteToDo = exports.updateToDo = exports.getToDos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newToDo = new todo_1.ToDo(Math.random().toString(), text);
    TODOS.push(newToDo);
    res.status(201).json({ message: 'Create To Do', createdToDo: newToDo });
};
exports.createTodo = createTodo;
const getToDos = (req, res, next) => {
    res.json({ todos: TODOS });
};
exports.getToDos = getToDos;
const updateToDo = (req, res, next) => {
    const toDoId = req.params.id;
    const updatedText = req.body.text;
    const toDoIndex = TODOS.findIndex((todo) => toDoId === todo.id);
    if (toDoIndex < 0) {
        throw new Error('Could not find Todo!');
    }
    TODOS[toDoIndex] = new todo_1.ToDo(TODOS[toDoIndex].id, updatedText);
    res.json({ message: 'updated!', updatedToDo: TODOS[toDoIndex] });
};
exports.updateToDo = updateToDo;
const deleteToDo = (req, res, next) => {
    const toDoId = req.params.id;
    const toDoIndex = TODOS.findIndex((todo) => toDoId === todo.id);
    if (toDoIndex < 0) {
        throw new Error('Could not find Todo!');
    }
    TODOS.splice(toDoIndex, 1);
    res.json({ message: 'Todo deleted!' });
};
exports.deleteToDo = deleteToDo;
