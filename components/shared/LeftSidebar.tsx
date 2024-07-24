"use client";

import Image from "next/image";
import { navMenuLinks } from "@/costants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Logo from "@/components/shared/Logo";

export default function LeftSidebar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <div className="hidden md:sticky left-0 top-0 z-40 bg-white md:flex flex-col h-screen w-screen md:w-fit md:min-w-56">
      <div className="flex flex-col px-8 py-6 justify-center items-center w-full">
        <Logo />
        <div className="flex flex-col w-full mt-8 gap-6 flex-1">
          {navMenuLinks.map((nav, idx) => {
            const isActive = (pathname.includes(nav.route) && nav.route.length > 1) || pathname === nav.route;

            // if (nav.route === "/profile") nav.route = `${nav.route}/${userId}`;
            return (
              <Link
                href={nav.route}
                alt={nav.label}
                key={`nav-${idx}`}
                className={cn(
                  "flex w-full flex-1 gap-3 px-6 py-3 items-center cursor-pointer rounded-lg transition-all hover:bg-gray-200 text-black",
                  {
                    "bg-gray-200": isActive,
                  },
                )}
              >
                <Image src={nav.imgURL} alt={nav.label} width={26} height={26} className="!fill-black !stroke-black" />
                <span className="text-sm font-medium">{nav.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
