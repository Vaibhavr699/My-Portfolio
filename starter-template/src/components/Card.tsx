import grainImage from "@/assets/images/grain.jpg";
import { ComponentPropsWithRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({
  className,
  children,
  ...other
}: ComponentPropsWithRef<"div">) => {
  return (
    <div
      className={twMerge(
        "glass-card rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 lg:pt-10 lg:px-10 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-300/10",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      {children}
    </div>
  );
};
