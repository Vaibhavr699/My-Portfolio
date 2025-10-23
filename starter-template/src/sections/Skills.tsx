"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { twMerge } from "tailwind-merge";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", level: 85, color: "from-blue-400 to-blue-600" },
      { name: "Next.js", level: 80, color: "from-gray-400 to-gray-600" },
      { name: "TypeScript", level: 75, color: "from-blue-500 to-blue-700" },
      { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-600" },
      { name: "HTML/CSS", level: 95, color: "from-orange-400 to-orange-600" },
      { name: "Tailwind CSS", level: 88, color: "from-cyan-400 to-cyan-600" },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 75, color: "from-green-400 to-green-600" },
      { name: "Express.js", level: 70, color: "from-gray-400 to-gray-600" },
      { name: "REST APIs", level: 80, color: "from-purple-400 to-purple-600" },
      { name: "Prisma ORM", level: 65, color: "from-pink-400 to-pink-600" },
    ]
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", level: 75, color: "from-green-500 to-green-700" },
      { name: "SQL", level: 70, color: "from-blue-400 to-blue-600" },
      { name: "Git/GitHub", level: 85, color: "from-gray-400 to-gray-600" },
      { name: "Chroma DB", level: 60, color: "from-yellow-400 to-orange-500" },
      { name: "Firebase", level: 65, color: "from-yellow-400 to-orange-500" },
    ]
  },
  {
    title: "Design & Tools",
    skills: [
      { name: "Figma", level: 80, color: "from-purple-400 to-pink-500" },
      { name: "Framer Motion", level: 75, color: "from-purple-500 to-purple-700" },
      { name: "Responsive Design", level: 90, color: "from-blue-400 to-blue-600" },
      { name: "UI/UX Design", level: 70, color: "from-pink-400 to-purple-500" },
    ]
  }
];

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
            <Card key={category.title} className="p-8">
              <h3 className="font-serif text-2xl mb-6 gradient-text">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                      duration: 0.5 
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-white">{skill.name}</span>
                      <span className="text-sm text-white/60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        className={twMerge("h-2 rounded-full bg-gradient-to-r", skill.color)}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3,
                          duration: 1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
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
