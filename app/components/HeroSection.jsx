"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
   return (
      <section className="lg:py-16">
         <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               className="col-span-8 place-self-center text-center sm:text-left justify-self-start p-4"
            >
               <h1 className="text-white mb-4 text-2xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                     Hello, I&apos;m{" "}
                  </span>
                  <br></br>
                  <TypeAnimation
                     sequence={[
                        "Enayatulla",
                        1000,
                        "Python Developer",
                        1000,
                        "Data Scientist",
                        1000,
                        "Database Manager",
                        1000,
                     ]}
                     wrapper="span"
                     speed={50}
                     repeat={Infinity}
                  />
               </h1>
               <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                  A self-taught Python developer with a Experienced in backend development using Django and FastAPI
                  Skilled in working with databases, message brokers, and DevOps tools.
               </p>
               <div>
                  <Link
                     href="/#contact"
                     className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                  >
                     Hire Me
                  </Link>
                  <Link
                     href="/"
                     className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                  >
                     <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                  </Link>
               </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5 }}
               className="col-span-4 place-self-center mt-4 lg:mt-0"
            >
               <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                  <div
                     className="w-[100%] h-[100%] absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                     style={{
                        background: `url(/images/me-2.png)`,
                        backgroundSize: "cover",
                        backgroundRepit: "no-repeat",
                        borderRadius: "50%",
                     }}
                  ></div>
               </div>
            </motion.div>
         </div>
      </section>
   );
};

export default HeroSection;
