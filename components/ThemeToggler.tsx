"use client"

import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { MdSunny } from "react-icons/md"
import { FaRegMoon } from "react-icons/fa"

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Fungsi untuk toggle tema
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Jika belum mounted, return null untuk menghindari hydration mismatch
  if (!mounted) {
    return null
  }

  const isDarkMode = theme === "dark"

  return (
    <>
      <div className="hidden xl:block">
        <div className="flex items-center gap-2 p-2">
          <div
            className={`text-yellow-300 font-bold cursor-pointer p-2 ${
              isDarkMode ? "opacity-50" : "opacity-100"
            }`}
            onClick={toggleTheme}
          >
            <MdSunny className="text-2xl" />
          </div>
          <div>
            <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
          </div>
          <div
            className={`dark:text-white text-black font-bold cursor-pointer p-2 ${
              isDarkMode ? "opacity-100" : "opacity-50"
            }`}
            onClick={toggleTheme}
          >
            <FaRegMoon />
          </div>
        </div>
      </div>
      <div className="block xl:hidden">
        {isDarkMode ? (
          <div
            className={`dark:text-white text-black font-bold cursor-pointer p-2 opacity-100`}
            onClick={toggleTheme}
          >
            <FaRegMoon />
          </div>
        ) : (
          <div
            className={`text-yellow-300 font-bold cursor-pointer p-2 opacity-100`}
            onClick={toggleTheme}
          >
            <MdSunny className="text-2xl" />
          </div>
        )}
      </div>
    </>
  )
}

export default ThemeToggler
