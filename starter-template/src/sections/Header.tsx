"use client";
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#project" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" }
  ];

  const handleClick = (itemName: string) => {
    setActiveTab(itemName);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const id = item.href.replace("#", "");
        const element = document.getElementById(id);
        return { name: item.name, element, href: item.href };
      });

      const scrollPosition = window.scrollY + 200; // Offset for fixed header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveTab(section.name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 w-full flex justify-center z-10 px-4 sm:px-6">
      <nav className="flex gap-0.5 sm:gap-1 p-0.5 sm:p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur-md shadow-lg transition duration-300 max-w-full overflow-x-auto scrollbar-hide">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            onClick={() => handleClick(item.name)}
            className={`nav-item-responsive ${
              activeTab === item.name
                ? "bg-white text-gray-900 hover:bg-white/80 hover:text-gray-900"
                : ""
            }`}
            aria-label={`Navigate to ${item.name} section`}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
};
