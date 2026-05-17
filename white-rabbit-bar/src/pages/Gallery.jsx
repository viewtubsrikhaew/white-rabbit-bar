import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import PageMarquee from '../components/PageMarquee';
import PageShareBar from '../components/PageShareBar';
import LocationBadge from '../components/LocationBadge';

const images = [
  { id: 1, src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/4d5e88077_Gemini_Generated_Image_5ed53i5ed53i5ed5.png', label: 'THE BAR' },
  { id: 2, src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/adfbf191f_Gemini_Generated_Image_dp0gh2dp0gh2dp0g.png', label: 'THE VIBE' },
  { id: 3, src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/04689ac1a_Gemini_Generated_Image_pago6hpago6hpago.png', label: 'THE SPACE' },
  { id: 4, src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/f58cc45e2_Gemini_Generated_Image_d7y8tpd7y8tpd7y8.png', label: 'THE TREE' },
  { id: 5, src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/3f5fe4d9c_Gemini_Generated_Image_6ee4c16ee4c16ee4.png', label: 'INSIDE' },
  { id: 6, src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/c50d076b5_Gemini_Generated_Image_lmnswmlmnswmlmns.png', label: 'WHITE RABBIT' },
  { id: 7, src: 'https://media.base44.com/images/public/69f7654ff9b7e97f55cb2f12/6ccbb6386_Gemini_Generated_Image_jfuprwjfuprwjfup.png', label: 'THE NIGHT' },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <PageLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <p className="mono text-[#3B82F6] text-xs tracking-[0.4em] mb-4">THE PORTAL</p>
            <h1 className="font-tight font-black text-section text-[#F5F5F5]">GALLERY</h1>
            <div className="mt-4 mb-2">
              <LocationBadge line1="WHITE RABBIT BAR" line2="SILOM SOI 2, BKK" float={false} />
            </div>
            <p className="text-[#888888] text-sm mt-4 max-w-xl font-light leading-relaxed">
              ภาพบรรยากาศภายใน White Rabbit Bar สีลม ซอย 2 กรุงเทพฯ — บาร์ LGBTQ+ Friendly บรรยากาศสุดชิค
              ตกแต่งอย่างมีสไตล์ เหมาะสำหรับทุกคืนแห่งความสนุก
            </p>
            <div className="thin-divider mt-6 max-w-xs" />
          </div>

          {/* Hero row — images 1, 2, 3 large */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            {images.slice(0, 3).map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="gallery-item relative overflow-hidden cursor-pointer group aspect-[3/4]"
                onClick={() => setSelected(img)}
              >
                <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#0A0A0A]/80 to-transparent">
                  <span className="mono text-[#F5F5F5] text-xs tracking-widest">{img.label}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Secondary row — images 4-7, smaller */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {images.slice(3).map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="gallery-item relative overflow-hidden cursor-pointer group aspect-[3/4]"
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
      </div>

      <PageMarquee items={['GALLERY', '·', 'THE BAR', '·', 'THE VIBE', '·', 'THE SPACE', '·', 'WHITE RABBIT', '·', 'SILOM ROAD', '·']} />
      <PageShareBar />

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A]/95 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-2xl max-h-[90vh] w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selected.src}
                alt={selected.label}
                className="w-full h-full object-contain max-h-[82vh]"
                style={{ filter: 'brightness(1) contrast(1.05)' }}
              />
              <div className="flex items-center justify-between mt-4">
                <span className="mono text-[#888888] text-xs tracking-widest">{selected.label}</span>
                <button
                  onClick={() => setSelected(null)}
                  className="mono text-xs text-[#888888] hover:text-[#F5F5F5] transition-colors flex items-center gap-2"
                >
                  <X className="w-4 h-4" /> CLOSE
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}