import HeroHeader from "@/components/layout/HeroHeader";
import Search from "@/components/ui/search";
import CreateTaskDialog from "@/components/dialog/CreateTaskDialog";

export default async function TasksPage() {
  // const tasks = await getTasks();

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="flex flex-col justify-center gap-10 container">
        <HeroHeader title="Explore tasks" />
        <div className="flex justify-between items-center">
          <Search placeholder="Search tasks" className="max-w-md flex-1" />
          <CreateTaskDialog />
        </div>
      </div>
      <div className="bg-gray-300 h-full w-full">
        <div className="container">
          <h1 className="font-bold text-xl">Created recently</h1>
        </div>
      </div>
      {/*<Image src={"/assets/icons/notiification.svg"} alt={"test"} height={20} width={20} />*/}
    </div>
  );
}
