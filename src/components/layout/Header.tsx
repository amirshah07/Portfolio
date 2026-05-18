import { Sun, Moon, Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import type { SocialLink } from '../../types';

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  name: string;
  socials: SocialLink[];
}

export default function Header({ isDarkMode, toggleDarkMode, name, socials }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 border-b transition-all duration-300 shadow-sm ${
        isDarkMode
          ? 'bg-black border-neutral-800'
          : 'bg-white border-gray-200'
      }`}>
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => scrollToSection('about')}
            className={`text-xl sm:text-2xl md:text-3xl font-bold hover:opacity-80 transition-all duration-300 ${
              isDarkMode
                ? 'text-white'
                : 'text-gray-900'
            }`}
          >
            {name}
          </button>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection('about')}
                className={`font-medium transition-all duration-300 px-3 py-1 rounded-md ${
                  isDarkMode
                    ? 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`font-medium transition-all duration-300 px-3 py-1 rounded-md ${
                  isDarkMode
                    ? 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Projects
              </button>
                            <button
                onClick={() => scrollToSection('experience')}
                className={`font-medium transition-all duration-300 px-3 py-1 rounded-md ${
                  isDarkMode
                    ? 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                Experience
              </button>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Social Links - Hidden on mobile */}
              <div className="hidden md:flex items-center gap-4">
                {socials.map((social, index) => {
                  const Icon = social.icon === 'Github' ? Github : 
                              social.icon === 'Linkedin' ? Linkedin : 
                              Mail;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target={social.icon === 'Mail' ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-all duration-300 group ${
                        isDarkMode
                          ? 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm'
                      }`}
                      aria-label={social.name}
                    >
                      <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
                
                {/* Divider */}
                <div className={`w-px h-6 mx-2 transition-colors duration-300 ${
                  isDarkMode ? 'bg-neutral-700' : 'bg-gray-300'
                }`}></div>
              </div>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 group ${
                  isDarkMode
                    ? 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm'
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-180" /> : <Moon size={20} className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[360deg]" />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`md:hidden p-2 rounded-lg transition-all duration-300 group ${
                  isDarkMode
                    ? 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} className="transition-transform duration-300 group-hover:scale-110" /> : <Menu size={24} className="transition-transform duration-300 group-hover:scale-110" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 z-50 md:hidden transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } ${
        isDarkMode
          ? 'bg-black border-l border-neutral-800'
          : 'bg-white border-l border-gray-200'
      }`}>
        <div className="p-6">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className={`p-2 rounded-lg transition-all duration-300 ml-auto block group ${
              isDarkMode
                ? 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
            }`}
            aria-label="Close menu"
          >
            <X size={24} className="transition-transform duration-300 group-hover:scale-110" />
          </button>

        {/* Navigation Links */}
        <nav className="mt-8 space-y-4">
          <button
            onClick={() => scrollToSection('about')}
            className={`block w-full text-left font-medium transition-all duration-300 px-4 py-3 rounded-md ${
              isDarkMode
                ? 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className={`block w-full text-left font-medium transition-all duration-300 px-4 py-3 rounded-md ${
              isDarkMode
                ? 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className={`block w-full text-left font-medium transition-all duration-300 px-4 py-3 rounded-md ${
              isDarkMode
                ? 'text-neutral-300 hover:text-white hover:bg-neutral-900'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            Experience
          </button>
        </nav>

          {/* Social Links */}
          <div className={`mt-8 pt-8 border-t ${
            isDarkMode ? 'border-neutral-800' : 'border-gray-200'
          }`}>
            <div className="flex gap-4 justify-center">
              {socials.map((social, index) => {
                const Icon = social.icon === 'Github' ? Github : 
                            social.icon === 'Linkedin' ? Linkedin : 
                            Mail;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target={social.icon === 'Mail' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg transition-all duration-300 group ${
                      isDarkMode
                        ? 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:shadow-sm'
                    }`}
                    aria-label={social.name}
                  >
                    <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}