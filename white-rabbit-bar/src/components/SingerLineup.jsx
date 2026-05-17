import { motion } from 'framer-motion';
import { Mic2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/LanguageContext';

const singers = [
  {
    name: 'VOICE OF THE NIGHT',
    genre: 'SOULFUL JAZZ · R&B',
    nights: 'EVERY WEDNESDAY',
    bio: 'เสียงที่สะกดทุกหัวใจ Jazz และ R&B อบอุ่นที่จะพาคุณล่องลอยไปในค่ำคืนอันแสนพิเศษ',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80&auto=format&fit=crop',
    color: '#F472B6',
  },
  {
    name: 'NEON ECHO',
    genre: 'POP BALLADS · ACOUSTIC',
    nights: 'EVERY FRIDAY',
    bio: 'เมโลดี้ที่คุ้นเคยในสไตล์ Acoustic นุ่มนวล บรรยากาศสบายๆ แต่ยังคงความสนุกและอบอุ่น',
    img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80&auto=format&fit=crop',
    color: '#60A5FA',
  },
  {
    name: 'COSMIC HARMONY',
    genre: 'ELECTRONIC POP · SYNTHWAVE',
    nights: 'SPECIAL SATURDAYS',
    bio: 'สัมผัสประสบการณ์เสียงอิเล็กทรอนิกส์ที่จะพาคุณล่องลอยไปในห้วงอวกาศที่ไม่มีขีดจำกัด',
    img: 'https://images.unsplash.com/photo-1571266028243-4716f7ca3b36?w=600&q=80&auto=format&fit=crop',
    color: '#A78BFA',
  },
  {
    name: 'PRISM VOICES',
    genre: 'PRIDE ANTHEMS · POP',
    nights: 'SPECIAL EVENTS',
    bio: 'The ultimate Pride experience. Every song a celebration of identity, freedom and joy on the dance floor.',
    img: 'https://images.unsplash.com/photo-1549213783-8284d0336c4f?w=600&q=80&auto=format&fit=crop',
    color: '#F59E0B',
  },
];

export default function SingerLineup() {
  const { t } = useLang();
  return (
    <section className="py-20 border-t border-[rgba(245,245,245,0.06)]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mono text-[#3B82F6] text-xs tracking-[0.35em] mb-3">{t('singers_eyebrow')}</p>
          <h2 className="font-tight font-black text-section text-[#F5F5F5] leading-[0.92]">{t('singers_title').split('\n').map((l,i)=><span key={i}>{l}{i===0&&<br/>}</span>)}</h2>
        </motion.div>

        {/* Singer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {singers.map((singer, i) => (
            <motion.div
              key={singer.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex gap-5 border border-[rgba(245,245,245,0.07)] p-5 hover:border-[rgba(59,130,246,0.2)] transition-all duration-300"
            >
              {/* Photo */}
              <div className="gallery-item shrink-0 w-20 h-20 md:w-24 md:h-24 overflow-hidden">
                <img src={singer.img} alt={singer.name} className="w-full h-full object-cover" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-tight font-black text-lg text-[#F5F5F5] tracking-tight leading-none">{singer.name}</h3>
                  <div
                    className="shrink-0 w-2 h-2 rounded-full mt-1"
                    style={{ background: singer.color, boxShadow: `0 0 8px ${singer.color}` }}
                  />
                </div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Mic2 className="w-2.5 h-2.5" style={{ color: singer.color }} />
                  <p className="mono text-[10px] tracking-widest" style={{ color: singer.color }}>{singer.genre}</p>
                </div>
                <p className="text-[#888888] text-xs leading-relaxed font-light mb-3">{singer.bio}</p>
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="mono text-[9px] text-[#555] tracking-widest border border-[rgba(245,245,245,0.06)] px-2 py-0.5">
                    {singer.nights}
                  </span>
                  <Link
                    to={`/reserve?event=${encodeURIComponent(singer.name)}`}
                    className="mono text-[9px] px-3 py-1 tracking-widest transition-all duration-300 hover:opacity-80"
                    style={{ background: singer.color, color: '#0A0A0A', fontWeight: 700 }}
                  >
                    {t('singers_book')}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}