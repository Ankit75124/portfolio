import React from 'react'
import {motion} from "framer-motion";
import Title from "./Title";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';


type Props = {
    pageInfo:PageInfo
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div 
    initial={{
            opacity:0,
        }}
        whileInView={{
            opacity:1,
        }}
        transition={{
            duration:1.2,
        }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
       <Title name="About"/>


            <motion.img
            initial={{
            x:-200,
            opacity:0,
        }}
        whileInView={{
            opacity:1,
            x:0
        }}
        viewport={{once:true}}
        transition={{
            duration:1.2,
        }}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
                src={urlFor(pageInfo?.heroImage).url()} 
        
            />


        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Here is <span className='underline decoration-[#f7AB0A]'>little</span> background
            </h4>

            <p className='text-base'>
                {pageInfo?.backgroundInformation}
            </p>

        </div>

    </motion.div>
  )
}