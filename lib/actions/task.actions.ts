"use server";

import taskFormSchema from "@/lib/validations/task";
import { TaskModel } from "@/lib/models/task.model";
import { connectToDb } from "@/lib/mongoose";
import * as z from "zod";
import { revalidatePath } from "next/cache";

export type FormState = {
  errors?: { field: string; message: string };
  message?: string;
};

export async function createTask(values: z.infer<typeof taskFormSchema>): Promise<FormState> {
  try {
    await connectToDb();

    await TaskModel.create(values);

    revalidatePath("/tasks");
  } catch (e: any) {
    throw new Error(`Failed to create thread: ${e.message}`);
  }
}
