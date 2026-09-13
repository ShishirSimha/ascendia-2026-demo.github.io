import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';

export const PrizeSection: React.FC = () => {
  const prizes = [
    {
      place: 'FIRST PRIZE',
      amount: '₹2,000',
      tag: 'WINNER',
      highlight: 'text-amber-400 border-amber-400/40',
      badge: 'bg-amber-500/10 text-amber-300',
    },
    {
      place: 'SECOND PRIZE',
      amount: '₹1,000',
      tag: 'RUNNER-UP',
      highlight: 'text-slate-200 border-white/20',
      badge: 'bg-white/10 text-slate-200',
    },
    {
      place: 'THIRD PRIZE',
      amount: '₹500',
      tag: 'SECOND RUNNER-UP',
      highlight: 'text-amber-200 border-amber-700/40',
      badge: 'bg-amber-900/20 text-amber-300',
    },
  ];

  return (
    <section
      id="stakes"
      className="relative py-24 sm:py-32 bg-[#020612] border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 pb-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.3em] text-amber-400 uppercase font-semibold">
              THE STAKES
            </span>
            <h2 className="mt-1 font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-[0.08em] text-white uppercase">
              IDEAS DESERVE <span className="text-amber-400 text-glow-gold">RECOGNITION.</span>
            </h2>
          </div>

          <div className="text-left sm:text-right">
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] text-slate-400 uppercase bg-white/5 px-2.5 py-1 rounded border border-white/10">
              PRIZES ARE PER EVENT
            </span>
          </div>
        </div>

        {/* Stakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {prizes.map((prize, idx) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className={`relative p-8 rounded-2xl bg-[#070e1f]/60 backdrop-blur-md border ${prize.highlight} flex flex-col items-center text-center shadow-xl group hover:-translate-y-1 transition-transform duration-300`}
            >
              <span className={`text-[10px] font-mono tracking-[0.2em] px-2.5 py-0.5 rounded-full mb-4 ${prize.badge}`}>
                {prize.tag}
              </span>

              <span className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
                {prize.amount}
              </span>

              <span className="mt-3 font-display font-bold text-xs sm:text-sm tracking-[0.22em] text-slate-300 uppercase">
                {prize.place}
              </span>

              <div className="mt-6 pt-4 border-t border-white/10 w-full flex items-center justify-center gap-2 text-xs text-slate-400 font-tech">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Certificate of Commendation</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote note */}
        <p className="mt-10 text-center text-xs text-slate-500 font-mono tracking-wide max-w-2xl mx-auto">
          * Award allocations are accompanied by official institutional certificates issued by CHRIST (Deemed to be University). Final rules and delivery methods are detailed on each event page.
        </p>
      </div>
    </section>
  );
};
