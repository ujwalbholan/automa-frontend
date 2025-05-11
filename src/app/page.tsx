import { Navbar } from "@/components/[global]/Navbar";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";
// import { Footer } from "@/components/[global]/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section
        className="h-screen w-full bg-neutral-950 rounded-md shadow-md 
      !overflow-overflow relative flex flex-col justify-center items-center antialiased"
      >
        <BackgroundBeams></BackgroundBeams>
        <div className="flex flex-col justify-center items-center w-full h-full mt-[-100px] md:mt[-50px]">
          <h1
            className="text-4xl md:text-4xl lg:text-6xl 
            font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 
            py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800
             via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
          >
            Automate your task with{" "}
            <div className="mt-5">
              <Cover>Automa</Cover>
            </div>
            <p className="w-175 font-extralight sm:text-sm sm:font-light font-extraligh  md:text-lg lg:text-xl text-neutral-400 mt-4">
              AutoMa is an automation platform that lets users connect different
              apps and services through custom workflows.
            </p>
            <Link href={"/login"}>
              <Button
                className="bg-gradient-to-r from-neutral-900 to-gray-900 
             text-white font-semibold p-6 m-2 rounded-lg shadow-lg 
              hover:from-indigo-800 hover:to-purple-700  hover:scale-105 
               transition-all duration-300 focus:outline-none focus:ring-2
                focus:ring-purple-500 focus:ring-opacity-50 cursor-pointer"
              >
                Start For Free Today
              </Button>
            </Link>
          </h1>
        </div>
      </section>
      {/* <Footer/> */}
    </main>
  );
}
