import { useState, useEffect, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, Download, Menu, X, FileText, Send } from 'lucide-react';
import { NAV_ITEMS, SOCIAL_LINKS } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export default function Navbar({ isDark, onToggleTheme, onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === 'body' || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        id="main-navigation"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'py-3.5' : 'py-5 md:py-6'
        }`}
      >
        <div
          className={`absolute inset-0 w-full h-full glass-panel transition-opacity duration-300 -z-10 ${
            scrolled ? 'opacity-100 shadow-xl' : 'opacity-0'
          }`}
        />

        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center relative z-10">
          {/* Logo */}
          <a
            href="#"
            id="nav-logo"
            onClick={(e) => handleNavClick(e, 'body')}
            className="text-xl sm:text-2xl font-black text-foreground flex items-center gap-2.5 group cursor-pointer"
          >
            <span className="inline-block w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 border-amber-500/80 shadow-[0_0_15px_rgba(234,179,8,0.6)] group-hover:shadow-[0_0_30px_rgba(234,179,8,1)] transition-all duration-700 ease-in-out group-hover:rotate-[360deg] shrink-0">
              <img
                src="/stark-badge.png"
                alt="Game of Thrones 4-House Emblem"
                className="w-full h-full object-cover"
              />
            </span>
            <span className="tracking-tight font-black">
              Narsinghani <span className="text-primary">Mohit.</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                id={`nav-link-${item.name.toLowerCase()}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs sm:text-sm font-bold text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest relative group py-1"
              >
                {item.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right Actions: Dark Mode, Resume, Contact */}
          <div className="hidden md:flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-desktop"
              onClick={onToggleTheme}
              className="p-2 rounded-md border border-foreground/15 hover:border-primary/50 text-foreground hover:text-primary transition-all hover:shadow-[0_0_10px_rgba(255,87,34,0.3)] bg-foreground/5 cursor-pointer"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 animate-pulse" />
              ) : (
                <Moon className="w-4 h-4 text-primary" />
              )}
            </button>

            {/* Resume Download / View Button */}
            <div className="flex items-center">
              <a
                id="resume-download-btn-nav"
                href={SOCIAL_LINKS.resume}
                download="RESUME_Narsinghani_Mohit.pdf"
                className="px-3.5 py-2 border border-foreground/20 hover:border-primary text-foreground/90 hover:text-primary text-xs font-bold uppercase tracking-wider rounded-sm flex items-center gap-1.5 transition-all hover:shadow-[0_0_12px_rgba(255,87,34,0.25)] group"
                title="Download Royal Decree Resume"
              >
                <Download className="w-3.5 h-3.5 text-primary group-hover:translate-y-0.5 transition-transform" />
                <span>Resume</span>
              </a>
              <button
                onClick={onOpenResume}
                className="px-2 py-2 border-y border-r border-foreground/20 hover:border-primary text-foreground/60 hover:text-primary text-xs rounded-r-sm transition-colors"
                title="Preview Resume"
              >
                <FileText className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Send a Raven CTA */}
            <a
              id="nav-send-raven-btn"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-background transition-all text-xs font-black uppercase tracking-widest rounded-sm shadow-[0_0_15px_rgba(255,87,34,0.2)] hover:shadow-[0_0_20px_rgba(255,87,34,0.6)] flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send a Raven</span>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              id="theme-toggle-mobile"
              onClick={onToggleTheme}
              className="p-2 rounded-md border border-foreground/15 text-foreground hover:text-primary transition-colors bg-foreground/5"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-primary" />
              )}
            </button>

            <a
              id="resume-download-mobile-quick"
              href={SOCIAL_LINKS.resume}
              download="RESUME_Narsinghani_Mohit.pdf"
              className="p-2 rounded-md border border-primary/40 text-primary transition-colors bg-primary/10"
              title="Download Resume"
              aria-label="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground hover:text-primary transition-colors rounded-md border border-foreground/15"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[68px] z-40 bg-[#0a0002]/95 backdrop-blur-xl border-b border-primary/20 shadow-2xl p-6 md:hidden text-white"
          >
            <div className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base font-bold text-white/90 hover:text-primary transition-colors uppercase tracking-widest py-2 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-primary text-xs font-mono">0{NAV_ITEMS.indexOf(item) + 1}</span>
                </a>
              ))}

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={SOCIAL_LINKS.resume}
                  download="RESUME_Narsinghani_Mohit.pdf"
                  className="w-full py-3 px-4 border border-foreground/30 hover:border-primary text-foreground font-bold uppercase tracking-wider text-xs rounded-sm flex items-center justify-center gap-2 bg-foreground/5"
                >
                  <Download className="w-4 h-4 text-primary" />
                  <span>Download Resume PDF</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-3 px-4 border border-foreground/20 text-foreground/80 font-bold uppercase tracking-wider text-xs rounded-sm flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4 text-primary" />
                  <span>Preview Resume Scroll</span>
                </button>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full py-3 px-4 bg-primary text-black font-black uppercase tracking-widest text-xs rounded-sm flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(255,87,34,0.4)]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send a Raven</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
