/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {motion} from "framer-motion";
import mainImg from "../images/1st.jpeg";



type Props = {}

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] bg-[#292929] snap-center p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">

        <motion.img
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            src="https://media-exp1.licdn.com/dms/image/C4E0BAQFFxwyG3oCLQw/company-logo_200_200/0/1642769710454?e=2147483647&v=beta&t=M4h4-b-R99m9tI_p17mH0F7vi0bmQfFooAItWUPeBb4"

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
            <h4 className="text-4xl font-light">Data Manager</h4>
            <p className="font-bold text-2xl mt-1">Glencore</p>
            <div className="flex space-x-2 my-2">
                {/* Tech Used */}
                <img 
                className="h-10 w-10 rounded-full" src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png" />
                <img 
                className="h-10 w-10 rounded-full" src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png" />
                <img 
                className="h-10 w-10 rounded-full" src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png" />
            </div>
            <p className="uppercase py-5 text-gray-300">Started.... - Ended ...</p>

            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summary</li>
                <li>Summary</li>
                <li>Summary</li>
                <li>Summary</li>
                <li>Summary</li>
            </ul>

        </div>
        
    </article>
  )
}