import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

export default function ProgressBar({ progress, className }: { progress: number; className: string }) {
  return (
    <div className={cn("w-full flex flex-col gap-2", className)}>
      <div className="w-full flex flex-1 justify-between items-center">
        <h4 className="text-md">Progress</h4>
        <span className="text-indigo-600">{progress}%</span>
      </div>
      <Progress value={progress} className="w-full bg-indigo-100" indicatorClassname="bg-indigo-500 rounded-r-2xl" />
    </div>
  );
}
