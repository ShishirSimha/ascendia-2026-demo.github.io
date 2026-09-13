import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Code2, 
  Palette, 
  BrainCircuit, 
  PenTool, 
  BriefcaseBusiness, 
  Mic2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { EVENTS_DATA } from '../data/events';
import { AscendiaEvent } from '../types';

const iconMap = {
  Code: Code2,
  Triangle: Palette,
  Brain: BrainCircuit,
  PenTool: PenTool,
  Briefcase: BriefcaseBusiness,
  Mic: Mic2,
};

const colorStyles = {
  cyan: {
    border: 'hover:border-cyan-400/50',
    numberBadge: 'bg-cyan-500/10 text-cyan-300 border-cyan-400/30',
    iconBg: 'from-cyan-950/40 to-blue-950/40 text-cyan-400 border-cyan-400/30',
    glow: 'bg-cyan-500/15',
    tagline: 'text-cyan-200/80',
    hoverGlow: 'group-hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]',
  },
  amber: {
    border: 'hover:border-amber-400/50',
    numberBadge: 'bg-amber-500/10 text-amber-300 border-amber-400/30',
    iconBg: 'from-amber-950/40 to-orange-950/40 text-amber-400 border-amber-400/30',
    glow: 'bg-amber-500/15',
    tagline: 'text-amber-200/80',
    hoverGlow: 'group-hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]',
  },
  emerald: {
    border: 'hover:border-emerald-400/50',
    numberBadge: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/30',
    iconBg: 'from-emerald-950/40 to-teal-950/40 text-emerald-400 border-emerald-400/30',
    glow: 'bg-emerald-500/15',
    tagline: 'text-emerald-200/80',
    hoverGlow: 'group-hover:shadow-[0_0_35px_rgba(16,185,129,0.25)]',
  },
  purple: {
    border: 'hover:border-purple-400/50',
    numberBadge: 'bg-purple-500/10 text-purple-300 border-purple-400/30',
    iconBg: 'from-purple-950/40 to-pink-950/40 text-purple-400 border-purple-400/30',
    glow: 'bg-purple-500/15',
    tagline: 'text-purple-200/80',
    hoverGlow: 'group-hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]',
  },
  gold: {
    border: 'hover:border-yellow-400/50',
    numberBadge: 'bg-yellow-500/10 text-yellow-300 border-yellow-400/30',
    iconBg: 'from-yellow-950/40 to-amber-950/40 text-yellow-400 border-yellow-400/30',
    glow: 'bg-yellow-500/15',
    tagline: 'text-yellow-200/80',
    hoverGlow: 'group-hover:shadow-[0_0_35px_rgba(234,179,8,0.25)]',
  },
  orange: {
    border: 'hover:border-orange-400/50',
    numberBadge: 'bg-orange-500/10 text-orange-300 border-orange-400/30',
    iconBg: 'from-orange-950/40 to-red-950/40 text-orange-400 border-orange-400/30',
    glow: 'bg-orange-500/15',
    tagline: 'text-orange-200/80',
    hoverGlow: 'group-hover:shadow-[0_0_35px_rgba(249,115,22,0.25)]',
  },
};

export const EventsSection: React.FC = () => {
  return (
    <section
      id="events"
      className="relative py-24 sm:py-32 bg-[#02050e] border-t border-white/5 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-6 border-b border-white/10">
          <div>
            <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-[0.1em] text-white uppercase">
              SIX WAYS TO <span className="text-amber-400 text-glow-gold">ASCEND.</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 tracking-wider font-tech uppercase">
              Six arenas of competition · 16–17 October 2026 · Online
            </p>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-[10px] sm:text-xs font-mono tracking-[0.24em] text-slate-400 uppercase">
              DIFFERENT MINDS.
            </p>
            <p className="text-[10px] sm:text-xs font-mono tracking-[0.24em] text-amber-400 uppercase">
              A SHARED SKY.
            </p>
          </div>
        </div>

        {/* Desktop & Tablet: 3 x 2 Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {EVENTS_DATA.map((event, index) => {
            const Icon = iconMap[event.iconName];
            const styling = colorStyles[event.accentColor];

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <Link
                  to={`/events/${event.id}`}
                  id={`event-card-${event.id}`}
                  className={`group relative flex flex-col justify-between h-[380px] p-7 rounded-2xl bg-[#070e1e]/80 hover:bg-[#091329]/90 border border-white/10 ${styling.border} transition-all duration-300 shadow-xl overflow-hidden ${styling.hoverGlow}`}
                >
                  {/* Top Bar inside Card: Number Badge + Category */}
                  <div className="flex items-center justify-between relative z-10">
                    <span
                      className={`inline-flex items-center justify-center text-xs font-display font-black px-2.5 py-1 rounded-md border ${styling.numberBadge} tracking-widest`}
                    >
                      {event.number}
                    </span>
                    <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                      {event.category.split('&')[0]}
                    </span>
                  </div>

                  {/* Center Visual: Icon in Ambient Nebula Glow */}
                  <div className="my-auto flex flex-col items-center justify-center text-center relative z-10">
                    <div className="relative">
                      {/* Ambient colored cosmic cloud */}
                      <div
                        className={`absolute inset-0 rounded-full blur-2xl ${styling.glow} opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500`}
                      />

                      {/* Icon container */}
                      <div
                        className={`relative w-20 h-20 rounded-2xl bg-gradient-to-b ${styling.iconBg} border flex items-center justify-center shadow-lg group-hover:-translate-y-1 transition-transform duration-300`}
                      >
                        <Icon className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                    </div>

                    <h3 className="mt-5 font-display font-black text-xl lg:text-2xl text-white tracking-[0.08em] uppercase group-hover:text-amber-300 transition-colors">
                      {event.title}
                    </h3>
                    <p className={`mt-1.5 text-xs font-tech tracking-wider ${styling.tagline}`}>
                      {event.tagline}
                    </p>
                  </div>

                  {/* Bottom Action: EXPLORE EVENT CTA (No Register button as per instructions) */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
                    <span className="text-[11px] font-display tracking-[0.16em] uppercase text-slate-400 group-hover:text-white transition-colors flex items-center gap-1.5">
                      EXPLORE EVENT
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-amber-400/20 border border-white/10 group-hover:border-amber-400/50 flex items-center justify-center transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-300 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>

                  {/* Subtle corner highlight */}
                  <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-white/5 rounded-full blur-xl pointer-events-none group-hover:bg-amber-400/10 transition-colors" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View: Sleek high-contrast vertical list */}
        <div className="sm:hidden space-y-3">
          {EVENTS_DATA.map((event) => {
            const Icon = iconMap[event.iconName];
            const styling = colorStyles[event.accentColor];

            return (
              <Link
                key={event.id}
                to={`/events/${event.id}`}
                id={`mobile-event-item-${event.id}`}
                className="group block p-4 rounded-xl bg-[#070e1e] border border-white/10 hover:border-amber-400/50 transition-all active:scale-[0.99]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-display font-bold px-2 py-0.5 rounded border ${styling.numberBadge}`}
                    >
                      {event.number}
                    </span>
                    <div>
                      <h3 className="font-display font-black text-base text-white uppercase tracking-wider group-hover:text-amber-300 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-tech">
                        {event.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pl-2">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-amber-400 group-hover:border-amber-400/40 transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
