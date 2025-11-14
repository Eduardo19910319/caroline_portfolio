
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-center text-white sm:text-4xl mb-12">
          {title.split(' ').map((word, index) => 
            index === title.split(' ').length - 1 
              ? <span key={index} className="text-[#f85649]">{word}</span>
              : `${word} `
          )}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;