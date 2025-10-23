"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { twMerge } from "tailwind-merge";
import StarIcon from "@/assets/icons/star.svg";
import CheckIcon from "@/assets/icons/check-circle.svg";

const achievements = [
  {
    title: "LeetCode Problem Solver",
    description: "Solved 200+ coding problems with 85%+ success rate",
    icon: "💻",
    category: "Programming",
    date: "2024",
    highlight: true
  },
  {
    title: "GitHub Contributor",
    description: "Active contributor to 15+ open source projects",
    icon: "🐙",
    category: "Open Source",
    date: "2023-2024",
    highlight: true
  },
  {
    title: "React Certification",
    description: "Meta Frontend Developer Professional Certificate",
    icon: "🏆",
    category: "Certification",
    date: "2023",
    highlight: false
  },
  {
    title: "Hackathon Winner",
    description: "1st place in University Tech Innovation Challenge",
    icon: "🚀",
    category: "Competition",
    date: "2022",
    highlight: true
  },
  {
    title: "AWS Cloud Practitioner",
    description: "Certified in cloud computing fundamentals",
    icon: "☁️",
    category: "Certification",
    date: "2023",
    highlight: false
  },
  {
    title: "Mentor & Teacher",
    description: "Mentored 20+ junior developers and students",
    icon: "👨‍🏫",
    category: "Leadership",
    date: "2023-2024",
    highlight: false
  },
  {
    title: "Blog Writer",
    description: "Published 25+ technical articles on Medium",
    icon: "✍️",
    category: "Content Creation",
    date: "2023-2024",
    highlight: false
  },
  {
    title: "Community Leader",
    description: "Organized 10+ tech meetups and workshops",
    icon: "🤝",
    category: "Community",
    date: "2022-2024",
    highlight: false
  }
];

const stats = [
  { label: "Projects Completed", value: "8+", icon: "📁" },
  { label: "Lines of Code", value: "25K+", icon: "💻" },
  { label: "Technologies Learned", value: "12+", icon: "⚡" },
  { label: "Months Experience", value: "6+", icon: "😊" }
];

export const AchievementsSection = () => {
  return (
    <section className="py-16 lg:py-24" id="achievements">
      <div className="container">
        <SectionHeader
          eyebrow="Recognition & Milestones"
          title="Achievements & Certifications"
          description="A showcase of my accomplishments, certifications, and contributions to the tech community."
        />

        <div className="mt-16">
          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-6 text-center hover:scale-105 transition-all duration-300">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6 
                }}
              >
                <Card className={twMerge(
                  "p-6 h-full flex flex-col transition-all duration-300 hover:scale-105",
                  achievement.highlight && "ring-2 ring-emerald-300/30"
                )}>
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">
                        {achievement.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-emerald-300">{achievement.category}</span>
                        <span className="text-white/40">•</span>
                        <span className="text-white/60">{achievement.date}</span>
                      </div>
                    </div>
                    {achievement.highlight && (
                      <StarIcon className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed flex-1">
                    {achievement.description}
                  </p>

                  {/* Highlight Badge */}
                  {achievement.highlight && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="inline-flex items-center gap-1 text-xs text-emerald-300 font-semibold">
                        <CheckIcon className="w-3 h-3" />
                        <span>Featured Achievement</span>
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16"
          >
            <Card className="p-8 text-center">
              <h3 className="font-serif text-2xl mb-4 gradient-text">
                Let's Create Something Amazing Together
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                I'm passionate about turning ideas into reality and creating digital experiences 
                that make a difference. Ready to start your next project?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:vaibhavr699@gmail.com">
                  <button className="btn-primary">
                    Start a Project
                  </button>
                </a>
                <a href="#contact">
                  <button className="btn-secondary">
                    Get in Touch
                  </button>
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
