"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { id: 1, pathName: "/", name: "Home" },
  { id: 2, pathName: "/about-us", name: "About Us" },
  { id: 3, pathName: "/service", name: "Services" },
  { id: 5, pathName: "/contact-us", name: "Contact Us" },
  { id: 6, pathName: "/blog", name: "Blog" },
  { id: 7, pathName: "/activity", name: "Activity" },
];

export function Navbar() {
  const pathname = usePathname();
  if (pathname === "/admin") return;
  return (
    <header className="fixed mx-auto md:bottom-5 bottom-0 left-0 w-full flex justify-center overflow-x-hidden">
      <nav className="mx-2 overflow-x-auto flex gap-3 md:bg-black/80 bg-black/70 p-2 rounded-full shadow-2xl">
        {routes.map((route) => (
          <Link
            key={route.id}
            href={route.pathName}
            className={cn(
              "px-2 py-1 text-sm text-center text-nowrap text-white rounded-full transition-colors",
              pathname === route.pathName &&
                "bg-white text-black transition-colors"
            )}
          >
            {route.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

const adminRoutes = [{ id: 1, pathName: "/admin", name: "Service Management" }];

export function AdminNavbar() {
  const pathname = usePathname();
  return (
    <header className="fixed mx-auto md:bottom-5 bottom-0 left-0 w-full flex justify-center overflow-x-hidden">
      <nav className="mx-2 overflow-x-auto flex gap-3 md:bg-black/80 bg-black/70 p-2 rounded-full shadow-2xl">
        {adminRoutes.map((route) => (
          <Link
            key={route.id}
            href={route.pathName}
            className={cn(
              "px-2 py-1 text-center text-nowrap text-white rounded-full transition-colors",
              pathname === route.pathName &&
                "bg-white text-black transition-colors"
            )}
          >
            {route.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
