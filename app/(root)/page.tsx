import CalendarTaskSummary from "@/components/shared/CalendarTaskSummary";
import HeroHeader from "@/components/layout/HeroHeader";

export default function Home() {
  return (
    <main className="flex w-full h-full justify-between">
      <div className="flex w-full container">
        <HeroHeader />
        {/*<div className="flex-1 p-24">Homepage</div>*/}
      </div>
      <CalendarTaskSummary />
    </main>
  );
}
