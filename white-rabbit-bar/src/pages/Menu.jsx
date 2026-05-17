import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, Star, Wine, FlaskConical, Beer, Leaf, Coffee, UtensilsCrossed, Soup, GlassWater
} from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import PageMarquee from '../components/PageMarquee';
import PageShareBar from '../components/PageShareBar';
import { useLang } from '@/lib/LanguageContext';

// ── Image URLs ──────────────────────────────────────────────────────────────
const IMG = {
  sig1: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/1724e8fbf_S__10321925_0.jpg',
  sig2: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/e8bd2bd1a_S__10321927_0.jpg',
  sig3: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/9d20edd6f_S__10321928_0.jpg',
  sig4: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/708135850_S__10321929_0.jpg',
  sig5: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/3d6e1fc48_S__10321930_0.jpg',
  mas1: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/b9fee1238_S__10321931_0.jpg',
  mas2: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/3bc8b56ac_S__10321932_0.jpg',
  mas3: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/d65bde867_S__10321933_0.jpg',
  cls1: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/a73db5415_2FD29804-BE62-4893-921A-D2E439B194B9.jpg',
  cls2: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/0a961e398_16FA61F4-B005-4A2D-84CB-B73FDC973E25.jpg',
  cls3: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/3e2cd1133_421A047C-1E0B-460B-8394-2FEADBF26C8B.jpg',
  cls4: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/fcdd0b2ea_3611F8DA-6785-4EBA-91F8-0A2BA599D56D.jpg',
  clsListA: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/6dc7cef00_7EA9A8CA-99FE-4945-98FA-4E4D6B675015.jpg',
  clsListB: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/7e27cfbb5_0802F919-5182-4A25-8D9A-DD5AC526DC7E.jpg',
  whisky:   'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/adb91fa09_D58C3D36-FE8F-4C6B-BE7E-279397E0C197.jpg',
  spirits:  'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/5d65248b2_ECC2D6D7-4868-40B3-B500-508167BA13B1.jpg',
  shots:    'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/ebd410cf7_68DBD561-F08B-4C53-934C-F5560A4DEB26.jpg',
  mock:     'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/de89d117f_S__10321949_0.jpg',
  pottea:   'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/78c1de5c6_S__10321951_0.jpg',
  snack1:   'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/30824f08d_S__10321953_0.jpg',
  snack2:   'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/c199d173e_S__10321954_0.jpg',
  thai1:    'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/34f928b93_S__10321955_0.jpg',
  thai2:    'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/f4b857530_S__10321956_0.jpg',
};

// ── CATEGORIES with icons ──────────────────────────────────────────────────
const CATS = [
  { id: 'SIGNATURE',   label: 'SIGNATURE COCKTAILS',   Icon: Sparkles },
  { id: 'MASTERPIECE', label: 'MASTERPIECE COCKTAILS',  Icon: Star },
  { id: 'CLASSIC',     label: 'CLASSIC COCKTAILS',      Icon: Wine },
  { id: 'WHISKY',      label: 'WHISKY',                 Icon: FlaskConical },
  { id: 'SPIRITS',     label: 'SPIRITS',                Icon: GlassWater },
  { id: 'SHOTS',       label: 'SHOTS, BEER & WINE',     Icon: Beer },
  { id: 'MOCK',        label: 'MOCKTAILS & JUICE',      Icon: Leaf },
  { id: 'TEA',         label: 'POT TEA & SOFT DRINK',   Icon: Coffee },
  { id: 'SNACK',       label: 'SNACK MENU',             Icon: UtensilsCrossed },
  { id: 'THAI',        label: 'THAI FOOD',              Icon: Soup },
];

// ── Section header ────────────────────────────────────────────────────────
function SectionHeader({ eyebrow, title }) {
  return (
    <div className="mb-10">
      <p className="mono text-[#3B82F6] text-xs tracking-[0.4em] mb-3">{eyebrow}</p>
      <h2 className="font-tight font-black text-3xl md:text-4xl text-[#F5F5F5] tracking-tight">{title}</h2>
      <div className="w-10 h-px bg-[#3B82F6] mt-4" />
    </div>
  );
}

