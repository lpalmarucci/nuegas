import { z } from "zod";
import { asOptionalField } from "@/lib/utils";

const taskFormSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().optional(),
  duration: z.coerce.number().min(1).max(99),
  startDate: asOptionalField(z.date()),
  dueDate: asOptionalField(z.date()),
});

export default taskFormSchema;
