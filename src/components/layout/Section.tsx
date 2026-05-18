import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  isDarkMode: boolean;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, title, isDarkMode, className, children }: SectionProps) {
  const backgroundClass = className || (isDarkMode ? 'bg-black' : 'bg-white');
  
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
                ? 'text-white'
                : 'text-gray-900'
            }`}>
              {title}
            </h2>
            <div className={`mt-4 w-24 h-1 mx-auto rounded-full transition-all duration-300 ${
              isDarkMode
                ? 'bg-neutral-700'
                : 'bg-gray-400'
            }`}></div>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}