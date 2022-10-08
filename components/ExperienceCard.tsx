/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {motion} from "framer-motion";
import mainImg from "../images/1st.jpeg";
import { Experience } from '../typings';
import { urlFor } from '../sanity';



type Props = {
    experience:Experience;
}

export default function ExperienceCard({experience}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] bg-[#292929] snap-center p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">

        <motion.img
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src={urlFor(experience?.companyImage).url()}

        initial={{
            y:-100,
            opacity:0,
        }}
        whileInView={{
            opacity:1,
            y:0
        }}
        viewport={{once:true}}
        transition={{
            duration:1.2,
        }}
        />

        <div className="px-0 md:pad-10">
            <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
            <p className="font-bold text-2xl mt-1">{experience.company}</p>
            <div className="flex space-x-2 my-2">
                {/* Tech Used */}
                {experience.technologies.map(technology =>(
                    <img 
                className="h-10 w-10 rounded-full" src={urlFor(technology?.image).url()} />
                ))}
            </div>
            

            <ul className="list-disc space-y-4 ml-5 text-lg pr-5">
                {experience.points.map((point,i) =>(
                    <li key={i}>{point}</li>
                ))}

            </ul>

        </div>
        
    </article>
  )
}