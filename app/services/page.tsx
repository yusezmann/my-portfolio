"use client"

import { BsArrowDownRight } from "react-icons/bs"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  {
    num: "01",
    title: "Full Stack Development",
    description:
      "I'm a full stack developer with a passion for creating innovative and user-friendly applications.",
    icon: <BsArrowDownRight />,
    path: "",
  },
  {
    num: "02",
    title: "Web Development",
    description:
      "I'm a web developer with a passion for creating innovative and user-friendly applications.",
    icon: <BsArrowDownRight />,
    path: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "I'm a UI/UX designer with a passion for creating visually appealing and user-friendly interfaces.",
    icon: <BsArrowDownRight />,
    path: "",
  },
  {
    num: "04",
    title: "Data Science",
    description:
      "I'm a data scientist with a passion for using data to drive innovation and improve business outcomes.",
    icon: <BsArrowDownRight />,
    path: "",
  },
]

const Service = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] mb-8 xl:mb-0"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center ">
                  <div className="text-5xl font-extrabold text-outline text-transparent/60 dark:text-transparent  group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.path}
                    className="w-[70px] h-[70px] rounded-full bg-primary/80 dark:bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-white dark:text-primary text-3xl" />
                  </Link>
                </div>

                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-primary/80 dark:text-white/80 group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>

                {/* description */}
                <p className="text-primary/60 dark:text-white/60">
                  {service.description}
                </p>

                {/* border */}
                <div className="border-b border-primary/20 dark:border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Service
