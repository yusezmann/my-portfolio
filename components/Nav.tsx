"use client"

// next link
import Link from "next/link"
import { usePathname } from "next/navigation"

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

  return (
    <nav className="flex flex-col items-center  xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto right-0 xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen z-[999999]">
      {/* inner */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-primary/10 dark:bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full z-[999999]">
        {links.map((link, index) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300 ease-in-out`}
            href={link.path}
            key={index}
          >
            {/* tooltip */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-primary dark:bg-white relative flex text-white dark:text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize">
                  {link.name}
                </div>

                {/* triangle */}
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>

            {/* icon */}
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Nav
