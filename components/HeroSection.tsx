import React from 'react';
// @ts-ignore
import { GradientBackground } from 'react-gradient-animation';
// @ts-ignore
import BackgroundNoise from 'react-background-noise';
import { USER_INFO } from '../constants';

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {

  return (
    <>
      <section 
        id={id} 
        className="relative flex items-center justify-center min-h-screen py-20 md:py-0 overflow-hidden"
      >
        {/* Camada 1: O Gradiente Animado (Fundo) */}
        
        {/* Hack: Ignora o TS aqui porque a lib não tem types */}
        {/* @ts-ignore */}
        <GradientBackground
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1, // Fica atrás de tudo
          }}
          gradient={['#1a0b0a', '#3f1310', '#1f2937', '#030712']}
          angle={120}
          density={0.03}
        />

        {/* Camada 2: O Ruído (Textura) */}
        
        {/* Hack: Ignora o TS aqui porque a lib não tem types */}
        {/* @ts-ignore */}
        <BackgroundNoise
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2, // Fica em cima do gradiente
            opacity: 0.03, // Bem sutil
          }}
          brightness={0.7}
          size={512}
        />

        {/* Camada 3: O Conteúdo (Seu texto e botões) */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
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

            {/* Right Column: VAZIA */}
            <div 
              className="relative aspect-video"
            >
              {/* Espaço do vídeo ficou livre. */}
            </div>

          </div>
        </div>
      </section>

      {/* MODAL REMOVIDO */}
    </>
  );
};

export default HeroSection;
