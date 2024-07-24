"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { navMenuLinks } from "@/costants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/components/shared/Logo";

export default function Topbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="w-full h-16 fixed bg-white md:hidden top-0 left-0 z-20 px-4 py-6 flex justify-between items-center">
      <div
        className={cn("absolute top-0 left-0 h-screen w-full bg-black/20 blur-md z-20 duration-0", {
          "-left-full": !isMenuOpen,
        })}
      ></div>
      <div
        className="relative flex justify-center items-center border-gray-2100 rounded-full border-2 p-2 cursor-pointer"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <Image src={"/assets/icons/menu.svg"} alt={"Menu"} height={20} width={20} />
      </div>
      <div
        className={cn(
          "absolute z-40 top-0 -left-full w-3/4 sm:w-1/2 h-screen bg-white shadow transition-all duration-300",
          {
            "left-0": isMenuOpen,
          },
        )}
      >
        <div className="relative w-full h-full">
          <div className="text-2xl text-gray-300 uppercase absolute top-4 right-4">
            <Image
              src={"/assets/icons/close.svg"}
              alt={"Close"}
              height={26}
              width={26}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen((prev) => false)}
            />
          </div>
          <div className={cn("h-full w-full flex flex-col justify-center items-center px-8 gap-6")}>
            <div>
              <Logo />
            </div>
            <div className="flex w-full flex-col gap-4">
              {navMenuLinks.map((nav, idx) => {
                const isActive = (pathname.includes(nav.route) && nav.route.length > 1) || pathname === nav.route;
                return (
                  <Link
                    href={nav.route}
                    alt={nav.label}
                    key={`nav-${idx}`}
                    className={cn(
                      "flex w-full gap-3 px-6 py-3 items-center cursor-pointer rounded-lg transition-all hover:bg-gray-200 text-black",
                      {
                        "bg-gray-200": isActive,
                      },
                    )}
                    onClick={(e) => {
                      // router.push(nav.route);
                      setIsMenuOpen((prev) => false);
                    }}
                  >
                    <Image
                      src={nav.imgURL}
                      alt={nav.label}
                      width={26}
                      height={26}
                      className="!fill-black !stroke-black"
                    />
                    <span className="text-sm font-medium">{nav.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
