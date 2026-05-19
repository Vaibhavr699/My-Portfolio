import type { Metadata } from "next";
import {Inter, Calistoga} from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ChatWidget } from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif" , weight:["400"]});

export const metadata: Metadata = {
  title: {
    default: "Vaibhav Raj - Full Stack Developer & React Specialist",
    template: "%s | Vaibhav Raj - Full Stack Developer"
  },
  description: "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable web applications with 1.5+ years of expertise.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Portfolio",
    "Vaibhav Raj",
    "Web Development",
    "Software Engineer"
  ],
  authors: [{ name: "Vaibhav Raj", url: "https://vaibhavraj.dev" }],
  creator: "Vaibhav Raj",
  publisher: "Vaibhav Raj",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vaibhavraj.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vaibhavraj.dev",
    title: "Vaibhav Raj - Full Stack Developer & React Specialist",
    description: "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building scalable web applications with 1.5+ years of expertise.",
    siteName: "Vaibhav Raj Portfolio",
    images: [
      {
        url: "/letter-v.png",
        width: 512,
        height: 512,
        alt: "Vaibhav Raj - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Raj - Full Stack Developer & React Specialist",
    description: "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/letter-v.png"],
    creator: "@vaibhavraj",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vaibhav Raj",
    "jobTitle": "Full Stack Developer",
    "description": "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies",
    "url": "https://vaibhavraj.dev",
    "image": "https://vaibhavraj.dev/letter-v.png",
    "sameAs": [
      "https://github.com/Vaibhavr699",
      "https://www.linkedin.com/in/vaibhav-raj0135/",
      "https://leetcode.com/u/vaibhavraj007/",
      "https://www.instagram.com/vaibhav_vr6/"
    ],
    "knowsAbout": [
      "React.js",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "MongoDB",
      "Express.js",
      "Git",
      "Web Development",
      "Frontend Development",
      "Backend Development"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "description": "Building modern web applications using React, Next.js, and Node.js"
    },
    "alumniOf": "University",
    "email": "vaibhavr699@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "India"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://vaibhavraj.dev" />
        <link rel="icon" href="/LetterV.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/LetterV.png" />
        <link rel="shortcut icon" href="/LetterV.png" type="image/png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={twMerge(inter.variable, calistoga.variable,"bg-gray-900 text-white antialiased font-sans")}>
        {/* Background gradient overlay */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 -z-10"></div>
        {/* Animated background particles */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-300/20 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-sky-400/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-emerald-300/10 rounded-full animate-pulse delay-2000"></div>
        </div>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
