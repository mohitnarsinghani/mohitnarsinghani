import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPortal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('sent');

      // Throw celebratory realm sparks
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff5722', '#e11d48', '#ffab91', '#ffffff']
      });

      setTimeout(() => {
        setIsOpen(false);
        setStatus('idle');
        setFormData({ name: '', email: '', message: '' });
      }, 3500);
    }, 1800);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36 relative bg-background flex flex-col items-center justify-center min-h-[75vh] overflow-hidden"
    >
      {/* Radial aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0 pointer-events-none" />

      {/* Header */}
      <div className="text-center relative z-10 mb-12 sm:mb-16 px-4">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-widest mb-3 font-realm">
          Send a <span className="text-primary font-realm">Raven</span>
        </h2>
        <p className="text-foreground/60 max-w-lg mx-auto text-xs sm:text-sm font-medium leading-relaxed">
          A raven flies across the narrow sea with secrets and scrolls. Dispatch your missive to summon the builder of this realm.
        </p>
      </div>

      {/* Portal Container */}
      <div className="relative z-20 flex justify-center w-full max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="portal-form"
              initial={{ scale: 0.1, opacity: 0, borderRadius: '100%' }}
              animate={{ scale: 1, opacity: 1, borderRadius: '12px' }}
              exit={{ scale: 0, opacity: 0, borderRadius: '100%' }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="w-full max-w-lg bg-card border-2 border-primary/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(255,87,34,0.25)] relative overflow-hidden"
            >
              {/* Conic spinning aura */}
              <div
                className="absolute -inset-[100%] opacity-15 pointer-events-none mix-blend-screen"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent, #ff5722, transparent, #e11d48, transparent)',
                  animation: 'spin 12s linear infinite'
                }}
              />

              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6 border-b border-foreground/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-primary font-realm">
                      Communication Scroll
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 text-foreground/50 hover:text-foreground hover:bg-foreground/10 rounded-full transition-colors cursor-pointer"
                    aria-label="Close form"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {status === 'sent' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="py-10 text-center"
                  >
                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-black uppercase tracking-widest text-green-500 mb-2 font-realm">
                      Message Delivered
                    </h4>
                    <p className="text-foreground/70 text-sm font-medium">
                      The messenger raven is flying to Mohit with your missive.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-widest text-foreground/60 mb-1.5 font-bold">
                        Your Name / Noble House
                      </label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-background border border-foreground/15 p-3 rounded-sm focus:border-primary focus:outline-none transition-colors text-sm text-foreground"
                        placeholder="e.g. Jon Snow"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-widest text-foreground/60 mb-1.5 font-bold">
                        Comm Channel (Email)
                      </label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-background border border-foreground/15 p-3 rounded-sm focus:border-primary focus:outline-none transition-colors text-sm text-foreground"
                        placeholder="jon@winterfell.realm"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-widest text-foreground/60 mb-1.5 font-bold">
                        Realm Objective / Details
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-background border border-foreground/15 p-3 rounded-sm focus:border-primary focus:outline-none transition-colors resize-none text-sm text-foreground"
                        placeholder="Detail your request, alliance project, or tech summons..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full py-3.5 bg-primary text-background font-black uppercase tracking-widest hover:bg-primary/90 transition-all rounded-sm flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(255,87,34,0.4)] text-xs sm:text-sm font-realm"
                    >
                      {status === 'sending' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching Raven...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Dispatch Raven</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.button
              key="summon-btn"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, type: 'spring' }}
              onClick={() => setIsOpen(true)}
              className="group relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border-2 border-primary bg-card flex items-center justify-center overflow-hidden hover:shadow-[0_0_50px_rgba(255,87,34,0.5)] transition-shadow duration-500 cursor-pointer"
            >
              {/* Hover glow fill */}
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

              {/* Concentric spinning dashed realm circles */}
              <div className="absolute inset-2 border border-primary/35 rounded-full animate-spin-slow border-dashed pointer-events-none" />
              <div className="absolute inset-4 border border-secondary/30 rounded-full animate-reverse-spin border-dashed pointer-events-none" />
              <div className="absolute inset-8 border border-primary/20 rounded-full animate-spin-slow border-dotted pointer-events-none" />

              {/* Central Seal Text */}
              <div className="text-center relative z-10">
                <span className="block text-primary font-black tracking-widest uppercase mb-0.5 text-lg sm:text-xl font-realm group-hover:scale-110 transition-transform">
                  Dispatch
                </span>
                <span className="block text-xs font-mono text-foreground/60 uppercase tracking-widest">
                  Raven
                </span>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
