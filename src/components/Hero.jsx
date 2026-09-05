import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Terminal, Shield, Bot, Layers, Sparkles, Activity, CheckCircle2 } from 'lucide-react';

const SKILLS_MARQUEE = [
  'React.js',
  'Python',
  'AWS Cloud',
  'Agentic AI',
  'PostgreSQL',
  'Node.js',
  'Multi-Agent Systems',
  'Computer Vision',
  'LangChain',
  'Supabase',
  'FastAPI',
  'System Architecture',
];

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-32 sm:pt-36 lg:pt-44 pb-16 overflow-hidden">
      <div className="section-container relative z-10">
        
        {/* Two-Column Digital Studio Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left-Aligned Editorial Column */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Small Metadata Eyebrow - NexStudio Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full dark:bg-[#161616] bg-slate-100 border dark:border-[#262626] border-slate-300 text-xs font-heading tracking-widest dark:text-[#38bdf8] text-[#0284c7] uppercase font-bold"
            >
              <span className="w-2 h-2 rounded-full bg-[#0284c7] dark:bg-[#38bdf8] animate-pulse"></span>
              <span>✦ TAILGRIDS NEXSTUDIO // SDE &amp; AGENTIC AI</span>
            </motion.div>

            {/* Large Bold Heading (60-80px) Split across Two Lines */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold tracking-tight leading-[1.05] dark:text-[#f4f4f5] text-slate-900"
            >
              <span>Agentic AI &amp;</span>
              <br />
              <span className="dark:text-[#38bdf8] text-[#0284c7]">Software Engineer.</span>
            </motion.h1>

            {/* One-Line Positioning Statement with Times New Roman body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-body text-lg sm:text-xl dark:text-[#e4e4e7] text-slate-700 max-w-xl font-normal leading-relaxed"
            >
              Engineering autonomous multi-agent systems, scalable full-stack applications, and AWS cloud infrastructure.
            </motion.p>

            {/* Two Studio CTAs: Solid & Outline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Solid CTA: View Work */}
              <button
                onClick={() => scrollTo('projects')}
                className="btn-studio-solid group cursor-pointer"
              >
                <span>Explore Works</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Outline CTA: Download Resume */}
              <a
                href="/resume.pdf"
                download
                className="btn-studio-outline group cursor-pointer"
              >
                <Download size={14} className="dark:text-[#38bdf8] text-[#0284c7]" />
                <span>Download Resume</span>
              </a>
            </motion.div>

          </div>

          {/* Right Side: Subtle Abstract Visual (Floating Project Card + Gradient Blob) — No Stock Photos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            {/* Subtle Abstract Gradient Mesh Blob Behind Card */}
            <div className="absolute -inset-4 w-[340px] h-[340px] bg-gradient-to-tr from-[#38bdf8]/15 via-[#0284c7]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Abstract Digital Studio Preview Card */}
            <div className="w-full max-w-[380px] studio-card p-6 space-y-5 shadow-xl relative dark:border-[#222222] border-slate-200 dark:bg-[#121212] bg-white">
              
              {/* Card Terminal Header */}
              <div className="flex items-center justify-between border-b dark:border-[#222222] border-slate-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full dark:bg-[#2a2a2a] bg-slate-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full dark:bg-[#2a2a2a] bg-slate-300"></span>
                  <span className="w-2.5 h-2.5 rounded-full dark:bg-[#2a2a2a] bg-slate-300"></span>
                  <span className="text-[11px] font-heading dark:text-[#a1a1aa] text-slate-500 pl-2">system.overview</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full dark:bg-[#181818] bg-slate-100 border dark:border-[#262626] border-slate-200 text-[10px] font-heading dark:text-[#38bdf8] text-[#0284c7]">
                  <Activity size={11} className="animate-pulse" />
                  <span>LIVE</span>
                </div>
              </div>

              {/* Abstract Architectural Diagram Box */}
              <div className="p-4 rounded-xl dark:bg-[#0a0a0a] bg-slate-50 border dark:border-[#1f1f1f] border-slate-200 space-y-3 font-heading text-xs">
                <div className="flex items-center justify-between dark:text-[#a1a1aa] text-slate-600">
                  <span>ARCHITECTURE</span>
                  <span className="dark:text-[#38bdf8] text-[#0284c7] font-bold">v2.4</span>
                </div>

                {/* Minimalist Graphic Nodes */}
                <div className="space-y-2 py-1">
                  <div className="flex items-center justify-between p-2 rounded-lg dark:bg-[#141414] bg-white border dark:border-[#222222] border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2 dark:text-[#f4f4f5] text-slate-800 font-medium">
                      <Bot size={14} className="dark:text-[#38bdf8] text-[#0284c7]" />
                      <span>Agentic Reasoning Loop</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">ACTIVE</span>
                  </div>

                  <div className="flex items-center justify-center dark:text-[#444444] text-slate-400 text-xs">
                    ↓
                  </div>

                  <div className="flex items-center justify-between p-2 rounded-lg dark:bg-[#141414] bg-white border dark:border-[#222222] border-slate-200 shadow-sm">
                    <div className="flex items-center gap-2 dark:text-[#f4f4f5] text-slate-800 font-medium">
                      <Shield size={14} className="dark:text-[#38bdf8] text-[#0284c7]" />
                      <span>Full-Stack Platform (Supabase)</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">99.9%</span>
                  </div>
                </div>

                {/* Telemetry Row */}
                <div className="flex items-center justify-between pt-2 border-t dark:border-[#1a1a1a] border-slate-200 text-[11px] dark:text-[#a1a1aa] text-slate-600">
                  <span>TARGET: 2028 ROLES</span>
                  <span className="dark:text-[#f4f4f5] text-slate-900 font-bold">SDE / AI ENGINEER</span>
                </div>
              </div>

              {/* Project Preview Snippet */}
              <div className="pt-1">
                <div className="text-xs font-heading font-bold dark:text-[#f4f4f5] text-slate-900 flex items-center justify-between">
                  <span>Featured Case Study</span>
                  <span className="dark:text-[#38bdf8] text-[#0284c7] text-[11px] cursor-pointer hover:underline" onClick={() => scrollTo('projects')}>
                    #01 Grievance Portal &rarr;
                  </span>
                </div>
                <p className="font-body text-sm dark:text-[#e4e4e7] text-slate-600 mt-1.5 leading-relaxed">
                  Full-stack civic tracking engine built with real-time websockets &amp; row-level security.
                </p>
              </div>

            </div>
          </motion.div>

        </div>

        {/* ── TailGrids NexStudio Signature Live Metrics Ribbon ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {/* Metric 1 */}
          <div className="studio-card p-5 sm:p-6 text-center lg:text-left space-y-1.5">
            <div className="font-heading text-3xl sm:text-4xl font-bold dark:text-[#38bdf8] text-[#0284c7] tracking-tight">
              99.9%
            </div>
            <div className="font-heading text-xs font-bold uppercase tracking-wider dark:text-[#ffffff] text-slate-900">
              System Availability
            </div>
            <p className="font-body text-xs dark:text-[#e4e4e7] text-slate-600 leading-snug">
              Resilient PostgreSQL schemas, RLS isolation &amp; serverless AWS uptime.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="studio-card p-5 sm:p-6 text-center lg:text-left space-y-1.5">
            <div className="font-heading text-3xl sm:text-4xl font-bold dark:text-[#38bdf8] text-[#0284c7] tracking-tight">
              &lt; 50ms
            </div>
            <div className="font-heading text-xs font-bold uppercase tracking-wider dark:text-[#ffffff] text-slate-900">
              Inference Latency
            </div>
            <p className="font-body text-xs dark:text-[#e4e4e7] text-slate-600 leading-snug">
              Optimized token budgets, quantized Edge AI &amp; asynchronous pipelines.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="studio-card p-5 sm:p-6 text-center lg:text-left space-y-1.5">
            <div className="font-heading text-3xl sm:text-4xl font-bold dark:text-[#38bdf8] text-[#0284c7] tracking-tight">
              5+
            </div>
            <div className="font-heading text-xs font-bold uppercase tracking-wider dark:text-[#ffffff] text-slate-900">
              Scaled Systems
            </div>
            <p className="font-body text-xs dark:text-[#e4e4e7] text-slate-600 leading-snug">
              Civic platforms, agent reasoning loops &amp; forensic research engines.
            </p>
          </div>

          {/* Metric 4 */}
          <div className="studio-card p-5 sm:p-6 text-center lg:text-left space-y-1.5">
            <div className="font-heading text-3xl sm:text-4xl font-bold dark:text-[#38bdf8] text-[#0284c7] tracking-tight">
              2028
            </div>
            <div className="font-heading text-xs font-bold uppercase tracking-wider dark:text-[#ffffff] text-slate-900">
              VIT Chennai CSE
            </div>
            <p className="font-body text-xs dark:text-[#e4e4e7] text-slate-600 leading-snug">
              Rigorous computer science curriculum &amp; active student leadership.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Thin Horizontal Scrolling Skills Marquee Beneath Hero */}
      <div className="mt-16 sm:mt-20 border-y dark:border-[#1f1f1f] border-slate-200 dark:bg-[#0c0c0c] bg-slate-50 py-3.5 overflow-hidden select-none">
        <div className="marquee-track flex items-center gap-8 font-heading text-sm uppercase tracking-widest dark:text-[#a1a1aa] text-slate-700">
          {/* Double array for seamless loop */}
          {[...SKILLS_MARQUEE, ...SKILLS_MARQUEE].map((skill, index) => (
            <div key={index} className="flex items-center gap-8 whitespace-nowrap">
              <span className="hover:text-[#0284c7] dark:hover:text-[#38bdf8] transition-colors font-medium">{skill}</span>
              <span className="dark:text-[#38bdf8] text-[#0284c7] text-[10px]">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


