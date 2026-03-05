"use client"
import React from 'react';
import { 
  Rocket, 
  Github,
  Linkedin,
  Twitter,
  Dribbble
} from 'lucide-react';

const Footer = () => {
    return (
      <footer className="py-12 border-t border-white/10 bg-[#17022B] px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold text-white uppercase tracking-tighter">Younes<span className="text-primary">Or</span></span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Younes Or. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { icon: <Dribbble className="w-5 h-5" />, href: "#" },
              { icon: <Github className="w-5 h-5" />, href: "https://github.com/youness-or/" },
              { icon: <Linkedin className="w-5 h-5" />, href: "#" },
              { icon: <Twitter className="w-5 h-5" />, href: "#" }
            ].map((social, i) => (
              <a key={i} href={social.href} className="text-slate-400 hover:text-primary transition-colors">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  };
  export default Footer;