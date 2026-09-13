import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Palette, 
  BrainCircuit, 
  PenTool, 
  BriefcaseBusiness, 
  Mic2,
  ArrowLeft,
  Calendar,
  Clock,
  Award,
  Users,
  CheckCircle2,
  ExternalLink,
  Share2,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  AlertCircle
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

export const EventPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Find event or default to first
  const currentEvent: AscendiaEvent = 
    EVENTS_DATA.find((e) => e.id === eventId) || EVENTS_DATA[0];

  const Icon = iconMap[currentEvent.iconName];

  // Scroll to top on event change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [eventId]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const otherEvents = EVENTS_DATA.filter((e) => e.id !== currentEvent.id);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 pt-24 pb-20">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-900/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation Breadcrumb / Back Button */}
        <div className="flex items-center justify-between py-4 border-b border-white/10 mb-8">
          <Link
            to="/#events"
            id="back-to-events-link"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 hover:text-amber-300 font-mono transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Arenas</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-400/30">
              ARENA {currentEvent.number} / 06
            </span>
          </div>
        </div>

        {/* Hero Section of the Reusable Event Template */}
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-[#071126]/90 via-[#050b18]/90 to-[#02050f]/90 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden mb-12">
          {/* Subtle cosmic grid overlay */}
          <div className="absolute inset-0 cosmic-grid opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-display font-black text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-400/40 tracking-wider">
                ARENA {currentEvent.number}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                {currentEvent.category}
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-400/30">
                16–17 OCT 2026 · ONLINE
              </span>
            </div>

            <div className="flex items-start gap-6 pt-2">
              <div className="hidden sm:flex w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 items-center justify-center text-amber-400 shadow-xl shrink-0">
                <Icon className="w-10 h-10" />
              </div>

              <div>
                <h1
                  id="event-detail-title"
                  className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-none"
                >
                  {currentEvent.title}
                </h1>
                <p className="mt-2 font-tech text-base sm:text-xl text-amber-300/90 tracking-wide font-medium">
                  {currentEvent.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl pt-2">
              {currentEvent.summary}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-white/10 text-xs">
              <div>
                <span className="text-slate-400 block font-mono text-[10px] uppercase">Composition</span>
                <span className="font-bold text-slate-100 font-display">{currentEvent.teamSize}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono text-[10px] uppercase">Mode</span>
                <span className="font-bold text-cyan-300 font-display">100% Online</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono text-[10px] uppercase">First Prize</span>
                <span className="font-bold text-amber-400 font-display">{currentEvent.prizes[0].amount}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-mono text-[10px] uppercase">Finale Felicitation</span>
                <span className="font-bold text-slate-100 font-display">31 Oct (Bengaluru)</span>
              </div>
            </div>

            {/* The Dedicated Contextual Register Action (Strictly here on event page!) */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                id="event-register-now-btn"
                type="button"
                onClick={() => setShowRegisterModal(true)}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-black font-display font-black text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_0_35px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)]"
              >
                <span>REGISTER FOR {currentEvent.title} →</span>
              </button>

              <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                No registration fee · Official institutional recognition
              </span>
            </div>
          </div>
        </div>

        {/* Content Tabs / Structured Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Content Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* 01. About the Event */}
            <section id="event-about" className="p-8 rounded-2xl bg-[#060c1c]/70 border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-amber-400">
                <Sparkles className="w-5 h-5" />
                <h2 className="font-display font-bold text-lg uppercase tracking-wider text-white">
                  About the Arena
                </h2>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                {currentEvent.about}
              </p>
            </section>

            {/* 02. Format & Rounds */}
            <section id="event-format" className="p-8 rounded-2xl bg-[#060c1c]/70 border border-white/10 space-y-6">
              <div className="flex items-center gap-2 text-cyan-400">
                <Clock className="w-5 h-5" />
                <h2 className="font-display font-bold text-lg uppercase tracking-wider text-white">
                  Format & Rounds
                </h2>
              </div>

              <div className="space-y-4">
                {currentEvent.rounds.map((round) => (
                  <div
                    key={round.roundNumber}
                    className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 hover:border-cyan-400/30 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-display font-bold flex items-center justify-center border border-cyan-400/30">
                          {round.roundNumber}
                        </span>
                        <h3 className="font-display font-bold text-sm text-white uppercase tracking-wide">
                          {round.title}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/20">
                        {round.mode}
                      </span>
                    </div>

                    <p className="text-xs text-slate-400 font-mono">
                      {round.duration}
                    </p>

                    <p className="text-xs text-slate-300 font-light leading-relaxed pt-1">
                      {round.description}
                    </p>

                    {round.deliverables && (
                      <div className="pt-2 flex flex-wrap gap-2">
                        {round.deliverables.map((item, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[10px] text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/5 font-mono"
                          >
                            <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* 03. Eligibility & Rules */}
            <section id="event-rules" className="p-8 rounded-2xl bg-[#060c1c]/70 border border-white/10 space-y-6">
              <div className="flex items-center gap-2 text-amber-400">
                <ShieldCheck className="w-5 h-5" />
                <h2 className="font-display font-bold text-lg uppercase tracking-wider text-white">
                  Eligibility & Regulations
                </h2>
              </div>

              <div>
                <h3 className="text-xs font-display font-bold tracking-widest text-slate-400 uppercase mb-3">
                  Eligibility Criteria
                </h3>
                <ul className="space-y-2">
                  {currentEvent.eligibility.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10">
                <h3 className="text-xs font-display font-bold tracking-widest text-slate-400 uppercase mb-3">
                  General Arena Rules
                </h3>
                <ul className="space-y-2">
                  {currentEvent.rules.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 04. Judging Criteria */}
            <section id="event-judging" className="p-8 rounded-2xl bg-[#060c1c]/70 border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400">
                <Award className="w-5 h-5" />
                <h2 className="font-display font-bold text-lg uppercase tracking-wider text-white">
                  Evaluation & Judging Criteria
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {currentEvent.judgingCriteria.map((criterion, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-display font-bold text-white uppercase tracking-wider">
                        {criterion.criterion}
                      </span>
                      <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/20">
                        {criterion.weight}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                      {criterion.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">
            {/* Prizes Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#091530] to-[#040915] border border-amber-400/30 space-y-4 shadow-xl">
              <span className="text-[10px] font-mono tracking-[0.24em] text-amber-400 uppercase font-semibold block">
                ARENA STAKES
              </span>
              <h3 className="font-display font-black text-xl text-white uppercase tracking-wider">
                Prizes & Accolades
              </h3>

              <div className="space-y-3 pt-2">
                {currentEvent.prizes.map((p) => (
                  <div
                    key={p.position}
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
                  >
                    <div>
                      <p className="text-xs font-display font-bold text-slate-200 uppercase tracking-wider">
                        {p.position}
                      </p>
                      <p className="text-[10px] text-slate-400 font-mono">
                        {p.description}
                      </p>
                    </div>
                    <span className="font-display font-black text-lg text-amber-400 text-glow-gold">
                      {p.amount}
                    </span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setShowRegisterModal(true)}
                className="w-full py-3 mt-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-display font-black text-xs uppercase tracking-widest transition-colors shadow-lg"
              >
                REGISTER FOR THIS ARENA →
              </button>
            </div>

            {/* Event Key Schedule */}
            <div className="p-6 rounded-2xl bg-[#060c1c]/70 border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400">
                <Calendar className="w-4 h-4" />
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white">
                  Arena Schedule
                </h3>
              </div>

              <div className="relative border-l border-white/10 ml-2 space-y-4 pl-4 pt-1">
                {currentEvent.timeline.map((item, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-[#030712]" />
                    <div className="text-[10px] font-mono text-cyan-300 flex items-center gap-1.5">
                      <span>{item.date}</span>
                      <span className="text-slate-600">·</span>
                      <span className="text-slate-400">{item.time}</span>
                    </div>
                    <p className="text-xs text-slate-200 font-medium mt-0.5">
                      {item.event}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Coordinator & Secretariat Support */}
            <div className="p-6 rounded-2xl bg-[#060c1c]/70 border border-white/10 space-y-3">
              <h3 className="font-display font-bold text-xs uppercase tracking-wider text-slate-300">
                Queries & Secretariat
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                For queries regarding guidelines, team formation, or technical verification:
              </p>
              <a
                href={`mailto:${currentEvent.coordinatorEmail}?subject=Ascendia 2026 - Query regarding ${currentEvent.title}`}
                className="inline-flex items-center gap-2 text-xs text-amber-400 hover:underline font-mono"
              >
                <span>{currentEvent.coordinatorEmail}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Arena Switcher: Seamlessly jump to any of the other 5 events */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-amber-400 uppercase">
                EXPLORE COMPANION ARENAS
              </span>
              <h3 className="font-display font-black text-xl text-white uppercase tracking-wider">
                Discover The Other 5 Competitions
              </h3>
            </div>
            <Link
              to="/#events"
              className="text-xs font-mono uppercase tracking-wider text-cyan-300 hover:underline hidden sm:block"
            >
              View Full Overview →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {otherEvents.map((evt) => {
              const EvtIcon = iconMap[evt.iconName];
              return (
                <Link
                  key={evt.id}
                  to={`/events/${evt.id}`}
                  className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-display font-bold text-amber-400">
                      {evt.number}
                    </span>
                    <EvtIcon className="w-4 h-4 text-slate-400 group-hover:text-amber-300 transition-colors" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs text-white uppercase tracking-wider group-hover:text-amber-300 transition-colors">
                      {evt.title}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate mt-0.5">
                      {evt.tagline}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Registration Modal / Google Form Integration */}
      <AnimatePresence>
        {showRegisterModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-lg rounded-2xl bg-[#071126] border border-amber-400/40 p-6 sm:p-8 shadow-2xl space-y-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono tracking-[0.2em] text-amber-400 uppercase">
                    REGISTRATION PORTAL
                  </span>
                  <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide">
                    {currentEvent.title}
                  </h3>
                </div>
                <button
                  onClick={() => setShowRegisterModal(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                >
                  ✕
                </button>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 text-xs text-amber-200/90 space-y-2">
                <div className="flex items-center gap-2 font-bold font-display uppercase tracking-wider text-amber-300">
                  <AlertCircle className="w-4 h-4" />
                  <span>Participant Checklist</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                  <li>Valid Student ID Card / Institutional Email ID</li>
                  <li>Team composition must align with: <strong>{currentEvent.teamSize}</strong></li>
                  <li>Registrations are processed contextual to this arena</li>
                  <li>No registration fees are charged for Ascendia 2026</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="text-xs text-slate-300 leading-relaxed">
                  Clicking below will open the official Google Form registration sheet for <strong>{currentEvent.title}</strong>. Ensure you are signed in with your active student Google Account.
                </p>

                <a
                  id="external-google-form-btn"
                  href={currentEvent.googleFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setShowRegisterModal(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-black font-display font-black text-xs uppercase tracking-widest shadow-lg transition-all"
                >
                  <span>PROCEED TO GOOGLE FORM REGISTRATION</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setShowRegisterModal(false)}
                  className="w-full py-2.5 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-slate-200 transition-colors"
                >
                  Review Guidelines First
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
