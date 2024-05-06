import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SidebarNotes from "@/components/SidebarNotes";

const inter = Source_Sans_3({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nowted",
  description: "Notes Generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-row h-screen">
          <div className="bg-dark-primary w-[500px]">
            <Sidebar />
          </div>
          <div className="bg-dark-second w-[550px] overflow-y-auto">
            <SidebarNotes />
          </div>
          <div className="w-full bg-dark-primary">{children}</div>
        </div>
      </body>
    </html>
  );
}
