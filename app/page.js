import Image from "next/image";
import projects from "../data/projects.json"
import Link from "next/link";
export default function Home() {
  const blurDataURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+Rio5g="
  return (
    <main className="flex nata min-h-screen  w-full   flex-col items-center mt-5">
      <div className="absolute top-0 z-[-2] min-h-full min-w-full bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <section id="header" className="scroll-mt-32 sm:max-w-2xl px-4   mt-36 flex flex-col gap-6">

        <h1 className="font-medium text-4xl sm:text-5xl">{`Hi I'm Suman 👋`}</h1>
        <p className="font-medium text-lg">{`I'm a web developer passionate about building modern web applications and decentralized apps (dApps). I love solving problems, exploring new technologies, and turning ideas into real-world projects.`}</p>
      </section>
      <section id="resume" className="flex scroll-mt-32 items-center sm:px-4 justify-between mt-20  sm:max-w-2xl sm:min-w-[650px] min-w-[350px] font-medium ">
        <Link href="/contact">
          <button className="bg-[rgb(17_24_38)] text-white px-4 py-2 rounded-md ">
            Contact
          </button>
        </Link>
        <a href="/Suman_Resume.pdf" target="_blank" download >
          <button className="text-[rgb(17_24_38)] px-4 py-2 rounded-md shadow shadow-blue-400">
            Resume
          </button>
        </a>
      </section>
      <section id="about" className="flex scroll-mt-32 mt-32 flex-col items-start space-y-7 max-w-2xl px-4   text-lg">
        <h2 className="sm:text-4xl text-3xl font-medium ">About Me</h2>

        <p>
          {` I started my journey into web development 2 years ago when I built my first HTML page. What began as curiosity quickly became a passion for creating digital experiences that solve real problems.`}

        </p>
        <p>
          {` I'm particularly fascinated by blockchain technology and decentralized applications. When I'm not coding, you'll find me exploring new Web3 protocols or contributing to open-source projects.`}

        </p>
        <p>
          Currently looking for opportunities to work with innovative teams building the next generation of web applications.
        </p>
      </section>
      <section id="services" className="mt-32 scroll-mt-32 max-w-2xl px-4 py-1   flex flex-col gap-12">
        <h2 className="sm:text-4xl text-3xl font-medium ">Services</h2>
        <div className="flex flex-wrap  gap-8 ">
          <div className="  px-4 py-4 w-full shadow-lg shadow-blue-200 rounded-xl flex flex-col gap-3">
            <h3 className="font-medium text-center text-lg ">Web Development</h3>
            <p>Custom websites and web applications using modern frameworks</p>
          </div>
          <div className="  px-4 py-4 w-full shadow-lg shadow-blue-200 rounded-xl flex flex-col gap-3">
            <h3 className="font-medium text-center text-lg ">
              Blockchain Development
            </h3>
            <p>Smart contracts and DApp development on Ethereum</p>
          </div>
          <div className="  px-4 py-4 w-full shadow-lg shadow-blue-200 rounded-xl flex flex-col gap-3">
            <h3 className="font-medium text-center text-lg ">
              Responsive Design
            </h3>

            <p>Mobile-first design that works on all devices</p>
          </div>
        </div>
      </section>
      <section id="skills" className="flex scroll-mt-32 flex-col sm:px-4 sm:py-2 py-1 px-2  sm:min-w-2xl mt-32 gap-10">
        <h2 className="sm:text-4xl text-3xl font-medium ">Skills</h2>
        <div className="flex flex-wrap gap-6">
          <span className="w-fit py-1 px-2 hover:shadow-blue-400 font-medium   bg-white shadow-md shadow-blue-200 rounded-full ">React</span>
          <span className="w-fit py-1 px-2 hover:shadow-blue-400 font-medium   bg-white shadow-md shadow-blue-200 rounded-full ">Next.js</span>
          <span className="w-fit py-1 px-2 hover:shadow-blue-400 font-medium   bg-white shadow-md shadow-blue-200 rounded-full ">Tailwind</span>
          <span className="w-fit py-1 px-2 hover:shadow-blue-400 font-medium   bg-white shadow-md shadow-blue-200 rounded-full ">Ether.js</span>
          <span className="w-fit py-1 px-2 hover:shadow-blue-400 font-medium   bg-white shadow-md shadow-blue-200 rounded-full ">MERN</span>
          <span className="w-fit py-1 px-2 hover:shadow-blue-400 font-medium   bg-white shadow-md shadow-blue-200 rounded-full ">Solidity</span>
          <span className="w-fit py-1 px-2 hover:shadow-blue-400 font-medium   bg-white shadow-md shadow-blue-200 rounded-full ">Foundry</span>
        </div>
      </section>
      <section id="projects" className="flex scroll-mt-32 font-medium  flex-col items-center max-w-fit sm:p-4 mt-32 gap-14">

        <h2 className="text-2xl sm:text-4xl  text-start font-medium sm:min-w-2xl">Here are my latest Projects</h2>
        <div className="flex gap-12 items-center justify-center flex-wrap">
          {projects.map((project, index) => (
            <div key={index} className="sm:max-w-[520px]  sm:min-h-[630px] max-w-[375px] min-h-[500px] rounded-md shadow-lg p-4 flex items-center flex-col gap-6">
              <div className="sm:w-[500px] w-[360px] h-[220px] sm:h-[320px] rounded-md shadow-lg   relative ">
                <Image src={project.image} alt=" projectImg" fill className="object-contain" priority={false}
                  placeholder="blur" blurDataURL={blurDataURL}
                />
              </div>
              <div className="flex flex-col gap-2 ">
                <h4 className="text-lg">{project.title}</h4>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="w-fit py-1 px-2 hover:bg-black/75 font-medium   bg-black rounded-full text-white ">{tech}</span>
                  ))}
                </div>
                <div className="flex  gap-5 flex-row ">

                  {project.link && <a href={project.link} target="_blank"
                    rel="noopener noreferrer">
                    <div className="text-xs sm:text-base items-center flex font-bold ">
                      <span>visit</span>
                      <span className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                        <Image src="/external-link.svg"
                          priority={false}
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 12px,
                          (max-width: 1024px) 15px,
                          20px" alt="visit logo" />
                      </span>
                    </div>
                  </a>}
                  <a href={project.github} target="_blank"
                    rel="noopener noreferrer">
                    <div className="text-xs items-center flex font-bold  ">

                      <span className="relative w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"><Image src="/github.svg"
                        priority={false}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 12px,
                        (max-width: 1024px) 15px,
                        20px"
                        alt="visit logo" /></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
