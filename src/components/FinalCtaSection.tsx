import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Compass } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  const scrollToEvents = () => {
    const el = document.getElementById('events');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-28 sm:py-36 bg-[#030712] border-t border-white/5 overflow-hidden">
      {/* Horizon Silhouette & Nebula Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-[#081228]/50 to-[#030712]" />
        
        {/* Mountain Silhouette SVG with Starry Horizon */}
        <div className="absolute bottom-0 inset-x-0 h-48 opacity-60">
          <svg viewBox="0 0 1200 300" fill="none" className="w-full h-full object-cover">
            {/* Distant mountain layer */}
            <path d="M0 300 L0 180 L200 110 L450 190 L700 80 L950 160 L1200 100 L1200 300 Z" fill="#04091a" />
            {/* Foreground mountain ridge with silhouette figure */}
            <path d="M0 300 L0 230 L300 160 L600 240 L850 130 L1000 180 L1200 150 L1200 300 Z" fill="#020409" />
            {/* Lone standing stargazer silhouette on peak */}
            <circle cx="850" cy="116" r="5" fill="#f8fafc" />
            <path d="M848 122 L852 122 L854 136 L846 136 Z" fill="#f8fafc" />
          </svg>
        </div>

        {/* Ambient Warm Golden Horizon Glow */}
        <div className="absolute bottom-16 right-1/4 w-80 h-32 bg-amber-500/20 rounded-full blur-[90px]" />
        <div className="absolute bottom-20 left-1/3 w-96 h-40 bg-sky-500/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-12">
          {/* Main Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-3"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-400 uppercase font-semibold">
              READY TO ASCEND?
            </span>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-[0.08em] text-white uppercase leading-none">
              BE PART OF <br />
              <span className="text-amber-400 text-glow-gold">ASCENDIA 2026</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-tech tracking-[0.15em] uppercase pt-2">
              Explore the events. Find your stage.
            </p>
          </motion.div>

          {/* Right Side Phrase */}
          <div className="text-left sm:text-right">
            <p className="text-[10px] sm:text-xs font-mono tracking-[0.24em] text-slate-400 uppercase">
              SAME PASSION.
            </p>
            <p className="text-[10px] sm:text-xs font-mono tracking-[0.24em] text-amber-400 uppercase">
              HIGHER HORIZONS.
            </p>
          </div>
        </div>

        {/* CTA Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-4"
        >
          <button
            id="final-cta-explore-btn"
            onClick={scrollToEvents}
            type="button"
            className="group inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/20 to-amber-500/10 hover:from-amber-400/30 hover:to-amber-500/30 border border-amber-400 text-white hover:text-amber-200 font-display text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_35px_rgba(245,158,11,0.25)] hover:shadow-[0_0_50px_rgba(245,158,11,0.45)]"
          >
            <span>EXPLORE EVENTS</span>
            <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
