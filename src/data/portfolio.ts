import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: "Amir Shah",
  
  aboutMe: "Add description here",

  skills: [
    {
      category: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "SQL", "Java"]
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "React", "Tailwind CSS"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js"]
    },
    {
      category: "Database",
      skills: ["PostgreSQL", "SQLite", "Firebase", "Supabase"]
    },
    {
      category: "Tools",
      skills: ["Git", "Docker"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "ItineraryAI",
      description: "ItineraryAI is a full-stack web application that creates customized travel itineraries using Claude AI and Google Places API. Plan solo adventures or coordinate group trips with friends.",
      technologies: ["React", "Node.js", "Express.js", "Firebase", "Python"],
      images: [
        "/images/projects/itinerary-ai/screenshot1.png",
        "/images/projects/itinerary-ai/screenshot2.png",
        "/images/projects/itinerary-ai/screenshot3.png"
      ],
      githubLink: "https://github.com/amirshah07/ItineraryAI"
    },
    {
      id: 2,
      title: "NUSAssist",
      description: "NUSAssist is a comprehensive web application designed to help NUS students organize their academic journey. From intelligent module planning and optimized timetable generation to real-time GPA tracking, NUSAssist streamlines student life with powerful, easy-to-use tools.",
      technologies: ["React", "TypeScript", "Node.js", "Express.js", "Supabase", "Python", "Docker"],
      images: [
        "/images/projects/nus-assist/screenshot1.png",
        "/images/projects/nus-assist/screenshot2.png",
        "/images/projects/nus-assist/screenshot3.png"
      ],
      liveLink: "https://nusassist.com",
      githubLink: "https://github.com/amirshah07/NUSAssist"
    }
  ],

  socials: [
    {
      name: "Email",
      url: "mailto:amirshah07.dev@gmail.com",
      icon: "Mail"
    },
    {
      name: "GitHub",
      url: "https://github.com/amirshah07",
      icon: "Github"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/amirshah07",
      icon: "Linkedin"
    }
  ],

  // Experience data for future use (uncomment and fill when adding experience section)
  experience: [
    // {
    //   id: 1,
    //   company: "Company Name",
    //   position: "Position in company",
    //   startDate: new Date("2022-01-01"),
    //   endDate: new Date("2023-06-01"), // or leave out for "Present"
    //   description: "Developed...",
    //   technologies: ["React", "Typescript", "Node.js", "Express.js"]
    // }
  ]
};