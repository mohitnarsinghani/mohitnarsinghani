import { motion } from 'motion/react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { Achievement } from '../types';
import { Award, GraduationCap, Code } from 'lucide-react';

function AchievementSeal({ item, index }: { item: Achievement; index: number; key?: string }) {
  const getTheme = () => {
    switch (item.type) {
      case 'ai':
        return {
          glow: 'group-hover:shadow-[0_0_35px_rgba(212,175,55,0.4)]',
          border: 'group-hover:border-[#d4af37]',
          text: 'text-[#d4af37]',
          badgeBg: 'bg-[#7c2d12] text-[#f3ebd9] border-[#d4af37]/40',
          badge: 'SIH Internal Hackathon Selection',
          icon: <Award className="w-12 h-12 text-[#d4af37] transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(212,175,55,0.7)]" />,
        };
      case 'academic':
        return {
          glow: 'group-hover:shadow-[0_0_35px_rgba(59,83,69,0.5)]',
          border: 'group-hover:border-[#3b5345]',
          text: 'text-[#3b5345] dark:text-[#6b9080]',
          badgeBg: 'bg-[#3b5345] text-white border-[#3b5345]',
          badge: 'Diploma 8.5 CPI Distinction',
          icon: <GraduationCap className="w-12 h-12 text-[#3b5345] dark:text-[#6b9080] transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(59,83,69,0.7)]" />,
        };
      case 'api':
      default:
        return {
          glow: 'group-hover:shadow-[0_0_35px_rgba(124,45,18,0.4)]',
          border: 'group-hover:border-[#7c2d12]',
          text: 'text-[#7c2d12] dark:text-[#e05638]',
          badgeBg: 'bg-[#7c2d12] text-white border-[#7c2d12]',
          badge: 'Full-Stack Architect',
          icon: <Code className="w-12 h-12 text-[#7c2d12] dark:text-[#e05638] transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(124,45,18,0.7)]" />,
        };
    }
  };

  const theme = getTheme();

  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.15, type: 'spring' }}
      whileHover={{ scale: 1.05 }}
      className="group relative flex flex-col items-center text-center cursor-pointer max-w-xs font-sans"
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-30 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 rounded-full pointer-events-none" />

      {/* Circular Emblem Seal */}
      <div
        className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[#332211] flex items-center justify-center bg-[#F4EBD0] dark:bg-[#1a0f07] relative z-10 overflow-hidden ${theme.border} ${theme.glow} transition-all duration-500 shadow-xl mb-6`}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#7c2d12]/20 to-transparent opacity-20 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />
        {theme.icon}
      </div>

      {/* Badge Tag */}
      <span
        className={`px-3 py-1 text-[10px] font-mono uppercase tracking-[1.5px] border rounded-xs mb-3 font-bold shadow-xs ${theme.badgeBg}`}
      >
        {theme.badge}
      </span>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider mb-2 font-realm group-hover:text-primary transition-colors">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed font-sans max-w-xs">
        {item.desc}
      </p>
    </motion.div>
  );
}

export default function AchievementsHonor() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-background text-foreground transition-colors duration-300 font-sans">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="text-xs tracking-[4px] text-primary uppercase mb-2 font-bold font-mono">
            TITLES &amp; ACCOMPLISHMENTS OF THE REALM
          </div>
          <h2 className="font-realm text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest">
            HONOR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#d4af37] to-secondary">&amp; GLORY</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(255,87,34,0.8)]" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-10 sm:gap-14 lg:gap-20">
          {ACHIEVEMENTS_DATA.map((item, index) => (
            <AchievementSeal key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
