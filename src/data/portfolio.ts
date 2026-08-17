import type { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  name: "Amir Shah",
  
  aboutMe: "Hi, I'm Amir! I'm a student at the National University of Singapore (NUS). I enjoy building projects and bringing ideas to life through code.",

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
    },
    {
      id: 5,
      title: "LeetCode Difficulty Hider",
      description: "A Chrome extension that removes the Easy/Medium/Hard difficulty tag from LeetCode's problem lists, question pages, study plans and search panels, so problems can be practised without difficulty bias. It's a lightweight Manifest V3 build that injects a single stylesheet targeting LeetCode's difficulty classes, with a small content script that keeps the hiding correct as you navigate the site's React-based single-page app. Solved-count stats on profile and company pages are deliberately left untouched, since they're progress stats rather than per-question bias.",
      technologies: ["JavaScript", "CSS", "Manifest V3"],
      images: [
        "/images/projects/leetcode-difficulty-hider/image1.png",
        "/images/projects/leetcode-difficulty-hider/image2.png",
        "/images/projects/leetcode-difficulty-hider/image3.png",
        "/images/projects/leetcode-difficulty-hider/image4.png",
        "/images/projects/leetcode-difficulty-hider/image5.png"
      ],
      githubLink: "https://github.com/amirshah07/leetcode-difficulty-hider"
    },
    {
      id: 6,
      title: "Order Processing Pipeline",
      description: "A backend system for handling online orders at scale, built with FastAPI, Kafka, Redis and PostgreSQL. When an order comes in, the API responds immediately while Kafka processes it in the background, and Redis safely checks and updates stock levels so two customers can never buy the last item at the same time. Failed messages are automatically retried and routed to a separate queue if they keep failing, so no order is ever silently lost. Prometheus and Grafana provide live dashboards showing order throughput and system health.",
      technologies: ["Python", "FastAPI", "Kafka", "Redis", "PostgreSQL", "Docker", "Prometheus", "Grafana"],
      images: [
        "/images/projects/order-pipeline/image1.png",
        "/images/projects/order-pipeline/image2.png",
        "/images/projects/order-pipeline/image3.png"
      ],
      githubLink: "https://github.com/amirshah07/order-processing-pipeline"
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
       position: "Software Engineer Intern",
       startDate: new Date("2026-01-05"),
       endDate: new Date("2026-03-05"),
       description: "xCloud",
       logo: "/images/logos/htx.png"
     },
      {
       id: 2,
       company: "Visa",
       position: "Software Engineer Intern",
       startDate: new Date("2026-05-12"),
       endDate: new Date("2026-07-31"), // or leave out for "Present"
       description: "AIOps",
       logo: "/images/logos/visa.png"
     }
  ]
};