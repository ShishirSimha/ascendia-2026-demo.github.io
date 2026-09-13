import React from 'react';
import { Mail, Linkedin, Instagram, Youtube, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#02040a] border-t border-white/10 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start justify-between">
          {/* Left: Brand & Motto */}
          <div className="md:col-span-4 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-display font-black text-xl tracking-[0.2em] text-white">
                ASCENDIA
              </span>
              <span className="font-display font-bold text-xs text-amber-400 tracking-wider">
                2026
              </span>
            </div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400 font-tech">
              Where Pixel Meets Passion
            </p>
          </div>

          {/* Center-Left: Institution */}
          <div className="md:col-span-4 space-y-1 border-l-0 md:border-l border-white/10 md:pl-8">
            <p className="text-xs font-semibold text-white uppercase tracking-wider font-display">
              CHRIST (Deemed to be University)
            </p>
            <p className="text-xs text-slate-400 font-tech">
              Online Degree Programmes
            </p>
            <p className="text-[11px] text-slate-500 font-mono pt-1">
              Bengaluru, Karnataka, India
            </p>
          </div>

          {/* Right: Official Email & Social Handles */}
          <div className="md:col-span-4 space-y-3 md:text-right">
            <div>
              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500 block mb-1">
                Official Correspondence
              </span>
              <a
                id="footer-contact-email"
                href="mailto:ascendia@online.christuniversity.in"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-amber-400 hover:text-amber-300 font-mono tracking-wide transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span>ascendia@online.christuniversity.in</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 md:justify-end pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <button
                onClick={scrollToTop}
                type="button"
                className="w-8 h-8 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 hover:text-amber-200 transition-colors ml-2"
                aria-label="Back to Top"
                title="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Creed */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <p>© 2026 CHRIST (Deemed to be University). All rights reserved.</p>
          <p className="tracking-[0.2em] text-slate-400 uppercase">
            Dream. Create. Compete. Belong.
          </p>
        </div>
      </div>
    </footer>
  );
};
