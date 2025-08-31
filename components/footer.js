import React from 'react'

const Footer = () => {
    return (
        <section id="contact" className="flex animat scroll-mt-32 flex-col bg-black  sm:px-14 px-3 min-h-screen mt-32  min-w-full ">
            <div className="text-white font-medium flex text-sm  sm:text-lg mt-16 sm:px-4 justify-end gap-2 sm:gap-5 ">
                <a href="https://www.linkedin.com/in/suman-gunsola-001a2a2b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <span>Linkedin</span>
                </a>
                <a href="https://x.com/SumanGunsola?t=ZVNQxk9JAyYUu415RmgzXQ&s=09" target="_blank" rel="noopener noreferrer">
                    <span>Twitter</span>
                </a>
                <a href="https://github.com/SumanGunsola-dev" target="_blank" rel="noopener noreferrer">
                    <span>GitHub</span>
                </a>
            </div>
            <div className="sm:mt-36 mt-20 flex flex-col  text-white  ">
                <h1 className=" sm:text-5xl text-3xl text-gradient">Curious about what we can build together? <br /> Let&apos;s bring something extraordinary to life!</h1>
            </div>
            <div className="mt-20 flex flex-col-reverse sm:flex-row sm:gap-7 gap-3 sm:px-0 px-2 mb-16 sm:mb-20">
                <a href="/contact">
                    <button className="bg-white w-fit text-black px-5 py-3.5  font-medium text-lg">
                        Get In Touch
                    </button>
                </a>
                <div className=" text-white px-4 py-4 items-center gap-5 flex font-medium text-lg">

                    <div className="h-4 glow bg-white w-4 rounded-full "></div>

                    <button>Available For Work</button>
                </div>
            </div>
            <div className="justify-start text-white font-medium flex gap-3 sm:mt-28 mt-16 text-sm sm:mb-10 px-4 flex-col sm:gap-2 ">
                <span>+91 7820017990</span>
                <span>workwithsuman0@gmail.com</span>
            </div>
        </section>
    )
}

export default Footer