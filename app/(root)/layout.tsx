import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";

export const metadata = {
  title: "Nuegas",
  description: "Start tracking your tasks!",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body className={cn("h-screen bg-background font-sans antialiased", inter.className)}>
          <Topbar />
          <main className="flex bg-gray-100">
            <LeftSidebar />
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
