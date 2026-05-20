import { motion } from 'framer-motion';

const defaultItems = ['WHITE RABBIT', '·', 'SILOM ROAD', '·', 'BANGKOK', '·', 'LGBTQ+ FRIENDLY', '·', 'OPEN NIGHTLY', '·', 'EST. 2009', '·'];

export default function PageMarquee({ items = defaultItems, reverse = false }) {
  return (
    <div className="overflow-hidden border-y border-[rgba(245,245,245,0.08)] py-3 bg-[#0D0D0D]">
      <motion.div
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className={`mono text-xs tracking-widest ${item === '·' ? 'text-[#3B82F6]' : 'text-[#888888]'}`}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
