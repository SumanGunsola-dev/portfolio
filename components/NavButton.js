"use client"
import React, { useState } from 'react'


const NavButton = () => {
    const [nav, setnav] = useState(false)

    const handleNav = () => {
        setnav(!nav)
    }

    return (
        <>
            <div className="nata  font-medium">

                <div className={nav ? "sm:hidden fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center w-screen h-screen bg-white text-center ease-in duration-300 z-40 " : "sm:hidden fixed top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-white text-center ease-in duration-300 z-40"}>
                    <div className=' space-y-8 text-2xl font-medium ' >
                        <a onClick={handleNav} href="#header " className='block'> Home</a>
                        <a onClick={handleNav} href="#about" className='block'>About</a>
                        <a onClick={handleNav} href="#services " className='block'>Services</a>
                        <a onClick={handleNav} href="#skills" className='block'>Skills</a>
                        <a onClick={handleNav} href="#projects" className='block'>Projects</a>
                        <a onClick={handleNav} href="#contact " className='block'>Contact </a>
                    </div>
                </div>
                <button onClick={handleNav} className="sm:hidden fixed z-50 top-5 left-5 bg-white p-3 rounded-md shadow-lg shadow-gray-300">
                    {nav ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                    )}
                </button>
            </div>
        </>
    )
}

export default NavButton