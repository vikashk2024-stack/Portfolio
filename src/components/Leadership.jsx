import { motion } from 'framer-motion';
import { Bot, Mic2, Megaphone, Terminal, Users, Sparkles } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { useInView, fadeUp, staggerContainer } from '../hooks/useAnimations';

const LEADERSHIP_ITEMS = [
  {
    organization: 'AI Club, VIT Chennai',
    role: 'Research & Operations · Technical Team',
    icon: Bot,
    impact: 'Workshops & Research Tools',
    description:
      'Engineered internal developer tooling, organized hands-on machine learning bootcamps, and spearheaded research & operational workflows for the campus AI developer community.',
  },
  {
    organization: 'CodeChef VIT-Chennai Chapter',
    role: 'Technical Advisor · Contest Mentorship',
    icon: Terminal,
    impact: 'Competitive Programming Mentorship',
    description:
      'Provided strategic technical guidance, algorithmic problem curation, and contest architecture advisory for aspiring student competitive programmers.',
  },
  {
    organization: 'Event Management Club',
    role: 'Event Coordinator · Vibrance Cultural Fest',
    icon: Mic2,
    impact: 'Campus Flagship Festival Logistics',
    description:
      'Coordinated multi-tier event logistics, schedule synchronization, team allocation, and crowd management during Vibrance, VIT Chennai’s flagship annual festival.',
  },
  {
    organization: 'CSED.VITC',
    role: 'Department Outreach Member',
    icon: Megaphone,
    impact: 'Industry & Student Seminars',
    description:
      'Managed outreach initiatives for the Computer Science & Engineering Department, connecting students with technical seminars and industry mentorship.',
  },
];

export default function Leadership() {
  const [ref, isVisible] = useInView(0.1);

  return (
    <SectionWrapper
      id="leadership"
      label="// 06. INVOLVEMENT"
      title="Leadership &amp; Campus Impact"
      subtitle="Student leadership positions, developer community mentorship, and technical advisory."
    >
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        className="grid sm:grid-cols-2 gap-6"
      >
        {LEADERSHIP_ITEMS.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.organization}
              variants={fadeUp}
              custom={i}
              className="glass-card p-6 md:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl dark:bg-sky-500/15 bg-sky-100 flex items-center justify-center dark:text-sky-400 text-sky-700 shrink-0">
                    <Icon size={22} />
                  </div>
                  <span className="text-xs font-heading font-bold dark:text-sky-400 text-sky-700 px-2.5 py-1 rounded-full dark:bg-sky-950 bg-sky-100 border dark:border-sky-500/30 border-sky-200">
                    {item.impact}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold dark:text-white text-slate-900 leading-tight">
                  {item.organization}
                </h3>
                <p className="text-xs font-heading dark:text-sky-400 text-sky-700 font-bold mt-1">
                  {item.role}
                </p>

                <p className="font-body text-sm md:text-base dark:text-[#e4e4e7] text-slate-700 font-normal leading-relaxed pt-3 mt-3 border-t dark:border-sky-500/15 border-slate-200">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}

