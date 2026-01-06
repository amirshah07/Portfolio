import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: "Amir Shah",
  
  aboutMe: "Hi, I’m Amir! I’m a student at the National University of Singapore (NUS), double majoring in Data Science & Analytics and Computer Science. I enjoy building projects and bringing ideas to life through code. My current interests lie in data engineering.",

  skills: [
    /*
    {
      category: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "Java", "Go", "C", "SQL", "R"]
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
      skills: ["Git", "Docker", "WebAssembly", "Vite", "Vercel"]
    }
    */
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
    },
    {
      id: 3,
      title: "Tile Tactics",
      description: "Tile Tactics is an advanced Scrabble analysis and training platform that helps players improve through strategic move evaluation and AI practice. It features sophisticated board analysis that considers scoring, leave quality, positioning and defence, a challenging AI opponent for practice games, and an instant word finder supporting multiple official dictionaries. Built with Go compiled to WebAssembly, all computation runs locally in the browser, eliminating network latency and server dependency.",
      technologies: ["React", "TypeScript", "Go", "WebAssembly"],
      images: [
        "/images/projects/tile-tactics/image1.png",
        "/images/projects/tile-tactics/image2.png",
        "/images/projects/tile-tactics/image3.png",
        "/images/projects/tile-tactics/image4.png"
      ],
      liveLink: "https://tiletactics.com",
      githubLink: "https://github.com/amirshah07/TileTactics"
    },
    {
      id: 4,
      title: "Crypto Market Analytics",
      description: "Crypto Market Analytics is a data engineering project that ingests cryptocurrency market data using a Spark-based ETL pipeline and loads it into a PostgreSQL star schema data warehouse. Market data for the top 50 cryptocurrencies is collected every 5 minutes from the CoinGecko API, stored as raw CSV files, transformed into dimension and fact tables using PySpark, and visualised in a Streamlit dashboard showing price trends, top movers, and market capitalisation rankings.",
      technologies: ["Python", "PySpark", "PostgreSQL", "Docker", "Streamlit", "Plotly"],
      images: [
        "/images/projects/crypto-market-analytics/image1.png",
        "/images/projects/crypto-market-analytics/image2.png",
        "/images/projects/crypto-market-analytics/image3.png"
      ],
      githubLink: "https://github.com/amirshah07/crypto-market-analytics"
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

  experience: [
     {
       id: 1,
       company: "HTX (Home Team Science & Technology Agency)",
       position: "Cloud Engineer Intern",
       startDate: new Date("2026-01-05"),
       // endDate: new Date("2026-04-17"), // or leave out for "Present"
       description: "xCloud",
     }
  ]
};