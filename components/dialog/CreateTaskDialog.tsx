"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import taskSchema from "@/lib/validations/task";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { DialogBody } from "next/dist/client/components/react-dev-overlay/internal/components/Dialog";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/ui/datepicker";

function CreateTaskDialog() {
  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
      description: "",
      startDate: undefined,
      dueDate: undefined,
      duration: 0,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof taskSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Dialog defaultOpen>
      <DialogTrigger asChild>
        <Button>Crea nuovo</Button>
      </DialogTrigger>
      <DialogContent className="min-w-fit">
        <DialogHeader>
          <DialogTitle>Create new task</DialogTitle>
          <DialogDescription>
            Fill the form and press <b>Submit</b> button for creating a new task
          </DialogDescription>
        </DialogHeader>
        <DialogBody>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea className="max-h-36 h-full" placeholder="Type the details of the task" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-4 items-center">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1">
                      <FormLabel>Start Date</FormLabel>
                      <FormControl>
                        <DatePicker />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dueDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1">
                      <FormLabel>Due Date</FormLabel>
                      <FormControl>
                        <DatePicker />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1">
                      <FormLabel>Hours (est)</FormLabel>
                      <FormControl>
                        <Input placeholder={"0"} min={0} max={99} type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
}

export default CreateTaskDialog;
