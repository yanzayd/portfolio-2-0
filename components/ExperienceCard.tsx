/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from "framer-motion"
import { Experience } from '../typings'
import { urlFor } from '../sanity'
import { url } from 'inspector'


type Props = {
   experience: Experience
}

function ExperienceCard({ experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-0 sm:space-y-5 flex-shrink-0 w-[300px]  md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
        <motion.img
           initial={{
            y: -100,
            opacity: 0,
           }}
           transition={{ duration: 1.2 }}
           whileInView={{ opacity: 1, y:0}}
           viewport={{ once:true}}
           className='w-24 xs:w-28 h-24 xs:h-28 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center' 
           src={urlFor(experience?.companyImage).url()} 
           alt="" />

           <div className='p-0 md:px-10 text-center'>
              <h4 className='text-xl sm:text-2xl font-bold'>{experience?.jobTitle}</h4>
              <p className='font-bold mt-1'>{experience?.company}</p>
              <div className='flex space-x-2 my-2'>
               {experience.technologies.map(technology => (
                  <img 
                  key={technology._id}
                  className='h-8 w-8 rounded-full'
                  src={urlFor(technology?.image).url()}
                  alt=''
                  />
               ))}
              </div>
              <p className='uppercse py-0 text-[#948f8f] '>
                 {new Date(experience.dateStarted).toDateString()}{" "} - {" "}
                 {experience.isCurrentlyWorkingHere
                 ? "Present" : new Date(experience.dateEnded).toDateString()
               } 
               </p>

              <ul className='list-disc space-y-2 ml-5 pl-5 text-left text-sm xs:text-lg h-44 xl:h-64 overflow-x-hidden overflow-y-auto overflow-scroll scrollbar scrollbar-thin scrollbar-track-gray-400/10 scrollbar-thumb-[#F7AB0A]/30'>
                {experience.points?.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
           </div>
    </article>
  )
}

export default ExperienceCard