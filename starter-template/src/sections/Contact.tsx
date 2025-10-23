import ArrowUp from "@/assets/icons/arrow-up-right.svg";
import GrainImg from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-12 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0 pulse-glow">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${GrainImg.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something <span className="text-gray-800 font-bold">amazing</span> together.
              </h2>
              <p className="text-sm md:text-base mt-3 text-gray-700">
                Let&apos;s build something extraordinary! Whether it&apos;s innovative web
                solutions or creative digital experiences, I&apos;m excited to
                collaborate and turn ideas into reality.
              </p>
            </div>
            <div>
              <a href="mailto:vaibhavr699@gmail.com">
                <button className="text-white bg-gray-900 inline-flex items-center px-8 h-14 rounded-xl gap-2 w-max border border-gray-950 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-800 group">
                  <span>Contact Me</span>
                  <ArrowUp className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
