import React from 'react'
import { motion } from "framer-motion"
import { Skill } from '../typings'
import { urlFor } from '../sanity'


type Props = {
    skill: Skill
    directionLeft?: boolean
}

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className='group relative top-8 sm:top-24 flex cursor-pointer'>
        <motion.img 
          initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{once: true}}
          src={urlFor(skill.image).url()}
          className='rounded-full border border-gray-500 object-cover w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-[#F7AB0A]/40 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-xl font-bold text-black opacity-100'>{skill.progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill