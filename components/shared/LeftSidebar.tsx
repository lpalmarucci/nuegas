"use client";

import Image from "next/image";
import { navMenuLinks } from "@/costants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Logo from "@/components/shared/Logo";
import { SignedIn, SignOutButton } from "@clerk/nextjs";

export default function LeftSidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <div className="hidden md:sticky left-0 top-0 z-40 bg-white md:flex flex-col h-screen w-screen md:w-fit md:min-w-56">
      <div className="flex flex-col px-8 py-6 justify-center items-center w-full flex-1">
        <Logo />
        <div className="flex flex-col h-full justify-between items-center">
          <div className="flex flex-col w-full mt-8 gap-6">
            {navMenuLinks.map((nav, idx) => {
              const isActive = (pathname.includes(nav.route) && nav.route.length > 1) || pathname === nav.route;

              // if (nav.route === "/profile") nav.route = `${nav.route}/${userId}`;
              return (
                <Link
                  href={nav.route}
                  key={`nav-${idx}`}
                  className={cn(
                    "flex w-full flex-1 gap-3 px-6 py-3 items-center cursor-pointer rounded-lg transition-all hover:bg-gray-200 text-black",
                    {
                      "bg-gray-200": isActive,
                    },
                  )}
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
  );
}
