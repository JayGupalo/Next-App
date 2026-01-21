"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const HeaderLabels = {
  DASHBOARD: "Dashboard",
  HOME: "Home",
  POSTS: "Posts",
  PAGINATION: "Pagination",
  TIC_TAC_TOE: "Tic Tac Toe",
  PDF_VIEWER: "Pdf Viewer",
} as const;

const routes = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/dashboard",
    label: "Dashboard",
  },
  {
    path: "/pagination",
    label: "Pagination & Search",
  },
  {
    path: "/posts",
    label: "Posts",
  },
  {
    path: "/pdf-viewer",
    label: "Viewer",
  },
];

const Header = () => {
  const pathname = usePathname();

  console.info();

  return (
    <div className="border-black/10 border-b flex items-center flex-col justify-center py-5 px-5">
      <div>
        <Image
          src={"/wc3-icon.png"}
          alt="Logo"
          width={30}
          height={30}
          priority
        />
      </div>

      <ul className="flex items-center gap-3 mt-2">
        {routes.map((route, index) => {
          return (
            <li key={index}>
              <Link
                className={`p-1 rounded-md hover:bg-indigo-700 hover:text-white focus:bg-indigo-700 focus:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-400 ${pathname === route.path && "bg-indigo-700 text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-400"} transition-all durantion-500`}
                href={`${route.path}`}
              >
                {route.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
