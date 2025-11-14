
import React, { useState, useEffect } from 'react';
import { USER_INFO, SECTIONS } from '../constants';

interface HeaderProps {
    activeSection: string;
    setActiveSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      event.preventDefault();
      setActiveSection(sectionId);
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const navLinkClasses = (id: string) => `
        px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300
        ${activeSection === id 
            ? 'text-white bg-[#f85649]' 
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        }
    `;

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-2xl font-bold text-white tracking-wider">
                            {USER_INFO.name.split(' ')[0]}<span className="text-[#f85649]">.</span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {SECTIONS.map((section) => (
                                <a key={section.id} href={`#${section.id}`} onClick={(e) => handleNavClick(e, section.id)} className={navLinkClasses(section.id)}>
                                    {section.title}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Abrir menu principal</span>
                            {isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {SECTIONS.map((section) => (
                             <a key={section.id} href={`#${section.id}`} onClick={(e) => handleNavClick(e, section.id)} className={`${navLinkClasses(section.id)} block`}>
                                {section.title}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;