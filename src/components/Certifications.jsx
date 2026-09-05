import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import { useInView, fadeUp, staggerContainer } from '../hooks/useAnimations';

const CERTIFICATIONS = [
  {
    title: 'Certificate in AI & Edge Computing for Industry Applications',
    issuer: 'L&T EduTech (CollegeConnect Programme)',
    grade: 'First Class with Distinction',
    period: 'May 2026 – Jul 2026',
    credentialType: 'Professional Industry Certification',
    details: 'Rigorous industry program covering edge AI model deployment, OpenCV vision pipelines, neural model quantization, and embedded system performance optimization.',
    tags: ['Edge AI', 'Computer Vision', 'Embedded Systems', 'Model Quantization'],
  },
  {
    title: 'Cisco Networking Academy Certification',
    issuer: 'Cisco Networking Academy',
    grade: 'Certified',
    period: 'Foundational',
    credentialType: 'Global Network Credential',
    details: 'Foundational networking credential covering enterprise network topology, IP addressing, TCP/UDP transport architecture, packet routing, and perimeter network security.',
    tags: ['Networking Protocols', 'TCP/IP', 'Routing & Switching', 'Network Security'],
  },
];

export default function Certifications() {
  const [ref, isVisible] = useInView(0.1);

  return (
    <SectionWrapper 
      id="certifications" 
      label="// 05. CREDENTIALS"
      title="Accredited Certifications" 
      subtitle="Industry technical credentials, professional coursework, and verified certificates."
    >
      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
        className="grid sm:grid-cols-2 gap-6"
      >
        {CERTIFICATIONS.map((cert, i) => (
          <motion.div
            key={cert.title}
            variants={fadeUp}
            custom={i}
            className="glass-card p-6 md:p-7 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="w-11 h-11 rounded-xl dark:bg-sky-500/15 bg-sky-100 flex items-center justify-center dark:text-sky-400 text-sky-700">
                  <Award size={22} />
                </div>
                {cert.grade && (
                  <span className="vibrant-badge">
                    <CheckCircle2 size={12} />
                    <span>{cert.grade}</span>
                  </span>
                )}
              </div>

              <div>
                <span className="text-xs font-heading uppercase tracking-wider dark:text-sky-400 text-sky-700 font-bold">
                  {cert.credentialType}
                </span>
                <h3 className="font-heading text-xl font-bold dark:text-white text-slate-900 leading-snug mt-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-heading font-bold dark:text-slate-300 text-slate-600 mt-1">
                  {cert.issuer}
                </p>
              </div>

              <p className="font-body text-sm md:text-base dark:text-[#e4e4e7] text-slate-700 font-normal leading-relaxed">
                {cert.details}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {cert.tags.map((tag) => (
                  <span key={tag} className="text-xs font-heading px-2 py-0.5 rounded-md dark:bg-[#060913] bg-slate-100 dark:text-[#d4d4d8] text-slate-700 border dark:border-sky-500/20 border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {cert.period && (
              <div className="flex items-center justify-between text-xs font-heading font-semibold dark:text-[#d4d4d8] text-slate-700 border-t dark:border-sky-500/15 border-slate-200 pt-4 mt-4">
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} className="dark:text-sky-400 text-sky-700" />
                  <span>Timeline: {cert.period}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold">
                  <ShieldCheck size={13} />
                  <span>Verified</span>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

