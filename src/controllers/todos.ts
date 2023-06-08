// import {Request, Response, NextFunction} from 'express'
import { RequestHandler } from 'express';

import { ToDo } from '../models/todo';
const TODOS: ToDo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newToDo = new ToDo(Math.random().toString(), text);

  TODOS.push(newToDo);

  res.status(201).json({ message: 'Create To Do', createdToDo: newToDo });
};

export const getToDos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODOS });
};

export const updateToDo: RequestHandler<{ id: string }> = (req, res, next) => {
  const toDoId = req.params.id;

  const updatedText = (req.body as { text: string }).text;
  const toDoIndex = TODOS.findIndex((todo) => toDoId === todo.id);

  if (toDoIndex < 0) {
    throw new Error('Could not find Todo!');
  }
  TODOS[toDoIndex] = new ToDo(TODOS[toDoIndex].id, updatedText);

  res.json({ message: 'updated!', updatedToDo: TODOS[toDoIndex] });
};

export const deleteToDo: RequestHandler = (req, res, next) => {
  const toDoId = req.params.id;

  const toDoIndex = TODOS.findIndex((todo) => toDoId === todo.id);

  if (toDoIndex < 0) {
    throw new Error('Could not find Todo!');
  }

  TODOS.splice(toDoIndex, 1);

  res.json({ message: 'Todo deleted!' });
};
