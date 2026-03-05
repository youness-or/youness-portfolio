import React from 'react';
import {
  Code2,
  Layout,
  Wand2,
} from 'lucide-react';
// --- Types ---
export interface Project {
  id: number;
  title: string;
  category: string;
  year: string;
  image: string;
  github?: string;
  link?: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Tech {
  name: string;
  icon: string;
}

// --- Data ---
export const projects: Project[] = [
  {
    id: 1,
    title: "Dr. Sara Dentist",
    category: "Medical Portfolio",
    year: "2026",
    image: "/images/dr_sara_dentist.png",
    github: "https://youness-or.github.io/Dr-Sara-Dentist-Website-portfolio/",
  },
  {
    id: 2,
    title: "E-bike Ecommerce",
    category: "E-commerce",
    year: "2026",
    image: "/images/ebike_ecommerce.png",
    github: "https://youness-or.github.io/Ebike-website/",
  },
];

export const services: Service[] = [
  {
    icon: <Wand2 className="w-8 h-8" />,
    title: "Brand Identity",
    description: "Creating cohesive visual systems that tell your story and resonate with your audience across all touchpoints."
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Intuitive, user-centered interfaces designed to solve complex problems and provide delightful digital experiences."
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description: "High-performance, responsive websites built with modern technologies to ensure speed, SEO, and accessibility."
  }
];

export const techStack: Tech[] = [
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8" },
  { name: "Rust", icon: "https://cdn.simpleicons.org/rust/white" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2D3748" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
  { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/0055FF" },
  { name: "Three.js", icon: "https://cdn.simpleicons.org/threedotjs/white" },
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3FCF8E" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Google Cloud", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
];
