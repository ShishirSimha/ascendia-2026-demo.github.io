import React from 'react';
import { motion } from 'motion/react';

export const NumbersSection: React.FC = () => {
  const stats = [
    {
      number: '02',
      title: 'DAYS',
      subtitle: 'ONLINE',
      detail: '16–17 October 2026',
    },
    {
      number: '06',
      title: 'EVENTS',
      subtitle: 'TO COMPETE',
      detail: 'Tech, Design, Quiz, Lit & Biz',
    },
    {
      number: '31',
      title: 'OCTOBER',
      subtitle: 'CAMPUS MEET',
      detail: 'Central Campus · Bengaluru',
    },
  ];

  return (
    <section
      id="numbers"
      className="relative py-24 sm:py-32 bg-[#030712] border-t border-white/5 overflow-hidden"
    >
      {/* Planetary limb glow background */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[140vw] h-[300px] rounded-[100%] bg-gradient-to-t from-sky-900/30 via-indigo-950/20 to-transparent blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent shadow-[0_0_20px_#38bdf8]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-400 uppercase font-semibold">
              THE NUMBERS
            </span>
            <h2 className="mt-1 font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-[0.08em] text-white uppercase">
              TWO DAYS. SIX EVENTS. <span className="text-amber-400 text-glow-gold">ONE ASCENT.</span>
            </h2>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-[10px] sm:text-xs font-mono tracking-[0.24em] text-slate-400 uppercase">
              SAME IDEAS.
            </p>
            <p className="text-[10px] sm:text-xs font-mono tracking-[0.24em] text-amber-400 uppercase">
              A BIGGER TOMORROW.
            </p>
          </div>
        </div>

        {/* Editorial Numbers Display with Clean Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 py-6 border-y border-white/10 bg-[#050b18]/50 backdrop-blur-sm rounded-2xl">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col items-center md:items-start text-center md:text-left px-6 lg:px-12 py-6 first:pt-4 last:pb-4 md:py-8"
            >
              <span className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-none text-glow-cyan">
                {stat.number}
              </span>

              <div className="mt-4 flex flex-col">
                <span className="font-display font-bold text-base sm:text-lg text-amber-300 tracking-[0.16em] uppercase">
                  {stat.title}
                </span>
                <span className="text-xs sm:text-sm font-tech tracking-[0.2em] text-slate-300 uppercase mt-0.5">
                  {stat.subtitle}
                </span>
                <span className="text-[11px] text-slate-500 font-mono mt-2">
                  {stat.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
