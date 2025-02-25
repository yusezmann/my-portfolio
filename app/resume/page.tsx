"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaVuejs,
} from "react-icons/fa"

import { SiTailwindcss, SiNextdotjs, SiLaravel } from "react-icons/si"

// about data
const about = [
  {
    title: "About me",
    description:
      "I'm a front-end developer with a passion for creating innovative and user-friendly applications.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Usman",
      },
      {
        fieldName: "Email",
        fieldValue: "usmanfauzi@gmail.com",
      },
      {
        fieldName: "Phone",
        fieldValue: "+62 856 5923 9337",
      },
      {
        fieldName: "Experience",
        fieldValue: "5 + years",
      },
      {
        fieldName: "Freelance",
        fieldValue: "Available",
      },
      {
        fieldName: "Address",
        fieldValue: "Bandung, Indonesia",
      },
    ],
  },
]

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: " My Experience",
  description:
    "I've worked with various clients and projects, gaining valuable experience in my field.",
  items: [
    {
      company: "PT. Swamedia Informatika",
      position: "Frontend Developer",
      duration: "May 2022 - Present",
    },
    {
      company: "Freelance Developer",
      position: "Web Developer",
      duration: "May 2021 - May 2022",
    },
    {
      company: "PT. Akar Teknologi Indonesia",
      position: "Web Developer",
      duration: "May 2019 - May 2021",
    },
  ],
}

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: " My Education",
  description:
    "I've completed various courses and programs to enhance my skills and knowledge.",
  items: [
    {
      institution: "Politeknik Piksi Ganesha Bandung",
      degree: "Bachelor's degree in Informatics Management",
      duration: "2012 - 2016",
    },
    {
      institution: "Niomic Bootcamp",
      degree: "Web Developer",
      duration: "2016 - 2018",
    },
    {
      institution: "Udemy Online Courses",
      degree: "Next.js Developer",
      duration: "May 2022",
    },
  ],
}

// skills data
const skills = {
  title: " My Skills",
  description:
    "I'm a skilled developer with a passion for creating innovative and user-friendly applications.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaVuejs />,
      name: "Vue.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiLaravel />,
      name: "Laravel",
    },
  ],
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh w-full">
            {/* experience */}
            <TabsContent
              value="experience"
              className="w-full h-full -z-10 xl:z-0"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-primary/80 dark:text-white">
                  {experience.title}
                </h3>
                <p className="max-w-[600px] text-primary/60 dark:text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] mb-12 xl:mb-0">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-primary/80 dark:text-white">
                  {education.title}
                </h3>
                <p className="max-w-[600px] text-primary/60 dark:text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] mb-12 xl:mb-0">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-primary/80 dark:text-white">
                    {skills.title}
                  </h3>
                  <p className="max-w-[600px] text-primary/60 dark:text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] mb-12 xl:mb-0">
                  {skills.skillList.map((skill, index) => (
                    <li key={index} className="">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent className="bg-[#232329] dark:bg-white">
                            <p className="text-white dark:text-primary">
                              {skill.name}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-primary/80 dark:text-white">
                  {about[0].title}
                </h3>
                <p className="max-w-[600px] text-primary/60 dark:text-white/60 mx-auto xl:mx-0">
                  {about[0].description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 mb-12 xl:mb-0">
                  {about[0].info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-primary/60 dark:text-white/60">
                          {item.fieldName}
                        </span>
                        <span className="text-xl text-primary/80 dark:text-white">
                          {item.fieldValue}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
