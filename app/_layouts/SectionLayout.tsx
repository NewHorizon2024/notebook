"use client";

import { type ReactNode } from "react";

type SectionLayoutProps = Readonly<{
  children: ReactNode;
}>;
export default function SectionLayout({ children }: SectionLayoutProps) {
  return <section className="w-full max-w-7xl mx-auto py-8">{children}</section>;
}
