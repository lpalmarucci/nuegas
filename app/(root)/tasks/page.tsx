import HeroHeader from "@/components/layout/HeroHeader";
import Search from "@/components/ui/search";
import CreateTaskDialog from "@/components/dialog/CreateTaskDialog";
import { getScheduledTasks, getUnscheduledTasks } from "@/lib/actions/task.actions";
import TaskCarousel from "@/components/layout/TaskCarousel";

export default async function TasksPage() {
  const scheduledTasks = await getScheduledTasks();
  const unscheduledTasks = await getUnscheduledTasks();

  return (
    <div className="overflow-hidden w-full flex flex-col">
      <div className="flex flex-col justify-center gap-10 container">
        <HeroHeader title="Explore tasks" />
        <div className="flex justify-between items-center">
          <Search placeholder="Search tasks" className="max-w-md flex-1" />
          <CreateTaskDialog />
        </div>
      </div>
      <div className="bg-gray-200 h-full w-full grid grid-rows-2">
        <TaskCarousel tasks={scheduledTasks} title="Near expiration" />
        <TaskCarousel tasks={unscheduledTasks} title="To be defined" />
      </div>
    </div>
  );
}
