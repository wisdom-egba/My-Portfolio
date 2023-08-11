"use client"
import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import MobileList from "./MobileList"
import useDarkMode from "@/hooks/useDarkMode"

const NavBar = () => {
  const [colorTheme, setTheme] = useDarkMode()
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className="relative dark:bg-gray-800 bg-sky-100 flex items-center justify-between">
        <div className=" flex items-center h-16 px-4">
          <h1 className="text-white">Portfolio</h1>
        </div>
        <div className="hidden md:inline-block">
          <ul className="flex text-white">
            <li>
              <a href=""></a>Home
            </li>
            <li>
              <a href=""></a>About
            </li>
            <li>
              <a href=""></a>Skill
            </li>
            <li>
              <a href=""></a>Projects
            </li>
            <li>
              <a href=""></a>Contact
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center gap-6 mr-4">
          <div className="text-white md:hidden flex">
            <button onClick={() => setToggle(!toggle)}>
              {toggle ? null : <AiOutlineMenu size={30} />}
            </button>
          </div>
          {colorTheme === "light" ? (
            <svg
              onClick={() => setTheme("light")}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setTheme("dark")}
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </div>
      </div>
      {toggle && (
        <div className=" transition duration-500 md:hidden">
          <MobileList toggle={toggle} setToggle={setToggle} />
        </div>
      )}
    </>
  )
}

export default NavBar
