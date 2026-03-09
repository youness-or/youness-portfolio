"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
} from 'lucide-react';
import TypingRoles from '@/components/TypingRoles';
import { DotPattern } from './DotPattern';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 z-0"
      >
        <DotPattern
          glowColor="#460B80"
          baseColor="#1e0b36"
          dotSize={2.5}
          gap={28}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold tracking-widest uppercase">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            Available for Projects
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
            Hey Dear! <br /> <span className="text-primary">Younes Or</span> Here
          </h1>
          <TypingRoles />
          <p className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
            I'm a Developer multi-disciplinary specializing in high-end digital products and brand identities that stand out in the modern market.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#work"
              className="bg-primary text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary/90 transition-all flex items-center gap-2"
            >
              View Work <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border border-slate-700 hover:border-primary px-8 py-4 rounded-xl text-lg font-bold transition-all text-white"
            >
              Get in Touch
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/40 to-purple-600/40 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-2xl group-hover:opacity-75 transition duration-1000 animate-pulse"></div>
          <div className="relative aspect-square rounded-[30%_70%_70%_30%/30%_30%_70%_70%] overflow-hidden bg-[#17022B] border-2 border-white/10 group-hover:border-primary/50 transition-all duration-700 shadow-2xl">
            <img

              src="/youness-portfolio/images/younesor.png"
              alt="Younes Or"
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
