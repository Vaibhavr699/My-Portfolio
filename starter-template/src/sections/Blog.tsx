"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { twMerge } from "tailwind-merge";
import ArrowUp from "@/assets/icons/arrow-up-right.svg";

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for creating maintainable and performant React applications that can grow with your business needs.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "Performance", "Architecture"],
    featured: true,
    image: "🚀"
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring emerging technologies and trends that are shaping the future of web development in 2024 and beyond.",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Web Dev",
    tags: ["Web Development", "Trends", "Technology"],
    featured: false,
    image: "🌐"
  },
  {
    title: "Mastering TypeScript for Better Code",
    excerpt: "A comprehensive guide to using TypeScript effectively in your projects to write more robust and maintainable code.",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    category: "TypeScript",
    tags: ["TypeScript", "Best Practices", "Code Quality"],
    featured: true,
    image: "⚡"
  },
  {
    title: "CSS Grid vs Flexbox: When to Use What",
    excerpt: "Understanding the differences between CSS Grid and Flexbox and choosing the right layout method for your designs.",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    category: "CSS",
    tags: ["CSS", "Layout", "Design"],
    featured: false,
    image: "🎨"
  },
  {
    title: "Building Your First Next.js App",
    excerpt: "A step-by-step tutorial for beginners to create their first Next.js application with modern development practices.",
    date: "Nov 20, 2024",
    readTime: "12 min read",
    category: "Next.js",
    tags: ["Next.js", "Tutorial", "Beginner"],
    featured: false,
    image: "📚"
  },
  {
    title: "Optimizing Web Performance",
    excerpt: "Essential techniques and tools for improving your website's performance and user experience.",
    date: "Nov 15, 2024",
    readTime: "9 min read",
    category: "Performance",
    tags: ["Performance", "Optimization", "Web Vitals"],
    featured: true,
    image: "⚡"
  }
];

export const BlogSection = () => {
  return (
    <section className="py-16 lg:py-24" id="blog">
      <div className="container">
        <SectionHeader
          eyebrow="Latest Thoughts"
          title="Blog & Articles"
          description="Sharing my knowledge and insights about web development, technology trends, and best practices."
        />

        <div className="mt-16">
          {/* Featured Posts */}
          <div className="mb-12">
            <h3 className="font-serif text-2xl mb-8 gradient-text">Featured Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <Card className="p-8 h-full flex flex-col hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{post.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-emerald-300/20 text-emerald-300 text-xs rounded-full">
                            {post.category}
                          </span>
                          <span className="text-white/60 text-xs">•</span>
                          <span className="text-white/60 text-xs">{post.readTime}</span>
                        </div>
                        <h4 className="font-semibold text-white text-lg mb-2">
                          {post.title}
                        </h4>
                      </div>
                    </div>
                    
                    <p className="text-white/70 text-sm leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-white/60 text-xs">{post.date}</span>
                      <button className="inline-flex items-center gap-1 text-emerald-300 text-sm font-semibold hover:text-emerald-200 transition-colors">
                        <span>Read More</span>
                        <ArrowUp className="w-3 h-3" />
                      </button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* All Posts Grid */}
          <div>
            <h3 className="font-serif text-2xl mb-8 gradient-text">All Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="p-6 h-full flex flex-col hover:scale-[1.02] transition-all duration-300">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="text-2xl">{post.image}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-white/10 text-white/70 text-xs rounded-full">
                            {post.category}
                          </span>
                          <span className="text-white/40 text-xs">•</span>
                          <span className="text-white/40 text-xs">{post.readTime}</span>
                        </div>
                        <h4 className="font-semibold text-white text-base mb-2">
                          {post.title}
                        </h4>
                      </div>
                    </div>
                    
                    <p className="text-white/70 text-sm leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-white/5 text-white/60 text-xs rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-white/10">
                        <span className="text-white/50 text-xs">{post.date}</span>
                        <button className="inline-flex items-center gap-1 text-emerald-300 text-xs font-semibold hover:text-emerald-200 transition-colors">
                          <span>Read</span>
                          <ArrowUp className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-16"
          >
            <Card className="p-8 text-center">
              <h3 className="font-serif text-2xl mb-4 gradient-text">
                Stay Updated
              </h3>
              <p className="text-white/70 mb-6 max-w-2xl mx-auto">
                Get the latest articles, tutorials, and insights about web development 
                delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-emerald-300/50 transition-colors"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
