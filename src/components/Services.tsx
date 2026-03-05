"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/lib/data';

const Services = () => {
    return (
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white">How I can help your brand</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-10 rounded-2xl hover:border-primary/50 transition-all group"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform text-primary">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  export default Services;