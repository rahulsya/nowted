import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SidebarNotes from "@/components/SidebarNotes";

const inter = Source_Sans_3({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nowted",
  description: "Note App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen flex-row">
          <div className="w-[500px] overflow-y-auto bg-dark-primary">
            <Sidebar />
          </div>
          <div className="w-[550px] overflow-y-auto bg-dark-second">
            <SidebarNotes />
          </div>
          <div className="w-full bg-dark-primary">{children}</div>
        </div>
      </body>
    </html>
  );
}
