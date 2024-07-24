import type { Metadata } from "next";
import { Inter, Inter as FontSans } from "next/font/google";
import "./globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import { cn } from "@/lib/utils";
import Topbar from "@/components/shared/Topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nuegas",
  description: "Your project management dashboard",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <Topbar />
        <main className="flex">
          <LeftSidebar />
          <div className="bg-gray-100 w-full min-h-screen">{children}</div>
        </main>
      </body>
    </html>
  );
}
