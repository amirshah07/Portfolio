import { Github, ExternalLink } from 'lucide-react';
import ImageCarousel from './ImageCarousel';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  isDarkMode: boolean;
}

export default function ProjectCard({ project, isDarkMode }: ProjectCardProps) {
  return (
    <div className={`rounded-xl overflow-hidden transition-all duration-300 ${
      isDarkMode 
        ? 'bg-gray-800 shadow-2xl shadow-black/50 border border-gray-700 hover:shadow-2xl hover:shadow-black/60 hover:border-gray-600' 
        : 'bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:border-gray-300'
    }`}>
      <ImageCarousel images={project.images} title={project.title} isDarkMode={isDarkMode} />
      
      <div className="p-8 transition-colors duration-300">
        <h3 className="text-2xl font-semibold mb-3 transition-colors duration-300">{project.title}</h3>
        <p className={`text-lg mb-6 transition-colors duration-300 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className={`text-sm px-3 py-1.5 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
                isDarkMode 
                  ? 'bg-gray-700 text-gray-300 border border-gray-600 shadow-sm hover:border-blue-500 hover:text-blue-300' 
                  : 'bg-gray-100 text-gray-700 border border-gray-200 shadow-sm hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              <span className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-br from-black/10 to-transparent"></span>
              <span 
                className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-br from-white via-transparent to-transparent transition-opacity duration-300"
                style={{
                  opacity: isDarkMode ? 0.05 : 0.4
                }}
              ></span>
              <span className="relative">{tech}</span>
            </span>
          ))}
        </div>
        
        <div className="flex gap-6">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 text-lg font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              <ExternalLink size={20} className="transition-transform duration-300 group-hover:scale-110" />
              <span className="underline-offset-4 hover:underline transition-all duration-300">Try it Out</span>
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center gap-2 text-lg font-medium transition-colors duration-300 ${
                isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              <Github size={20} className="transition-transform duration-300 group-hover:scale-110" />
              <span className="underline-offset-4 hover:underline transition-all duration-300">Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}