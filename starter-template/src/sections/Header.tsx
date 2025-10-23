export const Header = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#project" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "mailto:vaibhavr699@gmail.com" }
  ];

  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 w-full flex justify-center z-10">
      <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur-md shadow-lg transition duration-300">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`nav-item ${
              item.name === "Contact"
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
