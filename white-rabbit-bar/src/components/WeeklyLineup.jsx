import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

const scheduleImages = {
  MON: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/a68affde1_mon2.png',
  TUE: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/30b016449_tue.png',
  WED: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/ce45db20b_wed.png',
  THU: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/a067cba78_thu.png',
  FRI: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/0bb3a099e_fri.png',
  SAT: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/d80d00cf3_sat.png',
  SUN: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/1e87b6e27_sun.png',
};

const dayFull = {
  MON: 'MONDAY', TUE: 'TUESDAY', WED: 'WEDNESDAY',
  THU: 'THURSDAY', FRI: 'FRIDAY', SAT: 'SATURDAY', SUN: 'SUNDAY',
};

export default function WeeklyLineup() {
  const todayIdx = new Date().getDay();
  const dayMap = [6, 0, 1, 2, 3, 4, 5];
  const [selectedDay, setSelectedDay] = useState(dayMap[todayIdx]);
  const { t } = useLang();

  const currentDay = days[selectedDay];

  return (
    <section id="weekly-lineup" className="py-24 border-t border-[rgba(245,245,245,0.06)]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="mono text-[#3B82F6] text-xs tracking-[0.35em] mb-3">{t('singers_eyebrow')}</p>
            <h2 className="font-tight font-black text-section text-[#F5F5F5] leading-[0.92]">
              {t('singers_title').split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br />}</span>)}
            </h2>
          </div>
          <p className="mono text-[#555] text-[10px] tracking-widest max-w-xs text-right">
            {t('lineup_sub') || 'LIVE PERFORMANCES · WHITE RABBIT BAR'}
          </p>
        </motion.div>

        {/* Day Tabs */}
        <div className="flex gap-1 mb-8 overflow-x-auto pb-1">
          {days.map((day, i) => (
            <button
              key={day}
              onClick={() => setSelectedDay(i)}
              className={`mono text-xs px-5 py-2.5 shrink-0 transition-all duration-200 ${
                selectedDay === i
                  ? 'bg-[#3B82F6] text-[#0A0A0A] font-bold'
                  : 'border border-[rgba(245,245,245,0.1)] text-[#555] hover:text-[#888] hover:border-[rgba(245,245,245,0.2)]'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDay}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-sm border border-[rgba(245,245,245,0.07)] group"
          >
            <img
              src={scheduleImages[currentDay]}
              alt={`${dayFull[currentDay]} lineup`}
              className="w-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
              style={{ maxHeight: 600 }}
            />

            {/* Bottom glow */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent pointer-events-none" />
          </motion.div>
        </AnimatePresence>

        {/* Reserve CTA below */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 flex justify-center"
        >
          <a
            href="/reserve"
            className="mono text-xs px-8 py-3 bg-[#3B82F6] text-[#0A0A0A] font-bold hover:bg-[#60A5FA] transition-colors tracking-[0.2em]"
          >
            {t('singers_book') || `BOOK FOR ${dayFull[currentDay]} →`}
          </a>
        </motion.div>
      </div>
    </section>
  );
}