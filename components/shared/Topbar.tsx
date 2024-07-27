"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { navMenuLinks } from "@/costants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/components/shared/Logo";
import { SignedIn, SignOutButton } from "@clerk/nextjs";

export default function Topbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="w-full h-16 fixed bg-white md:hidden top-0 left-0 z-20 px-4 py-6 flex justify-between items-center">
      <div
        className={cn("absolute top-0 left-0 h-screen w-full bg-black/20 blur-sm z-20 duration-0", {
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
        <div className="relative w-full h-full py-4 px-6">
          <div className="text-2xl text-gray-300 uppercase flex justify-end">
            <Image
              src={"/assets/icons/close.svg"}
              alt={"Close"}
              height={26}
              width={26}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen((prev) => false)}
            />
          </div>
          <div className={cn("h-full w-full flex flex-col items-center px-8 gap-6 mt-4")}>
            <div>
              <Logo />
            </div>
            <div className="flex w-full flex-col gap-4">
              {navMenuLinks.map((nav, idx) => {
                const isActive = (pathname.includes(nav.route) && nav.route.length > 1) || pathname === nav.route;
                return (
                  <Link
                    href={nav.route}
                    key={`nav-${idx}`}
                    className={cn(
                      "flex w-full gap-3 px-6 py-3 items-center cursor-pointer rounded-lg transition-all text-black",
                      {
                        "bg-gray-200": isActive,
                        "hover:bg-gray-100/70": !isActive,
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
              <SignedIn>
                <SignOutButton>
                  <div className="flex gap-3 items-center cursor-pointer hover:shadow-xl px-6 py-3 rounded-lg transition-shadow hover:shadow-red-400/20 bg-red-500">
                    <Image src="/assets/icons/exit.svg" className="fill-gray-300" alt="logout" width={24} height={24} />
                    <span className="text-base text-white font-medium">Logout</span>
                  </div>
                </SignOutButton>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
