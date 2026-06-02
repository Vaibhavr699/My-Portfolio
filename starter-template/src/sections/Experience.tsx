"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { motion } from "motion/react";

type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  blurCompany?: boolean;
  period: string;
  location?: string;
  bullets: string[];
  current?: boolean;
};

// TODO(Vaibhav): Confirm the role titles and replace the bullet points below
// with your real responsibilities/achievements for each company.
const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Excellence Technologies",
    blurCompany: true,
    period: "Jun 2025 — Present",
    location: "Full-time",
    current: true,
    bullets: [
      "Build full-stack products end-to-end — React, Next.js and React Native on the frontend; Node.js, Python and FastAPI services on the backend.",
      "Integrate third-party platforms such as Twilio for voice/SMS and Resend for transactional email, and design schemas across SQL and NoSQL databases.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "RJ Naved",
    period: "Nov 2024 — May 2025",
    bullets: [
      "Developed the frontend of the company website in React, building responsive, interactive and reusable UI components.",
      "Translated designs into pixel-accurate layouts and optimized rendering for a smooth experience across devices.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "getadmission.org",
    companyUrl: "https://getadmission.org",
    period: "Jun 2024 — Oct 2024",
    bullets: [
      "Built the frontend of the getadmission.org website in React, delivering a responsive, component-driven UI.",
      "Implemented reusable components and ensured cross-browser consistency and performance.",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section className="py-16 lg:py-24" id="experience">
      <div className="container">
        <SectionHeader
          eyebrow="Career"
          title="Work Experience"
          description="A timeline of the roles and projects where I've built and shipped real products."
        />

        <div className="mt-16 max-w-3xl mx-auto">
          <ol className="relative border-l border-white/15 ml-3">
            {experiences.map((exp, index) => (
              <motion.li
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="ml-6 mb-10 last:mb-0"
              >
                {/* Timeline dot */}
                <span
                  className="absolute -left-[7px] flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-300 ring-4 ring-gray-900"
                  aria-hidden="true"
                >
                  {exp.current && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300/70" />
                  )}
                </span>

                <Card className="p-5 md:p-6 lg:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-serif text-xl md:text-2xl">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-emerald-300">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/60">
                    {exp.blurCompany ? (
                      <span
                        className="font-semibold gradient-text blur-[5px] select-none"
                        aria-label="Company name hidden"
                        title="Confidential"
                      >
                        {exp.company}
                      </span>
                    ) : exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold gradient-text hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <span className="font-semibold gradient-text">{exp.company}</span>
                    )}
                    <span aria-hidden="true">•</span>
                    <span>{exp.period}</span>
                    {exp.location && (
                      <>
                        <span aria-hidden="true">•</span>
                        <span>{exp.location}</span>
                      </>
                    )}
                  </div>

                  <ul className="mt-4 flex flex-col gap-2">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm md:text-base text-white/70">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300/70" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
