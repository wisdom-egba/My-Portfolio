import { motion } from "framer-motion"
import React from "react"

const About = () => {
  return (
    <div className="md:max-w-[80%] lg:max-w-[50%] mx-auto">
      <div className="h-1 md:h-2 w-[10%] md:mx-0 bg-sky-400 my-8 rounded-md outline-none" />
      <motion.h1
        initial={{
          x: -50,
          opacity: 0.3,
          scale: 0.2,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        viewport={{ once: true }}
        className="gradient-text text-5xl font-bold mx-3"
      >
        About Me
      </motion.h1>
      <motion.p
        initial={{
          y: -100,
          opacity: 0.2,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{ once: true }}
        className="md:w-[70%] mx-3 py-3"
      >
        Hello, my name is Wisdom, I'm a frontend developer passionate on
        collaborating with other developers to proffer solutions to real-life
        problems. I have a B.Eng degree in Mechanical Engineering.
      </motion.p>
    </div>
  )
}

export default About
