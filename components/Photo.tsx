"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
    <div className="relative flex justify-center items-center w-full">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.8, duration: 0.5, ease: "easeOut" },
        }}
        className="relative w-[180px] sm:w-[240px] md:w-[300px] lg:w-[350px] xl:w-[400px] top-1 left-1"
      >
        <Image
          src="/assets/profile1.png"
          priority
          quality={100}
          width={500}
          height={500}
          alt="User Profile"
          className="object-cover rounded-full"
        />
      </motion.div>

      {/* Circle Animation */}
      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.5, ease: "easeOut" },
        }}
      >
        <motion.svg
          className="w-full h-full"
          viewBox="0 0 500 500"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="250"
            cy="250"
            r="210" // Sesuaikan radius dengan viewBox agar pas
            stroke="#00ff99"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "10 20" }}
            animate={{
              strokeDasharray: ["15 90 30 30", "16 50 100 70", "4 200 20 20"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo
