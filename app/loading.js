import Loader from "@/components/Loader"
import React from "react"

export default function loading() {
  return (
    <div className="flex justify-center h-screen items-center">
      <Loader />
    </div>
  )
}
