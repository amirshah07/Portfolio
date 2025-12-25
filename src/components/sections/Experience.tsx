import type { Experience as ExperienceType } from '../../types';

interface ExperienceProps {
  experience: ExperienceType[];
  isDarkMode: boolean;
}

export default function Experience({ experience, isDarkMode }: ExperienceProps) {
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
  };

  const calculateDuration = (start: Date, end?: Date): string => {
    const endDate = end || new Date();
    
    const yearDiff = endDate.getFullYear() - start.getFullYear();
    const monthDiff = endDate.getMonth() - start.getMonth();
    
    const totalMonths = yearDiff * 12 + monthDiff + 1;
    
    if (totalMonths === 1) return '1 month';
    if (totalMonths < 12) return `${totalMonths} months`;
    
    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;
    
    if (remainingMonths === 0) return years === 1 ? '1 year' : `${years} years`;
    return `${years} ${years === 1 ? 'year' : 'years'} ${remainingMonths} ${remainingMonths === 1 ? 'month' : 'months'}`;
  };

  const sortedExperience = [...experience].sort((a, b) => b.id - a.id);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {sortedExperience.map((exp) => (
        <div
          key={exp.id}
          className={`rounded-xl p-6 md:p-8 transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-800 shadow-2xl shadow-black/50 border border-gray-700 hover:shadow-2xl hover:shadow-black/60 hover:border-gray-600' 
              : 'bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:border-gray-300'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
            <div className="flex-1">
              <h3
                className={`text-2xl md:text-3xl font-bold mb-2 transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent' 
                    : 'bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent'
                }`}
              >
                {exp.position}
              </h3>
              <p
                className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {exp.company}
              </p>
            </div>

            <div
              className={`text-sm md:text-base transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              } md:text-right`}
            >
              <p className="font-medium">
                {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : 'Present'}
              </p>
              <p className="mt-1">{calculateDuration(exp.startDate, exp.endDate)}</p>
            </div>
          </div>

          <p
            className={`text-base md:text-lg mb-6 leading-relaxed transition-colors duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            {exp.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className={`text-sm px-3 py-1.5 rounded-full font-medium transition-all duration-300 relative overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gray-700 text-gray-300 border border-gray-600 shadow-sm hover:border-blue-500 hover:text-blue-300' 
                    : 'bg-gray-100 text-gray-700 border border-gray-200 shadow-sm hover:border-blue-400 hover:text-blue-600'
                }`}
              >
                <span className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-br from-black/10 to-transparent"></span>
                <span 
                  className="absolute inset-0 rounded-full pointer-events-none bg-gradient-to-br from-white via-transparent to-transparent transition-opacity duration-300"
                  style={{
                    opacity: isDarkMode ? 0.05 : 0.4
                  }}
                ></span>
                <span className="relative">{tech}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}