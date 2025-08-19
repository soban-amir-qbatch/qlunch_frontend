"use client";

import { Utensils, Search, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function BottomNavbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/home", icon: Utensils, label: "Food" },
    { href: "/search", icon: Search, label: "Search" },
    { href: "/account", icon: User, label: "Account" },
  ];

  const getActiveIndex = () => {
    return navItems.findIndex(item => item.href === pathname)-1 || 0;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t px-5">
      <div className="relative h-full flex items-center justify-around">
        {/* Animated Background */}
        <motion.div
          className="absolute h-12 w-[20%] bg-blue-500/50 rounded-lg"
          animate={{
            x: `${getActiveIndex() * 167}%`
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30
          }}
        />
        
        {/* Navigation Items */}
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative z-10 w-[33%] flex flex-col items-center space-y-1"
            >
              <motion.div
                animate={{
                  scale: isActive ? 1.1 : 1,
                  color: isActive ? "rgb(var(--color-primary))" : "rgb(107, 114, 128)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon size={22} />
              </motion.div>
              <motion.span
                className="text-xs"
                animate={{
                  color: isActive ? "rgb(var(--color-primary))" : "rgb(107, 114, 128)"
                }}
              >
                {item.label}
              </motion.span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
