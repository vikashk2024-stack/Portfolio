import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, MapPin, Sparkles, Binary, Award } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { useInView, fadeUp } from '../hooks/useAnimations';

const EXPERIENCES = [
  {
    role: 'AI & Image Processing Research Intern',
    company: 'IIIT Kottayam (Indian Institute of Information Technology)',
    location: 'Kottayam, Kerala, India',
    period: 'May 2025 – Aug 2025',
    type: 'Research Internship',
    highlights: [
      'Engineered automated digital image forgery and tampering detection pipelines using OpenCV and Python.',
      'Implemented Error Level Analysis (ELA) algorithms to identify JPEG compression disparity and uncover forensic artifact anomalies.',
      'Constructed splicing detection modules to visually isolate and localize altered or copy-moved image patches.',
      'Collaborated closely with institute research faculty to evaluate model precision and False Acceptance Rates (FAR) across benchmark datasets.',
    ],
    milestones: [
      'Error Level Analysis (ELA)',
      'Forensic Compression Disparity',
      'Splicing & Copy-Move Localization',
      'Faculty Research Evaluation',
    ],
    tech: ['Python', 'OpenCV', 'NumPy', 'Image Forensics', 'Error Level Analysis (ELA)', 'Data Science'],
  },
];

export default function Experience() {
  const [ref, isVisible] = useInView(0.1);

  return (
    <SectionWrapper
      id="experience"
      label="// 04. EXPERIENCE"
      title="Work &amp; Research Track"
      subtitle="Institutional research appointments and technical engineering internships."
    >
      <div ref={ref} className="relative pl-6 md:pl-10 max-w-4xl mx-auto">
        <div className="timeline-line" />

        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            custom={i}
            className="relative mb-10 last:mb-0"
          >
            <div className="timeline-dot top-8" />

            <div className="glass-card p-6 md:p-8 space-y-6">
              {/* Header Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b dark:border-sky-500/20 border-slate-200 pb-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-11 h-11 rounded-xl dark:bg-sky-500/20 bg-sky-100 flex items-center justify-center shrink-0 mt-0.5 text-sky-500">
                    <Briefcase size={22} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-heading text-xl md:text-2xl font-bold dark:!text-white !text-slate-900">
                        {exp.role}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-xs font-heading font-bold px-2.5 py-0.5 rounded-full dark:bg-sky-950 bg-sky-100 dark:text-sky-300 text-sky-800 border dark:border-sky-500/40 border-sky-300">
                        <Award size={12} />
                        <span>{exp.type}</span>
                      </span>
                    </div>

                    <p className="text-sm font-semibold font-heading mt-1">
                      <span className="dark:!text-sky-300 !text-sky-700">{exp.company}</span>
                      <span className="dark:!text-slate-400 !text-slate-500 flex items-center gap-1 mt-0.5 text-xs font-normal">
                        <MapPin size={12} className="shrink-0" />
                        <span>{exp.location}</span>
                      </span>
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-heading font-bold dark:bg-sky-900/60 dark:border-sky-400/40 bg-sky-100 border border-sky-300 self-start sm:self-auto shrink-0">
                  <Calendar size={13} className="dark:text-sky-300 text-sky-700" />
                  <span className="dark:!text-sky-200 !text-sky-900">{exp.period}</span>
                </div>
              </div>

              {/* Research Focus Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {exp.milestones.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl dark:bg-[#060913]/70 bg-slate-50 border dark:border-sky-500/15 border-slate-200 text-center"
                  >
                    <Binary size={14} className="mx-auto text-sky-400 mb-1" />
                    <span className="text-xs font-heading font-bold dark:text-slate-200 text-slate-800 leading-tight block">
                      {m}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3">
                {exp.highlights.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-3 font-body text-base md:text-lg leading-relaxed font-medium">
                    <CheckCircle2 size={18} className="dark:text-sky-400 text-sky-700 shrink-0 mt-0.5" />
                    <span className="dark:!text-slate-100 !text-slate-900">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-3 border-t dark:border-sky-500/20 border-slate-200">
                {exp.tech.map((t) => (
                  <span key={t} className="vibrant-badge">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}

