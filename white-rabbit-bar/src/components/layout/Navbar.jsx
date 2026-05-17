import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LangSwitcher from './LangSwitcher';
import { useLang } from '@/lib/LanguageContext';

const navKeys = [
  { key: 'nav_menu', path: '/menu' },
  { key: 'nav_events', path: '/events' },
  { key: 'nav_gallery', path: '/gallery' },
  { key: 'nav_lineup', path: '/', anchor: 'weekly-lineup' },
  { key: 'nav_faq', path: '/faq' },
  { key: 'nav_contact', path: '/contact' },
  { key: 'nav_reserve', path: '/reserve' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLang();

  const handleNavClick = (e, item) => {
    if (item.anchor) {
      e.preventDefault();
      setOpen(false);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(item.anchor)?.scrollIntoView({ behavior: 'smooth' });
        }, 350);
      } else {
        document.getElementById(item.anchor)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => setOpen(false), [location]);

  const navbar = (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999 }} className="py-4 border-b hairline bg-[#0A0A0A]/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-5">
          <img src="https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/3b6334a01_gsgdgsgd.png" alt="White Rabbit" className="h-10 w-auto" />
          <span className="mono text-[#F5F5F5] text-xs tracking-[0.25em]">WHITE RABBIT</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navKeys.filter(({ path }) => path !== '/reserve').map((item) => (
            <Link
              key={item.key}
              to={item.path || '/'}
              onClick={(e) => handleNavClick(e, item)}
              className={`mono text-xs transition-colors duration-200 ${
                location.pathname === item.path && !item.anchor
                  ? 'text-[#3B82F6]'
                  : 'text-[#888888] hover:text-[#F5F5F5]'
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
          <LangSwitcher />
          <Link
            to="/reserve"
            className="mono text-xs px-4 py-2 bg-[#3B82F6] text-[#0A0A0A] font-bold hover:bg-[#60A5FA] transition-colors tracking-[0.1em]"
          >
            {t('nav_reserve')}
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={(e) => { e.stopPropagation(); setOpen(prev => !prev); }}
          className="md:hidden flex flex-col gap-1.5 p-3 relative z-[60] touch-manipulation"
          aria-label="Menu"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <span className={`block h-px w-6 bg-[#F5F5F5] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px w-6 bg-[#F5F5F5] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-[#F5F5F5] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-md border-b hairline">
          <div className="flex flex-col py-4">
            {navKeys.map((item) => (
              <Link
                key={item.key}
                to={item.path || '/'}
                className="mono text-xs px-6 py-3 text-[#888888] hover:text-[#3B82F6] transition-colors"
                onClick={(e) => handleNavClick(e, item)}
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="border-t hairline px-6 py-3 mt-2">
              <LangSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );

  return createPortal(navbar, document.body);
}