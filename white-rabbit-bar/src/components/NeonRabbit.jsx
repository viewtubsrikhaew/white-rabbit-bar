import { motion } from 'framer-motion';

export default function NeonRabbit({ size = 80, className = '' }) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: 'drop-shadow(0 0 12px #3B82F6) drop-shadow(0 0 30px rgba(59,130,246,0.4))' }}
      >
        {/* Left ear */}
        <motion.path
          d="M32 42 C28 20, 22 8, 26 4 C30 0, 38 6, 40 28"
          stroke="#3B82F6"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          animate={{ d: [
            "M32 42 C28 20, 22 8, 26 4 C30 0, 38 6, 40 28",
            "M32 42 C27 18, 20 6, 25 3 C29 -1, 38 5, 41 26",
            "M32 42 C28 20, 22 8, 26 4 C30 0, 38 6, 40 28",
          ]}}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Right ear */}
        <motion.path
          d="M68 42 C72 20, 78 8, 74 4 C70 0, 62 6, 60 28"
          stroke="#3B82F6"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          animate={{ d: [
            "M68 42 C72 20, 78 8, 74 4 C70 0, 62 6, 60 28",
            "M68 42 C73 18, 80 6, 75 3 C71 -1, 62 5, 59 26",
            "M68 42 C72 20, 78 8, 74 4 C70 0, 62 6, 60 28",
          ]}}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
        />
        {/* Inner ear left */}
        <path d="M33 38 C30 22, 26 12, 28 8 C30 5, 35 9, 37 26" stroke="#EC4899" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" />
        {/* Inner ear right */}
        <path d="M67 38 C70 22, 74 12, 72 8 C70 5, 65 9, 63 26" stroke="#EC4899" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.7" />

        {/* Head */}
        <ellipse cx="50" cy="55" rx="22" ry="20" stroke="#3B82F6" strokeWidth="2.5" fill="none" />

        {/* Left eye */}
        <motion.circle
          cx="42" cy="51" r="3"
          fill="#3B82F6"
          animate={{ r: [3, 3.5, 3] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        />
        <circle cx="42" cy="51" r="1.2" fill="#F5F5F5" />

        {/* Right eye */}
        <motion.circle
          cx="58" cy="51" r="3"
          fill="#3B82F6"
          animate={{ r: [3, 3.5, 3] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
        />
        <circle cx="58" cy="51" r="1.2" fill="#F5F5F5" />

        {/* Nose */}
        <ellipse cx="50" cy="58" rx="1.5" ry="1" fill="#EC4899" />

        {/* Mouth */}
        <path d="M47 60 Q50 63 53 60" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Cheeks */}
        <circle cx="38" cy="60" r="4" fill="#EC4899" opacity="0.15" />
        <circle cx="62" cy="60" r="4" fill="#EC4899" opacity="0.15" />

        {/* Body */}
        <ellipse cx="50" cy="82" rx="16" ry="10" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.6" />

        {/* Paws */}
        <ellipse cx="36" cy="90" rx="6" ry="3.5" stroke="#3B82F6" strokeWidth="1.8" fill="none" opacity="0.5" />
        <ellipse cx="64" cy="90" rx="6" ry="3.5" stroke="#3B82F6" strokeWidth="1.8" fill="none" opacity="0.5" />

        {/* Sparkles */}
        <motion.g
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{ transformOrigin: '82px 28px' }}
        >
          <line x1="82" y1="24" x2="82" y2="32" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="78" y1="28" x2="86" y2="28" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>
        <motion.g
          animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          style={{ transformOrigin: '16px 40px' }}
        >
          <line x1="16" y1="37" x2="16" y2="43" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="13" y1="40" x2="19" y2="40" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round" />
        </motion.g>
      </svg>
    </motion.div>
  );
}