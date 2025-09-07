"use client";

import { type ReactNode } from "react";

type SectionLayoutProps = Readonly<{
  children: ReactNode;
}>;
export default function SectionLayout({ children }: SectionLayoutProps) {
  return <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  bg-red-200">{children}</section>;
}
