
import React from 'react';
import type { Project } from '../types';
import GithubIcon from './icons/GithubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg cursor-pointer">
      {/* Background Image */}
      <img
        src={project.imageUrl}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      {/* Overlay for hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
      
      {/* Content that appears on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 transition-all duration-500 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-[#f85649]/50 text-[#fccdc9] text-xs font-semibold rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-end space-x-4">
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
              <GithubIcon className="w-6 h-6" />
              <span className="sr-only">GitHub Repository</span>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300">
              <ExternalLinkIcon className="w-6 h-6" />
              <span className="sr-only">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;