"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { twMerge } from "tailwind-merge";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";

const experiences = [
  {
    year: "July 2024 - Present",
    title: "Full-Stack Developer",
    company: "Excellence Technology",
    type: "On-site",
    description: "Working as a fresher developer at Excellence Technology, contributing to various client projects and gaining hands-on experience in modern web development technologies.",
    achievements: [
      "Collaborated on multiple client projects",
      "Learned industry best practices and workflows",
      "Contributed to team development processes",
      "Gained experience in agile development methodologies"
    ],
    technologies: ["React", "Next.js", "Node.js", "JavaScript", "TypeScript", "Git"]
  },
  {
    year: "2023 - July 2024",
    title: "Self-Taught Developer",
    company: "Personal Projects",
    type: "Learning",
    description: "Dedicated time to self-learning and building personal projects to develop skills in modern web development technologies and frameworks.",
    achievements: [
      "Built 10+ personal projects including WanderVault and HealthMate AI",
      "Mastered React, Next.js, and Node.js through hands-on practice",
      "Learned database management with MongoDB and SQL",
      "Developed responsive web applications with modern UI/UX"
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"]
  },
  {
    year: "2022 - 2023",
    title: "Computer Science Student",
    company: "University",
    type: "Education",
    description: "Pursued Computer Science degree while building foundational programming skills and exploring web development technologies.",
    achievements: [
      "Maintained strong academic performance",
      "Built initial web development projects",
      "Participated in coding competitions and hackathons",
      "Learned core programming concepts and algorithms"
    ],
    technologies: ["C++", "Java", "Python", "HTML", "CSS", "JavaScript"]
  },
  {
    year: "2021 - 2022",
    title: "Programming Enthusiast",
    company: "Self-Learning",
    type: "Learning",
    description: "Started my programming journey by learning fundamental concepts and building small projects to understand software development.",
    achievements: [
      "Learned programming fundamentals",
      "Built first web applications",
      "Explored different programming languages",
      "Developed problem-solving skills through coding challenges"
    ],
    technologies: ["C++", "Java", "HTML", "CSS", "JavaScript"]
  }
];

export const ExperienceSection = () => {
  return (
    <section className="py-16 lg:py-24" id="experience">
      <div className="container">
        <SectionHeader
          eyebrow="Professional Journey"
          title="Work Experience"
          description="My career progression and the valuable experiences that shaped my expertise."
        />

        <div className="mt-16">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-300 to-sky-400"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ 
                    delay: index * 0.2,
                    duration: 0.6 
                  }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-emerald-300 rounded-full border-4 border-gray-900 z-10"></div>

                  {/* Content Card */}
                  <div className="ml-20">
                    <Card className="p-8 hover:scale-[1.02] transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="font-serif text-xl text-white mb-1">
                            {experience.title}
                          </h3>
                          <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                            {experience.company}
                            <span className="text-white/60">•</span>
                            <span className="text-white/60">{experience.type}</span>
                          </div>
                        </div>
                        <div className="text-sm text-white/60 mt-2 md:mt-0">
                          {experience.year}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-white/70 mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                              <span className="text-emerald-300 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/70 border border-white/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <Card className="p-8 text-center">
              <h3 className="font-serif text-2xl mb-4 gradient-text">
                Ready to Work Together?
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Let's discuss how we can bring your ideas to life!
              </p>
              <a href="mailto:vaibhavr699@gmail.com">
                <button className="btn-primary inline-flex items-center gap-2 group">
                  <span>Get In Touch</span>
                  <ArrowUp className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </a>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
