"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  Rocket,
  Users,
  Wand2,
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">Driven by curiosity, defined by <span className="text-primary">purpose</span>.</h3>
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
              <p>
                I'm a Younes 22 years old Full Stack Developer and Ai speaker with 3 years of experience making web's and apps
              </p>
              <p>
                I’m currently studying programming in Pigier At Morocco, but I’ve always leaned into a self-driven approach—focusing on personal growth and taking full ownership of the products I build
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: <Lightbulb />, title: "User-First", desc: "Every decision starts with the people using the product." },
              { icon: <Wand2 />, title: "Detail Obsessed", desc: "From micro-interactions to typography, every detail matters." },
              { icon: <Users />, title: "Collaborative", desc: "Working closely with developers for the best outcome." },
              { icon: <Rocket />, title: "Agile Growth", desc: "Continuous learning and adapting to industry standards." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-white/5"
              >
                <div className="text-primary mb-3">
                  {item.icon && React.isValidElement(item.icon) ?
                    React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-8 h-8" }) :
                    null
                  }
                </div>
                <h4 className="text-white font-bold mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
