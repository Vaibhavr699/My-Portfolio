"use client";
import OriginTraceImage from "@/assets/images/Origin Trace AI.png";
import FrontDeskHelper from "@/assets/images/FrontDeskHelper.png";
import Tarvya from "@/assets/images/tarvya.png";
import EcosystemeImage from "@/assets/images/Ecosysteme.png";
import Image, { type StaticImageData } from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { twMerge } from "tailwind-merge";

type PortfolioProject = {
  title: string;
  results: { title: string }[];
  link: string;
  image: StaticImageData;
  imageClassName?: string;
};

const portfolioProjects: PortfolioProject[] = [
  {
    title: "Ecosysteme.ai",
    results: [
      { title: "Developed a comprehensive AI agent platform for business automation" },
      { title: "Built intelligent agents for telephony, content creation, SDR, customer service, and more" },
      { title: "Implemented seamless integrations with 50+ business tools and platforms" },
      { title: "Created an intuitive dashboard for managing multiple AI agents from a single interface" },
    ],
    link: "https://www.ecosysteme.ai/",
    image: EcosystemeImage,
  },
  {
    title: "AI Front Desk Helper",
    results: [
      { title: "Built end-to-end (frontend + backend) for a client: an AI revenue platform for home service businesses" },
      { title: "Developed inbound AI call handling and outbound campaign workflows to capture and convert leads 24/7" },
      { title: "Implemented estimate recovery and AI coaching features to drive missed-revenue follow-ups" },
      { title: "Designed a modern, conversion-focused marketing site with pricing, features, and sign-up flow" },
    ],
    link: "https://aifrontdeskhelper.com/",
    image: FrontDeskHelper,
  },
  {
    title: "OriginTrace.AI",
    results: [
      { title: "Built an aircraft records risk-intelligence platform — Human-in-the-Loop AI for technical due diligence at scale" },
      { title: "Document Intelligence pipeline ingests maintenance logs, shop visit reports, and ADs; AI extracts structured findings and scores severity" },
      { title: "Engine health monitoring, Digital Twin aircraft view, and risk dashboards with full audit trails and approvals" },
      { title: "Compliance-first architecture: immutable record layer, SOC 2 data handling, and EU drone traceability for the 2026 mandate" },
    ],
    link: "https://origintrace.ai/",
    image: OriginTraceImage,
  },
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
                    className={twMerge(
                      "mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none",
                      project.imageClassName
                    )}
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
