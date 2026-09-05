import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Download, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Capabilities' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'certifications', label: 'Credentials' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection, darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'dark:bg-[#0a0a0a]/90 bg-white/90 backdrop-blur-xl border-b dark:border-[#1f1f1f] border-slate-200 shadow-sm'
          : 'dark:bg-[#0a0a0a]/40 bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="section-container flex items-center justify-between h-20">
        
        {/* Studio Brand Mark */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg dark:bg-[#181818] bg-slate-100 dark:border-[#2a2a2a] border-slate-300 flex items-center justify-center font-heading font-bold text-xs dark:text-[#38bdf8] text-[#0284c7] group-hover:border-[#0284c7] dark:group-hover:border-[#38bdf8] transition-colors">
            VK
          </div>
          <div>
            <span className="font-heading font-bold text-base tracking-tight dark:text-[#f4f4f5] text-slate-900 block leading-none">
              VIKASH K
            </span>
            <span className="text-xs font-heading dark:text-[#a1a1aa] text-slate-600 tracking-wider block mt-1">
              STUDIO // SDE &amp; AI
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-heading tracking-wide">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`transition-colors relative py-1 cursor-pointer ${
                  isActive
                    ? 'dark:text-[#f4f4f5] text-slate-900 font-bold'
                    : 'dark:text-[#a1a1aa] text-slate-600 hover:text-slate-900 dark:hover:text-[#f4f4f5]'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0284c7] dark:bg-[#38bdf8]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-xl dark:bg-[#141414] bg-slate-100 hover:bg-slate-200 dark:hover:bg-[#1f1f1f] dark:text-[#a1a1aa] text-slate-700 hover:text-slate-900 dark:hover:text-[#f4f4f5] border dark:border-[#222222] border-slate-300 transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
          </button>

          {/* Quick Resume Link */}
          <a
            href="/resume.pdf"
            download
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-heading text-xs font-bold dark:text-[#f4f4f5] text-slate-800 dark:bg-[#161616] bg-slate-100 hover:bg-slate-200 dark:hover:bg-[#202020] border dark:border-[#2a2a2a] border-slate-300 hover:border-[#0284c7] dark:hover:border-[#38bdf8] transition-all cursor-pointer"
          >
            <Download size={13} className="text-[#0284c7] dark:text-[#38bdf8]" />
            <span>Resume</span>
          </a>

          {/* NexStudio "Let's Talk" CTA */}
          <button
            onClick={() => scrollTo('contact')}
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-heading text-xs font-bold bg-[#0284c7] dark:bg-[#38bdf8] text-white dark:text-[#0a0a0a] hover:opacity-90 shadow-sm transition-all cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={13} />
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-xl dark:bg-[#141414] bg-slate-100 text-slate-700 dark:text-[#a1a1aa] hover:text-slate-900 dark:hover:text-white border dark:border-[#222222] border-slate-300 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden dark:bg-[#0e0e0e] bg-white border-b dark:border-[#222222] border-slate-200 shadow-md"
          >
            <div className="section-container py-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`flex items-center justify-between w-full text-left py-2 text-base font-heading transition-colors ${
                    activeSection === link.id
                      ? 'dark:text-[#38bdf8] text-[#0284c7] font-bold'
                      : 'dark:text-[#a1a1aa] text-slate-700 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} className="opacity-40" />
                </button>
              ))}
              <div className="pt-4 border-t dark:border-[#222222] border-slate-200">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 px-4 py-3 text-xs font-heading font-bold rounded-xl bg-[#0284c7] dark:bg-[#38bdf8] text-white dark:text-[#0a0a0a]"
                >
                  <Download size={14} />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

