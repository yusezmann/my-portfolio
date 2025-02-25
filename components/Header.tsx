// next link
import Link from "next/link"

// components
import { Button } from "./ui/button"
import Nav from "./Nav"
import Socials from "./Socials"
import Image from "next/image"
import ThemeToggler from "./ThemeToggler"

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-primary/80 dark:text-white">
      <div className="container mx-auto flex items-center justify-between ">
        {/* logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Usman<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/*  desktop nav hire me  button */}
        <div className="xl:flex items-center gap-8">
          <Nav />
          <Socials
            containerStyle="flex flex-row gap-6 justify-center items-center"
            iconStyle="w-9 h-9 border border-accent bg-transparent dark:border-accent rounded-full flex justify-center items-center text-primary/80 dark:text-accent text-base hover:bg-accent dark:hover:text-primary hover:transition-all duration-500"
          />
          <Link href="/contact" className="hidden xl:block">
            <Button className="hover:text-white">Hire me</Button>
          </Link>
        </div>
        <ThemeToggler />
      </div>
    </header>
  )
}

export default Header
