"use client"

import { motion } from "framer-motion"
import CounterUp from "react-countup"
import { fadeIn } from "@/lib/variants"

const Counter = () => {
  return (
    <>
      {/* counter */}
      <motion.div
        variants={fadeIn("right", 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 z-0"
      >
        <div className="flex flex-1 xl:gap-x-6">
          {/* experience */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CounterUp start={0} end={10} duration={5} /> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Years of experience
            </div>
          </div>

          {/* clients */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CounterUp start={0} end={250} duration={5} /> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Satisfied clients
            </div>
          </div>

          {/* projects */}
          <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
              <CounterUp start={0} end={650} duration={5} /> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
              Finished projects
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Counter
