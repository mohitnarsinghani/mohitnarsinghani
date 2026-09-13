import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TIMELINE_DATA } from '../data/portfolioData';

const BADGE_BG = ['#8c3b3b', '#3b5345', '#1b4d2e'];

export default function TimelinePath() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="py-20 md:py-32 bg-background relative overflow-hidden font-serif text-foreground transition-colors duration-300"
    >
      <div className="container mx-auto px-3 sm:px-6 relative z-10 flex flex-col items-center">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="text-xs tracking-[4px] text-[#8c3b3b] uppercase mb-2 font-bold font-serif">
            The Chronicles of Progress &amp; Expeditions
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-[#332211] bg-[#E3D7C3] px-6 py-2.5 border-[3px] border-[#332211] inline-block shadow-[0_8px_20px_rgba(0,0,0,0.3)] tracking-[2px] uppercase">
            CONQUEST CHRONICLES
          </h2>
        </motion.div>

        {/* Timeline Wrapper (GoT Parchment Scroll Unrolling Animation) */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[750px] bg-[#E3D7C3] border-[4px] border-[#332211] shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-6 sm:p-10 pl-6 sm:pl-16 flex rounded-sm overflow-hidden origin-center"
          style={{
            backgroundImage: 'radial-gradient(#C4B59D 1.2px, transparent 1.2px)',
            backgroundSize: '16px 16px',
          }}
        >
          {/* Sidebars (Desktop) */}
          <div className="hidden sm:flex absolute -top-[4px] -bottom-[4px] -left-[4px] border-[4px] border-[#332211] z-20 pointer-events-none">
            <div
              className="w-[38px] bg-[#3b5345] border-r-2 border-[#222] flex justify-center items-start pt-6 text-white font-bold tracking-[4px] text-[11px] font-serif uppercase select-none"
              style={{ writingMode: 'vertical-rl' }}
            >
              HOUSE ARCHIVES
            </div>
            <div className="w-[18px] bg-[#8c3b3b] border-r-2 border-[#332211]" />
          </div>

          {/* Timeline Inner Container */}
          <div className="relative w-full sm:ml-6 py-2">
            {/* Single Vertical Glowing Line on the Left of Cards */}
            <div className="absolute top-0 bottom-0 left-[15px] w-[3px] bg-gradient-to-b from-[#8c3b3b] via-[#3b5345] to-[#8c3b3b] shadow-[0_0_10px_rgba(59,83,69,0.4)]">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-[#d4af37] shadow-[0_0_12px_rgba(212,175,55,0.9)]"
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-7">
              {TIMELINE_DATA.map((milestone, index) => {
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: index * 0.12 }}
                    className="relative w-full pl-[45px]"
                  >
                    {/* Node Circle */}
                    <div className="absolute top-5 left-[3px] w-[26px] h-[26px] bg-[#332211] border-2 border-[#C4B59D] rounded-full flex items-center justify-center shadow-[0_0_8px_rgba(0,0,0,0.4)] z-10 transition-transform duration-300 hover:scale-125 hover:bg-[#8c3b3b] cursor-pointer">
                      <div className="w-2 h-2 bg-[#E3D7C3] rounded-full" />
                    </div>

                    {/* Milestone Card */}
                    <div className="bg-[#F4EBD0] border-[3px] border-[#332211] p-4 sm:p-5 relative shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[6px_8px_15px_rgba(0,0,0,0.25)] transition-all duration-300">
                      {/* Card Header */}
                      <div className="flex justify-between items-center mb-2.5 border-b border-[#C4B59D] pb-1.5">
                        <span className="text-xs sm:text-sm font-bold text-[#332211] font-serif">
                          {milestone.year}
                        </span>
                        <span
                          className="text-[9px] text-white px-2 py-0.5 rounded-xs uppercase tracking-wider font-serif font-bold"
                          style={{
                            backgroundColor: BADGE_BG[index % BADGE_BG.length],
                          }}
                        >
                          {milestone.rank}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-sm sm:text-base font-bold text-[#222] mb-1.5 font-serif uppercase tracking-wide">
                        {milestone.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-[#443322] leading-relaxed mb-3 font-sans">
                        {milestone.desc}
                      </p>

                      {/* Footer */}
                      <div className="flex justify-between items-center text-[9px] text-[#554433] border-t border-dashed border-[#C4B59D] pt-1.5 uppercase tracking-wider font-mono">
                        <span>⚡ Verified Milestone</span>
                        <span>Saliter / GP Gandhinagar</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



