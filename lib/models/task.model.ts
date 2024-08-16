import mongoose from "mongoose";

export interface ITask extends mongoose.Document {
  title: string;
  description?: string;
  duration: number;
  dueDate?: Date;
  startDate?: Date;
  progress: number;
}

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  duration: { type: Number },
  startDate: { type: Date },
  dueDate: { type: Date },
  progress: { type: Number, required: true },
});

export const TaskModel = mongoose.models.Task || mongoose.model("Task", taskSchema);
