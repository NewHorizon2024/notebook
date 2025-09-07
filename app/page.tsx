"use client"

import CommandCreator
 from "./_components/command-creator/CommandCreator"

export default function Home() {
  return <div className="grid grid-cols-12 py-6">
    <CommandCreator />
  </div>
}