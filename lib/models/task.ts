import mongoose from "mongoose";

interface TaskModel extends mongoose.Document {
  id: string;
  title: string;
  description?: string;
  duration: number;
  dueDate?: Date;
  startDate?: Date;
}

const taskSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  description: { type: String },
});
