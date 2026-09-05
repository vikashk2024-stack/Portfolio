import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Sparkles, 
  Shield, 
  Bot, 
  Layers, 
  Cpu, 
  Cloud, 
  ExternalLink, 
  X, 
  Workflow, 
  CheckCircle2, 
  ArrowRight,
  Terminal,
  Database
} from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { useInView, fadeUp, staggerContainer } from '../hooks/useAnimations';

const CATEGORIES = ['All', 'Agentic AI & Research', 'Full Stack', 'Cloud & Systems'];

const PROJECTS = [
  {
    id: 'grievance-portal',
    title: 'Grievance Portal',
    category: 'Full Stack',
    type: 'Full-Stack Platform (Featured #1)',
    icon: Shield,
    featured: true,
    outcome:
      'Production-ready government grievance submission and tracking platform providing transparent issue lifecycle monitoring, instant ticket updates, and role-based tracking for citizens and administrators.',
    tech: ['React.js', 'Supabase', 'PostgreSQL', 'Auth & Realtime', 'Tailwind CSS'],
    architectureFlow: ['Client UI (React)', 'Supabase Auth Gateway', 'PostgreSQL RLS Engine', 'Realtime Event Subscription'],
    problemSolved: 'Replaced fragmented offline grievance workflows with an auditable, real-time ticket tracking engine ensuring zero lost complaints.',
    innovations: [
      'Multi-tier role based access control (Citizens vs Officers)',
      'Sub-second optimistic UI updates via Supabase Realtime websockets',
      'Row Level Security (RLS) policies isolating sensitive civic data',
    ],
    statusLabel: null,
    github: 'https://github.com/vikashk2024-stack/Grievance---Portal',
  },
  {
    id: 'agentic-ai-aws',
    title: 'Agentic AI + AWS Systems',
    category: 'Agentic AI & Research',
    type: 'Autonomous Agentic Systems Research',
    icon: Bot,
    featured: true,
    outcome:
      'Cloud-integrated agentic AI system orchestrating autonomous multi-agent reasoning, dynamic tool selection, and AWS API service interaction.',
    tech: ['Agentic AI', 'AWS Lambda', 'Python', 'LangChain', 'Multi-Agent Frameworks'],
    architectureFlow: ['User Query', 'Multi-Agent Planner', 'Dynamic Tool Selector', 'AWS Boto3 API', 'Deterministic Evaluator'],
    problemSolved: 'Bridging generative AI with deterministic cloud infrastructure management without requiring human-in-the-loop for routine devops tasks.',
    innovations: [
      'Autonomous rollback safety triggers upon execution errors',
      'Dynamic token budget optimization reducing API overhead',
      'Integration with AWS Lambda and S3 for ephemeral tool execution',
    ],
    statusLabel: 'Research in progress',
    github: null,
  },
  {
    id: 'digital-twin',
    title: 'Digital Twin for Climate Risk',
    category: 'Agentic AI & Research',
    type: 'AI & Spatial Intelligence Research',
    icon: Layers,
    featured: false,
    outcome:
      'AI-driven digital twin combining real-time environmental data, GIS spatial mapping, and predictive AI/ML models to evaluate climate risk for renewable energy infrastructure.',
    tech: ['Python', 'AI/ML', 'GIS Geospatial', 'OpenCV', 'Dashboarding'],
    architectureFlow: ['Weather Sensor Feeds', 'GIS Ingestion Pipeline', 'Predictive ML Engine', 'Spatial Risk Map HUD'],
    problemSolved: 'Forecasting high-risk physical micro-climate shocks before damage occurs to solar arrays and wind installations.',
    innovations: [
      'Multi-layer spatial overlay correlating wind vectors and thermal stress',
      'Automated alert thresholds for extreme meteorological events',
    ],
    statusLabel: 'Research paper in progress',
    github: null,
  },
  {
    id: 'edge-ai-microscopy',
    title: 'Edge AI Microscopy for Aquatic Organisms',
    category: 'Cloud & Systems',
    type: 'Embedded Vision & Edge AI Systems',
    icon: Cpu,
    featured: false,
    outcome:
      'Low-cost embedded system performing localized, real-time AI classification and automated counting of aquatic organisms directly from microscope camera feeds.',
    tech: ['Embedded Systems', 'Computer Vision', 'Edge AI', 'OpenCV', 'Python'],
    architectureFlow: ['Microscope Optical Feed', 'Frame Preprocessor', 'Quantized Edge Model', 'Telemetry Count HUD'],
    problemSolved: 'Automating laborious manual microscopic counting in water quality sampling using resource-constrained hardware.',
    innovations: [
      'Quantized lightweight neural network running at sub-50ms inference',
      'Error Level Analysis for anomaly calibration in optical noise',
    ],
    statusLabel: 'In progress',
    github: null,
  },
  {
    id: 'aws-cloud-projects',
    title: 'AWS Cloud Architecture & Systems',
    category: 'Cloud & Systems',
    type: 'Cloud Architecture & Infrastructure',
    icon: Cloud,
    featured: false,
    outcome:
      'Production-grade cloud architecture implementations utilizing core AWS services for serverless hosting, automated CI/CD pipelines, and secure storage.',
    tech: ['AWS (S3, Lambda, EC2, CloudFront)', 'IAM', 'Cloud Architecture', 'REST APIs'],
    architectureFlow: ['CloudFront CDN', 'S3 Static / Assets', 'API Gateway', 'Lambda Compute', 'DynamoDB / RDS'],
    problemSolved: 'Designing zero-maintenance, automatically scaling web service architectures with least-privilege IAM security.',
    innovations: [
      'Serverless auto-scaling with zero idle server costs',
      'Global edge caching with sub-30ms static asset latency',
    ],
    statusLabel: null,
    github: null,
  },
];

