import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles, Globe, Calendar } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToEvents = () => {
    const el = document.getElementById('events');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-between overflow-hidden bg-[#030712]"
    >
      {/* Cosmic background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep starry space radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_15%,#0f224a_0%,#050d21_45%,#030712_90%)] opacity-85" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 cosmic-grid opacity-30" />

        {/* Distant moon/celestial sphere */}
        <div className="absolute top-24 right-6 sm:right-16 lg:right-28 w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-slate-600/40 via-slate-800/80 to-[#030712] border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.08)] pointer-events-none opacity-80" />

        {/* Glowing Planet Horizon Curved Arc at the bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160vw] max-w-[2200px] h-[450px] sm:h-[550px] pointer-events-none">
          <div className="absolute inset-0 rounded-[100%] bg-gradient-to-t from-sky-950/80 via-indigo-950/40 to-transparent blur-xl" />
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[130%] h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-80 shadow-[0_0_35px_#38bdf8]" />
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[90%] h-[12px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent blur-[4px]" />
          <div className="absolute inset-0 rounded-[100%] border-t border-cyan-300/40" />
        </div>

        {/* Ambient starfield dots */}
        <div className="absolute top-1/4 left-10 w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#38bdf8] animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 rounded-full bg-amber-300 shadow-[0_0_6px_#fbbf24] animate-ping opacity-60" style={{ animationDuration: '4s' }} />
        <div className="absolute top-20 left-1/3 w-1 h-1 rounded-full bg-white opacity-80" />
        <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 rounded-full bg-sky-200 opacity-70" />
        <div className="absolute top-1/2 right-12 w-1 h-1 rounded-full bg-amber-100 opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        {/* Top Header Eyebrow Row */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pt-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-1 text-left"
          >
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-slate-300 uppercase">
              CHRIST (DEEMED TO BE UNIVERSITY)
            </p>
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-slate-400 uppercase">
              ONLINE DEGREE PROGRAMMES
            </p>
            <div className="flex items-center gap-2 pt-0.5">
              <span className="h-px w-6 bg-amber-400/80" />
              <p className="text-[9px] sm:text-[10px] font-bold tracking-[0.3em] text-amber-400 uppercase">
                PRESENTS
              </p>
            </div>
          </motion.div>

          {/* Top Right Editorial Accent */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-left sm:text-right hidden sm:block"
          >
            <div className="text-[10px] tracking-[0.28em] text-slate-400 uppercase leading-relaxed font-mono">
              IDEAS <br />
              PEOPLE <br />
              PERSPECTIVES <br />
              BEYOND <br />
              BOUNDARIES
            </div>
            <div className="h-0.5 w-12 bg-amber-400/80 ml-auto mt-2" />
          </motion.div>
        </div>

        {/* Centerpiece: Huge Cinematic Typography */}
        <div className="my-auto py-12 sm:py-16 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Ambient Title Glow */}
            <div className="absolute -inset-x-20 top-1/2 -translate-y-1/2 h-36 bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent blur-3xl pointer-events-none" />

            <h1
              id="hero-title"
              className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.14em] sm:tracking-[0.18em] text-white leading-none uppercase select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
            >
              ASCENDIA
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-4 mt-2 sm:mt-3">
              <span className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-amber-400 tracking-wider text-glow-gold drop-shadow-lg">
                2026
              </span>
            </div>

            <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base font-semibold tracking-[0.38em] sm:tracking-[0.45em] text-cyan-200/90 uppercase font-tech">
              WHERE PIXEL MEETS PASSION
            </p>
          </motion.div>
        </div>

        {/* Bottom Section: Callout Card, CTA, and Editorial Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4">
          {/* Left: Event Callout Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="border-l-2 border-amber-400 pl-4 sm:pl-5 py-1 text-left bg-black/30 backdrop-blur-md rounded-r-xl pr-6 border-y border-r border-white/5 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-bold tracking-[0.18em] text-white uppercase font-display">
                  16 – 17 OCTOBER 2026
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-400/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  ONLINE
                </span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-md">
                A two-day celebration of ideas, creativity, intellect and expression. Six arenas. One stage.
              </p>
            </div>

            {/* Primary Action Button (Strictly Explore Events, NOT Register) */}
            <div className="mt-6">
              <button
                id="hero-explore-events-btn"
                onClick={scrollToEvents}
                type="button"
                className="group relative inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-full border border-amber-400/80 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-transparent hover:from-amber-400/30 hover:to-amber-500/20 text-white hover:text-amber-200 font-display text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(245,158,11,0.2)] hover:shadow-[0_0_35px_rgba(245,158,11,0.4)]"
              >
                <span>EXPLORE EVENTS</span>
                <ArrowDown className="w-4 h-4 text-amber-400 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Right: Editorial Horizon Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="lg:col-span-6 flex flex-col items-start lg:items-end justify-end text-left lg:text-right"
          >
            <div className="space-y-1">
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-slate-400 uppercase font-mono">
                SAME CURIOSITY.
              </p>
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-amber-300/90 uppercase font-mono">
                A BRIGHTER TOMORROW.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