// ── Cocktail card with photo (brighter, bigger) ───────────────────────────
function CocktailCard({ name, price, ingredients, img, accent = '#3B82F6', onOpen }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div
        className="aspect-[2/3] overflow-hidden relative rounded-sm cursor-pointer"
        onClick={() => onOpen && onOpen(img, name)}
      >
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: 'brightness(1.0) contrast(1.1) saturate(1.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-transparent" />
        <AnimatePresence>
          {hov && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0A0A0A]/75 flex flex-col justify-end p-5"
            >
              <p className="mono text-[#ccc] text-xs leading-relaxed">{ingredients}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-3">
        <h3 className="font-tight font-black text-base md:text-lg text-[#F5F5F5] tracking-tight leading-tight">{name}</h3>
        <p className="mono text-[#666] text-[10px] mt-1 line-clamp-2 leading-relaxed">{ingredients}</p>
        <div className="mt-2 inline-block mono text-xs px-2 py-1 rounded-sm" style={{ background: accent + '22', color: accent, border: `1px solid ${accent}55` }}>
          ฿{price}
        </div>
      </div>
    </motion.div>
  );
}

// ── Masterpiece card (larger, brighter) ───────────────────────────────────
function MasterpieceCard({ name, price, ingredients, img, onOpen }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className="aspect-[2/3] overflow-hidden relative rounded-sm cursor-pointer" onClick={() => onOpen && onOpen(img, name)}>
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ filter: 'brightness(1.05) contrast(1.15) saturate(1.25)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 via-transparent to-transparent" />
        <AnimatePresence>
          {hov && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0A0A0A]/75 flex flex-col justify-end p-6"
            >
              <p className="mono text-[#ccc] text-xs leading-relaxed">{ingredients}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="mt-4">
        <h3 className="font-tight font-black text-xl text-[#F5F5F5] tracking-tight">{name}</h3>
        <p className="mono text-[#666] text-[10px] mt-1 leading-relaxed">{ingredients}</p>
        <div className="mt-2 inline-block mono text-xs px-2 py-1 rounded-sm" style={{ background: '#F9731622', color: '#F97316', border: '1px solid #F9731655' }}>
          ฿{price}
        </div>
      </div>
    </motion.div>
  );
}

// ── Full-width image card (clickable lightbox) ─────────────────────────────
function MenuImageCard({ img, label, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-sm cursor-pointer group"
      onClick={() => onOpen && onOpen(img, label)}
    >
      <img src={img} alt={label} className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" style={{ filter: 'brightness(1.02) contrast(1.05)' }} />
      <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/20 transition-all duration-300 flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mono text-xs text-white tracking-widest bg-[#0A0A0A]/60 px-4 py-2">🔍 VIEW</span>
      </div>
      {label && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent px-4 py-3">
          <p className="mono text-[#F5F5F5] text-xs tracking-widest">{label}</p>
        </div>
      )}
    </motion.div>
  );
}

