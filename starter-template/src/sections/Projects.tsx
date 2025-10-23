"use client";
import WanderVaultImage from "@/assets/images/Wander.png";
import HealthMate from "@/assets/images/HealthMate.png";
import Tarvya from "@/assets/images/tarvya.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    title: "Tarvya Infra Pvt Ltd",
    results: [
      { title: "Developed a modern, responsive website for Tarvya Infra Pvt Ltd" },
      { title: "Showcased company services and projects with clean UI/UX design" },
      { title: "Integrated CMS for dynamic content management and scalability" },
      { title: "Optimized performance for fast load times and mobile usability" },
    ],
    link: "https://tarvyainfra.com/",
    image: Tarvya,
  },
  {
    title: "HealthMate AI",
    results: [
      { title: "Developed HealthMate AI, an intelligent health assistant using Next.js and Node.js" },
      { title: "Enabled patients to chat and receive AI-powered feedback on health issues in real-time" },
      { title: "Integrated Prisma ORM and Chroma DB for secure chat history storage and retrieval" },
      { title: "Designed a responsive, user-friendly interface for seamless medical consultations" },
    ],
    link: "#",
    image: HealthMate,
  },
  {
    title: "WanderVault",
    results: [
      { title: "Developed WanderVault, a platform for users to add images with stories and locations to preserve memories", },
      { title: "Implemented intuitive UI/UX for seamless image and story uploads", },
      { title: "Enabled location-based tagging for better memory organization", },
      { title: "Integrated database storage for efficient data retrieval and management", },
    ],
    link: "https://github.com/Vaibhavr699/WanderVault",
    image: WanderVaultImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="project">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Projects!"
          title="Featured Projects!"
          description="A showcase of innovative, user-friendly digital solutions built with passion and creativity."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className=" px-6 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="btn-primary mt-8 w-full md:w-auto inline-flex items-center justify-center gap-2 group">
                      <span>View Live Site</span>
                      <ArrowUp className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={`${project.title} - Project Screenshot`}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    loading="lazy"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
