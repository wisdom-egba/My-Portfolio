"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import wisdom from "./assets/RBWC-26.jpg"

import { useTypewriter, Cursor } from "react-simple-typewriter"
import About from "@/components/About"

export default function Home() {
  const [text] = useTypewriter({
    words: [
      `Hey there!, I'm Wisdom`,
      `A Tech Enthusiast`,
      `I'm a Frontend <Developer />`,
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 10,
    delay: 3,
  })
  return (
    <>
      <div className=" py-32 flex flex-col dark:bg-gray-900 justify-center items-center text-center overflow-hidden space-y-6">
        {/* <motion.img
        initial={{
          scale: 3,
        }}
        animate={{
          rotate: 360,
          scale: 1,
        }}
        transition={{
          duration: 2,
        }}
        viewport={{ once: true }}
        className="rounded-full w-[90px] h-[90px]"
        src={wisdom}
        alt=""
      /> */}
        <motion.div
          initial={{
            scale: 0.5,
          }}
          animate={{
            rotate: 360,
            scale: 1,
          }}
          transition={{
            duration: 2,
          }}
          viewport={{ once: true }}
        >
          <Image
            className="rounded-full"
            src={wisdom}
            loading="lazy"
            width={90}
            height={90}
            alt="wisdom"
          />
        </motion.div>

        <h1 className="text-xl md:text-4xl lg:text-5xl font-semibold scroll-px-10 text-gray-500 dark:text-gray-400">
          {text}
          <Cursor cursorColor="gray" />
        </h1>
        <motion.h2
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 2,
            delay: 0.5,
          }}
          viewport={{ once: true }}
          className="text-sm md:text-lg uppercase tracking-[15px] pb-2 text-gray-500 gradient-text"
        >
          Software Engineer
        </motion.h2>
        {/* <div className="z-20">
        <h1 className="text-xl md:text-4xl lg:text-5xl font-semibold scroll-px-10">
          {text}
          <Cursor cursorColor="gray" />
        </h1>
        <div className="pt-5 mx-1">
          <Link to="/about">
            <button className={toggleMode ? "heroBtn2" : "heroBtn"}>
              About
            </button>
          </Link>
          <Link to="/project">
            <button className={toggleMode ? "heroBtn2" : "heroBtn"}>
              projects
            </button>
          </Link>
          <Link to="/contact">
            <button className={toggleMode ? "heroBtn2" : "heroBtn"}>
              Contact
            </button>
          </Link>
        </div>
      </div> */}
      </div>
      <div className="dark:bg-gray-900 ">
        <About />
      </div>
    </>
  )
}
