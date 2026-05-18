import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Section from './components/layout/Section';
import AboutMe from './components/sections/AboutMe';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import { portfolioData } from './data/portfolio';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'
    }`}>
      <Header 
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        name={portfolioData.name}
        socials={portfolioData.socials}
      />

      <main className="pt-16 transition-all duration-300">
        <Section
          id="about"
          title="About Me"
          isDarkMode={isDarkMode}
        >
          <AboutMe description={portfolioData.aboutMe} isDarkMode={isDarkMode} />
        </Section>

        <Section
          id="projects"
          title="Projects"
          isDarkMode={isDarkMode}
          className={isDarkMode ? 'bg-neutral-900/60' : 'bg-gray-50'}
        >
          <Projects projects={portfolioData.projects} isDarkMode={isDarkMode} />
        </Section>

        <Section 
          id="experience" 
          title="Experience" 
          isDarkMode={isDarkMode}
        >
          <Experience experience={portfolioData.experience} isDarkMode={isDarkMode} />
        </Section>
      </main>

      <Footer isDarkMode={isDarkMode} name={portfolioData.name} />
      <Analytics />
    </div>
  );
}

export default App;