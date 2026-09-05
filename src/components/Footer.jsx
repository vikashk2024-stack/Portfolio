import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t dark:border-[#1f1f1f] border-slate-200 py-12 dark:bg-[#0a0a0a] bg-slate-50 transition-colors">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div className="flex items-center gap-2 text-sm font-heading dark:text-[#a1a1aa] text-slate-600">
          <span>© {new Date().getFullYear()}</span>
          <span className="font-bold dark:text-[#f4f4f5] text-slate-900">VIKASH K</span>
          <span>· Digital Studio · Built with React &amp; Tailwind</span>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-sm font-heading font-bold dark:text-[#a1a1aa] text-slate-600 dark:hover:text-[#38bdf8] hover:text-[#0284c7] transition-colors group cursor-pointer"
        >
          <span>Back to Top</span>
          <div className="w-7 h-7 rounded-lg dark:bg-[#161616] bg-white border dark:border-[#262626] border-slate-200 shadow-sm flex items-center justify-center group-hover:-translate-y-0.5 group-hover:border-[#0284c7] dark:group-hover:border-[#38bdf8] transition-all">
            <ArrowUp size={13} className="dark:text-[#38bdf8] text-[#0284c7]" />
          </div>
        </button>
      </div>
    </footer>
  );
}

