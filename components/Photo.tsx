"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Avatar from "./Avatar"
import { fadeIn } from "@/lib/variants"

const Photo = () => {
  return (
    <div className="w-full h-full relative z-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[398px] h-[398px] xl:w-[498px] xl:h-[498px] left-[3px] xl:-left-12 relative"
        >
          <Image
            src="/assets/profile.png"
            priority
            quality={100}
            fill
            alt="Usman"
            className="object-contain mix-blend-lighten dark:brightness-75"
          />
        </motion.div>

        {/* circles */}
        <motion.svg
          className={`w-[300px]  h-[300px] xl:w-[406px] xl:h-[406px] absolute -top-[-62px] xl:-top-[-42px] left-[50px] xl:-left-[6px] xl:right-[8%] z-0`}
          fill="transparent"
          viewBox={"0 0 506 506"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
    // <>
    //   {/* Avatar image */}
    //   <motion.div
    //     variants={fadeIn("up", 0.5)}
    //     initial="hidden"
    //     animate="show"
    //     exit="hidden"
    //     transition={{ duration: 1, ease: "easeInOut" }}
    //     className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:-bottom-0 lg:right-[8%] "
    //   >
    //     <Avatar />
    //   </motion.div>
    // </>
  )
}

export default Photo
