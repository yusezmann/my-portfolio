"use client"

// next link
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

// icons
import {
  HiHome,
  HiViewColumns,
  HiRectangleGroup,
  HiArchiveBox,
  HiEnvelope,
} from "react-icons/hi2"

const links = [
  { name: "home", path: "/", icon: <HiHome /> },
  // { name: "services", path: "/services", icon: <HiViewColumns /> },
  { name: "resume", path: "/resume", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiArchiveBox /> },
  { name: "contact", path: "/contact", icon: <HiEnvelope /> },
]

const Nav = () => {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navContent = (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 right-0 xl:right-[2%] xl:top-1/2 xl:-translate-y-1/2 xl:bottom-auto w-full xl:w-16 xl:max-w-md xl:h-auto z-[999999] pointer-events-auto" style={{ pointerEvents: 'auto' }}>
      {/* inner */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/80 dark:bg-primary/80 backdrop-blur-md text-3xl xl:text-xl xl:rounded-full pointer-events-none border border-primary/30 dark:border-white/20 shadow-lg">
        {links.map((link, index) => (
          <Link
            className={`${
              link.path === pathname 
                ? "text-accent" 
                : "text-primary dark:text-white/90"
            } relative flex items-center justify-center group hover:text-accent transition-all duration-300 ease-in-out z-10 p-2 pointer-events-auto cursor-pointer w-full xl:w-auto`}
            href={link.path}
            key={index}
            style={{ pointerEvents: 'auto' }}
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            {/* tooltip */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex pointer-events-none">
              <div className="bg-primary dark:bg-white relative flex text-white dark:text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                {/* triangle */}
                <div className="border-solid border-l-primary dark:border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>

            {/* icon */}
            <span className="pointer-events-none block">{link.icon}</span>
          </Link>
        ))}
      </div>
    </nav>
  )

  // Render directly to body using portal to avoid any parent interference
  if (typeof window !== 'undefined' && mounted) {
    return createPortal(navContent, document.body)
  }

  // Return null only during SSR
  if (typeof window === 'undefined') {
    return null
  }

  // During hydration, render normally
  return navContent
}

export default Nav
