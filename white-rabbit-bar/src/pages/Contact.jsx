import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, Facebook, Navigation, Mail } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import { useLang } from '@/lib/LanguageContext';
import PageMarquee from '../components/PageMarquee';
import PageShareBar from '../components/PageShareBar';

const social = [
  { icon: Instagram, label: 'INSTAGRAM', handle: '@whiterabbitbar.bkk', href: 'https://www.instagram.com/whiterabbitbar.bkk?igsh=OTZnd290OTNpZTFl' },
  { icon: Facebook, label: 'FACEBOOK', handle: 'White Rabbit Silom', href: 'https://www.facebook.com/profile.php?id=61561620376247' },
];

export default function Contact() {
  const { t } = useLang();

  const contacts = [
    { icon: Phone, label: t('contact_phone_label'), value: '089-956-6248', href: 'tel:+66899566248', cta: t('contact_phone_cta'), color: '#3B82F6' },
    { icon: Phone, label: t('contact_phone_label'), value: '086-359-4778', href: 'tel:+66863594778', cta: t('contact_phone_cta'), color: '#3B82F6' },
    { icon: Phone, label: t('contact_phone_label'), value: '098-887-8032', href: 'tel:+66988878032', cta: t('contact_phone_cta'), color: '#3B82F6' },
    { icon: Mail, label: 'EMAIL', value: 'Bangkokgreatfuture@gmail.com', href: 'mailto:Bangkokgreatfuture@gmail.com', cta: 'EMAIL US', color: '#3B82F6' },
    { icon: Instagram, label: 'INSTAGRAM', value: '@whiterabbitbar.bkk', href: 'https://www.instagram.com/whiterabbitbar.bkk?igsh=OTZnd290OTNpZTFl', cta: 'FOLLOW', color: '#E1306C' },
    { icon: Facebook, label: 'FACEBOOK', value: 'White Rabbit Silom', href: 'https://www.facebook.com/profile.php?id=61561620376247', cta: 'FOLLOW', color: '#1877F2' },
    { icon: MapPin, label: t('contact_location_label'), value: t('contact_location_value'), href: 'https://maps.google.com/?q=Silom+Soi+2+Bangkok', cta: t('contact_location_cta'), color: '#F472B6' },
  ];

  const hours = [
    { day: t('contact_hours_1_day'), time: t('contact_hours_1_time') },
    { day: t('contact_hours_2_day'), time: t('contact_hours_2_time') },
    { day: t('contact_hours_3_day'), time: t('contact_hours_3_time') },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-2xl mx-auto px-6">
          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-14">
            <p className="mono text-[#3B82F6] text-xs tracking-[0.4em] mb-4">{t('contact_eyebrow')}</p>
            <h1 className="font-tight font-black text-section text-[#F5F5F5]">{t('contact_title').split('\n').map((l,i)=><span key={i}>{l}{i===0&&<br/>}</span>)}</h1>
            <div className="thin-divider mt-6 max-w-xs" />
          </motion.div>

          {/* Main contact cards */}
          <div className="space-y-3 mb-12">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-5 border border-[rgba(245,245,245,0.07)] p-5 hover:border-[rgba(59,130,246,0.3)] transition-all duration-300 group active:scale-[0.98]"
              >
                <div className="shrink-0 w-11 h-11 flex items-center justify-center border border-[rgba(245,245,245,0.08)] group-hover:border-opacity-30 transition-colors"
                  style={{ borderColor: c.color + '30' }}>
                  <c.icon className="w-5 h-5" style={{ color: c.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="mono text-[#888888] text-[10px] tracking-[0.3em] mb-1">{c.label}</p>
                  <p className="font-tight font-bold text-[#F5F5F5] text-base leading-snug">{c.value}</p>
                </div>
                <span className="mono text-[10px] tracking-widest shrink-0 px-3 py-1.5 border transition-all duration-300"
                  style={{ color: c.color, borderColor: c.color + '40' }}>
                  {c.cta} →
                </span>
              </motion.a>
            ))}
          </div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="border border-[rgba(245,245,245,0.07)] p-6 mb-12"
          >
            <div className="flex items-center gap-2 mb-5">
              <Clock className="w-3.5 h-3.5 text-[#3B82F6]" />
              <p className="mono text-[#888888] text-[10px] tracking-[0.3em]">{t('contact_hours_title')}</p>
            </div>
            <div className="space-y-3">
              {hours.map(h => (
                <div key={h.day} className="flex justify-between items-center">
                  <span className="mono text-[#888888] text-xs">{h.day}</span>
                  <span className="mono text-[#F5F5F5] text-xs">{h.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Google Maps embed */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative overflow-hidden mb-12"
            style={{ height: 220 }}
          >
            <div className="absolute inset-0 pointer-events-none z-10 border border-[rgba(59,130,246,0.2)]" />
            <a
              href="https://maps.google.com/?q=Silom+Soi+2+Bangkok"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 z-20 mono text-[10px] text-[#3B82F6] bg-[#0A0A0A]/90 border border-[rgba(59,130,246,0.3)] px-3 py-1.5 flex items-center gap-1.5 hover:bg-[#3B82F6]/10 transition-colors"
            >
              <Navigation className="w-3 h-3" /> {t('contact_directions')}
            </a>
            <iframe
              title="White Rabbit Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.9432!2d100.5276!3d13.7264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2999c3c27f0d5%3A0x4f5f7b0e8b6b8e!2sSilom%20Soi%202%2C%20Silom%2C%20Bang%20Rak%2C%20Bangkok%2010500!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth"
              width="100%"
              height="220"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1) saturate(0.5)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Social */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <p className="mono text-[#888888] text-[10px] tracking-[0.3em] mb-4">{t('contact_follow')}</p>
            <div className="flex gap-4">
              {social.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-[rgba(245,245,245,0.07)] px-4 py-3 hover:border-[rgba(59,130,246,0.3)] transition-all duration-300 flex-1"
                >
                  <s.icon className="w-4 h-4 text-[#888888]" />
                  <div>
                    <p className="mono text-[9px] text-[#888888] tracking-widest">{s.label}</p>
                    <p className="mono text-xs text-[#F5F5F5] mt-0.5">{s.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <PageMarquee items={['CONTACT US', '·', 'WHITE RABBIT BAR', '·', 'SILOM ROAD', '·', 'BANGKOK', '·', 'LGBTQ+ FRIENDLY', '·']} />
      <PageShareBar />
    </PageLayout>
  );
}