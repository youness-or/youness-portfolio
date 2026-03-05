"use client"
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 500); // Small delay after hitting 100%
                    return 100;
                }
                return prev + 1.5; // Smooth incremental load
            });
        }, 20);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#17022B] text-white"
        >
            <div className="relative overflow-hidden mb-8">
                <motion.h1
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-6xl font-black lowercase tracking-tighter"
                >
                    younes<span className="text-primary"> or</span>
                </motion.h1>
            </div>

            <div className="w-64 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                <motion.div
                    className="absolute inset-y-0 left-0 bg-primary"
                    initial={{ width: '0%' }}
                    animate={{ width: `${percent}%` }}
                    transition={{ duration: 0.1 }}
                />
            </div>

            <motion.span
                className="mt-4 text-sm font-mono text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {Math.floor(percent)}%
            </motion.span>
        </motion.div>
    );
};

export default Preloader;
