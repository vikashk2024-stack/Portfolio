import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Target, 
  Users, 
  Bot, 
  ShieldCheck, 
  Cpu, 
  Code2, 
  Cloud, 
  Compass, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Award
} from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { useInView, fadeUp } from '../hooks/useAnimations';

const DOSSIER_TABS = [
  { id: 'methodology', label: 'Engineering Philosophy', icon: Compass },
  { id: 'pillars', label: 'Core Technical Pillars', icon: Layers },
  { id: 'campus', label: 'Academics & Leadership', icon: Users },
];

export default function About() {
  const [ref, isVisible] = useInView(0.1);
  const [activeTab, setActiveTab] = useState('methodology');

  return (
    <SectionWrapper 
      id="about" 
      label="// 02. PROFILE"
      title="Engineering Background &amp; Philosophy" 
      subtitle="Academic foundation at VIT Chennai, system-level design methodology, and core specialization domains."
    >
      <div ref={ref} className="grid lg:grid-cols-12 gap-8 items-start">

        {/* Left Column: Interactive Dossier Tabs & Content */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="lg:col-span-8 space-y-6"
        >
          {/* Main Introduction Card */}
          <div className="glass-card p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-2.5 text-xs font-heading font-bold dark:text-sky-300 text-sky-700 uppercase tracking-wider">
              <Sparkles size={15} />
              <span>Dossier // VIKASH K</span>
            </div>

            <p className="font-body text-base md:text-lg leading-relaxed dark:text-slate-100 text-slate-900 font-medium">
              I am <strong className="gradient-text font-bold text-lg md:text-xl">VIKASH K</strong> — a Computer Science &amp; Engineering undergraduate at{' '}
              <strong className="dark:text-white text-slate-900 font-bold">VIT Chennai</strong> (2024–2028). 
              My engineering focus centers on bridging deterministic software engineering with stochastic autonomous agent systems, building reliable full-stack applications, and deploying resilient cloud backends.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-heading">
              <span className="vibrant-badge">VIT Chennai CSE '28</span>
              <span className="vibrant-badge">Autonomous Multi-Agent Systems</span>
              <span className="vibrant-badge">Full-Stack SDE</span>
              <span className="vibrant-badge">AWS Cloud Architect</span>
            </div>
          </div>

          {/* Dossier Tabs Navigation */}
          <div className="flex items-center gap-2 border-b dark:border-sky-500/20 border-slate-200 pb-2 overflow-x-auto">
            {DOSSIER_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'dark:bg-sky-500/25 bg-sky-100 dark:text-sky-300 text-sky-800 border dark:border-sky-400/50 border-sky-300 shadow-sm'
                      : 'dark:text-slate-400 text-slate-600 hover:text-sky-500 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-sky-400' : ''} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Panels */}
          <div className="min-h-[260px]">
            <AnimatePresence mode="wait">
              {activeTab === 'methodology' && (
                <motion.div
                  key="methodology"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="glass-card p-6 md:p-7 space-y-4 border-l-4 !border-l-sky-500"
                >
                  <div className="flex items-center gap-2 dark:text-sky-300 text-sky-700 font-heading font-bold text-sm">
                    <Compass size={18} />
                    <span>System-Level First Principles Methodology</span>
                  </div>

                  <p className="font-body text-base md:text-lg leading-relaxed dark:text-slate-200 text-slate-800 font-medium">
                    Software systems thrive when mathematical rigor meets pragmatic execution. In both full-stack development and Agentic AI, my methodology enforces strict separation of concerns: deterministic state and database contracts on one side, and self-correcting agent execution loops with explicit guardrails on the other.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl dark:bg-[#060913]/70 bg-slate-50 border dark:border-sky-500/15 border-slate-200">
                      <div className="text-xs font-heading font-bold dark:text-sky-300 text-sky-700">01. Deterministic Control</div>
                      <p className="text-xs dark:text-slate-300 text-slate-700 mt-1">
                        Structuring relational models (PostgreSQL, Supabase) with atomic constraints and strict role-based access.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl dark:bg-[#060913]/70 bg-slate-50 border dark:border-sky-500/15 border-slate-200">
                      <div className="text-xs font-heading font-bold dark:text-sky-300 text-sky-700">02. Autonomous Agent Loops</div>
                      <p className="text-xs dark:text-slate-300 text-slate-700 mt-1">
                        Architecting multi-agent reasoning, dynamic tool selection, and automated rollback triggers for reliable LLM pipelines.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'pillars' && (
                <motion.div
                  key="pillars"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid sm:grid-cols-3 gap-4"
                >
                  {/* Pillar 1 */}
                  <div className="glass-card p-5 space-y-2.5">
                    <div className="w-9 h-9 rounded-xl dark:bg-sky-500/20 bg-sky-100 flex items-center justify-center text-sky-400">
                      <Bot size={18} />
                    </div>
                    <h4 className="font-heading font-bold text-sm dark:text-white text-slate-900">Agentic AI &amp; LLMs</h4>
                    <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">
                      Multi-agent orchestration, tool selection, reasoning loops, LangChain, and RAG pipelines.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="glass-card p-5 space-y-2.5">
                    <div className="w-9 h-9 rounded-xl dark:bg-sky-500/20 bg-sky-100 flex items-center justify-center text-sky-400">
                      <Code2 size={18} />
                    </div>
                    <h4 className="font-heading font-bold text-sm dark:text-white text-slate-900">Software Dev (SDE)</h4>
                    <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">
                      Clean full-stack React.js, Node.js, relational PostgreSQL schemas, and real-time event-driven backends.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="glass-card p-5 space-y-2.5">
                    <div className="w-9 h-9 rounded-xl dark:bg-sky-500/20 bg-sky-100 flex items-center justify-center text-sky-400">
                      <Cloud size={18} />
                    </div>
                    <h4 className="font-heading font-bold text-sm dark:text-white text-slate-900">AWS Cloud Systems</h4>
                    <p className="text-xs dark:text-slate-300 text-slate-700 leading-relaxed">
                      Serverless Lambda compute, S3 data lakes, CloudFront edge delivery, and production CI/CD architectures.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === 'campus' && (
                <motion.div
                  key="campus"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="glass-card p-6 space-y-4"
                >
                  <div className="flex items-center gap-2 dark:text-sky-300 text-sky-700 font-heading font-bold text-sm">
                    <Users size={18} />
                    <span>Campus Leadership &amp; Student Community</span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 text-xs font-heading">
                    <div className="p-3 rounded-xl dark:bg-[#060913]/60 bg-slate-50 border dark:border-sky-500/15 border-slate-200">
                      <div className="font-bold dark:text-white text-slate-900 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                        <span>AI Club, VIT Chennai</span>
                      </div>
                      <p className="dark:text-slate-300 text-slate-600 mt-1 pl-3.5">Research &amp; Operations · ML Workshops</p>
                    </div>

                    <div className="p-3 rounded-xl dark:bg-[#060913]/60 bg-slate-50 border dark:border-sky-500/15 border-slate-200">
                      <div className="font-bold dark:text-white text-slate-900 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                        <span>CodeChef VITC Chapter</span>
                      </div>
                      <p className="dark:text-slate-300 text-slate-600 mt-1 pl-3.5">Technical Advisor · Contest Problems</p>
                    </div>

                    <div className="p-3 rounded-xl dark:bg-[#060913]/60 bg-slate-50 border dark:border-sky-500/15 border-slate-200">
                      <div className="font-bold dark:text-white text-slate-900 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-600"></span>
                        <span>Event Management Club</span>
                      </div>
                      <p className="dark:text-slate-300 text-slate-600 mt-1 pl-3.5">Coordinator · Vibrance Annual Fest</p>
                    </div>

                    <div className="p-3 rounded-xl dark:bg-[#060913]/60 bg-slate-50 border dark:border-sky-500/15 border-slate-200">
                      <div className="font-bold dark:text-white text-slate-900 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-700"></span>
                        <span>CSED.VITC</span>
                      </div>
                      <p className="dark:text-slate-300 text-slate-600 mt-1 pl-3.5">Outreach Member · Academic Seminars</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Right Column: Quick Profile & Credentials Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          custom={2}
          className="lg:col-span-4 space-y-5"
        >
          {/* Quick Profile Telemetry */}
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-xs font-heading font-bold dark:!text-sky-300 !text-sky-700 uppercase tracking-widest border-b dark:border-sky-500/20 border-slate-200 pb-3 flex items-center gap-2">
              <ShieldCheck size={16} />
              <span>Verified Identity</span>
            </h3>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <GraduationCap size={18} className="dark:text-sky-400 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <div className="dark:!text-white !text-slate-900 font-bold">B.Tech in CSE</div>
                  <div className="text-xs dark:text-[#d4d4d8] text-slate-700 font-normal">VIT Chennai · 2024–2028</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="dark:text-sky-400 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <div className="dark:!text-white !text-slate-900 font-bold">Chennai, Tamil Nadu</div>
                  <div className="text-xs dark:text-[#d4d4d8] text-slate-700 font-normal">India (Open to relocation)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Target size={18} className="dark:text-sky-400 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <div className="dark:!text-sky-300 !text-sky-800 font-bold">Target Roles</div>
                  <div className="text-xs dark:text-slate-300 text-slate-700">Agentic AI Engineer / SDE (2028)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Award size={18} className="dark:text-sky-400 text-sky-700 shrink-0 mt-0.5" />
                <div>
                  <div className="dark:!text-white !text-slate-900 font-bold">Research Experience</div>
                  <div className="text-xs dark:text-[#d4d4d8] text-slate-700 font-normal">IIIT Kottayam AI Intern</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Micro-CTA */}
          <div className="glass-card p-5 text-center space-y-3">
            <div className="text-xs font-heading dark:text-[#d4d4d8] text-slate-700 font-normal">
              Looking for a high-velocity developer?
            </div>
            <a
              href="mailto:vikashkamaleshkannan@gmail.com"
              className="btn-vibrant w-full justify-center text-xs py-2.5"
            >
              <span>Reach Out Directly</span>
            </a>
          </div>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}

