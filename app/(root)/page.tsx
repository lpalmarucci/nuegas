import Image from "next/image";
import CalendarTaskSummary from "@/components/shared/CalendarTaskSummary";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full h-full items-center justify-between">
      <div className='flex-1 p-24'>
        Homepage
      </div>
      <CalendarTaskSummary />
    </main>
  );
}
