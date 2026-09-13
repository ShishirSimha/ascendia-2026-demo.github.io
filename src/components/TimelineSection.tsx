import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Laptop, Building2, Sparkles } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const steps = [
    {
      date: '16 OCT 2026',
      badge: 'DAY ONE',
      mode: 'ONLINE',
      title: 'The Digital Opening & Sprints',
      description: 'Inaugural address, hackathon code kickoff, visual arts release, preliminary quizzing and management heats.',
      icon: Laptop,
      color: 'border-cyan-400/50 bg-cyan-500/10 text-cyan-300',
    },
    {
      date: '17 OCT 2026',
      badge: 'DAY TWO',
      mode: 'ONLINE',
      title: 'The Finals & Live Mainstages',
      description: 'Jury project pitches, Mastermind buzzer championship, JAM stage, Best Manager stress boardroom, and spoken word showcases.',
      icon: Sparkles,
      color: 'border-amber-400/50 bg-amber-500/10 text-amber-300',
    },
    {
      date: '31 OCT 2026',
      badge: 'FINALE',
      mode: 'BENGALURU',
      title: 'Campus Meet & Valedictory',
      description: 'In-person congregation at CHRIST Central Campus Bengaluru. Felicitation ceremony, networking, and cultural celebration.',
      icon: Building2,
      color: 'border-amber-400 bg-amber-400 text-black font-bold',
      highlight: true,
    },
  ];

  return (
    <section
      id="timeline"
      className="relative py-24 sm:py-32 bg-[#030712] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-400 uppercase font-semibold">
              THE ASCENT
            </span>
            <h2 className="mt-1 font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-[0.08em] text-white uppercase">
              A JOURNEY <span className="text-amber-400 text-glow-gold">WORTH TAKING.</span>
            </h2>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-[10px] sm:text-xs font-mono tracking-[0.24em] text-slate-400 uppercase">
              DIFFERENT DESTINATIONS.
            </p>
            <p className="text-[10px] sm:text-xs font-mono tracking-[0.24em] text-amber-400 uppercase">
              A BRIGHTER YOU.
            </p>
          </div>
        </div>

        {/* Trajectory Timeline Display */}
        <div className="relative mt-12">
          {/* Connecting Trajectory / Orbit Line on desktop */}
          <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-cyan-500/30 via-amber-500/50 to-amber-400" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.date}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative flex flex-col items-start md:items-center text-left md:text-center group"
                >
                  {/* Trajectory Node Dot */}
                  <div className="relative z-10 mb-6 flex items-center justify-center">
                    <div
                      className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 ${step.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Date & Mode Pills */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-display font-black text-lg sm:text-xl text-white tracking-wider">
                      {step.date}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest uppercase bg-white/10 px-2 py-0.5 rounded text-slate-300">
                      {step.mode}
                    </span>
                  </div>

                  <span className="text-xs font-display font-semibold text-amber-400 tracking-[0.2em] uppercase mb-2">
                    {step.badge}
                  </span>

                  <h3 className="font-display font-bold text-base text-slate-100 tracking-wide mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 font-light leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
