import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import PageLayout from '../components/layout/PageLayout';
import NeonRabbit from '../components/NeonRabbit';
import MapSection from '../components/MapSection';
import StickyBookBtn from '../components/StickyBookBtn';
import ReviewsSection from '../components/ReviewsSection';
import WeeklyLineup from '../components/WeeklyLineup';
import PromoSection from '../components/PromoSection';
import LocationBadge from '../components/LocationBadge';
import { useLang } from '@/lib/LanguageContext';

const heroSlides = [
  { src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/2ff578fe1_Gemini_Generated_Image_lmnswmlmnswmlmns.png', label: 'THE BAR' },
  { src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/47a953e26_Gemini_Generated_Image_d7y8tpd7y8tpd7y8.png', label: 'THE TREE' },
  { src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/0265455d1_Gemini_Generated_Image_dp0gh2dp0gh2dp0g.png', label: 'THE VIBE' },
  { src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/9c916e783_Gemini_Generated_Image_5ed53i5ed53i5ed5.png', label: 'WHITE RABBIT' },
  { src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/ad1d98d63_Gemini_Generated_Image_pago6hpago6hpago.png', label: 'THE SPACE' },
  { src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/82e032d58_Gemini_Generated_Image_6ee4c16ee4c16ee4.png', label: 'INSIDE' },
];

const featuredEvents = [
  { date: 'MAY 30', day: 'SAT', title: 'PRIDE NIGHT', dj: 'SPECIAL EVENT', time: '22:00', color: '#EC4899' },
  { date: 'OCT 31', day: 'SAT', title: 'HALLOWEEN NIGHT', dj: 'SPECIAL EVENT', time: '21:00', color: '#F97316' },
  { date: 'DEC 25', day: 'THU', title: 'CHRISTMAS NIGHT', dj: 'SPECIAL EVENT', time: '20:00', color: '#22C55E' },
  { date: 'DEC 31', day: 'WED', title: "NEW YEAR'S EVE", dj: 'COUNTDOWN PARTY', time: '21:00', color: '#3B82F6' },
];

function MarqueeBar({ reverse = false, items: customItems }) {
  const { t } = useLang();
  const items = customItems || t('marquee_items');
  return (
    <div className="overflow-hidden border-y border-[rgba(245,245,245,0.08)] py-3 bg-[#0D0D0D]">
      <motion.div
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
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

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const [slideIdx, setSlideIdx] = useState(0);
  const { t } = useLang();

  // Auto-advance slideshow
  useEffect(() => {
    const id = setInterval(() => setSlideIdx(i => (i + 1) % heroSlides.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Slideshow BG */}
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={slideIdx}
            src={heroSlides[slideIdx].src}
            alt={heroSlides[slideIdx].label}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.28) saturate(0.5) blur(3px)' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 via-transparent to-[#0A0A0A]" />
      </motion.div>

      {/* Slide dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlideIdx(i)}
            className="transition-all duration-300"
            style={{
              width: i === slideIdx ? 20 : 6,
              height: 2,
              background: i === slideIdx ? '#3B82F6' : 'rgba(245,245,245,0.25)',
            }}
          />
        ))}
      </div>

      {/* Noise grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '128px 128px' }}
      />

      {/* Blue gradient flare */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)' }}
      />

      <motion.div style={{ opacity }} className="relative z-10 px-8 md:px-16 lg:px-24 w-full max-w-7xl mx-auto">
        {/* Floating eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] blue-dot" />
          <span className="mono text-[#3B82F6] text-xs tracking-[0.4em]">{t('hero_badge')}</span>
        </motion.div>

        {/* Title with stagger */}
        <div className="overflow-hidden">
          {['WHITE', 'RABBIT'].map((word, wi) => (
            <motion.div
              key={wi}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ delay: 0.1 + wi * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="font-tight text-hero font-black leading-[0.88] tracking-[-0.04em] select-none"
                style={{
                  WebkitTextStroke: '1.5px rgba(245,245,245,0.9)',
                  color: '#F5F5F5',
                  textShadow: '0 0 80px rgba(59,130,246,0.2)',
                }}
              >
                {word}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mono text-[#888888] text-xs mt-5 tracking-[0.35em] max-w-sm"
        >
          {t('hero_tagline')}
        </motion.p>

        {/* Pride badge + Location badge row */}
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(245,245,245,0.12)]"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            <span className="text-sm">🏳️‍🌈</span>
            <span className="mono text-[10px] tracking-widest text-[#888888]">LGBTQ+ SAFE SPACE</span>
          </motion.div>
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="w-16 h-px bg-[#3B82F6] mt-6 origin-left"
        />

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            <Link to="/reserve"
              className="pride-btn neon-btn relative overflow-hidden mono text-xs px-8 py-4 bg-[#3B82F6] text-[#0A0A0A] font-bold hover:bg-[#60A5FA] transition-all duration-300 tracking-[0.15em] inline-block"
              style={{ transition: 'all 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(59,130,246,0.6), 0 0 80px rgba(59,130,246,0.2)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              {t('hero_book')}
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
          >
            <a
              href="/#weekly-lineup"
              onClick={e => { e.preventDefault(); document.getElementById('weekly-lineup')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="neon-btn mono text-xs px-8 py-4 border hairline text-[#888888] hover:text-[#F5F5F5] hover:border-[#F5F5F5]/30 transition-all duration-300 tracking-[0.15em] inline-block"
            >
              {t('hero_events')}
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function EventsPreview() {
  const { t } = useLang();
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="mono text-[#3B82F6] text-xs tracking-[0.35em] mb-3">{t('events_eyebrow')}</p>
          <h2 className="font-tight font-black text-section text-[#F5F5F5]">{t('events_title').split('\n').map((l,i)=><span key={i}>{l}{i===0&&<br/>}</span>)}</h2>
        </div>
        <Link to="/events" className="mono text-xs text-[#888888] hover:text-[#3B82F6] transition-colors tracking-widest pb-1 border-b border-transparent hover:border-[#3B82F6]">
          {t('events_all')}
        </Link>
      </div>

      <div className="space-y-0">
        {featuredEvents.map((ev, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link
              to={`/reserve?event=${encodeURIComponent(ev.title)}&date=${encodeURIComponent(ev.date)}`}
              className="group flex items-center gap-6 border-b border-[rgba(245,245,245,0.07)] py-6 hover:py-8 transition-all duration-300"
            >
              {/* Big date number */}
              <div className="shrink-0 text-center w-24 md:w-28">
                <p
                  className="font-tight font-black leading-none select-none"
                  style={{
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    color: ev.color,
                    opacity: 0.9,
                    textShadow: `0 0 24px ${ev.color}55`,
                  }}
                >
                  {ev.date.split(' ')[0]}
                </p>
                <p className="mono text-[10px] text-[#555] mt-1 tracking-widest">{ev.date.split(' ')[1]} · {ev.day}</p>
              </div>

              {/* Divider */}
              <div className="shrink-0 w-px h-14 bg-[rgba(245,245,245,0.08)] group-hover:bg-[rgba(59,130,246,0.4)] transition-colors duration-300" />

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-tight font-black text-2xl md:text-3xl text-[#F5F5F5] tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  {ev.title}
                </h3>
                <p className="mono text-xs text-[#555] mt-1">{ev.dj} · {ev.time} HRS</p>
              </div>

              {/* Arrow pill */}
              <div
                className="shrink-0 mono text-xs px-4 py-2 rounded-full border opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
                style={{ borderColor: ev.color + '60', color: ev.color }}
              >
                {t('events_access')}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const cocktailSlides = [
  'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/088abc279_S__10321925_0.jpg',
  'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/04e189708_S__10321927_0.jpg',
  'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/2a09e2a8c_S__10321928_0.jpg',
  'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/864ea0431_S__10321929_0.jpg',
  'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/33a159b07_S__10321930_0.jpg',
  'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/21a4e3d73_S__10321931_0.jpg',
  'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/4385124c3_S__10321932_0.jpg',
  'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/62fb3a286_S__10321933_0.jpg',
];

function AboutImageSlideshow({ t }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % cocktailSlides.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
      className="relative"
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <AnimatePresence mode="sync">
          <motion.img
            key={idx}
            src={cocktailSlides[idx]}
            alt="Signature Cocktail"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        {/* dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {cocktailSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              style={{ width: i === idx ? 14 : 5, height: 2, background: i === idx ? '#3B82F6' : 'rgba(245,245,245,0.3)' }}
              className="transition-all duration-300"
            />
          ))}
        </div>
      </div>
      <div className="absolute -bottom-4 -left-4">
        <LocationBadge line1={t('about_badge1')} line2={t('about_badge2')} />
      </div>
    </motion.div>
  );
}

function AboutSection() {
  const { t } = useLang();
  return (
    <section className="py-20 border-t border-[rgba(245,245,245,0.06)]">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <p className="mono text-[#3B82F6] text-xs tracking-[0.35em] mb-4">{t('about_eyebrow')}</p>
          <h2 className="font-tight font-black text-section text-[#F5F5F5] mb-6 leading-[0.92]">
            {t('about_title').split('\n').map((l,i)=><span key={i}>{l}<br/></span>)}
          </h2>
          <div className="w-8 h-px bg-[#3B82F6] mb-6" />
          <p className="text-[#888888] text-base leading-relaxed font-light">{t('about_body1')}</p>
          <p className="text-[#888888] text-base leading-relaxed font-light mt-3">
            <span className="text-[#F5F5F5]">{t('about_body2')}</span>
          </p>
          <Link to="/gallery" className="inline-flex items-center gap-2 mt-8 mono text-xs text-[#3B82F6] hover:gap-4 transition-all duration-300 tracking-widest">
            {t('about_link')}
          </Link>
        </motion.div>

        <AboutImageSlideshow t={t} />
      </div>
    </section>
  );
}

function PrideSection() {
  const { t } = useLang();
  const colors = ['#FF0018', '#FF7A00', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#8B00FF', '#86007D'];

  return (
    <section className="py-16 overflow-hidden">
      {/* Rainbow stripe */}
      <div className="flex h-1.5 mb-16">
        {colors.map((c, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="flex-1 origin-left"
            style={{ background: c }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-tight font-black text-2xl md:text-4xl text-[#F5F5F5] tracking-tight"
        >
          {t('pride_headline_pre')} <span className="italic font-light" style={{
            background: 'linear-gradient(90deg, #FF0018, #FFA52C, #FFFF41, #008018, #0000F9, #86007D)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>{t('pride_highlight')}</span> {t('pride_headline_post')}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mono text-[#888888] text-xs mt-4 tracking-widest"
        >
          {t('pride_sub')}
        </motion.p>

        {/* Floating pride emoji row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 mt-8 text-2xl"
        >
          {['🏳️‍🌈', '🐇', '✨', '💜', '🐇', '✨', '🏳️‍🌈'].map((e, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.15 }}
            >
              {e}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className="flex h-1.5 mt-16">
        {[...colors].reverse().map((c, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="flex-1 origin-right"
            style={{ background: c }}
          />
        ))}
      </div>
    </section>
  );
}

const galleryImages = [
  { src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/4d5e88077_Gemini_Generated_Image_5ed53i5ed53i5ed5.png', label: 'THE BAR', large: true },
  { src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/adfbf191f_Gemini_Generated_Image_dp0gh2dp0gh2dp0g.png', label: 'THE VIBE', large: true },
  { src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/04689ac1a_Gemini_Generated_Image_pago6hpago6hpago.png', label: 'THE SPACE', large: true },
  { src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/f58cc45e2_Gemini_Generated_Image_d7y8tpd7y8tpd7y8.png', label: 'THE TREE', large: false },
  { src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/3f5fe4d9c_Gemini_Generated_Image_6ee4c16ee4c16ee4.png', label: 'INSIDE', large: false },
  { src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/6ccbb6386_Gemini_Generated_Image_jfuprwjfuprwjfup.png', label: 'THE NIGHT', large: false },
  { src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/c50d076b5_Gemini_Generated_Image_lmnswmlmnswmlmns.png', label: 'WHITE RABBIT', large: false },
];

function HomeGallerySection() {
  const [selected, setSelected] = useState(null);
  return (
    <section className="py-20 border-t border-[rgba(245,245,245,0.06)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="mono text-[#3B82F6] text-xs tracking-[0.35em] mb-3">THE SPACE</p>
            <h2 className="font-tight font-black text-section text-[#F5F5F5]">GALLERY</h2>
          </div>
          <Link to="/gallery" className="mono text-xs text-[#888888] hover:text-[#3B82F6] transition-colors tracking-widest pb-1 border-b border-transparent hover:border-[#3B82F6]">
            ALL PHOTOS →
          </Link>
        </div>

        {/* Hero row — 3 large */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          {galleryImages.filter(g => g.large).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="gallery-item relative overflow-hidden aspect-[3/4] group cursor-pointer"
              onClick={() => setSelected(img)}
            >
              <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent">
                <span className="mono text-[#F5F5F5] text-xs tracking-widest">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary row — 4 smaller */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {galleryImages.filter(g => !g.large).map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="gallery-item relative overflow-hidden aspect-[3/4] group cursor-pointer"
              onClick={() => setSelected(img)}
            >
              <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent">
                <span className="mono text-[#F5F5F5] text-xs tracking-widest">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[#0A0A0A]/95 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-2xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img src={selected.src} alt={selected.label} className="w-full object-contain max-h-[82vh]" />
              <div className="flex items-center justify-between mt-4">
                <span className="mono text-[#888888] text-xs tracking-widest">{selected.label}</span>
                <button onClick={() => setSelected(null)} className="mono text-xs text-[#888888] hover:text-[#F5F5F5] transition-colors flex items-center gap-2">
                  ✕ CLOSE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default function Home() {
  const prideItems = ['PRIDE', '·', 'LGBTQ+ FRIENDLY', '·', 'ALL ARE WELCOME', '·', 'ALL ARE SEEN', '·', 'SILOM SOI 2', '·', 'OPEN NIGHTLY', '·'];
  const vibeItems = ['OPEN NIGHTLY', '·', 'DAILY 15:00–LATE', '·', 'BTS SALA DAENG', '·', 'BEFORE SILOM SOI 2', '·', 'LIVE SINGERS', '·', 'COCKTAILS', '·'];
  const reviewItems = ['4.8 STARS', '·', '868 REVIEWS', '·', 'GOOGLE REVIEWS', '·', 'VERIFIED GUESTS', '·', 'LGBTQ+ FRIENDLY', '·'];
  return (
    <PageLayout>
      <HeroSection />
      <MarqueeBar />
      <EventsPreview />
      <MarqueeBar reverse items={prideItems} />
      <PrideSection />
      <MarqueeBar items={vibeItems} />
      <PromoSection />
      <MarqueeBar reverse items={prideItems} />
      <WeeklyLineup />
      <MarqueeBar items={vibeItems} />
      <HomeGallerySection />
      <MarqueeBar reverse items={reviewItems} />
      <ReviewsSection />
      <MarqueeBar items={vibeItems} />
      <AboutSection />
      <MarqueeBar reverse items={vibeItems} />
      <MapSection />
    </PageLayout>
  );
}