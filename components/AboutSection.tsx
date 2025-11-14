
import React from 'react';
import Section from './Section';

interface AboutSectionProps {
  id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  return (
    <Section id={id} title="Sobre Mim" className="bg-gray-900">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={`https://picsum.photos/seed/profile/400/400`}
            alt="Foto do perfil"
            className="rounded-full w-60 h-60 object-cover border-4 border-[#f85649] shadow-2xl"
          />
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <p className="text-lg text-gray-300 leading-relaxed">
            Desde que escrevi minha primeira linha de código, soube que havia encontrado minha paixão. Criar experiências digitais que não são apenas funcionais, mas também intuitivas e visualmente atraentes, é o que me motiva todos os dias. Tenho um forte foco em escrever código limpo, escalável e de fácil manutenção.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Fora do trabalho, gosto de explorar novas tecnologias, contribuir para projetos de código aberto e compartilhar conhecimento com a comunidade de desenvolvedores. Acredito que o aprendizado contínuo é a chave para se manter relevante em um campo em constante evolução.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;