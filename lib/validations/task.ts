import { z } from "zod";

const taskSchema = z.object({
  title: z.string().min(0),
  description: z.string().optional(),
  duration: z.coerce.number().min(0).max(99),
  dueDate: z.date().optional(),
  startDate: z.date().optional(),
  assignedTo: z.string(),
});

export default taskSchema;
