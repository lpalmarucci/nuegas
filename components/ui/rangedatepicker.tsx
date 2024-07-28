"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";

function formatDate(date: DateRange) {
  let from: string | undefined;
  let to: string | undefined;
  if (date.from) {
    from = format(date.from, "PPP");
  }
  if (date.to) {
    to = format(date.to, "PPP");
  }
  return `${from ?? ""} - ${to ?? ""}`;
}

export function DatePickerRange() {
  const [date, setDate] = React.useState<DateRange>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn("w-[280px] justify-start text-left font-normal", !date && "text-muted-foreground")}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {!!date ? formatDate(date) : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="range" selected={date} onSelect={setDate} initialFocus />
      </PopoverContent>
    </Popover>
  );
}
