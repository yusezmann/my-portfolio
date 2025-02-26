"use client"

import { Switch } from "@/components/ui/switch"
import { useState, useEffect } from "react"
import { MdSunny } from "react-icons/md"
import { FaRegMoon } from "react-icons/fa"

const ThemeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Fungsi untuk toggle tema
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode
      // Simpan tema ke localStorage
      localStorage.setItem("theme", newMode ? "dark" : "light")

      // Tambahkan atau hapus class "dark" pada elemen root
      if (newMode) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }

      return newMode
    })
  }

  // Cek tema yang tersimpan di localStorage saat komponen dimount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <>
      <div className="hidden xl:block">
        <div className="flex items-center gap-2 p-2">
          <div
            className={` text-yellow-300 font-bold cursor-pointer p-2 ${
              isDarkMode ? "opacity-50" : "opacity-100"
            }`}
            onClick={() => isDarkMode && toggleTheme()}
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
            onClick={() => !isDarkMode && toggleTheme()}
          >
            <FaRegMoon />
          </div>
        </div>
      </div>
      <div className="block xl:hidden">
        {isDarkMode ? (
          <div
            className={`dark:text-white text-black font-bold cursor-pointer p-2 opacity-100 `}
            onClick={() => toggleTheme()}
          >
            <FaRegMoon />
          </div>
        ) : (
          <div
            className={` text-yellow-300 font-bold cursor-pointer p-2 opacity-100 `}
            onClick={() => toggleTheme()}
          >
            <MdSunny className="text-2xl" />
          </div>
        )}
      </div>
    </>
  )
}

export default ThemeToggler
