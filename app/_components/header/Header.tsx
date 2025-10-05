"use client";

import Link from "next/link";
import HeaderLogo from "./HeaderLogo";

export default function Header() {
  return (
    <div className="flex justify-between">
      <Link href="/">
        <HeaderLogo />
      </Link>
    </div>
  );
}
