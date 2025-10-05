"use client";

import { type ReactNode } from "react";

type HeaderLayoutProps = Readonly<{
  children: ReactNode;
}>;
export default function HeaderLayout({ children }: HeaderLayoutProps) {
  return (
    <header className="w-full max-w-7xl mx-auto shadow-md rounded-md h-fit">
      {children}
    </header>
  );
} 
