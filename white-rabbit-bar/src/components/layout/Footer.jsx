import { useLang } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative overflow-hidden border-t hairline bg-[#0A0A0A] pt-16 pb-10">
      {/* Massive background text */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center overflow-hidden pointer-events-none select-none">
        <span className="font-tight font-black text-[20vw] leading-none text-[#F5F5F5] opacity-[0.04] whitespace-nowrap">
          SILOM
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <img src="https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/3b6334a01_gsgdgsgd.png" alt="White Rabbit" className="h-20 mb-3 opacity-90" />
            <p className="mono text-[#888888] text-xs leading-relaxed whitespace-pre-line">{t('footer_tagline')}</p>
          </div>

          {/* Contact */}
          <div>
            <p className="mono text-[#888888] text-xs mb-5 border-b hairline pb-3">{t('footer_contact')}</p>
            <div className="space-y-2">
              <p className="mono text-[#F5F5F5] text-xs">089-956-6248</p>
              <p className="mono text-[#F5F5F5] text-xs">086-359-4778</p>
              <p className="mono text-[#F5F5F5] text-xs">098-887-8032</p>
              <a href="https://www.instagram.com/whiterabbitbar.bkk" target="_blank" rel="noopener noreferrer" className="mono text-[#E1306C] text-xs mt-2 block hover:opacity-80 transition-colors">IG: @whiterabbitbar.bkk</a>
              <a href="https://www.facebook.com/profile.php?id=61561620376247" target="_blank" rel="noopener noreferrer" className="mono text-[#3B82F6] text-xs mt-1 block hover:text-[#60A5FA] transition-colors">FB: WHITE RABBiT Silom</a>
              <a href="mailto:Bangkokgreatfuture@gmail.com" className="mono text-[#3B82F6] text-xs mt-1 block hover:text-[#60A5FA] transition-colors">Bangkokgreatfuture@gmail.com</a>
              <p className="mono text-[#888888] text-xs mt-3">{t('footer_address')}</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <p className="mono text-[#888888] text-xs mb-5 border-b hairline pb-3">{t('footer_hours')}</p>
            <div className="space-y-1.5">
              <div className="flex justify-between">
                <span className="mono text-[#888888] text-xs">{t('footer_hours_1_day')}</span>
                <span className="mono text-[#F5F5F5] text-xs">{t('footer_hours_1_time')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="thin-divider mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="mono text-[#888888] text-xs">{t('footer_copy')}</p>
          <div className="flex gap-5 items-center">
            <a href="https://www.instagram.com/whiterabbitbar.th?igsh=OTZnd290OTNpZTFl" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#3B82F6] transition-colors duration-300" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61561620376247" target="_blank" rel="noopener noreferrer" className="text-[#888888] hover:text-[#3B82F6] transition-colors duration-300" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
