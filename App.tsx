import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import WhatsAppButton from './components/WhatsAppButton';
import { SECTIONS } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' } // Adjust rootMargin to trigger when section is more centered
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        sectionRefs.current[section.id] = el;
        observer.observe(el);
      }
    });

    return () => {
      SECTIONS.forEach((section) => {
        const el = sectionRefs.current[section.id];
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        <HeroSection id="home" />
        <ProjectsSection id="projects" />
        <AboutSection id="about" />
        <SkillsSection id="skills" />
        <ContactSection id="contact" />
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default App;