import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  isDarkMode: boolean;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, title, isDarkMode, className, children }: SectionProps) {
  const backgroundClass = className || (isDarkMode ? 'bg-gray-900' : 'bg-white');
  
  return (
    <section
      id={id}
      className={`py-24 px-6 transition-all duration-300 relative ${backgroundClass}`}
    >
      <div className="container mx-auto max-w-7xl">
        {title && (
          <div className="mb-8 text-center">
            <h2 className={`text-5xl font-bold transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent'
            }`}>
              {title}
            </h2>
            <div className={`mt-4 w-24 h-1 mx-auto rounded-full transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-blue-400 to-purple-600'
                : 'bg-gradient-to-r from-indigo-600 to-blue-600'
            }`}></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}