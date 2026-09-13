import { SOCIAL_LINKS } from '../data/portfolioData';
import { Github, Linkedin, Mail, Download, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-foreground/10 bg-background relative z-10 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Animated Game of Thrones 4-House Medallion */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-full overflow-hidden border-2 border-amber-500 shadow-[0_0_25px_rgba(234,179,8,0.7)] hover:shadow-[0_0_40px_rgba(234,179,8,1)] animate-spin-slow cursor-pointer transition-shadow" onClick={scrollToTop}>
          <img
            src="/stark-badge.png"
            alt="Game of Thrones 4-House Emblem"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wider mb-1 font-realm text-primary text-shadow-sm">
          Narsinghani Mohit
        </h3>
        <p className="text-xs sm:text-sm font-mono text-foreground/60 uppercase tracking-widest mb-8 text-center">
          WESTEROS ARCHIVES • HAND OF THE KING DEVELOPER
        </p>

        {/* Social Icons & Resume */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-foreground/15 hover:border-primary text-foreground/80 hover:text-primary hover:shadow-[0_0_15px_rgba(255,87,34,0.4)] transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-foreground/15 hover:border-primary text-foreground/80 hover:text-primary hover:shadow-[0_0_15px_rgba(255,87,34,0.4)] transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="p-2.5 rounded-full border border-foreground/15 hover:border-primary text-foreground/80 hover:text-primary hover:shadow-[0_0_15px_rgba(255,87,34,0.4)] transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>

          <a
            href={SOCIAL_LINKS.resume}
            download="RESUME_Narsinghani_Mohit.pdf"
            className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-all font-mono text-xs uppercase tracking-wider font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,87,34,0.25)]"
            title="Download Resume"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume PDF</span>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="w-full max-w-4xl border-t border-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-foreground/50 gap-4">
          <div>
            © {new Date().getFullYear()} Narsinghani Mohit. All realm rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-primary transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
