import { Clock } from "lucide-react";
import ProgressBar from "@/components/ProgressBar";

interface TaskCardProps {
  title: string;
  description?: string;
  progress: number;
  duration: number;
  dueDate?: Date;
}

export default function TaskCard({ title, description, progress, duration, dueDate }: TaskCardProps) {
  return (
    <div className="flex h-64 max-w-[22rem] p-6 bg-white shadow-md shadow-gray-300 rounded-lg cursor-pointer border-transparent border-2 hover:border-indigo-500">
      <div className="w-full h-full flex flex-col justify-between gap-1">
        <div className="w-full flex-col gap-1 overflow-hidden truncate">
          <h3 className="font-bold text-md">{title}</h3>
          <span className="text-black/70">{description}</span>
        </div>
        <ProgressBar progress={progress} className="mt-6" />
        <div className="flex gap-1 text-gray-400">
          <Clock />
          <span className="font-medium">{duration} hour(s)</span>
        </div>
      </div>
    </div>
  );
}
