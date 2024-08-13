"use server";

import taskSchema from "@/lib/validations/task";

export type FormState = {
  errors?: { field: string; message: string };
  message?: string;
};

export async function createTask(formData: FormData): Promise<FormState> {
  console.log("createTask", formData);
  const obj = {
    title: formData.get("title"),
    description: formData.get("description"),
    duration: Number(formData.get("duration")),
  };

  if (formData.get("startDate") !== "") {
    obj["startDate"] = formData.get("startDate");
  }
  if (formData.get("dueDate") !== "") {
    obj["dueDate"] = formData.get("dueDate");
  }
  const parse = taskSchema.safeParse(obj);

  if (!parse.success) {
    console.log("parse result", parse.error.flatten().fieldErrors);
    return {
      errors: parse.error.flatten().fieldErrors,
      message: undefined,
    } as FormState;
  }

  const data = parse.data;
  console.log("Data: ", data);

  return {};
}
