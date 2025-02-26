"use client"

import { FiDownload } from "react-icons/fi"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

const HeroText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.8, duration: 0.5, ease: "easeOut" },
      }}
    >
      <h1 className="h1 mb-6 text-primary/80 dark:text-white/80">
        Hello, I&apos;m <br /> <span className="text-accent">Usman</span>
      </h1>
      <p className="max-w-full md:max-w-[500px] mb-5 text-primary/80 dark:text-white/80 px-4 md:px-0">
        I&apos;m a Web Developer with a passion for creating innovative and
        user-friendly applications.
      </p>

      {/* Button */}
      <div className="flex flex-col xl:flex-row gap-4 md:gap-8 mb-14 xl:mb-0">
        <Button
          variant="outline"
          size="lg"
          className="uppercase flex items-center gap-2 hover:bg-accent hover:text-white transition-all duration-300 w-full md:w-auto"
        >
          <Link
            href="/assets/document/Usman.pdf" // Ganti dengan path file CV yang benar
            download="CV_Usman.pdf" // Nama file saat diunduh
            className="uppercase flex"
          >
            <span>Download CV</span>
            <FiDownload className="ml-2 text-xl" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}

export default HeroText
