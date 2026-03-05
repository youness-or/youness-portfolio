"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { techStack } from '@/lib/data';

const TechStack = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Tools & Technologies</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">My Tech Stack</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                opacity: { duration: 0.2, delay: i * 0.05 },
                scale: { duration: 0.2, delay: i * 0.05 },
                default: { duration: 0.2, ease: "easeInOut" } // Slower default transition for hover
              }}
              whileHover={{ y: -8, borderColor: 'rgba(70, 11, 128, 0.5)', scale: 1.02 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center gap-4 transition-all duration-700 group cursor-default"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors duration-700">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechStack;