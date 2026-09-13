import { motion, AnimatePresence } from 'motion/react';
import { Download, X, FileText, Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { SOCIAL_LINKS } from '../data/portfolioData';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ff5722', '#e11d48', '#ffb74d']
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.origin + SOCIAL_LINKS.resume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-card border-2 border-primary/40 rounded-lg shadow-[0_0_50px_rgba(255,87,34,0.3)] overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-foreground/10 flex items-center justify-between bg-foreground/5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-md bg-primary/15 text-primary border border-primary/30">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider text-foreground font-realm">
                    House Records &amp; Resume
                  </h3>
                  <p className="text-xs text-foreground/60 font-mono">
                    Narsinghani Mohit • Full-Stack Web Developer
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 text-foreground/50 hover:text-foreground hover:bg-foreground/10 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-5 text-foreground">
              {/* Quick Summary Banner */}
              <div className="p-4 rounded-md bg-primary/10 border border-primary/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-primary uppercase font-bold tracking-widest block">
                    Official Document
                  </span>
                  <h4 className="text-base font-bold text-foreground">
                    RESUME_Mohit.pdf (104 KB)
                  </h4>
                  <p className="text-xs text-foreground/70 mt-0.5">
                    Includes education, experience, projects, and technology proficiencies.
                  </p>
                </div>

                <a
                  href={SOCIAL_LINKS.resume}
                  download="RESUME_Narsinghani_Mohit.pdf"
                  onClick={handleDownload}
                  className="px-5 py-2.5 bg-primary text-background font-black uppercase text-xs tracking-widest rounded-sm hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(255,87,34,0.4)] flex items-center justify-center gap-2 shrink-0 font-realm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Now</span>
                </a>
              </div>

              {/* Embedded PDF iframe or preview fallback */}
              <div className="w-full h-80 sm:h-96 rounded-md border border-foreground/15 overflow-hidden bg-black/40 relative flex flex-col items-center justify-center text-center p-4">
                <iframe
                  src={`${SOCIAL_LINKS.resume}#toolbar=0`}
                  title="Mohit Resume Preview"
                  className="w-full h-full rounded-sm"
                />
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-foreground/5 rounded border border-foreground/10">
                  <span className="block text-xs font-mono text-primary font-bold">EDUCATION</span>
                  <span className="text-xs font-semibold text-foreground/80">SALITER CE</span>
                </div>
                <div className="p-3 bg-foreground/5 rounded border border-foreground/10">
                  <span className="block text-xs font-mono text-primary font-bold">DIPLOMA CPI</span>
                  <span className="text-xs font-semibold text-foreground/80">8.5 / 10.0</span>
                </div>
                <div className="p-3 bg-foreground/5 rounded border border-foreground/10">
                  <span className="block text-xs font-mono text-primary font-bold">SPECIALTY</span>
                  <span className="text-xs font-semibold text-foreground/80">Python &amp; Django</span>
                </div>
                <div className="p-3 bg-foreground/5 rounded border border-foreground/10">
                  <span className="block text-xs font-mono text-primary font-bold">AI / ENGINE</span>
                  <span className="text-xs font-semibold text-foreground/80">Stockfish &amp; TF-IDF</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3 bg-foreground/5">
              <button
                onClick={handleCopy}
                className="w-full sm:w-auto px-4 py-2 border border-foreground/20 hover:border-primary text-foreground/80 hover:text-primary rounded-sm text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied' : 'Copy Resume Link'}</span>
              </button>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="flex-1 sm:flex-none px-4 py-2 border border-foreground/20 text-foreground/70 hover:text-foreground rounded-sm text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Close
                </button>
                <a
                  href={SOCIAL_LINKS.resume}
                  download="RESUME_Narsinghani_Mohit.pdf"
                  onClick={handleDownload}
                  className="flex-1 sm:flex-none px-5 py-2 bg-primary text-background font-black uppercase text-xs tracking-wider rounded-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-1.5 font-realm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
