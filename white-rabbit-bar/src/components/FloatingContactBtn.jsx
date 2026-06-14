import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Instagram, Facebook, CalendarCheck } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, label: 'INSTAGRAM', href: 'https://www.instagram.com/whiterabbitbar.bkk?igsh=OTZnd290OTNpZTFl', color: '#E1306C' },
  { icon: Facebook,  label: 'FACEBOOK',  href: 'https://www.facebook.com/profile.php?id=61561620376247',             color: '#1877F2' },
];

const floatShadow     = '0 4px 6px rgba(0,0,0,0.3), 0 10px 25px rgba(0,0,0,0.45), 0 25px 60px rgba(0,0,0,0.35)';
const btnShadowClosed = `${floatShadow}, 0 0 30px rgba(59,130,246,0.45)`;
const btnShadowOpen   = floatShadow;

export default function FloatingContactBtn() {
  const [open, setOpen] = useState(false);

  const ui = (
    <div
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '0.75rem',
      }}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-2 items-end"
          >
            <Link
              to="/reserve"
              className="flex items-center gap-2 mono text-xs px-5 py-3 bg-[#3B82F6] text-[#0A0A0A] font-bold tracking-[0.15em] hover:bg-[#60A5FA] transition-colors"
              style={{ boxShadow: `${floatShadow}, 0 0 20px rgba(59,130,246,0.4)` }}
            >
              <CalendarCheck className="w-4 h-4" />
              RESERVE NOW
            </Link>

            {socialLinks.map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 px-4 py-2.5 border transition-all duration-200 hover:scale-[1.03]"
                style={{
                  background: '#0A0A0A',
                  borderColor: s.color + '40',
                  boxShadow: floatShadow,
                }}
              >
                <s.icon className="w-4 h-4 shrink-0" style={{ color: s.color }} />
                <span className="mono text-xs tracking-wider whitespace-nowrap text-[#F5F5F5]">{s.label}</span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 flex items-center justify-center transition-all duration-300"
        style={{
          background: open ? '#1a1a1a' : '#3B82F6',
          border: open ? '1px solid rgba(59,130,246,0.4)' : 'none',
          boxShadow: open ? btnShadowOpen : btnShadowClosed,
        }}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <X className="w-5 h-5 text-[#3B82F6]" />
            </motion.div>
          ) : (
            <motion.div key="cal" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
              <CalendarCheck className="w-5 h-5 text-[#0A0A0A]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );

  return createPortal(ui, document.body);
}