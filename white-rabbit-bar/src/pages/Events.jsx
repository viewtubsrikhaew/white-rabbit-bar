import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageLayout from '../components/layout/PageLayout';
import { useLang } from '@/lib/LanguageContext';
import PageMarquee from '../components/PageMarquee';
import PageShareBar from '../components/PageShareBar';
import LocationBadge from '../components/LocationBadge';

const events = [
  {
    id: 1,
    date: 'MAY 30',
    day: 'FRIDAY',
    title: 'PRIDE NIGHT',
    desc: 'A night celebrating identity, love, and freedom. The most colourful, electric night of the year at White Rabbit Bar Silom Bangkok.',
    time: '21:00 – 04:00',
    tags: ['PRIDE', 'LGBTQ+', 'SPECIAL EVENT'],
    img: 'https://images.unsplash.com/photo-1573152143286-0c422b4d2175?w=800&q=80&auto=format&fit=crop',
    color: '#EC4899',
  },
  {
    id: 2,
    date: 'OCT 31',
    day: 'SATURDAY',
    title: 'HALLOWEEN NIGHT',
    desc: 'Costumes, darkness, and bass — White Rabbit transforms into the most haunted bar in Bangkok for one night only.',
    time: '21:00 – 04:00',
    tags: ['HALLOWEEN', 'COSTUME', 'SPECIAL EVENT'],
    img: 'https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?w=800&q=80&auto=format&fit=crop',
    color: '#F97316',
  },
  {
    id: 3,
    date: 'DEC 25',
    day: 'THURSDAY',
    title: 'CHRISTMAS NIGHT',
    desc: 'Celebrate the most magical night of the year at White Rabbit. Festive cocktails, live performances, and holiday cheer.',
    time: '20:00 – 04:00',
    tags: ['CHRISTMAS', 'FESTIVE', 'SPECIAL EVENT'],
    img: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80&auto=format&fit=crop',
    color: '#22C55E',
  },
  {
    id: 4,
    date: 'DEC 31',
    day: 'WEDNESDAY',
    title: "NEW YEAR'S EVE",
    desc: "Count down to midnight at Bangkok's most iconic LGBTQ+ bar. Ring in the new year with the White Rabbit family at Silom Soi 2.",
    time: '21:00 – 05:00',
    tags: ['NEW YEAR', 'COUNTDOWN', 'SPECIAL EVENT'],
    img: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80&auto=format&fit=crop',
    color: '#3B82F6',
  },
];

function EventRow({ event, index }) {
  const { t } = useLang();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="event-row border-b hairline group"
    >
      <div className="py-10 grid grid-cols-1 md:grid-cols-[120px_1fr_auto] gap-6 md:gap-12 items-start">
        {/* Date */}
        <div className="md:pt-1">
          <span className="mono font-medium text-lg" style={{ color: event.color }}>{event.date}</span>
          <p className="mono text-[#888888] text-xs mt-1">{event.day}</p>
        </div>

        {/* Content */}
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {event.tags.map(tag => (
              <span key={tag} className="mono text-xs text-[#888888] border hairline px-2 py-0.5">{tag}</span>
            ))}
          </div>
          <h3 className="font-tight font-black text-3xl md:text-4xl text-[#F5F5F5] tracking-tight mb-2">
            {event.title}
          </h3>
          <p className="mono text-xs mb-3" style={{ color: event.color }}>{event.time}</p>
          <p className="text-[#888888] text-base leading-relaxed max-w-xl font-light">
            {t(`event${event.id}_desc`) !== `event${event.id}_desc` ? t(`event${event.id}_desc`) : event.desc}
          </p>
        </div>

        {/* Action */}
        <div className="md:pt-1 flex flex-col items-start md:items-end gap-4">
          <div className="gallery-item w-24 h-24 md:w-32 md:h-32 overflow-hidden">
            <img src={event.img} alt={event.title} className="w-full h-full object-cover" />
          </div>
          <Link
            to={`/reserve?event=${encodeURIComponent(event.title)}&date=${encodeURIComponent(event.date)}`}
            className="pride-btn mono text-xs px-5 py-3 border transition-all duration-300 whitespace-nowrap"
            style={{ borderColor: event.color + '60', color: event.color }}
          >
            {t('events_access')}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Events() {
  const { t } = useLang();
  return (
    <PageLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <div className="mb-20">
            <p className="mono text-[#3B82F6] text-xs tracking-[0.4em] mb-4">{t('events_eyebrow')}</p>
            <h1 className="font-tight font-black text-section text-[#F5F5F5]">{t('events_h1')}</h1>
            <div className="mt-4 mb-2">
              <LocationBadge line1="SILOM SOI 2" line2="BANGKOK, TH · EST. 2019" float={false} />
            </div>
            <p className="text-[#888888] text-sm mt-4 max-w-xl font-light leading-relaxed">
              กิจกรรมสุดพิเศษทุกฤดูกาลที่ White Rabbit Bar สีลม ซอย 2 กรุงเทพฯ — PRIDE NIGHT · HALLOWEEN · CHRISTMAS · NEW YEAR'S EVE
              และอีเวนต์ LGBTQ+ Friendly สุดเอ็กซ์คลูซีฟตลอดทั้งปี
            </p>
            <div className="thin-divider mt-6 max-w-xs" />
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="hidden md:block absolute left-[120px] top-0 bottom-0 w-px bg-gradient-to-b from-[#3B82F6]/20 via-[#3B82F6]/10 to-transparent" />
            {events.map((event, i) => (
              <EventRow key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
      <PageMarquee items={['PRIDE NIGHT', '·', 'HALLOWEEN', '·', 'CHRISTMAS', '·', "NEW YEAR'S EVE", '·', 'WHITE RABBIT BAR', '·', 'BANGKOK', '·']} />
      <PageShareBar />
    </PageLayout>
  );
}