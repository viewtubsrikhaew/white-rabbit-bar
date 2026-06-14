import { Facebook, Instagram, Share2 } from 'lucide-react';

export default function PageShareBar() {
  const pageUrl = encodeURIComponent(window.location.href);
  const text = encodeURIComponent('White Rabbit Bar — Bangkok\'s most vibrant LGBTQ+ space on Silom Road 🐇');

  return (
    <div className="border-t hairline py-8 mt-8">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Share2 className="w-3.5 h-3.5 text-[#3B82F6]" />
          <span className="mono text-xs text-[#888888] tracking-[0.3em]">SHARE THIS PAGE</span>
        </div>
        <div className="flex gap-3">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mono text-xs px-5 py-2.5 border transition-all duration-300 hover:scale-[1.03]"
            style={{ borderColor: '#1877F240', color: '#1877F2', background: 'rgba(24,119,242,0.06)' }}
          >
            <Facebook className="w-3.5 h-3.5" />
            FACEBOOK
          </a>
          <a
            href="https://www.instagram.com/whiterabbitbar.bkk?igsh=OTZnd290OTNpZTFl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mono text-xs px-5 py-2.5 border transition-all duration-300 hover:scale-[1.03]"
            style={{ borderColor: '#E1306C40', color: '#E1306C', background: 'rgba(225,48,108,0.06)' }}
          >
            <Instagram className="w-3.5 h-3.5" />
            INSTAGRAM
          </a>
        </div>
      </div>
    </div>
  );
}