// ── Text-only menu (full image, brighter, clickable) ──────────────────────
function TextMenuCard({ img, title, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-sm cursor-pointer group"
      onClick={() => onOpen && onOpen(img, title)}
    >
      <img src={img} alt={title} className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" style={{ filter: 'brightness(1.05) contrast(1.05)' }} />
      <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/20 transition-all duration-300 flex items-center justify-center">
        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mono text-xs text-white tracking-widest bg-[#0A0A0A]/60 px-4 py-2">🔍 VIEW</span>
      </div>
    </motion.div>
  );
}

// ── Lightbox ──────────────────────────────────────────────────────────────
function MenuLightbox({ src, label, onClose }) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-[#0A0A0A]/96 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="relative max-w-3xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <img src={src} alt={label} className="w-full object-contain max-h-[85vh]" />
            <div className="flex items-center justify-between mt-3">
              {label && <span className="mono text-[#888888] text-xs tracking-widest">{label}</span>}
              <button onClick={onClose} className="mono text-xs text-[#888888] hover:text-[#F5F5F5] transition-colors ml-auto">✕ CLOSE</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Menu() {
  const [active, setActive] = useState('SIGNATURE');
  const [lightbox, setLightbox] = useState({ src: null, label: '' });
  const { t } = useLang();
  const openLightbox = (src, label) => setLightbox({ src, label });
  const closeLightbox = () => setLightbox({ src: null, label: '' });

  return (
    <PageLayout>
      <div className="min-h-screen pt-28 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Page header */}
          <div className="mb-14">
            <p className="mono text-[#3B82F6] text-xs tracking-[0.4em] mb-3">WHITE RABBIT BAR · SILOM SOI 2 · BANGKOK</p>
            <h1 className="font-tight font-black text-section text-[#F5F5F5]">MENU</h1>
            <p className="text-[#888888] text-sm mt-4 max-w-xl font-light leading-relaxed">
              คอกเทลซิกเนเจอร์ Masterpiece Cocktails วิสกี้ สปิริต และอาหารไทย — ดื่มด่ำกับประสบการณ์สุดพิเศษ
              ที่ White Rabbit Bar สีลม ซอย 2 กรุงเทพฯ
            </p>
            <div className="thin-divider mt-6 max-w-xs" />
          </div>

          {/* Category tabs with icons */}
          <div className="flex gap-2 mb-14 overflow-x-auto pb-2 flex-wrap">
            {CATS.map(({ id, label, Icon }) => {
              const isActive = active === id;
              return (
                <motion.button
                  key={id}
                  onClick={() => setActive(id)}
                  whileTap={{ scale: 0.96 }}
                  className={`flex items-center gap-2 whitespace-nowrap mono text-[10px] tracking-widest px-4 py-2.5 border transition-all duration-300 ${
                    isActive
                      ? 'border-[#3B82F6] text-[#3B82F6] bg-[#3B82F6]/10'
                      : 'border-[rgba(245,245,245,0.1)] text-[#888888] hover:border-[rgba(245,245,245,0.3)] hover:text-[#F5F5F5]'
                  }`}
                  style={isActive ? { boxShadow: '0 0 16px rgba(59,130,246,0.2)' } : {}}
                >
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {label}
                </motion.button>
              );
            })}
          </div>

          {/* ── Content ── */}
          <AnimatePresence mode="wait">

            {active === 'SIGNATURE' && (
              <motion.div key="sig" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <SectionHeader eyebrow="HOUSE ORIGINALS" title="SIGNATURE COCKTAILS" />
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10">
                  <CocktailCard name="Rabbit in the Moon" price="429" ingredients="Vodka · Gin · Tequila · Orange Curaçao · Pineapple · Lime" img={IMG.sig1} onOpen={openLightbox} />
                  <CocktailCard name="White Rabbit" price="459" ingredients="White Rum · Butterscotch · Malibu · Pineapple · Lychee · Egg White" img={IMG.sig2} onOpen={openLightbox} />
                  <CocktailCard name="Wild Apples" price="459" ingredients="Vodka · Jack Apple · Apple Juice · Apple Liqueurs" img={IMG.sig3} onOpen={openLightbox} />
                  <CocktailCard name="Chrysanthemum Negroni" price="459" ingredients="Gin Infused Chrysanthemum · Campari · Gold Label" img={IMG.sig4} onOpen={openLightbox} />
                  <CocktailCard name="Tie Me to the Bedpost" price="429" ingredients="Vodka · Midori · Pineapple · Vanilla · Edible Flowers" img={IMG.sig5} onOpen={openLightbox} />
                </div>
              </motion.div>
            )}

            {active === 'MASTERPIECE' && (
              <motion.div key="mas" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <SectionHeader eyebrow="CHEF'S SPECIAL" title="MASTERPIECE COCKTAILS" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
                  <MasterpieceCard name="Carrots Margarita" price="429" ingredients="Tequila · Triple Sec · Carrot · Passion Fruits · Ginger · Tajin Salt" img={IMG.mas1} onOpen={openLightbox} />
                  <MasterpieceCard name="Bunny Plum" price="429" ingredients="Choya · Gin · Peach Liqueur · Soda · Lemon" img={IMG.mas2} onOpen={openLightbox} />
                  <MasterpieceCard name="Hare Refreshing" price="499" ingredients="Double Black · Ardbeg 10 y. · Ginger · Honey · Lime · Ginger Ale" img={IMG.mas3} onOpen={openLightbox} />
                </div>
              </motion.div>
            )}

            {active === 'CLASSIC' && (
              <motion.div key="cls" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <SectionHeader eyebrow="TIMELESS" title="CLASSIC COCKTAILS" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <MenuImageCard img={IMG.cls1} label="Midori Sour · Gimlet · Blue Hawaii" onOpen={openLightbox} />
                  <MenuImageCard img={IMG.cls2} label="Cosmopolitan · Margarita" onOpen={openLightbox} />
                  <MenuImageCard img={IMG.cls3} label="Gin Ruby · Lychee Martini · New York Sour" onOpen={openLightbox} />
                  <MenuImageCard img={IMG.cls4} label="Negroni · Martini · Manhattan" onOpen={openLightbox} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TextMenuCard img={IMG.clsListA} title="Classic Cocktails List A" onOpen={openLightbox} />
                  <TextMenuCard img={IMG.clsListB} title="Classic Cocktails List B" onOpen={openLightbox} />
                </div>
              </motion.div>
            )}

            {active === 'WHISKY' && (
              <motion.div key="wh" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <SectionHeader eyebrow="AGED & BLENDED" title="WHISKY" />
                <div className="max-w-2xl mx-auto">
                  <TextMenuCard img={IMG.whisky} title="Whisky Menu" onOpen={openLightbox} />
                </div>
              </motion.div>
            )}

            {active === 'SPIRITS' && (
              <motion.div key="sp" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <SectionHeader eyebrow="SINGLE MALT · GIN · RUM · TEQUILA · VODKA" title="SPIRITS" />
                <div className="max-w-2xl mx-auto">
                  <TextMenuCard img={IMG.spirits} title="Spirits Menu" onOpen={openLightbox} />
                </div>
              </motion.div>
            )}

            {active === 'SHOTS' && (
              <motion.div key="sh" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <SectionHeader eyebrow="POUR IT UP" title="SHOTS · BEER · WINE" />
                <div className="max-w-2xl mx-auto">
                  <TextMenuCard img={IMG.shots} title="Shots Beer Wine Menu" onOpen={openLightbox} />
                </div>
              </motion.div>
            )}

            {active === 'MOCK' && (
              <motion.div key="mo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <SectionHeader eyebrow="ALCOHOL FREE" title="MOCKTAILS & JUICE" />
                <div className="max-w-2xl mx-auto">
                  <MenuImageCard img={IMG.mock} label="Mocktails · Juice · Italian Soda" onOpen={openLightbox} />
                </div>
              </motion.div>
            )}

            {active === 'TEA' && (
              <motion.div key="tea" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <SectionHeader eyebrow="NON-ALCOHOLIC" title="POT TEA & SOFT DRINK" />
                <div className="max-w-2xl mx-auto">
                  <MenuImageCard img={IMG.pottea} label="Pot Tea · Soft Drinks · Corkage" onOpen={openLightbox} />
                </div>
              </motion.div>
            )}

            {active === 'SNACK' && (
              <motion.div key="sn" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <SectionHeader eyebrow="BAR BITES" title="SNACK MENU" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <MenuImageCard img={IMG.snack1} label="Shrimp Spring Rolls · Sun-Dried Pork · Sun-Dried Beef · Chicken Nuggets · Chicken Wings" onOpen={openLightbox} />
                  <MenuImageCard img={IMG.snack2} label="Shrimp Cake · Fried Shrimp Crackers · Mixed Nuts · Spicy Chicken Pop · French Fries" onOpen={openLightbox} />
                </div>
              </motion.div>
            )}

            {active === 'THAI' && (
              <motion.div key="th" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <SectionHeader eyebrow="AUTHENTIC THAI" title="THAI FOOD" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <MenuImageCard img={IMG.thai1} label={t('menu_thai_label1')} onOpen={openLightbox} />
                  <MenuImageCard img={IMG.thai2} label="ผัด · ข้าวต้ม · กระเพรา · ข้าวผัด" onOpen={openLightbox} />
                </div>
              </motion.div>
            )}

          </AnimatePresence>

          {/* Footer note */}
          <div className="mt-16 pt-8 border-t hairline">
            <p className="mono text-[#888888] text-xs text-center">{t('menu_price_note')}</p>
          </div>
        </div>
      </div>
      <PageMarquee items={['WHITE RABBIT', '·', 'SIGNATURE COCKTAILS', '·', 'MASTERPIECE', '·', 'CLASSIC', '·', 'SILOM ROAD', '·', 'BANGKOK', '·']} />
      <PageShareBar />
      <MenuLightbox src={lightbox.src} label={lightbox.label} onClose={closeLightbox} />
    </PageLayout>
  );
}