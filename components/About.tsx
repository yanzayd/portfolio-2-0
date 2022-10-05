import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
import { url } from 'inspector'

type Props = {
  pageInfo: PageInfo
}

export default function About({ pageInfo}: Props) {
  return (
    <motion.div
       initial={{ opacity: 0 }}
       whileInView={{ opacity: 1 }} 
       transition={{ duration: 1.5 }}
       className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-5xl p-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
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
        src={urlFor(pageInfo?.profilePicture).url()}
        className='-mb-20 md:mb-0 flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover
                   md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px] object-top  '
        />
        <div className='space-y-2 sm:space-y-2 px-0 md:px-10'>
            <h4 className='text-2xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} background</h4>
            <p className='text-sm h-40 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/50'>
              {pageInfo?.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}