import Image from "next/image";
import { cn } from "@/lib/utils";

const items = [
  {
    label: "S",
    value: 10,
  },
  {
    label: "M",
    value: 11,
  },
  {
    label: "T",
    value: 12,
  },
  {
    label: "W",
    value: 13,
  },
  {
    label: "T",
    value: 14,
  },
  {
    label: "F",
    value: 15,
  },
  {
    label: "S",
    value: 16,
  },
];

export default async function CalendarTaskSummary() {
  return (
    <div className="h-full w-fit flex justify-center bg-gray-300 p-3">
      <div className="px-3 py-4 flex flex-col gap-3 justify-center items-center bg-white h-fit rounded-lg">
        <div className="w-full flex justify-between items-center rounded-sm p-4">
          <Image
            src={"/assets/icons/arrow-left.svg"}
            alt="Arrow Left"
            height={24}
            width={24}
            className="cursor-pointer"
          />
          <span className="font-semibold text-base">July 2024</span>
          <Image
            src={"/assets/icons/arrow-right.svg"}
            alt="Arrow right"
            height={24}
            width={24}
            className="cursor-pointer"
          />
        </div>
        <div className="flex gap-2 items-center">
          {items.map((item, idx) => (
            <div
              key={`day-${idx}`}
              className={cn(
                "flex flex-col gap-1 justify-center items-center p-1 rounded-3xl cursor-pointer transition-all hover:shadow-md shadow-gray-800",
                {
                  "bg-black text-white": idx == 3,
                },
              )}
            >
              <span className="text-xs uppercase p-1">{item.label}</span>
              <span
                className={cn("text-[12px] bg-gray-200 rounded-full p-2", {
                  "bg-blue-600": idx === 3,
                })}
              >
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
