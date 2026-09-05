import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Code2, Cloud, Brain, Wrench, Search, CheckCircle2, Sparkles } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { useInView, fadeUp, staggerContainer } from '../hooks/useAnimations';

const SKILL_CATEGORIES = [
  'All',
  'Agentic AI & ML',
  'Full Stack (SDE)',
  'Cloud & Systems',
  'Languages & Tools',
];

const SKILL_DATA = [
  {
    category: 'Agentic AI & ML',
    title: 'Agentic AI & Autonomous Systems',
    priority: 'Priority 1 Focus',
    icon: Bot,
    highlight: true,
    skills: [
      { name: 'Agentic AI Workflows', level: 'Specialized', note: 'Autonomous reasoning loops' },
      { name: 'Multi-Agent Architecture', level: 'Specialized', note: 'Orchestration & tool dispatch' },
      { name: 'LLM Tooling & Function Calling', level: 'Advanced', note: 'Dynamic API binding' },
      { name: 'RAG Pipelines', level: 'Advanced', note: 'Vector ingestion & retrieval' },
      { name: 'LangChain / Frameworks', level: 'Proficient', note: 'Agent graphs & memory' },
    ],
  },
  {
    category: 'Full Stack (SDE)',
    title: 'Full-Stack Software Engineering',
    priority: 'Core SDE Track',
    icon: Code2,
    highlight: true,
    skills: [
      { name: 'React.js', level: 'Advanced', note: 'Hooks, Suspense, State architecture' },
      { name: 'Node.js & Express', level: 'Advanced', note: 'REST endpoints & async I/O' },
      { name: 'PostgreSQL & SQL', level: 'Advanced', note: 'Relational schemas, indexes, RLS' },
      { name: 'Supabase', level: 'Advanced', note: 'Realtime websockets, Auth, DB' },
      { name: 'Tailwind CSS', level: 'Advanced', note: 'Custom design systems' },
    ],
  },
  {
    category: 'Cloud & Systems',
    title: 'AWS Cloud Infrastructure',
    priority: 'Production Systems',
    icon: Cloud,
    highlight: false,
    skills: [
      { name: 'AWS Lambda', level: 'Advanced', note: 'Serverless event compute' },
      { name: 'Amazon S3', level: 'Advanced', note: 'Object storage & asset hosting' },
      { name: 'Amazon EC2', level: 'Proficient', note: 'Virtual computing instances' },
      { name: 'AWS CloudFront', level: 'Proficient', note: 'Edge caching & CDN distribution' },
      { name: 'AWS IAM', level: 'Proficient', note: 'Least-privilege role security' },
    ],
  },
  {
    category: 'Agentic AI & ML',
    title: 'Computer Vision & Forensics',
    priority: 'Applied Research Track',
    icon: Brain,
    highlight: false,
    skills: [
      { name: 'OpenCV & NumPy', level: 'Advanced', note: 'Image processing & matrices' },
      { name: 'Error Level Analysis (ELA)', level: 'Specialized', note: 'JPEG forensic compression analysis' },
      { name: 'Image Forgery Localization', level: 'Specialized', note: 'Splicing & copy-move detection' },
      { name: 'TensorFlow / Keras', level: 'Proficient', note: 'Neural network training' },
      { name: 'scikit-learn', level: 'Proficient', note: 'Classical ML algorithms' },
    ],
  },
  {
    category: 'Languages & Tools',
    title: 'Languages & Engineering Tooling',
    priority: 'Foundations',
    icon: Wrench,
    highlight: false,
    skills: [
      { name: 'Python', level: 'Advanced', note: 'AI systems, backend, scripts' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', note: 'Modern frontend & Node' },
      { name: 'C++', level: 'Proficient', note: 'Algorithms & data structures' },
      { name: 'Java', level: 'Proficient', note: 'Object-oriented programming' },
      { name: 'Git & GitHub', level: 'Advanced', note: 'Version control & workflows' },
    ],
  },
];

export default function Skills() {
  const [ref, isVisible] = useInView(0.1);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredGroups = SKILL_DATA.filter((group) => {
    const matchesCategory = activeCategory === 'All' || group.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      group.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.skills.some((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <SectionWrapper 
      id="skills" 
      label="// 03. CAPABILITIES"
      title="Technical Capabilities &amp; Stack" 
      subtitle="Organized according to core engineering domains: Agentic AI systems, SDE full-stack development, and AWS cloud architecture."
    >
      {/* Category Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap items-center gap-2">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-sm font-heading font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#0284c7] dark:bg-[#38bdf8] text-white dark:text-[#0a0a0a] shadow-sm'
                  : 'dark:bg-[#141414] bg-slate-100 dark:text-[#a1a1aa] text-slate-700 hover:text-slate-900 dark:hover:text-[#f4f4f5] border dark:border-[#222222] border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[200px]">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skill (e.g. AWS, Python)..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl text-sm font-heading dark:bg-[#0b1120] bg-white border dark:border-sky-500/25 border-slate-300 dark:text-slate-200 text-slate-800 focus:outline-none focus:border-sky-500"
          />
        </div>
      </div>

      {/* Skill Cards Grid */}
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              variants={fadeUp}
              custom={i}
              className={`glass-card p-6 flex flex-col justify-between ${
                group.highlight ? 'dark:!border-sky-500/50 !border-sky-400/60 shadow-lg shadow-sky-500/10' : ''
              }`}
            >
              <div>
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3 mb-4 border-b dark:border-sky-500/20 border-slate-200 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl dark:bg-sky-500/20 bg-sky-100 flex items-center justify-center shrink-0 dark:text-sky-400 text-sky-700">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold dark:text-white text-slate-900 leading-snug">
                        {group.title}
                      </h3>
                      <span className="text-xs font-heading dark:text-sky-400 text-sky-700 font-bold uppercase">
                        {group.priority}
                      </span>
                    </div>
                  </div>

                  {group.highlight && (
                    <span className="shrink-0 text-xs font-heading font-bold px-2 py-0.5 rounded-md bg-sky-500/20 text-sky-400 border border-sky-400/40">
                      Primary
                    </span>
                  )}
                </div>

                {/* Skill Items with Notes & Levels */}
                <div className="space-y-2.5">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl dark:bg-[#060913]/60 bg-slate-50 border dark:border-sky-500/10 border-slate-200 hover:border-sky-500/30 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-heading font-bold dark:text-slate-100 text-slate-900">
                          {skill.name}
                        </span>
                        <span className="text-xs font-heading font-bold px-2 py-0.5 rounded-full dark:bg-sky-950/70 bg-sky-100 dark:text-sky-300 text-sky-800 border dark:border-sky-500/30 border-sky-200 shrink-0">
                          {skill.level}
                        </span>
                      </div>
                      <div className="text-xs font-body dark:text-[#d4d4d8] text-slate-700 mt-1 font-normal">
                        {skill.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}

