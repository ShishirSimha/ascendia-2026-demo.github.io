import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Users, Award, Landmark } from 'lucide-react';

export const CampusMeetSection: React.FC = () => {
  return (
    <section
      id="campus"
      className="relative py-24 sm:py-32 bg-[#02050f] border-t border-white/5 overflow-hidden"
    >
      {/* Background warm architectural glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-amber-400 uppercase font-semibold">
              THE PHYSICAL CULMINATION
            </span>
            <h2 className="mt-1 font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-[0.08em] text-white uppercase">
              AND THEN, <span className="text-amber-400 text-glow-gold">WE MEET.</span>
            </h2>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-[10px] sm:text-xs font-mono tracking-[0.24em] text-slate-400 uppercase">
              SAME COMMUNITY.
            </p>
            <p className="text-[10px] sm:text-xs font-mono tracking-[0.24em] text-amber-400 uppercase">
              A STRONGER TOMORROW.
            </p>
          </div>
        </div>

        {/* Featured Campus Visual Card */}
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#081226]/90 to-[#040814]/90 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Content Area */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-mono tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>31 OCTOBER 2026 · SATURDAY</span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide uppercase leading-tight">
                  Valedictory Ceremony <br />
                  <span className="text-slate-300 font-light">& Campus Meet</span>
                </h3>

                <div className="flex items-start gap-2.5 text-slate-300 text-sm sm:text-base pt-2">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-display tracking-wider">
                      CHRIST (Deemed to be University)
                    </strong>
                    <span className="text-slate-400 text-xs sm:text-sm font-tech">
                      Central Campus · Hosur Road, Bengaluru, Karnataka 560029
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light pt-2">
                  The finale of Ascendia transitions from virtual screens to the serene pathways of CHRIST Central Campus. Connect face-to-face with peers, mentors, coordinators, and distinguished faculty. Celebrate victor laurels at the grand auditorium valedictory ceremony.
                </p>
              </div>

              {/* Quick Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-amber-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase font-display">Trophy Honors</p>
                    <p className="text-[10px] text-slate-400">In-person felicitations</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase font-display">Campus Meet</p>
                    <p className="text-[10px] text-slate-400">Community assembly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Architectural Ambiance Visual */}
            <div className="lg:col-span-6 relative min-h-[340px] sm:min-h-[420px] bg-[#060e20] flex items-center justify-center overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
              {/* Stylized Architectural Night Campus Illustration */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#02050f] via-transparent to-transparent z-10" />
              
              {/* Atmospheric Campus Night Facade Visual with warm lights */}
              <div className="relative w-full h-full flex flex-col justify-end p-8 z-20">
                <div className="absolute inset-0 opacity-80 mix-blend-screen pointer-events-none">
                  {/* Neoclassical building silhouette with glowing amber windows */}
                  <svg
                    viewBox="0 0 600 450"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full object-cover"
                  >
                    <defs>
                      <linearGradient id="facadeGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.4" />
                        <stop offset="60%" stopColor="#d97706" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#030712" stopOpacity="0.9" />
                      </linearGradient>
                      <linearGradient id="warmLight" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5" />
                      </linearGradient>
                    </defs>

                    {/* Deep sky with stars */}
                    <rect width="600" height="450" fill="url(#facadeGlow)" />
                    <circle cx="120" cy="80" r="1.5" fill="#ffffff" opacity="0.8" />
                    <circle cx="280" cy="50" r="1.5" fill="#fef08a" opacity="0.9" />
                    <circle cx="490" cy="110" r="1" fill="#38bdf8" opacity="0.8" />
                    <circle cx="410" cy="70" r="2" fill="#ffffff" opacity="0.7" />

                    {/* Spire with Cross atop central tower */}
                    <path d="M298 70 L302 70 L302 95 L298 95 Z" fill="#fef08a" />
                    <path d="M292 78 L308 78 L308 82 L292 82 Z" fill="#fef08a" />
                    <polygon points="300,95 285,150 315,150" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
                    
                    {/* Main Building Facade Structure */}
                    <rect x="180" y="150" width="240" height="180" fill="#0f172a" stroke="#334155" />
                    <rect x="70" y="190" width="110" height="140" fill="#0b1120" stroke="#1e293b" />
                    <rect x="420" y="190" width="110" height="140" fill="#0b1120" stroke="#1e293b" />

                    {/* Illuminated Arched Colonnades & Windows */}
                    {[100, 140, 210, 250, 290, 330, 370, 440, 480].map((x, i) => (
                      <g key={i}>
                        <rect x={x} y="220" width="22" height="36" rx="10" fill="url(#warmLight)" filter="drop-shadow(0 0 8px rgba(245,158,11,0.6))" />
                        <rect x={x + 2} y="270" width="18" height="30" rx="3" fill="url(#warmLight)" opacity="0.7" />
                      </g>
                    ))}

                    {/* Pediment / Portico */}
                    <polygon points="300,150 200,190 400,190" fill="#1e293b" stroke="#64748b" />

                    {/* Trees & Lush Garden foreground */}
                    <ellipse cx="60" cy="350" rx="70" ry="60" fill="#022c22" opacity="0.9" />
                    <ellipse cx="140" cy="360" rx="60" ry="50" fill="#064e3b" opacity="0.8" />
                    <ellipse cx="540" cy="350" rx="80" ry="65" fill="#022c22" opacity="0.9" />
                    <ellipse cx="460" cy="360" rx="60" ry="55" fill="#064e3b" opacity="0.8" />

                    {/* Warm garden path lamps */}
                    <circle cx="170" cy="340" r="4" fill="#fef08a" filter="drop-shadow(0 0 12px #fbbf24)" />
                    <circle cx="430" cy="340" r="4" fill="#fef08a" filter="drop-shadow(0 0 12px #fbbf24)" />
                  </svg>
                </div>

                <div className="relative z-30 bg-black/60 backdrop-blur-md p-5 rounded-2xl border border-white/10 max-w-sm">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-display tracking-widest uppercase mb-1">
                    <Landmark className="w-4 h-4" />
                    <span>Central Campus Bengaluru</span>
                  </div>
                  <p className="text-xs text-slate-300 font-light">
                    An iconic sanctuary of academic excellence, green canopies, and historic stone porticos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
