"use client";

import { ITask } from "@/lib/models/task.model";
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import TaskCard from "@/components/card/Task";
import * as React from "react";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface TaskCarouselProps {
  tasks: ITask[];
  title: string;
}

export default function TaskCarousel({ tasks, title }: TaskCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [status, setStatus] = useState<{ canScrollPrev: boolean; canScrollNext: boolean }>({
    canScrollPrev: false,
    canScrollNext: true,
  });

  useEffect(() => {
    if (!api) return;

    api.on("scroll", (e) => {
      console.log(e);
      setStatus({
        canScrollPrev: e.canScrollPrev(),
        canScrollNext: e.canScrollNext(),
      });
    });
  }, [api]);

  return (
    <div className="container">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold text-2xl">{title}</h1>
        <div
          className={cn("flex gap-2", {
            hidden: tasks.length === 0,
          })}
        >
          <Button
            className={cn("rounded-full bg-transparent hover:bg-gray-300")}
            disabled={!status.canScrollPrev}
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft className="h-4 w-4 text-gray-800" />
          </Button>
          <Button
            className={cn("rounded-full bg-transparent hover:bg-gray-300")}
            disabled={!status.canScrollNext}
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight className="h-4 w-4 text-gray-800" />
          </Button>
        </div>
      </div>
      {tasks.length > 0 ? (
        <Carousel opts={{ inViewThreshold: 1, align: "start" }} setApi={setApi} className="mt-6">
          <CarouselContent>
            {tasks.map((t) => (
              <CarouselItem key={t._id?.toString()} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 basis-full">
                <TaskCard title={t.title} description={t.description} progress={t.progress} duration={t.duration} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <div className="w-full h-full h-64 flex justify-center items-center">
          <h1 className=" font-semibold text-gray-500">No tasks found</h1>
        </div>
      )}
    </div>
  );
}
