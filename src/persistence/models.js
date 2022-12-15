const mongoose = require("mongoose");
const taskSchema = require('./schemas.js')


const TaskSchema = new mongoose.Schema(taskSchema);
const Task = mongoose.model('Task', TaskSchema);

module.exports = { Task }
