"use client"

import { FiDownload } from "react-icons/fi"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import Counter from "./Counter"

const HeroText = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2, duration: 0.4, ease: "easeIn" },
      }}
    >
      <h1 className="h1 mb-6 text-primary/80 dark:text-white/80">
        Hello I&apos;m <br /> <span className="text-accent">Usman</span>
      </h1>
      <p className="max-w-[500px] mb-5 text-primary/80 dark:text-white/80">
        I&apos;m a Web developer with a passion for creating innovative and
        user-friendly applications.
      </p>

      {/* btn & socials */}
      <div className="flex flex-col xl:flex-row gap-8 mb-24 xl:mb-0">
        <Button
          variant="outline"
          size="lg"
          className="uppercase flex items-center gap-2 hover:bg-accent hover:text-white hover:transition-all duration-500 z-[2]"
        >
          <span>Download CV</span>
          <FiDownload className="text-xl" />
        </Button>
      </div>

      {/* counter */}
      {/* <div className="mt-8 mb-[84px] xl:mb-0">
        <Counter />
      </div> */}
    </motion.div>
  )
}

export default HeroText
