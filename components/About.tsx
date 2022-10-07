import React from 'react'
import {motion} from "framer-motion";
import mainImg from "../images/1st.jpeg";
import Image from 'next/image';
import Title from "./Title.tsx"


type Props = {}

export default function About({}: Props) {
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
                src="https://media-exp1.licdn.com/dms/image/C4D03AQHny8Y08xFMSA/profile-displayphoto-shrink_200_200/0/1657438610656?e=1670457600&v=beta&t=dLgVza7suK2Y-j4NA9FrGK62-h_wjnreCWzPSqimtqY"
        
            />


        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Here is <span className='underline decoration-[#f7AB0A]'>little</span> background
            </h4>

            <p className='text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laudantium deleniti repudiandae neque dolorum recusandae dolorem facere, molestias doloremque vel laborum earum architecto itaque minus, tempore natus, magni non ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore sapiente accusamus culpa a, velit voluptatibus necessitatibus! Veritatis ut corporis est, quas fugit vitae illo totam, at explicabo ipsum aspernatur porro cum blanditiis quidem id voluptate magni quia, obcaecati qui repellat? Mollitia eligendi magnam error reiciendis dolore non, at cum ullam exercitationem minus voluptas amet quis inventore voluptate quam. Alias facere beatae, neque, itaque reprehenderit in doloremque necessitatibus incidunt ducimus obcaecati amet quo? Sequi, similique. Quam debitis cupiditate earum doloribus illum doloremque, placeat, nemo maxime non totam quibusdam. Quisquam, delectus nam. Harum tenetur sit magni labore animi quam a saepe culpa nihil dicta.
            </p>

        </div>

    </motion.div>
  )
}