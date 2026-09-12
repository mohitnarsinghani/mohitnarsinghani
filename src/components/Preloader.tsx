import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 350);
          return 100;
        }
        const jump = Math.floor(Math.random() * 5) + 2;
        return Math.min(prev + jump, 100);
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        id="realm-preloader"
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0002] text-white select-none"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      >
        <motion.div
          className="w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 mb-8 flex items-center justify-center drop-shadow-[0_0_35px_rgba(234,179,8,0.85)] cursor-pointer"
          animate={{ rotate: 360 }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }}
          onClick={onComplete}
          title="Click to authenticate"
        >
          <img
            src="/stark-badge.png"
            alt="Game of Thrones 4-House Emblem"
            className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(255,87,34,0.95)]"
          />
        </motion.div>

        <div className="mb-6 text-center">
          <p className="text-primary font-mono text-xs md:text-sm tracking-[0.3em] font-bold drop-shadow-[0_0_8px_rgba(255,87,34,0.6)]">
            AWAKENING THE THREE-EYED RAVEN SIGHT...
          </p>
        </div>

        <div className="w-64 sm:w-80 h-[3px] bg-[#2a0408] relative overflow-hidden rounded-full mb-3 shadow-[0_0_10px_rgba(255,87,34,0.2)]">
          <motion.div
            className="h-full bg-gradient-to-r from-amber-500 via-primary to-orange-400 shadow-[0_0_12px_rgba(255,87,34,0.9)]"
            style={{ width: `${progress}%` }}
            layout
          />
        </div>

        <div className="flex items-center justify-between w-64 sm:w-80 text-[11px] font-mono text-primary/70 tracking-wider">
          <span>THE NORTH REMEMBERS</span>
          <span>{progress}%</span>
        </div>

        <button
          onClick={onComplete}
          className="mt-8 text-xs font-mono tracking-widest text-white/40 hover:text-primary transition-colors uppercase border border-white/10 hover:border-primary/40 px-3 py-1 rounded"
        >
          Skip Intro
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
