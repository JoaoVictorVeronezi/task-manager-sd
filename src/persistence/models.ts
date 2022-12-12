import mongoose from 'mongoose';
import { taskSchema } from './schemas';

const TaskSchema = new mongoose.Schema(taskSchema);
const Task = mongoose.model('Task', TaskSchema);

export { Task };
