"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { TechIcon } from "@/components/TechIcon";
import Javascripticon from "@/assets/icons/javascript-logo-svgrepo-com.svg";
import HTMLIcon from "@/assets/icons/html-5-svgrepo-com.svg";
import Cssicon from "@/assets/icons/css3-svgrepo-com.svg";
import Tailwind from "@/assets/icons/tailwind-svgrepo-com.svg";
import ReactIcon from "@/assets/icons/react-svgrepo-com.svg";
import NextIcon from "@/assets/icons/nextjs-svgrepo-com.svg";
import NodeIcon from "@/assets/icons/node-svgrepo-com.svg";
import Express from "@/assets/icons/express-svgrepo-com.svg";
import Mongo from "@/assets/icons/mongodb-svgrepo-com.svg";
import Sql from '@/assets/icons/sql-database-generic-svgrepo-com.svg';
import Git from '@/assets/icons/git-icon-logo-svgrepo-com.svg';
import Firebase from "@/assets/icons/firebase-svgrepo-com.svg";
import Figma from "@/assets/icons/figma-svgrepo-com.svg";
import StarIcon from "@/assets/icons/star.svg";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: ReactIcon, level: 85 },
      { name: "Next.js", icon: NextIcon, level: 80 },
      { name: "JavaScript", icon: Javascripticon, level: 90 },
      { name: "HTML/CSS", icon: HTMLIcon, level: 95 },
      { name: "Tailwind CSS", icon: Tailwind, level: 88 },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: NodeIcon, level: 75 },
      { name: "Express.js", icon: Express, level: 70 },
      { name: "REST APIs", icon: null, level: 80 },
    ]
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", icon: Mongo, level: 75 },
      { name: "SQL", icon: Sql, level: 70 },
      { name: "Git/GitHub", icon: Git, level: 85 },
      { name: "Firebase", icon: Firebase, level: 65 },
    ]
  },
  {
    title: "Design & Tools",
    skills: [
      { name: "Figma", icon: Figma, level: 80 },
      { name: "Responsive Design", icon: null, level: 90 },
      { name: "UI/UX Design", icon: null, level: 70 },
    ]
  }
];

const getProficiencyStars = (level: number) => {
  const stars = Math.ceil(level / 20); // 5 stars max
  return stars;
};

export const SkillsSection = () => {
  return (
    <section className="py-16 lg:py-24" id="skills">
      <div className="container">
        <SectionHeader
          eyebrow="Technical Expertise"
          title="Skills & Technologies"
          description="A comprehensive overview of my technical skills and proficiency levels across different domains."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="p-6 md:p-8">
              <h3 className="font-serif text-xl md:text-2xl mb-6 gradient-text">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const stars = getProficiencyStars(skill.level);
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                        duration: 0.4 
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="group"
                    >
                      <div className="glass-card rounded-xl p-4 border border-white/10 hover:border-emerald-300/30 transition-all duration-300 cursor-pointer">
                        <div className="flex items-center gap-3 mb-3">
                          {skill.icon ? (
                            <div className="flex-shrink-0">
                              <TechIcon component={skill.icon} />
                            </div>
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-300/20 to-sky-400/20 flex items-center justify-center">
                              <span className="text-lg font-bold gradient-text">
                                {skill.name.charAt(0)}
                              </span>
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-white text-sm md:text-base truncate">
                              {skill.name}
                            </h4>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon
                                key={i}
                                className={`w-3 h-3 ${
                                  i < stars
                                    ? "text-emerald-300 fill-emerald-300"
                                    : "text-white/20"
                                } transition-colors`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-white/60 font-medium">
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16"
        >
          <Card className="p-8 text-center">
            <h3 className="font-serif text-2xl mb-4 gradient-text">
              Why Choose Me?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-emerald-300">6+</div>
                <div className="text-white/70">Months Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-emerald-300">12+</div>
                <div className="text-white/70">Technologies Learned</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-emerald-300">8+</div>
                <div className="text-white/70">Projects Completed</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
