// Project type definition
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  liveLink?: string; // Optional for projects without links
  githubLink?: string; // Optional for private repos
}

// Social links type
export interface SocialLink {
  name: string;
  url: string;
  icon: string; 
}

// Experience type
export interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  logo?: string; // Optional company logo
}

// Complete portfolio data type
export interface PortfolioData {
  name: string; // For the header
  aboutMe: string; // Description text
  projects: Project[];
  socials: SocialLink[];
  experience: Experience[];
}