"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Noteflix",
    description: "Library web Movie with Netflix view",
    stack: [{ name: "React" }, { name: "Tailwind" }, { name: "Next.js" }],
    image: "/assets/work/noteflix.png",
    live: "https://noteflix-phi.vercel.app/",
    github: "https://github.com/yusezmann/noteflix",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Quran Apps",
    description: "Web Al quran with shalat schedule",
    stack: [{ name: "React" }, { name: "Tailwind" }, { name: "Next.js" }],
    image: "/assets/work/quran-apps.png",
    live: "https://quran-apps-brown.vercel.app/",
    github: "https://github.com/yusezmann/quran-apps",
  },
  {
    num: "03",
    category: "Fullstack Developer",
    title: "Hotel book application",
    description: "Web application for hotel booking",
    stack: [
      { name: "React" },
      { name: "Strapi" },
      { name: "Sqlite" },
      { name: "Next.js" },
    ],
    image: "/assets/work/fastbook.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Fullstack Developer",
    title: "Inventory Management",
    description: "Inventory management system for a startup company",
    stack: [{ name: "Laravel" }, { name: "Vue" }, { name: "Tailwind" }],
    image: "/assets/work/ims.png",
    live: "",
    github: "",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0])
  const handleSlideChange = (swiper: any) => {
    // get current
    const currentIndex = swiper.activeIndex

    // update project
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80px] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] mb-12 xl:mb-0">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline  num*/}
              <div className="text-8xl leading-none font-extrabold text-transparent/60 dark:text-transparent text-outline">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-primary dark:text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>

              {/* project description */}
              <p className="text-primary/60 dark:text-white/60">
                {project.description}
              </p>

              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="text-xl text-primary dark:text-accent"
                    >
                      {item.name}

                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ", "}
                    </li>
                  )
                })}
              </ul>

              {/* border */}
              <div className="border border-primary/20 dark:border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live demo */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=" w-[70px] h-[70px] rounded-full bg-accent dark:bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-primary dark:text-white text-3xl group-hover:text-white dark:group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-primary/80 dark:bg-white">
                        <p className="text-white dark:text-primary">
                          Live Demo
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=" w-[70px] h-[70px] rounded-full bg-accent dark:bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-primary dark:text-white text-3xl group-hover:text-white dark:group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-primary/80 dark:bg-white">
                        <p className="text-white dark:text-primary">
                          Github Repository
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}

              {/* slider button */}
              <WorkSliderBtns
                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyle="bg-accent rounded-full hover:bg-accent-hover hover:text-white/60 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
