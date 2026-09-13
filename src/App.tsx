import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutRegistry from './components/AboutRegistry';
import SkillsMastery from './components/SkillsMastery';
import Projects from './components/Projects';
import TimelinePath from './components/TimelinePath';
import AchievementsHonor from './components/AchievementsHonor';
import ContactPortal from './components/ContactPortal';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Initialize theme from localStorage or default to dark (realm night theme)
  useEffect(() => {
    const savedTheme = localStorage.getItem('realm_theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.remove('light');
        localStorage.setItem('realm_theme', 'dark');
      } else {
        document.documentElement.classList.add('light');
        localStorage.setItem('realm_theme', 'light');
      }
      return next;
    });
  };

  return (
    <div className={`min-h-screen bg-background text-foreground transition-colors duration-300 font-sans selection:bg-primary/30 selection:text-primary ${isDark ? '' : 'light'}`}>
      {/* Royal Intro Preloader */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Main Navigation */}
      <Navbar
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main className="relative">
        <Hero isLoaded={!loading} onOpenResume={() => setIsResumeOpen(true)} />
        <AboutRegistry onOpenResume={() => setIsResumeOpen(true)} />
        <SkillsMastery />
        <Projects />
        <TimelinePath />
        <AchievementsHonor />
        <ContactPortal />
      </main>

      {/* Westeros Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
