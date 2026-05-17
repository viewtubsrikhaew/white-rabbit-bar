import { motion } from 'framer-motion';

/**
 * Floating location badge — dark bg, blue eyebrow + white text
 * Matches the "ON SILOM ROAD / BANGKOK, TH" style from the design
 *
 * Props:
 *   line1 — mono blue uppercase text (e.g. "ON SILOM ROAD")
 *   line2 — white uppercase text      (e.g. "BANGKOK, TH")
 *   float — animate floating (default true)
 *   className — extra positioning classes
 */
export default function LocationBadge({ line1 = 'ON SILOM ROAD', line2 = 'BANGKOK, TH', float = true, className = '' }) {
  const inner = (
    <div
      className={`bg-[#0A0A0A] border hairline px-5 py-4 inline-block ${className}`}
      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.6)' }}
    >
      <p className="mono text-[#3B82F6] text-xs tracking-widest leading-none">{line1}</p>
      <p className="mono text-[#F5F5F5] text-xs mt-1 leading-none font-medium">{line2}</p>
    </div>
  );

  if (!float) return inner;

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      {inner}
    </motion.div>
  );
}