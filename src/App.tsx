import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Section from './components/layout/Section';
import AboutMe from './components/sections/AboutMe';
import Skills from './components/sections/Skills';
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
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
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
          id="skills" 
          title="Skills" 
          isDarkMode={isDarkMode}
          className={isDarkMode ? 'bg-gray-800/30' : 'bg-gray-50'}
        >
          <Skills skills={portfolioData.skills} isDarkMode={isDarkMode} />
        </Section>

        <Section 
          id="projects" 
          title="Projects" 
          isDarkMode={isDarkMode}
        >
          <Projects projects={portfolioData.projects} isDarkMode={isDarkMode} />
        </Section>
      </main>

      <Footer isDarkMode={isDarkMode} name={portfolioData.name} />
      <Analytics />
    </div>
  );
}

export default App;