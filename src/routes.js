// import express, { any, any } from 'express';
const express = require("express");

const Task = require('./persistence/models.js')

// import { Task } from './persistence/models';
const routes = express.Router();

routes.get('/tarefas', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(404).json(err);
  }
});

routes.get('/tarefas/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const task = await Task.findById(id);
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json(err);
  }
});

routes.delete('/tarefas/:id', async (req, res) => {
  try {
    const id = req.params.id;

    await Task.findOneAndDelete({ _id: id });

    res.status(200).json({ message: 'Tarefa deletada com sucesso' });
  } catch (err) {
    res.status(404).json(err);
  }
});

routes.put('/tarefas/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const task = await Task.findOneAndUpdate({ _id: id }, data);
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json(err);
  }
});

routes.post('/tarefas', async (req, res) => {
  try {
    const data = req.body;

    await Task.create(data);

    res.status(200).json({
      created: true,
      task: data.desc,
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = routes;
