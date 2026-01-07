"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  { id: 1, pathName: "/login", name: "Login" },
  { id: 2, pathName: "/register", name: "Register" },
  { id: 3, pathName: "/landing", name: "Landing" },
  { id: 3, pathName: "/", name: "Home" },
  { id: 8, pathName: "/category", name: "Categories" },
  { id: 4, pathName: "/product-detail", name: "Product Detail" },
  { id: 5, pathName: "/cart", name: "Cart" },
  { id: 6, pathName: "/checkout", name: "Checkout" },
  { id: 9, pathName: "/myaccount", name: "My Account" },
  { id: 7, pathName: "/admin/login", name: "Admin" },
];

export function Navbar() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return <AdminNavbar />;
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

const adminRoutes = [
  { id: 1, pathName: "/admin/login", name: "Login" },
  { id: 2, pathName: "/admin/account", name: "Admin Account" },
  { id: 3, pathName: "/admin/customer", name: "Customer Management" },
  { id: 4, pathName: "/admin/product", name: "Product Management" },
  { id: 5, pathName: "/admin/category", name: "Category Management" },
  { id: 6, pathName: "/admin/order", name: "Order Management" },
  { id: 7, pathName: "/admin/delivery", name: "Delivery Management" },
  { id: 8, pathName: "/admin/wallet", name: "Wallet" },
  { id: 9, pathName: "/", name: "Client" },
];

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
