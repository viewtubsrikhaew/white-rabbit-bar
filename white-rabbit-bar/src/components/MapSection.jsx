import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Navigation } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

export default function MapSection() {
  const { t } = useLang();
  const details = [
    { icon: MapPin, label: t('map_address_label'), value: t('map_address_value') },
    { icon: Clock, label: t('map_hours_label'), value: t('map_hours_value') },
    { icon: Navigation, label: t('map_transit_label'), value: t('map_transit_value') },
  ];
  return (
    <section className="py-20 border-t border-[rgba(245,245,245,0.06)]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="mono text-[#3B82F6] text-xs tracking-[0.35em] mb-3">{t('map_eyebrow')}</p>
          <h2 className="font-tight font-black text-section text-[#F5F5F5] leading-[0.92]">{t('map_title').split('\n').map((l,i)=><span key={i}>{l}{i===0&&<br/>}</span>)}</h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_320px] gap-6">
          {/* Map embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden"
            style={{ minHeight: 340 }}
          >
            {/* Dark overlay on iframe for branding */}
            <div className="absolute inset-0 pointer-events-none z-10 border border-[rgba(59,130,246,0.25)]" />
            <div className="absolute top-3 left-3 z-20 bg-[#0A0A0A]/90 border border-[rgba(59,130,246,0.3)] px-3 py-2 pointer-events-none">
              <p className="mono text-[#3B82F6] text-[10px] tracking-widest">WHITE RABBIT BAR</p>
            </div>
            <iframe
              title="White Rabbit Bar Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3876.4718997646914!2d100.52463415869144!3d13.689844823398568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f2c01efd027%3A0x16b29782507502c9!2sWhite%20Rabbit%20Silom!5e0!3m2!1sth!2sth!4v1778928367599!5m2!1sth!2sth"
              width="100%"
              height="100%"
              style={{
                border: 0,
                minHeight: 340,
                filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1) saturate(0.5)',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {details.map((item) => (
              <div key={item.label} className="border border-[rgba(245,245,245,0.07)] p-5 hover:border-[rgba(59,130,246,0.3)] transition-colors duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <item.icon className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <p className="mono text-[#888888] text-[10px] tracking-[0.3em]">{item.label}</p>
                </div>
                <p className="text-[#F5F5F5] text-sm font-light leading-relaxed whitespace-pre-line">{item.value}</p>
              </div>
            ))}

            {/* CTA */}
            <a
              href="https://share.google/r9NznI2oetmrO5mzl"
              target="_blank"
              rel="noopener noreferrer"
              className="pride-btn mono text-xs py-4 border border-[#3B82F6]/50 text-[#3B82F6] hover:bg-[#3B82F6]/10 transition-all duration-300 tracking-[0.2em] text-center"
            >
              {t('map_open_maps')}
            </a>

            <Link
              to="/reserve"
              className="mono text-xs py-4 bg-[#3B82F6] text-[#0A0A0A] font-bold hover:bg-[#60A5FA] transition-all duration-300 tracking-[0.2em] text-center"
            >
              {t('map_book')}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}