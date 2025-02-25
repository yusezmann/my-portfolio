"use client"

import { motion } from "framer-motion"

// variants
const stairAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
}

// calculate the reverse index for staggred delay
const reverseIndex = (index: any) => {
  const totalSteps = 6
  return totalSteps - index
}

const Stairs = () => {
  return (
    <>
      {/* Render & motion div, each representing a step of the stairs.
          Each div will have animations defined by the stairAnimation object.
          The delay for each div is calculated dynamically based on its reversed index,
          creating a staggered effect with decreasing delay for each subsequent step. */}
      {Array.from({ length: 6 }).map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white/10 relative"
        />
      ))}
    </>
  )
}

export default Stairs
