import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

export default async function HeroHeader() {
  const userInfo = await currentUser();

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-1 flex-col gap-4 justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">
          Hi, {userInfo?.firstName} {userInfo?.lastName}
        </h1>
        <span className="text-sm text-gray-500">Let's finish your task today!</span>
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
