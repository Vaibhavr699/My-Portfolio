"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { twMerge } from "tailwind-merge";
import StarIcon from "@/assets/icons/star.svg";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Vaibhav delivered an exceptional web application that exceeded our expectations. His attention to detail and problem-solving skills are outstanding.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Michael Chen",
    role: "Startup Founder",
    company: "InnovateLab",
    content: "Working with Vaibhav was a game-changer for our startup. He built a scalable solution that helped us grow 300% in user engagement.",
    rating: 5,
    avatar: "👨‍💻"
  },
  {
    name: "Emily Rodriguez",
    role: "Design Director",
    company: "CreativeStudio",
    content: "Vaibhav's technical expertise combined with his understanding of user experience created a perfect digital solution for our clients.",
    rating: 5,
    avatar: "👩‍🎨"
  },
  {
    name: "David Kim",
    role: "CTO",
    company: "DataFlow Inc",
    content: "The React application Vaibhav developed for us is robust, performant, and maintainable. His code quality is exceptional.",
    rating: 5,
    avatar: "👨‍🔬"
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Director",
    company: "GrowthCo",
    content: "Vaibhav transformed our digital presence with a beautiful, fast-loading website that increased our conversion rate by 150%.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Alex Patel",
    role: "Freelance Designer",
    company: "DesignHub",
    content: "Collaborating with Vaibhav on multiple projects has been amazing. His technical skills and communication are top-notch.",
    rating: 5,
    avatar: "👨‍🎨"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24" id="testimonials">
      <div className="container">
        <SectionHeader
          eyebrow="Client Feedback"
          title="What People Say"
          description="Hear from clients and colleagues about their experience working with me."
        />

        <div className="mt-16">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.6 
                }}
              >
                <Card className="p-6 h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-white/80 text-sm leading-relaxed flex-1 mb-4">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                    <div className="text-2xl">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-white text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-white/60 text-xs">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16"
          >
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-white/70 text-sm mt-1">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">5.0</div>
                  <div className="text-white/70 text-sm mt-1">Average Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-white/70 text-sm mt-1">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">24/7</div>
                  <div className="text-white/70 text-sm mt-1">Support Available</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};