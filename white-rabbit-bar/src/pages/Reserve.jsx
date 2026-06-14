import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import { useLang } from '@/lib/LanguageContext';
import LocationBadge from '../components/LocationBadge';

export default function Reserve() {
  const navigate = useNavigate();
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', date: '', guests: '2', event: '', notes: '',
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const eventParam = params.get('event');
    const dateParam = params.get('date');
    if (eventParam) setForm(f => ({ ...f, event: eventParam }));
    if (dateParam) setForm(f => ({ ...f, date: dateParam }));
  }, []);

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/mdajnyzr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || '-',
          date: form.date,
          guests: form.guests,
          event: form.event || '-',
          notes: form.notes || '-',
          _subject: `New Table Reservation — ${form.name} · ${form.date}`,
        }),
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const phoneNumber = '+6621234567';

  if (submitted) {
    return (
      <PageLayout noFooter>
        <div className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-md"
          >
            <div className="w-2 h-2 rounded-full bg-[#3B82F6] mx-auto mb-8 blue-dot" />
            <h2 className="font-tight font-black text-4xl text-[#F5F5F5] mb-4 tracking-tight">
              {t('reserve_confirmed_title').split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br/>}</span>)}
            </h2>
            <div className="thin-divider my-6 max-w-[60px] mx-auto" />
            <p className="mono text-[#888888] text-xs leading-relaxed mb-2">{t('reserve_confirmed_msg')}</p>
            <p className="mono text-[#F5F5F5] text-xs mb-8">{form.name?.toUpperCase() || 'YOU'} · {form.date || 'YOUR NIGHT'}</p>
            <p className="text-[#888888] text-sm leading-relaxed font-light">
              {t('reserve_confirmed_body')} <span className="text-[#F5F5F5]">{form.email}</span>
            </p>
            <button
              onClick={() => navigate('/')}
              className="mt-10 mono text-xs text-[#3B82F6] hover:text-[#F5F5F5] transition-colors tracking-widest"
            >
              {t('reserve_back')}
            </button>
          </motion.div>
        </div>
      </PageLayout>
    );
  }

  const fields = [
    { name: 'name', label: t('reserve_name'), type: 'text', placeholder: 'Your name', required: true },
    { name: 'email', label: t('reserve_email'), type: 'email', placeholder: 'your@email.com', required: true },
    { name: 'phone', label: t('reserve_phone'), type: 'tel', placeholder: '+66 XX XXX XXXX', required: false },
    { name: 'date', label: t('reserve_date'), type: 'date', placeholder: '', required: true },
  ];

  return (
    <PageLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <p className="mono text-[#3B82F6] text-xs tracking-[0.4em] mb-4">{t('reserve_eyebrow')}</p>
            <h1 className="font-tight font-black text-section text-[#F5F5F5]">
              {t('reserve_title').split('\n').map((l, i) => <span key={i}>{l}{i === 0 && <br/>}</span>)}
            </h1>
            <div className="mt-4">
              <LocationBadge line1="SILOM SOI 2" line2="BANGKOK, TH" float={false} />
            </div>
            <div className="thin-divider mt-6 max-w-xs" />
            <p className="text-[#888888] mt-6 text-base font-light leading-relaxed">{t('reserve_subtitle')}</p>
          </motion.div>

          <div className="thin-divider mb-10" />

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            onSubmit={handleSubmit}
            className="space-y-10"
          >
            {fields.map((field) => (
              <div key={field.name} className="group">
                <label className="mono text-[#888888] text-xs tracking-widest block mb-3">
                  {field.label} {field.required && <span className="text-[#3B82F6]">*</span>}
                </label>
                <input
                  name={field.name}
                  type={field.type}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full bg-transparent border-0 border-b border-[rgba(245,245,245,0.15)] pb-3 text-[#F5F5F5] text-lg font-light placeholder-[#444] focus:outline-none focus:border-[#3B82F6] transition-colors duration-300"
                />
              </div>
            ))}

            <div>
              <label className="mono text-[#888888] text-xs tracking-widest block mb-3">
                {t('reserve_guests')} <span className="text-[#3B82F6]">*</span>
              </label>
              <select
                name="guests"
                value={form.guests}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-[rgba(245,245,245,0.15)] pb-3 text-[#F5F5F5] text-lg font-light focus:outline-none focus:border-[#3B82F6] transition-colors duration-300 appearance-none"
              >
                {[1,2,3,4,5,6,'7+'].map(n => (
                  <option key={n} value={String(n)} className="bg-[#0A0A0A] text-[#F5F5F5]">
                    {n} {n === 1 ? t('reserve_guest_singular') : t('reserve_guest_plural')}
                  </option>
                ))}
              </select>
            </div>

            {form.event && (
              <div>
                <label className="mono text-[#888888] text-xs tracking-widest block mb-3">{t('reserve_event')}</label>
                <p className="text-[#F5F5F5] text-lg border-b border-[rgba(245,245,245,0.15)] pb-3">{form.event}</p>
              </div>
            )}

            <div>
              <label className="mono text-[#888888] text-xs tracking-widest block mb-3">{t('reserve_notes')}</label>
              <textarea
                name="notes"
                value={form.notes}
                onChange={handleChange}
                placeholder={t('reserve_notes_ph')}
                rows={3}
                className="w-full bg-transparent border-0 border-b border-[rgba(245,245,245,0.15)] pb-3 text-[#F5F5F5] text-lg font-light placeholder-[#444] focus:outline-none focus:border-[#3B82F6] transition-colors duration-300 resize-none"
              />
            </div>

            <div className="pt-4">
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={loading ? {} : { scale: 1.02, y: -2 }}
                whileTap={loading ? {} : { scale: 0.98 }}
                className="relative w-full mono text-xs py-5 overflow-hidden tracking-[0.2em] transition-all duration-300 group disabled:opacity-60"
                style={{ background: '#3B82F6', color: '#0A0A0A' }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.boxShadow = '0 0 40px rgba(59,130,246,0.5)'; }}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <span className="relative z-10 font-bold">
                  {loading ? 'SENDING...' : t('reserve_submit')}
                </span>
                <span className="absolute inset-0 bg-[#60A5FA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>

            <p className="mono text-[#888888] text-xs text-center tracking-wider">{t('reserve_walkin')}</p>
          </motion.form>
        </div>
      </div>
    </PageLayout>
  );
}