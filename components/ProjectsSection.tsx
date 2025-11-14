import React, { useState, useEffect } from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectsSectionProps {
  id: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ id }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Em um projeto real, aqui você faria a chamada para a API do seu CMS.
        // ex: const response = await fetch('https://seu-cms.com/api/projects');
        // const data = await response.json();
        // setProjects(data);

        // Por enquanto, vamos simular a chamada com um delay.
        await new Promise(resolve => setTimeout(resolve, 1000));
        setProjects(PROJECTS); // Usando os dados do constants.ts como mock
        
      } catch (err) {
        setError('Falha ao carregar os projetos.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <div className="text-center text-gray-400">Carregando projetos...</div>;
    }

    if (error) {
      return <div className="text-center text-red-500">{error}</div>;
    }
    
    if (projects.length === 0) {
        return <div className="text-center text-gray-400">Nenhum projeto encontrado.</div>;
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    );
  };

  return (
    <Section id={id} title="Meus Projetos">
      {renderContent()}
    </section>
  );
};

export default ProjectsSection;