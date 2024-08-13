import { z } from "zod";

const taskSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().optional(),
  duration: z.coerce.number().min(0).max(99),
  startDate: z.coerce.date().optional(),
  dueDate: z.coerce.date().optional(),
});

export default taskSchema;
