"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
   {
      title: "Skills",
      id: "skills",
      content: (
         <ul className="list-disc pl-2">
            <li>Python</li>
            <li>django</li>
            <li>PostgreSQL</li>
            <li>fastAPI</li>
            <li>JavaScript</li>
            <li>Tailwind</li>
         </ul>
      ),
   },
   {
      title: "Education",
      id: "education",
      content: (
         <ul className="list-disc pl-2">
            <li>Fullstack Academy of Code</li>
            <li>University of California, Santa Cruz</li>
         </ul>
      ),
   },
   {
      title: "Certifications",
      id: "certifications",
      content: (
         <ul className="list-disc pl-2">
            <li>AWS Cloud Practitioner</li>
            <li>Google Professional Cloud Developer</li>
         </ul>
      ),
   },
];

const AboutSection = () => {
   const [tab, setTab] = useState("skills");
   const [isPending, startTransition] = useTransition();

   const handleTabChange = (id) => {
      startTransition(() => {
         setTab(id);
      });
   };

   return (
      <section className="text-white" id="about">
         <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            {/* <img src="/images/about-image.png" width={500} height={500} /> */}

            <div
               className="w-[500px] h-[500px]"
               style={{ background: `url(/images/about-image.png)`, backgroundSize: "cover" }}
            ></div>

            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
               <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
               <p className="text-base lg:text-lg">
                  A self-taught Python developer with a strong foundation in object-oriented programming (OOP) and clean
                  code principles. Experienced in backend development using Django and FastAPI, with a focus on building
                  scalable and efficient web applications. Skilled in working with databases, message brokers, and
                  DevOps tools. Passionate about machine learning and eager to contribute as a junior developer or
                  intern in the field.
               </p>
               <div className="flex flex-row justify-start mt-8">
                  <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                     {" "}
                     Skills{" "}
                  </TabButton>
                  <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                     {" "}
                     Education{" "}
                  </TabButton>
                  <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                     {" "}
                     Certifications{" "}
                  </TabButton>
               </div>
               <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
         </div>
      </section>
   );
};

export default AboutSection;
