import React from 'react'
import {motion} from "framer-motion";
import ExperienceCard from './ExperienceCard';
import Title from "./Title"
import { Experience } from '../typings';



type Props = {
    experiences:Experience[];
}

export default function WorkExperience({experiences}: Props) {
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
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center ">

        <Title name="Experience" />

        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">

            {experiences?.reverse().map(experience =>(
                <ExperienceCard
                key={experience._id}
                experience={experience}
                />
            ))}

        </div>




        
    </motion.div>
  )
}