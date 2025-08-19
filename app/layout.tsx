"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./globals.css";
import { BottomNavbar } from "@/components/BottomNavbar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  const isExcludedPath = pathname !== "/" && pathname !== "/login" && pathname !== "/register" && pathname !== "/otp" && !pathname?.startsWith("/admin") && !pathname?.startsWith("/restaurant");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Loader visible for 1.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
        {/* Loader */}
        <div
          className={`fixed w-full h-full inset-0 flex items-center justify-center bg-white z-50
            transition-opacity duration-500 ease-in-out
            ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <Image
            src="/qlunch-logo.png"
            alt="QLunch Loading..."
            width={256}
            height={256}
          />
        </div>

        {/* Page content */}
        <div className={isExcludedPath ? "h-[calc(100dvh-64px)]" : "h-[100dvh]"}>
          {children}
        </div>
      
        {/* Bottom Navigation */}
        {!loading && isExcludedPath && (
          <BottomNavbar />
        )}
      </body>
    </html>
  );
}