export default function Projects() {
  const [ref, isVisible] = useInView(0.1);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper
      id="projects"
      label="// 01. SELECTED WORK"
      title="Featured Engineering Projects"
      subtitle="Selected full-stack platforms, autonomous Agentic AI research, and AWS cloud builds."
    >
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {CATEGORIES.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-heading font-bold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#0284c7] dark:bg-[#38bdf8] text-white dark:text-[#0a0a0a] shadow-sm'
                  : 'dark:bg-[#141414] bg-slate-100 dark:text-[#a1a1aa] text-slate-700 dark:hover:text-[#f4f4f5] hover:text-slate-900 border dark:border-[#222222] border-slate-200 dark:hover:border-[#333333] hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Projects List */}
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        className="space-y-6"
      >
        {filteredProjects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              variants={fadeUp}
              custom={i}
              className={`glass-card p-6 md:p-8 flex flex-col md:flex-row md:items-start justify-between gap-6 group ${
                project.featured ? 'dark:!border-sky-400/50 !border-sky-500/50 shadow-xl shadow-sky-500/10' : ''
              }`}
            >
              <div className="flex-1 space-y-4">
                {/* Header line */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-10 h-10 rounded-xl dark:bg-sky-500/20 bg-sky-100 flex items-center justify-center shrink-0">
                    <Icon size={20} className="dark:text-sky-300 text-sky-700" />
                  </div>

                  <h3 className="font-heading text-2xl font-bold dark:!text-white !text-slate-900 group-hover:!text-sky-500 transition-colors">
                    {project.title}
                  </h3>

                  {project.featured && (
                    <span className="inline-flex items-center gap-1 text-xs font-heading font-bold px-3 py-1 rounded-full bg-gradient-to-r from-sky-500 to-sky-600 !text-white shadow-md shadow-sky-500/20">
                      <Sparkles size={12} />
                      <span>{project.id === 'grievance-portal' ? 'Featured #1 SDE' : 'Featured AI'}</span>
                    </span>
                  )}
                </div>

                <div className="text-xs font-heading font-bold dark:!text-sky-300 !text-sky-700">
                  {project.type}
                </div>

                {/* Outcome Statement with Times New Roman font-body */}
                <p className="font-body text-base md:text-lg leading-relaxed font-normal dark:!text-slate-100 !text-slate-800">
                  {project.outcome}
                </p>

                {/* Architecture Pipeline Flow Preview */}
                <div className="p-3 rounded-xl dark:bg-[#060913]/70 bg-slate-50 border dark:border-sky-500/15 border-slate-200">
                  <div className="text-xs font-heading font-bold dark:text-sky-400 text-sky-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Workflow size={13} />
                    <span>System Architecture Pipeline</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-heading">
                    {project.architectureFlow.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-md dark:bg-sky-950/70 bg-sky-100 dark:text-sky-200 text-sky-900 border dark:border-sky-500/30 border-sky-200 text-xs">
                          {step}
                        </span>
                        {sIdx < project.architectureFlow.length - 1 && (
                          <span className="text-sky-500 font-bold">&rarr;</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {project.statusLabel && (
                  <div className="text-xs font-heading font-semibold pt-1 flex items-center gap-1.5 dark:!text-amber-300 !text-amber-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                    <span>Status: {project.statusLabel}</span>
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tech.map((t) => (
                    <span key={t} className="vibrant-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center md:items-end gap-3 shrink-0 pt-2 md:pt-0">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn-secondary text-xs py-2.5 px-4 justify-center"
                >
                  <Workflow size={14} />
                  <span>Deep Dive</span>
                </button>

                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-vibrant text-xs py-2.5 px-4 justify-center"
                  >
                    <Github size={15} />
                    <span>GitHub Code</span>
                  </a>
                ) : (
                  <span className="text-center text-xs font-heading font-semibold dark:!text-slate-400 !text-slate-600 dark:bg-[#0b1830] bg-slate-100 px-3 py-2 rounded-lg border dark:border-sky-500/20 border-slate-300">
                    {project.statusLabel ? 'Link Pending' : 'Documentation'}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* System Architecture Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 dark:!bg-[#0b1120] !bg-white dark:border-sky-500/40 border-slate-200 shadow-2xl relative"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b dark:border-sky-500/20 border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl dark:bg-sky-500/20 bg-sky-100 flex items-center justify-center text-sky-500 shrink-0">
                    <selectedProject.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold dark:text-white text-slate-900">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs font-heading dark:text-sky-400 text-sky-700 font-bold mt-0.5">
                      {selectedProject.type}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl dark:bg-white/5 bg-slate-100 dark:text-slate-400 text-slate-600 hover:text-slate-900 dark:hover:text-white dark:hover:bg-white/10 hover:bg-slate-200 transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Problem Solved */}
              <div className="space-y-2">
                <h4 className="text-xs font-heading font-bold uppercase tracking-wider dark:text-sky-400 text-sky-700 flex items-center gap-1.5">
                  <Terminal size={14} />
                  <span>Problem Statement &amp; Solution</span>
                </h4>
                <p className="font-body text-base dark:text-slate-200 text-slate-700 leading-relaxed font-normal">
                  {selectedProject.problemSolved}
                </p>
              </div>

              {/* Architecture Diagram Box */}
              <div className="p-4 rounded-xl dark:bg-[#060913] bg-slate-50 border dark:border-sky-500/25 border-slate-200 space-y-3">
                <div className="text-xs font-heading font-bold dark:text-sky-300 text-sky-700 flex items-center gap-2">
                  <Workflow size={15} />
                  <span>Architecture Execution Flow</span>
                </div>
                <div className="flex flex-col gap-2 font-heading text-xs dark:text-slate-200 text-slate-800">
                  {selectedProject.architectureFlow.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full dark:bg-sky-500/30 bg-sky-100 dark:text-sky-300 text-sky-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Technical Innovations */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-heading font-bold uppercase tracking-wider dark:text-sky-400 text-sky-700 flex items-center gap-1.5">
                  <CheckCircle2 size={14} />
                  <span>Key Innovations &amp; Engineering Decisions</span>
                </h4>
                <ul className="space-y-2 font-body text-base dark:text-slate-200 text-slate-700">
                  {selectedProject.innovations.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Matrix */}
              <div className="space-y-2 pt-2 border-t dark:border-sky-500/20 border-slate-200">
                <div className="text-xs font-heading dark:text-slate-400 text-slate-600">Technology Stack:</div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="vibrant-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t dark:border-sky-500/20 border-slate-200">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-secondary text-xs py-2.5 px-4 cursor-pointer"
                >
                  <span>Close Window</span>
                </button>
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-vibrant text-xs py-2.5 px-4 cursor-pointer"
                  >
                    <Github size={15} />
                    <span>View GitHub Repository</span>
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}

