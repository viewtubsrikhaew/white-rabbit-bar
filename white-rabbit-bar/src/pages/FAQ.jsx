import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import { useLang } from '@/lib/LanguageContext';
import PageMarquee from '../components/PageMarquee';
import PageShareBar from '../components/PageShareBar';

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className="border-b border-[rgba(245,245,245,0.07)]"
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-6 py-7 text-left group"
      >
        <span className="font-tight font-bold text-lg md:text-xl text-[#F5F5F5] group-hover:text-[#3B82F6] transition-colors duration-300 leading-snug">
          {item.q}
        </span>
        <span className="shrink-0 w-7 h-7 border border-[rgba(245,245,245,0.15)] flex items-center justify-center text-[#3B82F6] group-hover:border-[#3B82F6] transition-colors duration-300">
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-[#888888] text-base font-light leading-relaxed pb-7 whitespace-pre-line">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { t } = useLang();

  const faqs = [
    { q: t('faq_q1'), a: t('faq_a1') },
    { q: t('faq_q2'), a: t('faq_a2') },
    { q: t('faq_q3'), a: t('faq_a3') },
    { q: t('faq_q4'), a: t('faq_a4') },
    { q: t('faq_q5'), a: t('faq_a5') },
    { q: t('faq_q6'), a: t('faq_a6') },
    { q: t('faq_q7'), a: t('faq_a7') },
    { q: t('faq_q8'), a: t('faq_a8') },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <p className="mono text-[#3B82F6] text-xs tracking-[0.4em] mb-4">{t('faq_eyebrow')}</p>
            <h1 className="font-tight font-black text-section text-[#F5F5F5]">FAQ</h1>
            <div className="thin-divider mt-6 max-w-xs" />
            <p className="text-[#888888] mt-6 text-base font-light leading-relaxed">{t('faq_subtitle')}</p>
            <p className="text-[#555] text-xs mt-2 font-light leading-relaxed">
              White Rabbit Bar Bangkok · Silom Soi 2 · LGBTQ+ Friendly · เปิดทุกคืน 20:00 น. · จองโต๊ะออนไลน์
            </p>
          </motion.div>

          {/* FAQ Items */}
          <div>
            {faqs.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>

          {/* Still have questions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 border border-[rgba(59,130,246,0.2)] p-8 text-center"
          >
            <p className="mono text-[#3B82F6] text-xs tracking-[0.3em] mb-3">{t('faq_still')}</p>
            <p className="text-[#888888] text-sm font-light mb-6">{t('faq_contact_sub')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.instagram.com/whiterabbitbar.bkk?igsh=OTZnd290OTNpZTFl"
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-xs px-6 py-3 border tracking-widest hover:opacity-90 transition-all"
                style={{ borderColor: '#E1306C50', background: 'rgba(225,48,108,0.08)', color: '#E1306C' }}
              >
                IG: @WHITERABBITBAR.BKK
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61561620376247"
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-xs px-6 py-3 border tracking-widest hover:opacity-90 transition-all"
                style={{ borderColor: '#1877F250', background: 'rgba(24,119,242,0.08)', color: '#1877F2' }}
              >
                FB: WHITE RABBIT BKK
              </a>
              <a
                href="mailto:Bangkokgreatfuture@gmail.com"
                className="mono text-xs px-6 py-3 border tracking-widest hover:opacity-80 hover:scale-[1.03] transition-all duration-200"
                style={{ borderColor: '#3B82F650', background: 'rgba(59,130,246,0.08)', color: '#3B82F6' }}
              >
                EMAIL US
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      <PageMarquee items={['FAQ', '·', 'WHITE RABBIT BAR', '·', 'BANGKOK', '·', 'LGBTQ+ FRIENDLY', '·', 'OPEN NIGHTLY', '·']} />
      <PageShareBar />
    </PageLayout>
  );
}