
import React from 'react';
import Section from './Section';
import { USER_INFO, SOCIAL_LINKS } from '../constants';
import BehanceIcon from './icons/BehanceIcon';
import LinkedinIcon from './icons/LinkedinIcon';

interface ContactSectionProps {
  id: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ id }) => {
  return (
    <Section id={id} title="Vamos Conversar" className="bg-gray-800/50">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg text-gray-400 mb-8">
          Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato.
        </p>
        <a 
          href={`mailto:${USER_INFO.email}`} 
          className="inline-block bg-[#f85649] text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-[#e04336] transition duration-300 transform hover:scale-105 shadow-lg"
        >
          {USER_INFO.email}
        </a>
        <div className="flex justify-center space-x-6 mt-12">
          <a href={SOCIAL_LINKS.behance} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f85649] transition-colors duration-300 transform hover:scale-110">
            <BehanceIcon className="w-8 h-8" />
            <span className="sr-only">Behance</span>
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#f85649] transition-colors duration-300 transform hover:scale-110">
            <LinkedinIcon className="w-8 h-8" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
        <footer className="mt-20 border-t border-gray-700 pt-8">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} {USER_INFO.name}. Todos os direitos reservados.</p>
        </footer>
      </div>
    </Section>
  );
};

export default ContactSection;