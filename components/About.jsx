import { motion } from "framer-motion"
import React from "react"

const About = () => {
  return (
    <div className="mx-3">
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
        className="gradient-text text-5xl font-bold"
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
        className=""
      >
        Hello, my name is Wisdom, I'm a frontend developer passionate on
        collaborating with other developers to proffer solutions to real-life
        problems. I have a B.Eng degree in Mechanical Engineering.
      </motion.p>
    </div>
  )
}

export default About
