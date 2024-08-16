"use server";

import taskFormSchema from "@/lib/validations/task";
import { type ITask, TaskModel } from "@/lib/models/task.model";
import { connectToDb } from "@/lib/mongoose";
import { type z } from "zod";
import { revalidatePath } from "next/cache";

export async function createTask(values: z.infer<typeof taskFormSchema>): Promise<string | undefined> {
  try {
    await connectToDb();
    await TaskModel.create({ ...values, progress: 0 });
    revalidatePath("/tasks");
  } catch (e: any) {
    return e.message;
  }
}

export async function getScheduledTasks(): Promise<ITask[]> {
  try {
    await connectToDb();
    return TaskModel.find({ dueDate: { $nin: [undefined, null] } })
      .sort({ dueDate: "asc" })
      .exec();
  } catch (e: any) {
    throw new Error(`Failed to create thread: ${e.message}`);
  }
}

export async function getUnscheduledTasks(): Promise<ITask[]> {
  try {
    await connectToDb();
    return TaskModel.find({ dueDate: { $in: [undefined, null] } }).exec();
  } catch (e: any) {
    throw new Error(`Failed to create thread: ${e.message}`);
  }
}
