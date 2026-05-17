import { motion } from 'framer-motion';

const djs = [
  {
    name: 'DJ PHANTOM',
    genre: 'DARK TECHNO · MINIMAL',
    nights: 'EVERY FIRST FRIDAY',
    bio: 'Berlin-trained. Bangkok-hardened. Known for sets that start at 160 BPM and never look back.',
    img: 'https://images.unsplash.com/photo-1571266028243-4716f7ca3b36?w=600&q=80&auto=format&fit=crop',
    color: '#3B82F6',
  },
  {
    name: 'DJ LUNA',
    genre: 'AMBIENT · UNDERGROUND',
    nights: 'EVERY SECOND FRIDAY',
    bio: 'Classically trained musician turned electronic explorer. Her sets feel like soundtracks to dreams.',
    img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80&auto=format&fit=crop',
    color: '#8B5CF6',
  },
  {
    name: 'DJ ECLIPSE',
    genre: 'INDUSTRIAL · EXPERIMENTAL',
    nights: 'EVERY THIRD FRIDAY',
    bio: 'Heavy architecture in sound. Eclipse dismantles genre, rebuilds it live in front of your eyes.',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80&auto=format&fit=crop',
    color: '#EC4899',
  },
  {
    name: 'DJ PRISM',
    genre: 'HOUSE · PRIDE · POP',
    nights: 'SPECIAL EVENTS',
    bio: 'Bangkok\'s most beloved Pride DJ. Prism turns every floor into a rainbow. Pure euphoria.',
    img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80&auto=format&fit=crop',
    color: '#F59E0B',
  },
];

export default function DJLineup() {
  return (
    <section className="py-20 border-t border-[rgba(245,245,245,0.06)]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="mono text-[#3B82F6] text-xs tracking-[0.35em] mb-3">THE ARCHITECTS OF SOUND</p>
          <h2 className="font-tight font-black text-section text-[#F5F5F5] leading-[0.92]">RESIDENT<br/>DJs</h2>
        </motion.div>

        {/* DJ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {djs.map((dj, i) => (
            <motion.div
              key={dj.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex gap-5 border border-[rgba(245,245,245,0.07)] p-5 hover:border-[rgba(59,130,246,0.2)] transition-all duration-300"
            >
              {/* Photo */}
              <div className="gallery-item shrink-0 w-20 h-20 md:w-24 md:h-24 overflow-hidden">
                <img src={dj.img} alt={dj.name} className="w-full h-full object-cover" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-tight font-black text-lg text-[#F5F5F5] tracking-tight leading-none">{dj.name}</h3>
                  <div
                    className="shrink-0 w-2 h-2 rounded-full mt-1"
                    style={{ background: dj.color, boxShadow: `0 0 8px ${dj.color}` }}
                  />
                </div>
                <p className="mono text-[10px] tracking-widest mb-2" style={{ color: dj.color }}>{dj.genre}</p>
                <p className="text-[#888888] text-xs leading-relaxed font-light mb-3">{dj.bio}</p>
                <span className="mono text-[9px] text-[#555] tracking-widest border border-[rgba(245,245,245,0.06)] px-2 py-0.5">
                  {dj.nights}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}