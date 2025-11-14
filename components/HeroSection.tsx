
import React, { useState } from 'react';
import { USER_INFO, HERO_VIDEO_URL } from '../constants';
import PlayIcon from './icons/PlayIcon';

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section 
        id={id} 
        className="flex items-center justify-center min-h-screen bg-gray-900 py-20 md:py-0"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Olá, eu sou <span className="text-[#f85649]"><br />{USER_INFO.name}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl md:text-2xl mx-auto md:mx-0">
                {USER_INFO.title}
              </p>
              <p className="mt-4 max-w-2xl text-md text-gray-400 sm:text-lg mx-auto md:mx-0">
                {USER_INFO.summary}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#f85649] hover:bg-[#e04336] transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  Entre em Contato
                </a>
                <a 
                  href="#projects" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-base font-medium rounded-md text-gray-200 bg-gray-800 hover:bg-gray-700 transition duration-300 transform hover:scale-105 shadow-lg"
                >
                  Ver meus Projetos
                </a>
              </div>
            </div>

            {/* Right Column: Video */}
            <div 
              className="relative group cursor-pointer aspect-video"
              onClick={openModal}
              role="button"
              aria-label="Reproduzir vídeo do banner com som"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                key={HERO_VIDEO_URL}
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              >
                <source src={HERO_VIDEO_URL} type="video/mp4" />
                Seu navegador não suporta a tag de vídeo.
              </video>
              <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <PlayIcon className="w-20 h-20 text-white" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100]"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal} 
              className="absolute -top-2 -right-2 md:-top-4 md:-right-4 z-10 bg-gray-800 rounded-full p-1 text-white hover:bg-gray-700 transition-colors"
              aria-label="Fechar vídeo"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video 
              src={HERO_VIDEO_URL} 
              controls 
              autoPlay 
              className="w-full h-full rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;