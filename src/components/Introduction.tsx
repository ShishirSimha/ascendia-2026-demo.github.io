import React from 'react';
import { motion } from 'motion/react';

export const Introduction: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#030712] border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Huge typographic statement */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-[0.08em] text-white leading-tight uppercase">
              SOMETHING IS <br />
              <span className="text-amber-400 text-glow-gold">ASCENDING.</span>
            </h2>
            <div className="mt-4 h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
          </motion.div>

          {/* Right Column: Editorial rationale */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-6 space-y-4"
          >
            <h3 className="font-display text-lg sm:text-xl font-bold tracking-wider text-slate-100 uppercase">
              Six arenas. Two days. One stage.
            </h3>
            
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              <strong className="text-white font-medium">Ascendia 2026</strong> brings together students from across disciplines to compete, create, think, perform and build — all in an online celebration presented by CHRIST (Deemed to be University), Online Degree Programmes.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
              From intense 24-hour algorithmic engineering and sharp visual design, to cognitive quizzing, spoken word poetry, high-stress corporate leadership and rapid elocution — Ascendia is an intellectual confluence engineered for creators, thinkers, and changemakers.
            </p>

            <div className="pt-4 flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Inter-University Participation
              </span>
              <span className="text-slate-600">/</span>
              <span className="flex items-center gap-1.5 text-amber-300">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Cash Stakes & Laurels
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
