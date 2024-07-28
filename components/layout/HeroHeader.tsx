import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

interface HeroHeaderProps {
  title: string;
  subtitle?: string;
}

export default async function HeroHeader({ title, subtitle }: HeroHeaderProps) {
  return (
    <div className="w-full flex flex-1 justify-between items-center">
      <div className="flex flex-1 flex-col gap-4 justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <span className="text-sm text-gray-500">{subtitle}</span>}
      </div>
      <div className="hidden md:flex gap-4 justify-center items-center">
        <div className=" h-8 w-8 cursor-pointer rounded-full border-2 border-gray-200 flex items-center justify-center shadow-xl shadow-gray-100">
          <Image src="/assets/icons/notification.svg" alt="Notification" height={16} width={16} />
        </div>
        <UserButton />
      </div>
    </div>
  );
}
