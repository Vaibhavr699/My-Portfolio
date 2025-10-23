"use client";
import ArrowUp from '@/assets/icons/arrow-up-right.svg';

const footerLinks = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vaibhav-raj0135/',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/Vaibhavr699',
  },
  {
    title: 'LeetCode',
    href: 'https://leetcode.com/u/vaibhavraj007/',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/vaibhav_vr6/',
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] z-0"></div>
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">© 2025 All Rights Reserved</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a 
                href={link.href} 
                key={link.title} 
                className="inline-flex items-center gap-1.5 hover:text-emerald-300 transition-all duration-300 hover:scale-105 group" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUp className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
