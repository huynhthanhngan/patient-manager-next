"use client";

import { useTheme } from "next-themes"
import SearchInput from "./search-input"

function Navbar() {
  const { theme } = useTheme()

  const bgColor = theme === 'dark' ? 'bg-[#1A1A1A]' : 'bg-[#F5F5F5]'
  return (
    <div className={`relative w-full h-[100px] ${bgColor} overflow-hidden flex items-center justify-between px-4`}>
      <header className="flex items-center gap-2 left-10 top-8">
        <div className="size-11 rounded-lg bg-primary flex items-center justify-center">
        </div>
      </header>
          <SearchInput />
    </div>

  )
}

export default Navbar