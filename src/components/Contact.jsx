import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  MessageSquare, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { useInView, fadeUp } from '../hooks/useAnimations';

export default function Contact() {
  const [ref, isVisible] = useInView(0.1);
  const [copiedItem, setCopiedItem] = useState(null);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  return (
    <SectionWrapper 
      id="contact" 
      label="// 07. CONTACT &amp; INQUIRIES"
      title="Let's Build Something Remarkable" 
      subtitle="Connect directly for 2028 Agentic AI engineer roles, SDE opportunities, or technical research collaborations."
    >
      <div ref={ref} className="max-w-4xl mx-auto space-y-10">

        {/* ── NexStudio High-Conversion Agency CTA Banner ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="studio-card p-8 sm:p-12 text-center relative overflow-hidden dark:bg-[#121212] bg-white border dark:border-[#222222] border-slate-200 shadow-xl"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#38bdf8]/10 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* NexStudio Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full dark:bg-[#181818] bg-slate-100 border dark:border-[#2a2a2a] border-slate-300 text-xs font-heading font-bold dark:text-[#38bdf8] text-[#0284c7] uppercase tracking-wider mb-6">
            <Sparkles size={13} />
            <span>NexStudio Collaboration // SDE &amp; AI</span>
          </div>

          {/* Bold Agency Headline */}
          <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight dark:text-[#ffffff] text-slate-900 max-w-2xl mx-auto leading-tight">
            Have a vision for your next product or autonomous AI system?
          </h3>

          {/* Positioning Description with Times New Roman */}
          <p className="font-body text-base sm:text-lg dark:text-[#e4e4e7] text-slate-700 max-w-xl mx-auto mt-4 leading-relaxed font-normal">
            From zero-bloat multi-agent reasoning loops to production-grade cloud architectures, let's turn ambitious technical blueprints into reality.
          </p>

          {/* Dual Action CTAs */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:vikashkamaleshkannan@gmail.com?subject=Portfolio%20Inquiry%20-%20VIKASH%20K"
              className="btn-studio-solid flex items-center gap-2 px-8 py-4 cursor-pointer"
            >
              <Send size={16} />
              <span>Launch Direct Email</span>
            </a>
            <a
              href="tel:+918248498872"
              className="btn-studio-outline flex items-center gap-2 px-8 py-4 cursor-pointer"
            >
              <Phone size={16} className="dark:text-[#38bdf8] text-[#0284c7]" />
              <span>Call (+91 82484 98872)</span>
            </a>
          </div>
        </motion.div>

        {/* ── Direct Contact Channels Grid ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          custom={1}
          className="grid sm:grid-cols-2 gap-4"
        >
          {/* Email Channel */}
          <div className="studio-card p-5 sm:p-6 flex flex-col justify-between gap-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl dark:bg-[#1a1a1a] bg-slate-100 flex items-center justify-center dark:text-[#38bdf8] text-[#0284c7]">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs font-heading font-bold uppercase tracking-wider dark:text-[#a1a1aa] text-slate-500">
                    Direct Email
                  </div>
                  <div className="font-heading font-bold text-sm sm:text-base dark:text-[#ffffff] text-slate-900 break-all mt-0.5">
                    vikashkamaleshkannan@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t dark:border-[#222222] border-slate-200">
              <button
                onClick={() => copyToClipboard('vikashkamaleshkannan@gmail.com', 'email')}
                className="flex-1 py-2 px-3 rounded-lg text-xs font-heading font-bold dark:bg-[#181818] bg-slate-100 hover:bg-slate-200 dark:hover:bg-[#222222] dark:text-[#f4f4f5] text-slate-800 border dark:border-[#2a2a2a] border-slate-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copiedItem === 'email' ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedItem === 'email' ? 'Copied to Clipboard!' : 'Copy Address'}</span>
              </button>
              <a
                href="mailto:vikashkamaleshkannan@gmail.com"
                className="p-2 rounded-lg dark:bg-[#181818] bg-slate-100 dark:text-[#38bdf8] text-[#0284c7] hover:bg-slate-200 dark:hover:bg-[#222222] border dark:border-[#2a2a2a] border-slate-300 transition-colors"
                title="Open Email App"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Phone Channel */}
          <div className="studio-card p-5 sm:p-6 flex flex-col justify-between gap-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl dark:bg-[#1a1a1a] bg-slate-100 flex items-center justify-center dark:text-[#38bdf8] text-[#0284c7]">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs font-heading font-bold uppercase tracking-wider dark:text-[#a1a1aa] text-slate-500">
                    Mobile Phone
                  </div>
                  <div className="font-heading font-bold text-sm sm:text-base dark:text-[#ffffff] text-slate-900 mt-0.5">
                    +91 82484 98872
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-2 border-t dark:border-[#222222] border-slate-200">
              <button
                onClick={() => copyToClipboard('+918248498872', 'phone')}
                className="flex-1 py-2 px-3 rounded-lg text-xs font-heading font-bold dark:bg-[#181818] bg-slate-100 hover:bg-slate-200 dark:hover:bg-[#222222] dark:text-[#f4f4f5] text-slate-800 border dark:border-[#2a2a2a] border-slate-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copiedItem === 'phone' ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedItem === 'phone' ? 'Copied Number!' : 'Copy Number'}</span>
              </button>
              <a
                href="tel:+918248498872"
                className="p-2 rounded-lg dark:bg-[#181818] bg-slate-100 dark:text-[#38bdf8] text-[#0284c7] hover:bg-slate-200 dark:hover:bg-[#222222] border dark:border-[#2a2a2a] border-slate-300 transition-colors"
                title="Place Call"
              >
                <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* LinkedIn Profile */}
          <a
            href="https://www.linkedin.com/in/vikashkamalesh"
            target="_blank"
            rel="noopener noreferrer"
            className="studio-card p-5 sm:p-6 flex items-center justify-between group hover:border-[#0284c7] dark:hover:border-[#38bdf8] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl dark:bg-[#1a1a1a] bg-slate-100 flex items-center justify-center dark:text-[#38bdf8] text-[#0284c7]">
                <Linkedin size={18} />
              </div>
              <div>
                <div className="text-xs font-heading font-bold uppercase tracking-wider dark:text-[#a1a1aa] text-slate-500">
                  Professional Network
                </div>
                <div className="font-heading font-bold text-sm sm:text-base dark:text-[#ffffff] text-slate-900 mt-0.5">
                  linkedin.com/in/vikashkamalesh
                </div>
              </div>
            </div>
            <ExternalLink size={16} className="dark:text-[#a1a1aa] text-slate-400 group-hover:text-[#0284c7] dark:group-hover:text-[#38bdf8] transition-colors" />
          </a>

          {/* GitHub Repositories */}
          <a
            href="https://github.com/vikashk2024-stack"
            target="_blank"
            rel="noopener noreferrer"
            className="studio-card p-5 sm:p-6 flex items-center justify-between group hover:border-[#0284c7] dark:hover:border-[#38bdf8] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl dark:bg-[#1a1a1a] bg-slate-100 flex items-center justify-center dark:text-[#38bdf8] text-[#0284c7]">
                <Github size={18} />
              </div>
              <div>
                <div className="text-xs font-heading font-bold uppercase tracking-wider dark:text-[#a1a1aa] text-slate-500">
                  Open Source &amp; Code
                </div>
                <div className="font-heading font-bold text-sm sm:text-base dark:text-[#ffffff] text-slate-900 mt-0.5">
                  github.com/vikashk2024-stack
                </div>
              </div>
            </div>
            <ExternalLink size={16} className="dark:text-[#a1a1aa] text-slate-400 group-hover:text-[#0284c7] dark:group-hover:text-[#38bdf8] transition-colors" />
          </a>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
