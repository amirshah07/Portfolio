import ProjectCard from '../ui/ProjectCard';
import type { Project } from '../../types';

interface ProjectsProps {
  projects: Project[];
  isDarkMode: boolean;
}

export default function Projects({ projects, isDarkMode }: ProjectsProps) {
  const sortedProjects = [...projects].sort((a, b) => b.id - a.id); // Sort projects by ID in descending order (newest first)
  
  return (
    <div className="flex flex-col items-center gap-12 max-w-4xl mx-auto">
      {sortedProjects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
          isDarkMode={isDarkMode} 
        />
      ))}
    </div>
  );
}