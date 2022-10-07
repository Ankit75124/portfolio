/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react'
import {motion} from "framer-motion";
import Title from "./Title"

type Props = {}

export default function Projects({}: Props) {

    const projects= [1,2,3,4,5];

  return (
    <motion.div
      initial={{
        opacity:0,
      }}
      whileInView={{
        opacity:1,
      }}
      transition={{
        duration:1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full  justify-evenly mx-auto items-center z-0">

        <Title name="Projects" />

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
            {/* Projects */}
            {projects.map((project,i) =>(
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    
                    <motion.img 
                    initial={{
                        y:-300,
                        opacity:0
                    }}
                    transition={{
                        duration:1.2
                    }}
                    whileInView={{
                        opacity:1,
                        y:0
                    }}
                    viewport={{once:true}}
                    src="https://media-exp1.licdn.com/dms/image/C4E0BAQFFxwyG3oCLQw/company-logo_200_200/0/1642769710454?e=2147483647&v=beta&t=M4h4-b-R99m9tI_p17mH0F7vi0bmQfFooAItWUPeBb4" alt="" />

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#F7AB0A]/50">Case {i+1} of {projects.length} :</span>  1stkdjks
                        </h4>

                        <p className="text-lg text-center md:text-left">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla placeat inventore recusandae soluta alias, labore quam, quaerat id sequi in, accusantium facere! Incidunt doloribus obcaecati maxime omnis necessitatibus repudiandae, vero veniam? Commodi dicta ratione excepturi aliquid quis reiciendis nisi aperiam, non blanditiis amet, impedit harum quibusdam molestiae perspiciatis recusandae inventore reprehenderit eaque animi, officia doloribus quos architecto corporis.
                        </p>

                    </div>
                </div>
            ))}

        </div>

        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"/>

      </motion.div>
  )
}