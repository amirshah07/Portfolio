import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: "Amir Shah",
  
  aboutMe: "Hi, I'm Amir! I'm a student at the National University of Singapore (NUS), majoring in Data Science and Analytics with a minor in Computer Science. I enjoy building all kinds of projects that are functional, user-friendly, and thoughtfully designed. I'm always keen to learn new technologies and turn ideas into useful, working products.",

  skills: [
    {
      category: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "Java", "C", "SQL", "R"]
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "React", "Tailwind CSS", "Bootstrap"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "Flask"]
    },
    {
      category: "Database",
      skills: ["PostgreSQL", "SQLite", "Supabase", "Firebase"]
    },
    {
      category: "Tools",
      skills: ["Git", "Docker", "Vite", "Vercel"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "ItineraryAI",
      description: "ItineraryAI is an AI-powered travel planning platform that generates personalised trip itineraries in seconds using Anthropic's Claude API and Google Places API. It features day-by-day plans tailored to your budget and preferences, collaborative planning with friends, interactive maps and intelligent scheduling to minimise travel time. It was built at NUS Hack & Roll 2025.",
      technologies: ["React", "Node.js", "Express.js", "Firebase", "Python"],
      images: [
        "/images/projects/itinerary-ai/image1.png",
        "/images/projects/itinerary-ai/image2.png",
        "/images/projects/itinerary-ai/image3.png"
      ],
      githubLink: "https://github.com/amirshah07/ItineraryAI"
    },
    {
      id: 2,
      title: "NUSAssist",
      description: "NUSAssist is a comprehensive academic planning platform for NUS students, featuring an intelligent timetable optimiser, GPA tracking with performance forecasting and interactive module roadmaps. The personalised dashboard helps students monitor their schedules and academic progress from matriculation to graduation. It was built for NUS Orbital 2025.",
      technologies: ["React", "TypeScript", "Node.js", "Express.js", "Supabase", "Python", "Docker"],
      images: [
        "/images/projects/nus-assist/image1.png",
        "/images/projects/nus-assist/image2.png",
        "/images/projects/nus-assist/image3.png",
        "/images/projects/nus-assist/image4.png"
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