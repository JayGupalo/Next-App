import Link from "next/link";
import Image from "next/image";
import React from "react";

const HeaderLabels = {
  DASHBOARD: "Dashboard",
  HOME: "Home",
  POSTS: "Posts",
  PAGINATION: "Pagination",
  TIC_TAC_TOE: "Tic Tac Toe",
  PDF_VIEWER: "Pdf Viewer",
} as const;

const Header = () => {
  return (
    <div className="border-black/10 border-b h-[40px] flex items-center justify-between px-5">
      <div>
        <Image
          src={"/wc3-icon.png"}
          alt="Logo"
          width={30}
          height={30}
          priority
        />
      </div>

      <ul className="flex items-center gap-3">
        <li>
          <Link href="/">{HeaderLabels.HOME}</Link>
        </li>
        <li>
          <Link href="/dashboard">{HeaderLabels.DASHBOARD}</Link>
        </li>
        <li>
          <Link href="/posts">{HeaderLabels.POSTS}</Link>
        </li>
        <li>
          <Link href="/pagination">{HeaderLabels.PAGINATION}</Link>
        </li>
        <li>
          <Link href="/game">{HeaderLabels.TIC_TAC_TOE}</Link>
        </li>
        <li>
          <Link href="/pdf-viewer">{HeaderLabels.PDF_VIEWER}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
