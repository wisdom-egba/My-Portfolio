import { motion } from "framer-motion"
import React from "react"

const Project = () => {
  return (
    <div className="md:max-w-[80%] lg:max-w-[50%] mx-auto">
      <div className="flex justify-end">
        <div className="h-1 md:h-2 w-[10%] md:mx-0 bg-sky-400 my-8 rounded-md outline-none text-end" />
      </div>

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
        className="gradient-text text-5xl font-bold mx-3 text-end"
      >
        Projects
      </motion.h1>
    </div>
  )
}

export default Project
