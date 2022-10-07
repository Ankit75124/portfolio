import React from 'react'
import {motion} from "framer-motion";
import Title from "./Title"
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};



type Props = {}

function ContactMe({}: Props) {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href =`mailto:barnwalankit076@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}(${formData.email})`
    }

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">

        <Title name="Contact"/>

        <div className="flex flex-col space-y-10">
            <h4 className="text-4xl font-semibold text-center">
                Want to have conversation ? {" "}
                <span className="underline decoration-[#F7AB0A]/50">{"Let's Talk"}</span>
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

            <form onSubmit={handleSubmit(onSubmit)}className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2">

                    <input 
                    {...register('name')}
                    placeholder="Name" 
                    className="contactInput"
                    type="text" />

                    <input 
                    {...register('email')}
                    placeholder="Email"
                    className="contactInput"
                    type="email" />

                </div>

                <input 
                {...register('subject')} 
                placeholder="Subject" 
                className="contactInput"
                type="text" />

                <textarea {...register('message')}placeholder="Message"
                className="contactInput"/>

                <button 
                type="submit" 
                className="bg-[#F7AB0A] px-10 py-5 rounded-md text-black font-bold text-lg">Submit</button> 
            </form>            

        </div>

    </div>
  );
}

export default ContactMe;