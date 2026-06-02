"use client";
import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performance",
  "Secure",
  "Scalable",
  "User Friendly",
  "Reliable",
  "Search Optimized",
  "Interactive",
  "Usable",
  "SEO-Friendly",
  "Responsive",
  "Fast Loading",
  "Modern UI/UX",
];

export const TapeSection = () => {
  return (
    <section className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s] whitespace-nowrap">
            {[...Array(4)].map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={`${word}-${idx}`} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="w-6 h-6 text-gray-900 rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
