import { motion } from 'framer-motion';
import { useInView, fadeUp } from '../hooks/useAnimations';

export default function SectionWrapper({ 
  id, 
  title, 
  subtitle, 
  label, 
  children, 
  className = '' 
}) {
  const [ref, isVisible] = useInView(0.1);

  // Default label from id if not passed (e.g. 'about' -> '// 01. ABOUT')
  const sectionLabel = label || `// ${id.toUpperCase()}`;

  return (
    <section id={id} className={`py-32 md:py-36 lg:py-40 relative ${className}`} ref={ref}>
      <div className="section-container">
        {title && (
          <motion.div
            className="mb-14 md:mb-18 space-y-3"
            variants={fadeUp}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            {/* Small uppercase label */}
            <div className="flex items-center gap-2 text-xs font-heading font-bold tracking-[0.2em] dark:text-[#38bdf8] text-[#0284c7] uppercase">
              <span className="w-1.5 h-1.5 rounded-full dark:bg-[#38bdf8] bg-[#0284c7]"></span>
              <span>{sectionLabel}</span>
            </div>

            {/* Large bold display heading */}
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight dark:text-[#f4f4f5] text-slate-900 leading-tight">
              {title}
            </h2>

            {/* Optional concise subtitle with Times New Roman font-body */}
            {subtitle && (
              <p className="font-body text-base sm:text-lg dark:text-[#e4e4e7] text-slate-700 max-w-2xl leading-relaxed pt-1 font-normal">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          custom={1}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

