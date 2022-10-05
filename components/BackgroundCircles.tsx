import React from 'react'
import { motion } from "framer-motion"


type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        animate={{
            scale: [1, 2, 2, 3, 1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0 ],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
            duration: 2.5,
        }}
        className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] rounded-full h-[50px] w-[50px] mt-64 sm:mt-52  animate-ping'  />
        <div className='absolute border border-[#333333] rounded-full h-[100px] w-[100px] mt-64 sm:mt-52 '  />
        <div className='absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-64 sm:mt-52 '  />
       
        <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[400px] w-[400px] absolute mt-64 sm:mt-52 animate-pulse'/>
        <div className='absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-64 sm:mt-52 '  />

    </motion.div>
  )
}

export default BackgroundCircles