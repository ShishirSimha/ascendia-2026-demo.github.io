import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from './Hero';
import { Introduction } from './Introduction';
import { EventsSection } from './EventsSection';
import { NumbersSection } from './NumbersSection';
import { PrizeSection } from './PrizeSection';
import { TimelineSection } from './TimelineSection';
import { CampusMeetSection } from './CampusMeetSection';
import { FinalCtaSection } from './FinalCtaSection';

export const LandingPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash links like #events, #timeline, etc.
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main id="main-landing-content" className="w-full">
      <Hero />
      <Introduction />
      <EventsSection />
      <NumbersSection />
      <PrizeSection />
      <TimelineSection />
      <CampusMeetSection />
      <FinalCtaSection />
    </main>
  );
};
