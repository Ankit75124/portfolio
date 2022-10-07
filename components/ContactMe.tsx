import React from 'react'
import {motion} from "framer-motion";
import Title from "./Title"
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid";


type Props = {}

export default function ContactMe({}: Props) {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">

        <Title name="Contact"/>

        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">
                Want to have conversation ? {" "}
                <span className="underline decoration-[#F7AB0A]/50">Lets Talk</span>
            </h4>

            <div className="space-y-10">
                <div className="flex items-center space-x-5 justify-center">
                <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                <p className="text-2xl">+917322707431</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                <p className="text-2xl">barnwalankit076@gmail.com</p>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"/>
                <p className="text-2xl">Chennai, India</p>
                </div>

            </div>

            <form className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2">
                    <input placeholder="Name"className="contactInput"type="text" />
                    <input placeholder="Email"className="contactInput"type="email" />
                </div>

                <input placeholder="Subject" className="contactInput"type="text" />

                <textarea placeholder="Message" className="contactInput"name="" id="" ></textarea>   
                <button type="submit" className="bg-[#F7AB0A] px-10 py-5 rounded-md text-black font-bold text-lg">Submit</button> 
            </form>            

        </div>

    </div>
  )
}