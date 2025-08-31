import React from 'react'

const Navbar = () => {
    return (
        <nav className="nata  sm:flex hidden fixed justify-center z-10 w-full mb-30  ">

            <div className=' mt-5 shadow-blue-300 rounded-full shadow-xl py-4 px-5
         min-w-fit items-center  space-x-8 justify-between max-h-16 bg-white text-lg flex sm:text-2xl font-medium ' >
                <a href="#header "> Home</a>
                <div className="min-h-full bg-black w-[1.5px]"></div>
                <a href="#about">About</a>
                <div className="min-h-full bg-black w-[1.5px]"></div>
                <a href="#services ">Services</a>
                <div className="min-h-full bg-black  w-[1.5px]"></div>
                <a href="#skills">Skills</a>
                <div className="min-h-full bg-black  w-[1.5px]"></div>
                <a href="#projects">Projects</a>
                <div className="min-h-full bg-black  w-[1.5px]"></div>
                <a href="#contact ">Contact </a>
            </div>
        </nav>

    )
}

export default Navbar