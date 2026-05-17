import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Beer, Zap, Gift, Star, Cake } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const getPromos = (t) => [
  {
    icon: Beer,
    tag: t('promo1_tag'),
    title: t('promo1_title'),
    detail: t('promo1_detail'),
    desc: t('promo1_desc'),
    color: '#3B82F6',
    cta: t('promo1_cta'),
  },
  {
    icon: Beer,
    tag: t('promo2_tag'),
    title: t('promo2_title'),
    detail: t('promo2_detail'),
    desc: t('promo2_desc'),
    color: '#F472B6',
    cta: t('promo2_cta'),
  },
  {
    icon: Zap,
    tag: t('promo3_tag'),
    title: t('promo3_title'),
    detail: t('promo3_detail'),
    desc: t('promo3_desc'),
    color: '#A78BFA',
    cta: t('promo3_cta'),
  },
  {
    icon: Zap,
    tag: t('promo4_tag'),
    title: t('promo4_title'),
    detail: t('promo4_detail'),
    desc: t('promo4_desc'),
    color: '#FB923C',
    cta: t('promo4_cta'),
  },
  {
    icon: Gift,
    tag: t('promo5_tag'),
    title: t('promo5_title'),
    detail: t('promo5_detail'),
    desc: t('promo5_desc'),
    color: '#34D399',
    cta: t('promo5_cta'),
  },
  {
    icon: Cake,
    tag: t('promo6_tag'),
    title: t('promo6_title'),
    detail: t('promo6_detail'),
    desc: t('promo6_desc'),
    color: '#EC4899',
    cta: t('promo6_cta'),
  },
];

export default function PromoSection() {
  const { t } = useLang();
  const promos = getPromos(t);
  return (
    <section className="py-20 border-t border-[rgba(245,245,245,0.06)] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mono text-[#3B82F6] text-xs tracking-[0.35em] mb-3">{t('promo_eyebrow')}</p>
          <h2 className="font-tight font-black text-section text-[#F5F5F5] leading-[0.92]">
            {t('promo_title').split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br/>}</span>)}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {promos.map((promo, i) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="relative group border border-[rgba(245,245,245,0.07)] p-6 hover:border-opacity-60 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Neon glow bg on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${promo.color}15, transparent 70%)` }}
              />
              {/* Top border glow */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${promo.color}, transparent)` }}
              />
              {/* Rainbow corner accent */}
              <div
                className="absolute top-0 right-0 w-8 h-8 opacity-20"
                style={{ background: `linear-gradient(135deg, ${promo.color}, transparent)` }}
              />

              <div className="relative z-10">
                {/* Icon + tag */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 flex items-center justify-center border"
                    style={{ borderColor: promo.color + '40' }}>
                    <promo.icon className="w-3.5 h-3.5" style={{ color: promo.color }} />
                  </div>
                  <span className="mono text-[10px] tracking-[0.3em]" style={{ color: promo.color }}>{promo.tag}</span>
                </div>

                <h3 className="font-tight font-black text-xl text-[#F5F5F5] tracking-tight mb-1 leading-tight">{promo.title}</h3>
                <p className="mono text-[10px] tracking-widest mb-3" style={{ color: promo.color }}>{promo.detail}</p>
                <p className="text-[#888888] text-sm font-light leading-relaxed mb-6 flex-1">{promo.desc}</p>

                <Link
                  to="/reserve"
                  className="neon-btn group/btn relative inline-flex items-center gap-2 mono text-[10px] tracking-widest px-4 py-2.5 border overflow-hidden transition-all duration-300 self-start"
                  style={{ borderColor: promo.color + '50', color: promo.color }}
                >
                  <span className="relative z-10">{promo.cta} →</span>
                  <span
                    className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                    style={{ background: promo.color + '15' }}
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}