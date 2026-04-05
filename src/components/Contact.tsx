"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
} from 'lucide-react';

const Contact = () => {
    return (
      <section id="contact" className="py-24 px-6 bg-slate-950/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Contact</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Let's build something <span className="text-primary">extraordinary</span>.</h3>
              <p className="text-slate-400 mb-12 text-lg">
                Ready to start a project or just want to say hi? I'm always open to new opportunities and creative collaborations.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Mail />, text: "younesourrais360@gmail.com" },
                  { icon: <Phone />, text: "+212 774 83 69 6" },
                  { icon: <MapPin />, text: "Kenitra, Morocco" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors text-primary">
                      {item.icon}
                    </div>
                    <span className="text-white font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
  
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#17022B] p-8 rounded-2xl border border-white/10 shadow-2xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Your Name</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors" placeholder="John Doe" type="text" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Email Address</label>
                    <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors" placeholder="john@example.com" type="email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Subject</label>
                  <input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors" placeholder="Project Inquiry" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300">Message</label>
                  <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none transition-colors" placeholder="Tell me about your project..." rows={5}></textarea>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20"
                  type="submit"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };
  export default Contact;