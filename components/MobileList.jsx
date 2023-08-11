"use client"
import React from "react"
import { AiOutlineClose } from "react-icons/ai"

const MobileList = ({ toggle, setToggle }) => {
  return (
    <div>
      <ul className=" relative flex py-5 pt-12 flex-col h-screen gap-9 items-center gradient-text">
        <button
          onClick={() => setToggle(!toggle)}
          className="absolute right-0 top-0 p-4 text-indigo-200"
        >
          {toggle && <AiOutlineClose size={40} />}
        </button>
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
  )
}

export default MobileList
