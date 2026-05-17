import { useLang } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';

const langs = [
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' },
];

export default function LangSwitcher() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-0.5">
      {langs.map((l, i) => (
        <motion.button
          key={l.code}
          onClick={() => setLang(l.code)}
          whileTap={{ scale: 0.93 }}
          className={`mono text-[9px] tracking-wider px-2 py-1 transition-all duration-200 ${
            lang === l.code
              ? 'text-[#3B82F6] border border-[#3B82F6]/50 bg-[#3B82F6]/10'
              : 'text-[#555] hover:text-[#888]'
          }`}
        >
          {l.label}
        </motion.button>
      ))}
    </div>
  );
}