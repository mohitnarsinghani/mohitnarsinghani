import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Download, ChevronDown, ShieldCheck } from 'lucide-react';
import HeroCanvas from './HeroCanvas';
import { SOCIAL_LINKS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  isLoaded?: boolean;
}

export default function Hero({ onOpenResume, isLoaded = true }: HeroProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / (rect.height / 2)) * -12,
      y: (x / (rect.width / 2)) * 12,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-20 bg-background"
    >
      {/* Dynamic Interactive Canvas Background */}
      <HeroCanvas />

      {/* Medieval Citadel Stone Wall & Arch Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40 mix-blend-overlay bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-background to-background" />

      {/* Left Wall Burning Torch Glow */}
      <div className="absolute left-3 sm:left-8 top-1/3 z-10 pointer-events-none hidden md:flex flex-col items-center">
        <div className="w-5 sm:w-7 h-10 sm:h-12 bg-gradient-to-t from-red-600 via-amber-500 to-yellow-300 rounded-full blur-[2px] animate-pulse shadow-[0_0_40px_rgba(245,158,11,0.9)]" />
        <div className="w-1.5 h-16 bg-amber-950 border-x border-amber-800 shadow-md rounded-b" />
      </div>

      {/* Right Wall Burning Torch Glow */}
      <div className="absolute right-3 sm:right-8 top-1/3 z-10 pointer-events-none hidden md:flex flex-col items-center">
        <div className="w-5 sm:w-7 h-10 sm:h-12 bg-gradient-to-t from-red-600 via-amber-500 to-yellow-300 rounded-full blur-[2px] animate-pulse shadow-[0_0_40px_rgba(245,158,11,0.9)]" />
        <div className="w-1.5 h-16 bg-amber-950 border-x border-amber-800 shadow-md rounded-b" />
      </div>

      {/* Hero Content Container (2-Column Desktop Grid) */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 max-w-7xl mx-auto">
          
          {/* LEFT COLUMN: Main Typography, Scroll Banner & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Main Name Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.8rem] font-black leading-[0.92] tracking-tighter mb-4 text-shadow-glow text-primary font-realm select-none">
              <span className="block hover:scale-[1.01] transition-transform duration-300">
                NARSINGHANI MOHIT
              </span>
            </h1>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-5"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-foreground/95 tracking-wide font-serif">
                Full Stack Maester <span className="text-primary font-bold">|</span> Realm Architect
              </p>
            </motion.div>

            {/* Authentic GoT Parchment Scroll Banner with Slow Post-Preloader Unrolling Animation */}
            <motion.div
              initial="closed"
              animate={isLoaded ? "open" : "closed"}
              className="relative w-full max-w-2xl mb-6 flex items-center justify-center min-h-[5rem]"
            >
              <div className="relative w-full flex items-center justify-center shadow-2xl">
                {/* Left Wooden Scroll Roll Handle */}
                <motion.div
                  variants={{
                    closed: { left: '50%', x: '-100%', opacity: 1 },
                    open: { left: '0%', x: '0%', opacity: 1 },
                  }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-1/2 -translate-y-1/2 w-3.5 sm:w-4 shrink-0 h-28 sm:h-24 bg-gradient-to-r from-amber-950 via-amber-800 to-amber-900 border border-amber-700/60 rounded-l-md shadow-md z-20 flex flex-col justify-between py-1 pointer-events-none"
                >
                  <div className="w-full h-1 bg-amber-500/80 rounded-sm" />
                  <div className="w-full h-1 bg-amber-500/80 rounded-sm" />
                </motion.div>

                {/* Parchment Scroll Body Paper */}
                <motion.div
                  variants={{
                    closed: { scaleX: 0, opacity: 0 },
                    open: { scaleX: 1, opacity: 1 },
                  }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: 'center' }}
                  className="relative w-full bg-[#f4ebd0] text-[#2c1d11] px-5 sm:px-8 py-3.5 sm:py-4 border-y-2 border-[#b89f78] shadow-[inset_0_0_20px_rgba(139,69,19,0.35)] z-10 overflow-hidden"
                >
                  {/* Quote Text */}
                  <motion.p
                    variants={{
                      closed: { opacity: 0 },
                      open: {
                        opacity: 1,
                        transition: { duration: 0.5, delay: 1.1, ease: 'easeOut' },
                      },
                    }}
                    className="text-xs sm:text-sm font-serif italic leading-relaxed text-center font-medium text-[#3a2212]"
                  >
                    &ldquo;The code remembers, and winter comes for every unoptimized loop and memory leak... and we build realistic, lasting solutions for our kingdom.&rdquo;
                  </motion.p>
                </motion.div>

                {/* Right Wooden Scroll Roll Handle */}
                <motion.div
                  variants={{
                    closed: { left: '50%', x: '0%', opacity: 1 },
                    open: { left: '100%', x: '-100%', opacity: 1 },
                  }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-1/2 -translate-y-1/2 w-3.5 sm:w-4 shrink-0 h-28 sm:h-24 bg-gradient-to-l from-amber-950 via-amber-800 to-amber-900 border border-amber-700/60 rounded-r-md shadow-md z-20 flex flex-col justify-between py-1 pointer-events-none"
                >
                  <div className="w-full h-1 bg-amber-500/80 rounded-sm" />
                  <div className="w-full h-1 bg-amber-500/80 rounded-sm" />
                </motion.div>
              </div>
            </motion.div>

            {/* Tech Stack Bar & Sigil Divider Line */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full max-w-2xl mb-5 text-center lg:text-left"
            >
              <p className="text-xs sm:text-sm font-mono text-foreground/80 uppercase tracking-[0.25em] font-bold mb-2">
                PYTHON • DJANGO • REACT • FASTAPI • MACHINE LEARNING
              </p>
              
              {/* Sigil Divider */}
              <div className="relative flex items-center justify-center lg:justify-start w-full my-3">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent w-full" />
                <div className="absolute px-3 bg-background text-primary">
                  <span className="text-xs font-serif">✦</span>
                </div>
              </div>
            </motion.div>

            {/* Quote Box */}
            <motion.blockquote
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xs sm:text-sm font-medium italic text-foreground/85 border-l-2 border-primary pl-3.5 mb-8 max-w-xl text-left"
            >
              &ldquo;Turning complex ideas into efficient, user-friendly web applications.&rdquo;
            </motion.blockquote>

            {/* CTA Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full max-w-xl"
            >
              {/* MAESTER PROFILE */}
              <a
                id="hero-maester-profile-btn"
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#about');
                }}
                className="px-6 sm:px-8 py-3.5 bg-primary hover:bg-primary/90 text-background font-black uppercase tracking-widest rounded-sm shadow-[0_0_25px_rgba(255,87,34,0.5)] hover:shadow-[0_0_35px_rgba(255,87,34,0.85)] transition-all duration-300 text-xs sm:text-sm font-realm text-center"
              >
                MAESTER PROFILE
              </a>

              {/* ROYAL MASTERY */}
              <a
                id="hero-royal-mastery-btn"
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo('#skills');
                }}
                className="px-6 sm:px-8 py-3.5 border-2 border-foreground/30 hover:border-primary text-foreground hover:text-primary hover:shadow-[0_0_20px_rgba(255,87,34,0.3)] transition-all duration-300 font-bold uppercase tracking-widest rounded-sm text-xs sm:text-sm font-realm text-center"
              >
                ROYAL MASTERY
              </a>

              {/* RESUME */}
              <a
                id="hero-resume-download-btn"
                href={SOCIAL_LINKS.resume}
                download="RESUME_Narsinghani_Mohit.pdf"
                className="px-5 py-3.5 border border-foreground/20 hover:border-primary text-foreground hover:text-primary rounded-sm transition-all duration-300 font-bold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2"
                title="Download Resume PDF"
              >
                <Download className="w-4 h-4 text-primary" />
                <span>RESUME</span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: 3D Interactive Developer Pass ID Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="w-full lg:w-2/5 flex justify-center lg:justify-end"
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative w-full max-w-[320px] sm:max-w-[340px] bg-card/85 backdrop-blur-xl border-2 border-primary/40 rounded-lg p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,87,34,0.2)] group hover:border-primary transition-all duration-300 overflow-hidden"
            >
              {/* Corner Brackets */}
              <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-amber-400" />
              <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-amber-400" />
              <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-amber-400" />
              <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-amber-400" />

              {/* Holographic Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-primary/5 to-transparent pointer-events-none group-hover:opacity-100 transition-opacity" />

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-foreground/15 pb-3 mb-4">
                <span className="font-realm text-primary font-black text-sm tracking-wider">
                  &lt;MOHIT /&gt;
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-amber-400 tracking-wider uppercase bg-amber-950/60 border border-amber-500/40 px-2 py-0.5 rounded">
                  <ShieldCheck className="w-3 h-3" />
                  DEVELOPER PASS
                </span>
              </div>

              {/* Photo & Identity Box */}
              <div className="flex flex-col items-center text-center mb-4">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-primary/50 overflow-hidden mb-3 shadow-[0_0_20px_rgba(255,87,34,0.35)] group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/profile-photo.png"
                    alt="Narsinghani Mohit"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <h3 className="text-lg sm:text-xl font-black uppercase text-foreground tracking-tight font-realm">
                  Narsinghani Mohit
                </h3>
                <p className="text-xs font-mono text-primary font-semibold tracking-wider">
                  Developer Pass • Citadel Certified
                </p>
              </div>

              {/* Details Info Grid */}
              <div className="grid grid-cols-3 gap-2 bg-foreground/5 border border-foreground/10 rounded p-2.5 mb-4 text-center">
                <div>
                  <span className="block text-[9px] font-mono text-foreground/50 uppercase font-bold tracking-wider">INSTITUTION</span>
                  <span className="text-[11px] font-bold text-foreground">SALITER (CE)</span>
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-foreground/50 uppercase font-bold tracking-wider">DIPLOMA</span>
                  <span className="text-[11px] font-bold text-amber-400">8.5 CPI</span>
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-foreground/50 uppercase font-bold tracking-wider">MODE</span>
                  <span className="text-[11px] font-bold text-foreground">WINTERFELL</span>
                </div>
              </div>

              {/* Card Footer (Barcode & Smart Chip) */}
              <div className="flex items-center justify-between pt-2 border-t border-foreground/10">
                {/* Barcode graphic */}
                <div className="flex items-center gap-0.5 opacity-60">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <span
                      key={i}
                      className="bg-foreground inline-block"
                      style={{
                        width: i % 3 === 0 ? '3px' : '1px',
                        height: '14px',
                      }}
                    />
                  ))}
                </div>

                {/* Smart Chip graphic */}
                <div className="w-7 h-5 rounded bg-amber-500/20 border border-amber-500/50 flex items-center justify-center">
                  <div className="w-4 h-3 border border-amber-400/70 rounded-xs bg-amber-400/20" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-foreground/40 hover:text-primary transition-colors flex flex-col items-center gap-1.5 cursor-pointer"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">SCROLL DOWN</span>
        <ChevronDown className="w-4 h-4 text-primary" />
      </motion.button>
    </section>
  );
}

