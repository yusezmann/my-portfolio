"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
  return (
    <div className="relative flex justify-center items-center w-full">
      {/* Circle Animation */}
      <motion.div
        className="absolute flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.5, duration: 0.5, ease: "easeOut" },
        }}
      >
        <motion.svg
          className="w-[80vw] max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]" // Responsif sesuai ukuran layar
          viewBox="0 0 500 500"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="250"
            cy="250"
            r="240"
            stroke="#00ff99"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.8, duration: 0.5, ease: "easeOut" },
        }}
        className="relative -z-10 w-[80vw] max-w-[280px] sm:max-w-[350px] lg:max-w-[450px] xl:max-w-[650px] xl:left-[80px] top-[28px] xl:top-[45px]" // Responsif
      >
        <Image
          src="/assets/profile.png"
          priority
          quality={100}
          width={500}
          height={500}
          alt="User Profile"
          className="object-cover rounded-full"
        />
      </motion.div>
    </div>
  )
}

export default Photo
