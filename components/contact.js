"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "workwithsuman0@gmail.com";
    const [state, handleSubmit] = useForm("mvgbrkre");
    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    if (state.succeeded) {
        return (
            <section className="min-h-screen flex flex-col items-center justify-center">
                <p className="text-2xl font-semibold text-green-600">
                    ✅ Thanks for your message! I’ll get back to you soon.
                </p>
                <Link href="/" className="mt-6 text-blue-500 underline">
                    Go back home
                </Link>
            </section>
        );
    }

    return (

        <section className='min-h-screen flex flex-col  items-start sm:px-10 px-2'>
            <div className="sm:min-h-20 min-h-12 border-b w-full border-black/5 flex justify-start items-center sm:px-0 px-0.5 ">
                <Link href='/' ><span className='sm:text-3xl text-xl font-medium  '>HOME</span></Link>
            </div>

            <div className="sm:mt-32 mt-20 font-bold max-w-2xl sm:px-8">
                <h1 className='sm:text-9xl text-6xl'>SHOOT A REQUEST</h1>
            </div>
            <div className="sm:mt-[108px] mt-12 flex sm:min-h-[600px] space-y-4 sm:justify-between sm:flex-row flex-col sm:mb-24 w-full ">
                <div className="text-xl font-medium items-center h-fit flex  px-3 sm:gap-2 gap-3">
                    <span>{email}</span>

                    <span className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"><Image src="/copy.svg"
                        priority={false}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 12px,(max-width: 1024px) 15px,20px" alt="copylogo" onClick={handleCopy} /></span>
                </div>
                <div className="flex flex-col sm:w-1/2  gap-3 text-xl items-center font-medium text-gray-500">
                    <form onSubmit={handleSubmit} method="post" className='  bg-white flex flex-col space-y-3 sm:w-full min-w-[365px]'>

                        <input type="text" name="name" id="" placeholder='Your Name' className="h-20 bg-gray-100  p-2" />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="h-20 bg-gray-100 p-2 "
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Your Message Starts Here"
                            className="h-44 bg-gray-100 w-full p-2 rounded-md"
                        ></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />


                        <button type='submit' disabled={state.submitting} className='bg-black/70 p-6 text-white'>{state.submitting ? "Sending..." : "Send It!"}</button>
                        <ValidationError errors={state.errors} />
                    </form>

                </div>
            </div>
        </section>
    )
}

export default Contact