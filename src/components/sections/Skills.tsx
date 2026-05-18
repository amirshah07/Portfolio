import type { SkillCategory } from '../../types';

interface SkillsProps {
  skills: SkillCategory[];
  isDarkMode: boolean;
}

export default function Skills({ skills, isDarkMode }: SkillsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
      {skills.map((category, index) => (
        <div
          key={index}
          className={`p-6 rounded-xl transition-all duration-300 w-full sm:w-[280px] md:w-[320px] lg:w-[340px] ${
            isDarkMode
              ? 'bg-neutral-900 border border-neutral-800 shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/40 hover:border-neutral-700'
              : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl hover:border-gray-300'
          }`}
        >
          <h3 className={`text-xl font-semibold mb-4 transition-all duration-300 ${
            isDarkMode
              ? 'text-white'
              : 'text-gray-900'
          }`}>
            {category.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                  isDarkMode
                    ? 'bg-neutral-800 text-neutral-300 border border-neutral-700 hover:border-neutral-600 hover:text-white shadow-sm'
                    : 'bg-gray-100 text-gray-700 border border-gray-200 hover:border-gray-400 hover:text-gray-900 shadow-sm'
                }`}
              >
                <span className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-br from-black/10 to-transparent"></span>
                <span 
                  className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-br from-white via-transparent to-transparent transition-opacity duration-300"
                  style={{
                    opacity: isDarkMode ? 0.05 : 0.4
                  }}
                ></span>
                <span className="relative">{skill}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}