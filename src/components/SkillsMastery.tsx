import React, { useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Eye, Flame, Scroll, Zap, Database, Copy, Boxes, GitFork, Terminal, Cpu } from 'lucide-react';

const ICONS_MAP: Record<string, ReactNode> = {
  "Three-Eyed Raven AI": <Eye className="w-6 h-6" />,
  "Valyrian Code Mastery": <Flame className="w-6 h-6" />,
  "King’s Landing Citadel": <Scroll className="w-6 h-6" />,
  "Winterfell Guard": <Zap className="w-5 h-5" />,
  "Iron Bank Vault": <Database className="w-5 h-5" />,
  "Dragon Glass Components": <Copy className="w-5 h-5" />,
  "Hand of the King Suite": <Boxes className="w-5 h-5" />,
  "The Raven Post Network": <GitFork className="w-5 h-5" />
};

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

function InteractiveTiltCard({ children, className = '', delay = 0 }: TiltCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -14;
    const rotateY = ((x - centerX) / centerX) * 14;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({
      x: rotateX,
      y: rotateY,
      glareX,
      glareY,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50, opacity: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${tilt.opacity ? 1.02 : 1}, ${tilt.opacity ? 1.02 : 1}, 1)`,
          transition: tilt.opacity ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="relative w-full h-full flex flex-col justify-between"
      >
        {/* Holographic Sheen / Cursor Light Beam Glare */}
        <div
          aria-hidden="true"
          style={{
            background: `radial-gradient(500px circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.15), transparent 45%)`,
            opacity: tilt.opacity,
            transition: 'opacity 0.3s ease',
          }}
          className="absolute inset-0 z-20 pointer-events-none rounded-xl"
        />
        {children}
      </div>
    </motion.div>
  );
}

export default function SkillsMastery() {
  const ravenAI = SKILLS_DATA.find((s) => s.technique === "Three-Eyed Raven AI") || SKILLS_DATA[0];
  const backendValyrian = SKILLS_DATA.find((s) => s.technique === "Valyrian Code Mastery") || SKILLS_DATA[1];
  const backendCitadel = SKILLS_DATA.find((s) => s.technique === "King’s Landing Citadel") || SKILLS_DATA[2];
  const frontendGuard = SKILLS_DATA.find((s) => s.technique === "Winterfell Guard") || SKILLS_DATA[3];
  const databaseVault = SKILLS_DATA.find((s) => s.technique === "Iron Bank Vault") || SKILLS_DATA[4];
  const reactComponents = SKILLS_DATA.find((s) => s.technique === "Dragon Glass Components") || SKILLS_DATA[5];
  const devTools = SKILLS_DATA.find((s) => s.technique === "Hand of the King Suite") || SKILLS_DATA[6];
  const gitVersion = SKILLS_DATA.find((s) => s.technique === "The Raven Post Network") || SKILLS_DATA[7];

  return (
    <section
      id="skills"
      className="py-20 md:py-32 relative z-10 overflow-hidden bg-background/60"
    >
      {/* Ambient background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-6">
          <div>
            <span className="text-primary font-mono tracking-[0.3em] uppercase text-xs sm:text-sm mb-2 block font-bold">
              TECHNICAL DISCIPLINES &amp; CODE ARCHITECTURE
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground uppercase tracking-tight font-realm">
              ROYAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                MASTERY
              </span>
            </h2>
          </div>

          <p className="max-w-md text-foreground/70 text-sm sm:text-base md:text-lg font-medium leading-relaxed border-l-2 border-primary/60 pl-4 font-sans">
            Mastered skills and technical proficiencies forged in building full-stack web platforms, intelligent AI engines, and robust backend architectures.
          </p>
        </div>

        {/* Asymmetrical Bento Grid with Interactive 3D Cursor Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* 🌟 HERO CARD 1: THREE-EYED RAVEN AI (Col-span 2) */}
          <InteractiveTiltCard
            delay={0}
            className="col-span-1 md:col-span-2 lg:col-span-2 group relative bg-card/70 backdrop-blur-xl border border-purple-500/40 p-5 sm:p-7 rounded-xl flex flex-col justify-between overflow-hidden shadow-lg hover:border-purple-500/80 hover:shadow-[0_15px_35px_rgba(168,85,247,0.3)] transition-all duration-300 h-auto cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-purple-500/5 to-transparent opacity-20 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-3">
                <span className="px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-widest rounded border bg-purple-950/80 border-purple-500/50 text-purple-300 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-purple-400" />
                  AI / MACHINE LEARNING
                </span>
                <div className="p-2 rounded-full bg-purple-950/50 text-purple-400 border border-purple-500/30 group-hover:scale-110 transition-transform">
                  {ICONS_MAP[ravenAI.technique]}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-foreground mb-1 group-hover:text-purple-300 transition-colors font-realm">
                {ravenAI.technique}
              </h3>
              <p className="text-xs sm:text-sm font-mono font-bold text-purple-400 tracking-wider mb-3">
                {ravenAI.tech_stack}
              </p>

              <blockquote className="text-xs sm:text-sm text-foreground/75 italic mb-4 leading-relaxed border-l-2 border-purple-500/50 pl-3">
                &ldquo;{ravenAI.lore}&rdquo;
              </blockquote>

              <ul className="space-y-1.5 text-xs sm:text-sm text-foreground/80 mb-4">
                {ravenAI.desc.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-purple-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Badges */}
            <div className="relative z-10 pt-3 border-t border-purple-500/20 flex flex-wrap gap-1.5 mt-auto">
              {['Python', 'Scikit-Learn', 'TF-IDF', 'Cosine Similarity', 'NLP', 'AI Recommendation'].map((tag) => (
                <span key={tag} className="text-[10px] font-mono uppercase px-2.5 py-1 bg-purple-950/60 border border-purple-500/30 text-purple-200 rounded font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </InteractiveTiltCard>


          {/* 🌟 HERO CARD 2: KING'S LANDING CITADEL & VALYRIAN CODE (Col-span 2) */}
          <InteractiveTiltCard
            delay={0.05}
            className="col-span-1 md:col-span-2 lg:col-span-2 group relative bg-card/70 backdrop-blur-xl border border-red-500/40 p-5 sm:p-7 rounded-xl flex flex-col justify-between overflow-hidden shadow-lg hover:border-red-500/80 hover:shadow-[0_15px_35px_rgba(239,68,68,0.3)] transition-all duration-300 h-auto cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/15 via-red-500/5 to-transparent opacity-20 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-3">
                <span className="px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-widest rounded border bg-red-950/80 border-red-500/50 text-red-300 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-red-400" />
                  PYTHON &amp; BACKEND ARCHITECTURE
                </span>
                <div className="p-2 rounded-full bg-red-950/50 text-red-400 border border-red-500/30 group-hover:scale-110 transition-transform">
                  {ICONS_MAP[backendCitadel.technique]}
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wide text-foreground mb-1 group-hover:text-red-300 transition-colors font-realm">
                Citadel Backend &amp; Valyrian Code
              </h3>
              <p className="text-xs sm:text-sm font-mono font-bold text-red-400 tracking-wider mb-3">
                Python, C, Django REST Framework &amp; FastAPI Microservices
              </p>

              <blockquote className="text-xs sm:text-sm text-foreground/75 italic mb-4 leading-relaxed border-l-2 border-red-500/50 pl-3">
                &ldquo;Engineering secure, scalable backend architectures and RESTful microservices for high-throughput realm operations.&rdquo;
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div>
                  <span className="block text-[11px] font-mono text-red-400 font-bold uppercase mb-1">Core Python &amp; Algorithmic Mastery</span>
                  <ul className="space-y-1 text-xs text-foreground/80">
                    {backendValyrian.desc.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-red-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-red-400 font-bold uppercase mb-1">Django &amp; REST Microservices</span>
                  <ul className="space-y-1 text-xs text-foreground/80">
                    {backendCitadel.desc.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-red-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="relative z-10 pt-3 border-t border-red-500/20 flex flex-wrap gap-1.5 mt-auto">
              {['Python 3', 'Django', 'Django REST Framework', 'FastAPI', 'C Language', 'RESTful APIs', 'Microservices'].map((tag) => (
                <span key={tag} className="text-[10px] font-mono uppercase px-2.5 py-1 bg-red-950/60 border border-red-500/30 text-red-200 rounded font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </InteractiveTiltCard>


          {/* ⚡ MEDIUM CARD 1: DRAGON GLASS & WINTERFELL GUARD (React & Web Architecture) */}
          <InteractiveTiltCard
            delay={0.1}
            className="col-span-1 md:col-span-1 lg:col-span-2 group relative bg-card/70 backdrop-blur-xl border border-cyan-500/40 p-5 sm:p-6 rounded-xl flex flex-col justify-between overflow-hidden shadow-lg hover:border-cyan-500/80 hover:shadow-[0_15px_35px_rgba(6,182,212,0.3)] transition-all duration-300 h-auto cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-cyan-500/5 to-transparent opacity-20 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-3">
                <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-widest rounded border bg-cyan-950/80 border-cyan-500/40 text-cyan-300">
                  REACT &amp; WEB TECH
                </span>
                <div className="p-2 rounded-full bg-cyan-950/50 text-cyan-400 border border-cyan-500/30">
                  {ICONS_MAP[reactComponents.technique]}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-foreground mb-1 group-hover:text-cyan-300 transition-colors font-realm">
                Dragon Glass &amp; Winterfell Guard
              </h3>
              <p className="text-xs font-mono font-bold text-cyan-400 tracking-wider mb-3">
                React.js, TypeScript, HTML5, CSS3 &amp; Tailwind CSS
              </p>

              <blockquote className="text-xs text-foreground/75 italic mb-3 border-l-2 border-cyan-500/50 pl-3">
                &ldquo;Crafting modular, lightning-fast Single Page Applications and responsive web interfaces.&rdquo;
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <ul className="space-y-1.5 text-xs text-foreground/80">
                  {reactComponents.desc.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-1.5 text-xs text-foreground/80">
                  {frontendGuard.desc.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Chips */}
            <div className="relative z-10 pt-3 border-t border-cyan-500/20 flex flex-wrap gap-1.5 mt-auto">
              {['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Responsive Design'].map((tag) => (
                <span key={tag} className="text-[10px] font-mono uppercase px-2.5 py-1 bg-cyan-950/60 border border-cyan-500/30 text-cyan-200 rounded font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </InteractiveTiltCard>


          {/* 🛡️ MEDIUM CARD 2: IRON BANK VAULT (Databases) */}
          <InteractiveTiltCard
            delay={0.15}
            className="col-span-1 md:col-span-1 lg:col-span-2 group relative bg-card/70 backdrop-blur-xl border border-emerald-500/40 p-5 sm:p-6 rounded-xl flex flex-col justify-between overflow-hidden shadow-lg hover:border-emerald-500/80 hover:shadow-[0_15px_35px_rgba(16,185,129,0.3)] transition-all duration-300 h-auto cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/15 via-emerald-500/5 to-transparent opacity-20 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-3">
                <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-widest rounded border bg-emerald-950/80 border-emerald-500/40 text-emerald-300">
                  DATABASES
                </span>
                <div className="p-2 rounded-full bg-emerald-950/50 text-emerald-400 border border-emerald-500/30">
                  {ICONS_MAP[databaseVault.technique]}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wide text-foreground mb-1 group-hover:text-emerald-300 transition-colors font-realm">
                {databaseVault.technique}
              </h3>
              <p className="text-xs font-mono font-bold text-emerald-400 tracking-wider mb-3">
                {databaseVault.tech_stack}
              </p>

              <blockquote className="text-xs text-foreground/75 italic mb-3 border-l-2 border-emerald-500/50 pl-3">
                &ldquo;{databaseVault.lore}&rdquo;
              </blockquote>

              <ul className="space-y-1.5 text-xs text-foreground/80 mb-3">
                {databaseVault.desc.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Badges */}
            <div className="relative z-10 pt-3 border-t border-emerald-500/20 flex flex-wrap gap-1.5 mt-auto">
              {['MySQL', 'SQLite', 'Django ORM', 'Relational Schemas', 'Query Optimization', 'Database Indexing'].map((tag) => (
                <span key={tag} className="text-[10px] font-mono uppercase px-2.5 py-1 bg-emerald-950/60 border border-emerald-500/30 text-emerald-200 rounded font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </InteractiveTiltCard>


          {/* 🔨 COMPACT UTILITY STRIP 1: HAND OF THE KING SUITE (Tools & Toolchain) */}
          <InteractiveTiltCard
            delay={0.2}
            className="col-span-1 md:col-span-1 lg:col-span-2 group relative bg-card/70 backdrop-blur-xl border border-indigo-500/40 p-4 sm:p-5 rounded-xl flex flex-col justify-between overflow-hidden shadow-lg hover:border-indigo-500/80 hover:shadow-[0_15px_35px_rgba(99,102,241,0.3)] transition-all duration-300 h-auto cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-indigo-500/5 to-transparent opacity-20 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-500/40 shrink-0">
                    {ICONS_MAP[devTools.technique]}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-black uppercase text-foreground group-hover:text-indigo-300 transition-colors font-realm">
                      {devTools.technique}
                    </h4>
                    <p className="text-[11px] font-mono text-indigo-400 font-semibold">
                      {devTools.tech_stack}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-indigo-950 border border-indigo-500/40 text-indigo-300 rounded uppercase font-bold shrink-0">
                  DEVELOPER TOOLCHAIN
                </span>
              </div>

              {/* Clean Tool Badges */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {['VS Code', 'Terminal CLI', 'Postman API', 'Python VirtualEnv', 'npm / npx', 'Chrome DevTools'].map((tool) => (
                  <span key={tool} className="text-[10px] font-mono uppercase px-2.5 py-1 bg-indigo-950/70 border border-indigo-500/30 text-indigo-200 rounded font-semibold">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </InteractiveTiltCard>


          {/* 🦅 COMPACT UTILITY STRIP 2: THE RAVEN POST NETWORK (Git Commit Tree & Deployment) */}
          <InteractiveTiltCard
            delay={0.25}
            className="col-span-1 md:col-span-1 lg:col-span-2 group relative bg-card/70 backdrop-blur-xl border border-orange-500/40 p-4 sm:p-5 rounded-xl flex flex-col justify-between overflow-hidden shadow-lg hover:border-orange-500/80 hover:shadow-[0_15px_35px_rgba(249,115,22,0.3)] transition-all duration-300 h-auto cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/15 via-orange-500/5 to-transparent opacity-20 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-950/60 text-orange-400 border border-orange-500/40 shrink-0">
                    {ICONS_MAP[gitVersion.technique]}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-black uppercase text-foreground group-hover:text-orange-300 transition-colors font-realm">
                      {gitVersion.technique}
                    </h4>
                    <p className="text-[11px] font-mono text-orange-400 font-semibold">
                      {gitVersion.tech_stack}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-orange-950 border border-orange-500/40 text-orange-300 rounded uppercase font-bold shrink-0">
                  GIT &amp; DEPLOY
                </span>
              </div>

              {/* Clean Version Control Badges */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {['Git Version Control', 'GitHub Repositories', 'Feature Branching', 'PR Code Reviews', 'Vercel Deployment', 'Netlify'].map((tool) => (
                  <span key={tool} className="text-[10px] font-mono uppercase px-2.5 py-1 bg-orange-950/70 border border-orange-500/30 text-orange-200 rounded font-semibold">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </InteractiveTiltCard>

        </div>
      </div>
    </section>
  );
}

