import React, { useState, useEffect, useRef } from 'react';
import { HeroSection } from './components/HeroSection';
import { GymSection } from './components/GymSection';
import { SpaSection } from './components/SpaSection';
import { MapSection } from './components/MapSection';
import { FooterSection } from './components/FooterSection';
import { NavigationDock } from './components/NavigationDock';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const containerRef = useRef<HTMLElement>(null);

  // Intersection Observer to detect active section for the dock
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main 
      ref={containerRef}
      className="h-svh w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar bg-oasis-primary"
    >
      <HeroSection />
      <GymSection />
      <SpaSection />
      <MapSection />
      <FooterSection />
      
      <NavigationDock 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
    </main>
  );
};

export default App;