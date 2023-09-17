import React from "react"

const ProjectCard = ({ info }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center md:place-items-stretch ">
      {info.map((item) => (
        <div key={item.id} className="py-3 ">
          <div className=" rounded-lg w-[300px] bg-slate-950 shadow-2xl ">
            <div className="w-[300px] h-[200px] bg-red-700 flex items-center justify-center rounded-t-lg ">
              <h1>{item.title}</h1>
            </div>

            <div className="text-center pt-5">
              <h1 className="gradient-text text-3xl font-bold">{item.title}</h1>

              <div className="flex justify-center items-center py-3">
                <div className="h-2 md:h-1 w-[10%] md:w-[20%] md:mx-0 bg-sky-400 rounded-md outline-none text-end" />
              </div>

              <p className="text-white">{item.description}</p>

              <div>
                <h3 className="gradient-text">Tech Stack</h3>

                <div className="flex justify-center items-center py-3">
                  <div className="h-2 md:h-1 w-[10%] md:w-[20%] md:mx-0 bg-sky-400 rounded-md outline-none text-end" />
                </div>

                <ul className="flex gap-3 justify-center py-6 text-white">
                  {item.tags.map((stack) => (
                    <li key={stack}>{stack}</li>
                  ))}
                </ul>

                <div className="flex justify-center py-6 gap-5 ">
                  <button className="btn1 ">
                    <a href={item.visit}>Live Preview</a>
                  </button>
                  <button className="btn1">
                    <a href={item.source}>Source Code</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  // return (<div>{info.map((item) => {
  //   return <div className=" rounded-lg w-[300px] bg-slate-950">
  //     <div className="w-[300px] h-[200px] bg-red-700 flex items-center justify-center rounded-t-lg ">
  //       hello
  //     </div>
  //     <div className="text-center pt-5">
  //       <h1 className="gradient-text text-3xl font-bold">title</h1>
  //       <div className="flex justify-center items-center py-3">
  //         <div className="h-2 md:h-1 w-[10%] md:w-[20%] md:mx-0 bg-sky-400 rounded-md outline-none text-end" />
  //       </div>
  //       <p>
  //         ABS Tweaks or Arkaynine Boost Script is a collection of shell
  //         scripts written with the aim of enhancing the performance and
  //         battery life of an Android phone. It got 2 Lac+ downloads overall.
  //       </p>
  //       <div>
  //         <h3 className="gradient-text">Tech Stack</h3>
  //         <div className="flex justify-center items-center py-3">
  //           <div className="h-2 md:h-1 w-[10%] md:w-[20%] md:mx-0 bg-sky-400 rounded-md outline-none text-end" />
  //         </div>
  //         <ul className="flex gap-28 justify-center py-6">
  //           <li>python</li>
  //           <li>shell</li>
  //         </ul>
  //         <div className="flex justify-center py-6 gap-5 ">
  //           <button className="btn1 ">Live Preview</button>
  //           <button className="btn1">Source Code</button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // }</div>}
}

export default ProjectCard
