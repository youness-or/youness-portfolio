"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Menu,
  X,
} from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => setIsScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#17022B]/80 backdrop-blur-md border-b border-primary/20 py-4' : 'bg-transparent py-6'}`}>
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            
            <span className="text-xl font-extrabold tracking-tight text-white">Younes<span className="text-primary"> Or</span></span>
          </div>
  
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {['Work', 'Services', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-semibold text-slate-300 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all transform hover:scale-105"
            >
              Hire Me
            </a>
          </div>
  
          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
  
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-[#17022B] border-b border-primary/20 p-6 md:hidden"
            >
              <div className="flex flex-col gap-4">
                {['Work', 'Services', 'About', 'Contact'].map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-lg font-semibold text-slate-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
                <a 
                  href="#contact" 
                  className="bg-primary text-white px-6 py-3 rounded-lg text-center font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    );
  };

  export default Navbar;