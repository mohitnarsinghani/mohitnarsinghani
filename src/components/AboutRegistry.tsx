import { motion } from 'motion/react';
import { Download, ExternalLink } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

interface AboutRegistryProps {
  onOpenResume: () => void;
}

export default function AboutRegistry({ onOpenResume }: AboutRegistryProps) {
  return (
    <section
      id="about"
      className="py-20 md:py-32 relative min-h-screen flex items-center justify-center z-10 overflow-hidden font-serif bg-background text-foreground transition-colors duration-300"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-foreground/10 -translate-y-1/2 z-0" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
        <div className="absolute top-[20%] left-[10%] w-36 h-36 bg-[#7c2d12] rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-44 h-44 bg-[#2b3e33] rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-3 sm:px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#7c2d12] via-[#d4af37] to-[#7c2d12] uppercase tracking-[0.2em] mb-3 leading-tight text-shadow-sm font-realm">
            GoT Royal Decree
          </h2>
          <div className="w-24 h-1 bg-[#7c2d12] mx-auto rounded-full shadow-[0_0_12px_rgba(124,45,18,0.8)]" />
        </motion.div>

        {/* GoT Parchment Portfolio Wrapper (Unrolling Decree Scroll Animation) */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-5xl mx-auto flex flex-col md:flex-row bg-[#E3D7C3] border-[5px] border-[#2b1a0e] shadow-[0_0_30px_rgba(0,0,0,0.9),inset_0_0_50px_rgba(43,26,14,0.4)] text-[#1a0f07] rounded-sm overflow-hidden origin-center"
          style={{
            backgroundImage: 'radial-gradient(#C4B59D 1.2px, transparent 1.2px)',
            backgroundSize: '16px 16px',
          }}
        >
          {/* Sidebar 1: Dark Forest Green (House Archives) */}
          <div
            className="hidden sm:flex w-[45px] bg-[#2b3e33] border-r-[3px] border-[#1a261f] items-center justify-center text-[#d4af37] text-xs font-bold tracking-[4px] uppercase shadow-[inset_-3px_0_8px_rgba(0,0,0,0.5)] shrink-0 py-8 select-none whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            HOUSE ARCHIVES
          </div>

          {/* Sidebar 2: Crimson Red */}
          <div className="hidden sm:block w-[20px] bg-[#7c2d12] border-r-[3px] border-[#451a0a] shadow-[inset_-2px_0_5px_rgba(0,0,0,0.4)] shrink-0" />

          {/* Profile Left Column */}
          <div className="w-full md:w-[300px] lg:w-[320px] p-6 sm:p-8 border-b-2 md:border-b-0 md:border-r-2 border-dashed border-[#8c7662] flex flex-col items-center text-center shrink-0">
            {/* Profile Crest / Avatar Frame */}
            <div className="profile-box flex flex-col items-center w-full">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-[#2b1a0e] outline outline-2 outline-[#7c2d12] outline-offset-4 shadow-[0_8px_16px_rgba(0,0,0,0.6)] overflow-hidden bg-[#1a0f07] mb-4 relative cursor-pointer"
              >
                <img
                  src="/profile-photo.png"
                  alt="Narsinghani Mohit Profile"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600&auto=format&fit=crop';
                  }}
                />
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-black tracking-wider text-[#1a0f07] uppercase border-b-2 border-[#7c2d12] pb-1 mb-1.5 w-full font-realm">
                Narsinghani Mohit
              </h3>
              <p className="text-[11px] font-bold text-[#7c2d12] uppercase tracking-[1.5px] mb-4 font-sans">
                Full-Stack &amp; Python Developer
              </p>
              <div className="bg-[#2b3e33] text-[#f3ebd9] text-[10px] font-bold px-3 py-1 border border-[#1a261f] uppercase tracking-wider mb-6 shadow-sm">
                FOR THE CROWN / ACTIVE DUTY
              </div>
            </div>

            {/* Raven Scroll (Card Box) */}
            <div className="bg-[#d9ccb6] border-2 border-[#2b1a0e] shadow-[4px_4px_0px_#2b1a0e] p-4 w-full relative text-left">
              <div className="absolute -top-3 right-2.5 bg-[radial-gradient(circle,#991b1b_0%,#450a0a_100%)] text-[#fef2f2] text-[8px] font-black px-2 py-1 rounded-full border border-[#7f1d1d] shadow-md uppercase tracking-wide">
                RAVEN MSG
              </div>

              <div className="text-xs sm:text-sm font-extrabold border-b-[1.5px] border-[#2b1a0e] pb-1 mb-3 uppercase tracking-wide">
                Raven Scroll
              </div>

              <div className="space-y-2.5 text-left text-[#1a0f07]">
                <div>
                  <span className="text-[9px] text-[#7c2d12] font-extrabold uppercase block">
                    House Alias / Name:
                  </span>
                  <span className="text-xs font-black block">Narsinghani Mohit</span>
                  <span className="text-[10px] text-[#555] block normal-case font-normal">
                    @mohitnarsinghani (Instagram)
                  </span>
                </div>

                <div>
                  <span className="text-[9px] text-[#7c2d12] font-extrabold uppercase block">
                    Messenger Raven (Email):
                  </span>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="text-[11px] font-bold text-[#1a0f07] hover:text-[#7c2d12] transition-colors break-all underline decoration-1"
                  >
                    {SOCIAL_LINKS.email}
                  </a>
                </div>

                <div>
                  <span className="text-[9px] text-[#7c2d12] font-extrabold uppercase block">
                    House Archives (GitHub):
                  </span>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#1a0f07] hover:text-[#7c2d12] transition-colors break-all flex items-center gap-1 underline decoration-1"
                  >
                    <span>github.com/mohitnarsinghani</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </div>

                <div>
                  <span className="text-[9px] text-[#7c2d12] font-extrabold uppercase block">
                    Grand Alliance (LinkedIn):
                  </span>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-[#1a0f07] hover:text-[#7c2d12] transition-colors break-all flex items-center gap-1 underline decoration-1"
                  >
                    <span>linkedin.com/in/mohit-narsinghani</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </div>

                <div className="pt-2 border-t border-[#8c7662]/40 flex items-center justify-between gap-1">
                  <a
                    href={SOCIAL_LINKS.resume}
                    download="RESUME_Narsinghani_Mohit.pdf"
                    className="font-black text-[#7c2d12] hover:underline flex items-center gap-1 text-[10px] uppercase tracking-wider"
                  >
                    <Download className="w-3 h-3" />
                    <span>Download Scroll</span>
                  </a>
                  <span className="text-[#8c7662]">|</span>
                  <button
                    onClick={onOpenResume}
                    className="text-[#2b1a0e] hover:text-[#7c2d12] underline text-[10px] font-bold uppercase tracking-wider"
                  >
                    Preview
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Right Column */}
          <div className="flex-1 p-6 sm:p-8 flex flex-col gap-6">
            {/* The Chronicles */}
            <div>
              <h4 className="text-base sm:text-lg font-black uppercase text-[#1a0f07] tracking-[2px] border-b-2 border-[#2b1a0e] pb-1 mb-3 relative after:content-[''] after:absolute after:-bottom-[5px] after:left-0 after:w-full after:h-[1px] after:bg-[#7c2d12] font-realm">
                The Chronicles
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-[#2b1a0e] font-semibold text-justify uppercase font-sans">
                A Full-Stack Software Engineer &amp; 3rd-Year B.Tech Computer Engineering student at SALITER specializing in Python, Django, React, FastAPI, and Machine Learning. Graduated with an 8.5 CPI in Diploma CE from Government Polytechnic Gandhinagar. Driven by a passion for building high-performance web platforms, crafting secure backend architectures, and solving complex real-world challenges with clean, efficient code.
              </p>
            </div>

            {/* 2-Column Grid for Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* House Knowledge */}
              <div>
                <h5 className="text-xs sm:text-sm font-black text-[#1a0f07] uppercase tracking-wider border-b-[1.5px] border-[#2b1a0e] pb-1 mb-2.5 font-realm">
                  House Knowledge
                </h5>
                <div className="space-y-1.5 text-[11px] font-bold text-[#3a2516]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#7c2d12]">🔥</span>
                    <span>Python, C / C++, HTML5 &amp; CSS3</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#7c2d12]">⚡</span>
                    <span>Django, Flask, FastAPI &amp; React</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#7c2d12]">🌊</span>
                    <span>MySQL, SQLite &amp; PostgreSQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#7c2d12]">🌱</span>
                    <span>Git, GitHub &amp; REST APIs</span>
                  </div>
                </div>
              </div>

              {/* Specialties & Maesters */}
              <div>
                <h5 className="text-xs sm:text-sm font-black text-[#1a0f07] uppercase tracking-wider border-b-[1.5px] border-[#2b1a0e] pb-1 mb-2.5 font-realm">
                  Specialties &amp; Maesters
                </h5>
                <div className="space-y-1.5 text-[11px] font-bold text-[#3a2516]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#7c2d12]">✦</span>
                    <span>Machine Learning (TF-IDF AI)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#7c2d12]">✦</span>
                    <span>Chess Engine (Stockfish 18)</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {['Python', 'Django', 'React', 'FastAPI', 'SQLite', 'AI / ML'].map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#2b1a0e] text-[#E3D7C3] text-[9.5px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Battles Fought / Record Box */}
            <div>
              <h4 className="text-base sm:text-lg font-black uppercase text-[#1a0f07] tracking-[2px] border-b-2 border-[#2b1a0e] pb-1 mb-3 relative after:content-[''] after:absolute after:-bottom-[5px] after:left-0 after:w-full after:h-[1px] after:bg-[#7c2d12] font-realm">
                Battles Fought
              </h4>
              <div className="bg-[#c9bca4] border-2 border-[#2b1a0e] p-3.5 sm:p-4 space-y-2">
                {[
                  'Python & Django Internship (Industrial Experience)',
                  'Forkly Chess WebApp (Stockfish 18 Integration)',
                  'CineMate Multi-OTT AI Recommendation Engine',
                  'Restaurant Billing & Inventory System',
                ].map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: idx * 0.08 }}
                    className="flex items-center gap-2.5 text-[11.5px] font-extrabold text-[#1a0f07] uppercase"
                  >
                    <div className="w-4 h-4 bg-[#7c2d12] text-[#f3ebd9] rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 shadow-xs">
                      ✓
                    </div>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Action Callout Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="bg-[#7c2d12] text-[#f3ebd9] border-2 border-[#2b1a0e] shadow-[4px_4px_0px_#2b1a0e] p-3.5 sm:p-4 relative mt-1"
            >
              <div className="absolute -top-2.5 left-3 bg-[#E3D7C3] text-[#7c2d12] text-[8px] font-black px-2 py-0.5 border border-[#2b1a0e] uppercase tracking-wider">
                Royal Mandate
              </div>
              <p className="text-xs sm:text-sm font-semibold italic leading-relaxed">
                &ldquo;Becoming a world-class Full-Stack Software Engineer by mastering AI, scalable web systems, and Python backend architecture while creating impactful digital solutions.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Right End Border / Flag */}
          <div
            className="hidden lg:flex w-[35px] border-l-2 border-[#8c7662] items-center justify-center text-[#7c2d12] text-xs font-extrabold tracking-[3px] uppercase opacity-75 shrink-0 py-8 select-none whitespace-nowrap"
            style={{ writingMode: 'vertical-rl' }}
          >
            WINTER IS COMING
          </div>
        </motion.div>
      </div>
    </section>
  );
}

