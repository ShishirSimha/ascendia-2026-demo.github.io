import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isEventPage = location.pathname.startsWith('/events/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/#hero' },
    { label: 'About', href: '/#about' },
    { label: 'Events', href: '/#events' },
    { label: 'Numbers', href: '/#numbers' },
    { label: 'Stakes', href: '/#stakes' },
    { label: 'Timeline', href: '/#timeline' },
    { label: 'Campus Meet', href: '/#campus' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/85 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/80 py-3'
          : 'bg-transparent border-b border-white/5 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <Link
          to="/"
          id="navbar-brand-logo"
          className="group flex items-center gap-3 focus:outline-none"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500/20 via-sky-500/20 to-purple-500/20 border border-white/20 group-hover:border-amber-400/60 transition-colors">
            <span className="font-display font-extrabold text-xs text-amber-400">A</span>
            <div className="absolute inset-0 rounded-lg blur-[6px] bg-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-black tracking-[0.2em] text-sm sm:text-base text-white group-hover:text-amber-300 transition-colors">
                ASCENDIA
              </span>
              <span className="font-display font-semibold text-xs text-amber-400 tracking-wider">
                2026
              </span>
            </div>
            <span className="text-[9px] uppercase tracking-[0.22em] text-slate-400 font-medium -mt-0.5 hidden sm:inline">
              Where Pixel Meets Passion
            </span>
          </div>
        </Link>

        {/* Center/Desktop Navigation (Strictly NO Register button) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {isEventPage ? (
            <Link
              to="/"
              id="nav-back-to-home"
              className="text-xs uppercase tracking-widest px-3 py-2 text-slate-300 hover:text-amber-300 transition-colors font-semibold flex items-center gap-1"
            >
              ← Back to Ascendia Home
            </Link>
          ) : (
            navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[11px] xl:text-xs uppercase tracking-[0.18em] px-2.5 py-1.5 text-slate-300 hover:text-amber-300 transition-colors font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-2.5 right-2.5 h-[1.5px] bg-gradient-to-r from-amber-400 to-amber-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))
          )}
        </nav>

        {/* Right: CHRIST Emblem / Online Degree Programmes */}
        <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-white/10">
          <div className="flex items-center gap-2 text-right">
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold text-slate-200 uppercase tracking-[0.14em] leading-tight">
                CHRIST
              </span>
              <span className="text-[8px] text-slate-400 tracking-[0.1em] uppercase">
                (Deemed to be University)
              </span>
            </div>
            <div className="h-6 w-px bg-white/20" />
            <span className="text-[10px] font-bold text-amber-400 tracking-widest uppercase bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
              ONLINE
            </span>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-nav-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg border border-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#060b19]/95 backdrop-blur-xl border-b border-white/10 px-5 pt-3 pb-6 space-y-2 mt-2 shadow-2xl"
        >
          <div className="pb-2 border-b border-white/10 flex items-center justify-between">
            <span className="text-[10px] tracking-widest text-slate-400 uppercase">
              CHRIST Online Programmes
            </span>
            <span className="text-[10px] font-bold text-amber-400 tracking-wider">
              16–17 OCT 2026
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            {isEventPage ? (
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="col-span-2 block py-2 px-3 text-xs uppercase tracking-wider text-amber-300 font-semibold bg-white/5 rounded border border-amber-500/30 text-center"
              >
                ← Back to Ascendia Home
              </Link>
            ) : (
              navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 px-3 text-xs uppercase tracking-wider text-slate-300 hover:text-amber-300 hover:bg-white/5 rounded transition-colors"
                >
                  {link.label}
                </a>
              ))
            )}
          </div>

          <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
            <span>Contact Secretariat</span>
            <a
              href="mailto:ascendia@online.christuniversity.in"
              className="text-amber-400 hover:underline flex items-center gap-1"
            >
              ascendia@online...
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
