/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'
import { motion } from "framer-motion"
import { Project } from '../typings'
import { urlFor } from '../sanity'


type Props = {
  projects: Project[]
}

function Projects({ projects}: Props) {
    // const projects = [1, 2, 3, 4, 5]
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl '>
            Projects
        </h3>
        
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/50'>
          {projects?.map((project, i) => (
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                <motion.img 
                     initial={{
                      x: -200,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    whileInView={{opacity: 1,x: 0}}
                    viewport={{once: true}}
                    className='w-52 md:w-62 lg:w-80' 
                   src={urlFor(project.image).url()} 
                   alt="" />
 
                <div className='space-y-3 px-0 md:px-10 max-w-6xl'> 
                    <h4 className='text-xl sm:text-sm font-semibold text-center'> 
                        <span className='underline decoration-[#F7AB0A]/50'>
                          Case Study {i + 1} of {projects.length}: 
                        </span>{' '} 
                          {project?.title}
                    </h4>
                   <div className='flex items-center justify-center space-x-2'>
                   {project?.technologies.map(technology => (
                      <img 
                        className='h-7' 
                        key={technology._id}
                        src={urlFor(technology?.image).url()}
                        alt="" 
                      />
                    ))}
                   </div>
                    <p className='text-sm  md:text-left h-20 overflow-x-hidden overflow-y-auto overflow-scroll scrollbar scrollbar-thin scrollbar-track-gray-400/10 scrollbar-thumb-[#F7AB0A]/30 pr-5'>
                      {project?.summary}
                    </p>
                </div>
            </div>
          ))}
        </div>

       <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12' />
  
    </div>
  )
}

export default Projects