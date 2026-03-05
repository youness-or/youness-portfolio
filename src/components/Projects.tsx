"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  Github,
} from 'lucide-react';
import { projects } from '@/lib/data';

const Projects = () => {
  return (
    <section id="work" className="py-24 px-6 bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white">Featured Projects</h3>
          </div>
          <p className="text-slate-400 max-w-md">
            A selection of my recent work across branding, UI/UX design, and digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-video mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#17022B]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-[#17022B] px-6 py-3 rounded-full font-bold">View Case Study</span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">{project.title}</h4>
                  <p className="text-slate-500">{project.category} • {project.year}</p>
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  )}
                  <ExternalLink className="text-primary w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;