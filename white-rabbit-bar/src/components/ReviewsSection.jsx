import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';


const reviews = {
  en: [
    {
      name: 'Dani Peng',
      handle: 'Google Review · 1 year ago',
      rating: 5,
      text: 'Fun and friendly atmosphere, beautifully decorated and very modern. Great music across many styles. On Monday the singers had amazing unique voices and were so approachable. Drinks have many options at different price points — you won\'t be disappointed. Highly recommend! 👍👍👍👍👍',
      tag: 'Food 5/5 · Service 5/5',
    },
    {
      name: 'Jirathan Chaipanya',
      handle: 'Google Review · 11 months ago',
      rating: 5,
      text: 'The singers are lovely, friendly, and have incredible voices. So happy I came to this place — happiest I\'ve been in a while! Will definitely come back every holiday.',
      tag: 'Food 5/5 · Service 5/5',
    },
    {
      name: 'Natthapassorn Jiravittayaporn',
      handle: 'Google Review · 11 months ago',
      rating: 5,
      text: 'This was my first visit even though I live nearby — the service is absolutely amazing, the staff are incredibly kind. Had the best time!',
      tag: 'Service 5/5 · Atmosphere 5/5',
    },
    {
      name: 'Rapeepat Imamura',
      handle: 'Google Review · 5 months ago',
      rating: 5,
      text: 'Relaxed, friendly vibe. Chilled out listening to great singers. On Wednesday Mon performed right at the edge of the stage — such a fun and lively set. Everyone was enjoying themselves 😊 The staff were also very attentive. Very impressed.',
      tag: 'Atmosphere 4/5',
    },
  ],
  zh: [
    {
      name: 'Dani Peng',
      handle: 'Google 评价 · 1年前',
      rating: 5,
      text: '氛围轻松有趣，装饰精美时尚。音乐风格多样，非常好听。周一去的时候，歌手声音极具特色，非常亲切自然。饮品种类丰富，价格各异，绝对不会让你失望。强烈推荐！👍👍👍👍👍',
      tag: '餐食 5/5 · 服务 5/5',
    },
    {
      name: 'Jirathan Chaipanya',
      handle: 'Google 评价 · 11个月前',
      rating: 5,
      text: '歌手可爱、亲切，歌声非常美妙。很高兴来到这家店，心情超级好！以后每个假期都会再来。',
      tag: '餐食 5/5 · 服务 5/5',
    },
    {
      name: 'Natthapassorn Jiravittayaporn',
      handle: 'Google 评价 · 11个月前',
      rating: 5,
      text: '这是我第一次来，虽然就住在附近。服务真的太好了，员工超级热情周到，玩得非常开心！',
      tag: '服务 5/5 · 氛围 5/5',
    },
    {
      name: 'Rapeepat Imamura',
      handle: 'Google 评价 · 5个月前',
      rating: 5,
      text: '氛围舒适，轻松惬意，坐着听优质歌手现场演唱真的很享受。周三遇到了 Mon 在舞台边缘近距离演唱，非常精彩，全场都嗨翻了 😊 服务人员也非常用心。印象深刻！',
      tag: '氛围 4/5',
    },
  ],
};

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-[#3B82F6] text-[#3B82F6]" />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const { t, lang } = useLang();
  const reviewList = reviews[lang === 'zh' ? 'zh' : 'en'];
  return (
    <section className="py-20 border-t border-[rgba(245,245,245,0.06)] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="mono text-[#3B82F6] text-xs tracking-[0.35em] mb-3">{t('reviews_eyebrow')}</p>
            <h2 className="font-tight font-black text-section text-[#F5F5F5] leading-[0.92]">{t('reviews_title').split('\n').map((l,i)=><span key={i}>{l}{i===0&&<br/>}</span>)}</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col items-center justify-center border border-[rgba(59,130,246,0.3)] px-5 py-3">
              <span className="font-tight font-black text-3xl text-[#F5F5F5]">4.8</span>
              <Stars count={5} />
              <span className="mono text-[#888888] text-[9px] mt-1 tracking-widest">868 REVIEWS</span>
            </div>
            <a
              href="https://g.page/r/CWhiteRabbitBangkok/review"
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-[10px] tracking-widest px-4 py-3 border border-[rgba(59,130,246,0.4)] text-[#3B82F6] bg-[rgba(59,130,246,0.06)] hover:bg-[rgba(59,130,246,0.15)] hover:scale-[1.04] transition-all duration-200 whitespace-nowrap"
            >
              ★ LEAVE A REVIEW
            </a>
          </div>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviewList.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group border border-[rgba(245,245,245,0.07)] p-6 hover:border-[rgba(59,130,246,0.25)] transition-colors duration-300 relative"
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-5 font-tight font-black text-5xl text-[#3B82F6] opacity-10 leading-none select-none">"</span>

              <Stars count={r.rating} />
              <p className="text-[#C0C0C0] text-sm leading-relaxed mt-4 mb-5 font-light">{r.text}</p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="mono text-[#F5F5F5] text-xs tracking-wide">{r.name}</p>
                  <p className="mono text-[#555] text-[10px] mt-0.5">{r.handle}</p>
                </div>
                <span className="mono text-[10px] text-[#3B82F6] border border-[#3B82F6]/20 px-2 py-1 tracking-wider">
                  {r.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}