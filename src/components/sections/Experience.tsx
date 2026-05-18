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

    if (totalMonths === 1) return '1 mo';
    if (totalMonths < 12) return `${totalMonths} mos`;

    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;

    if (remainingMonths === 0) return years === 1 ? '1 yr' : `${years} yrs`;
    return `${years} ${years === 1 ? 'yr' : 'yrs'} ${remainingMonths} ${remainingMonths === 1 ? 'mo' : 'mos'}`;
  };

  const sortedExperience = [...experience].sort((a, b) => b.id - a.id);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {sortedExperience.map((exp) => (
        <div
          key={exp.id}
          className={`rounded-xl px-6 pt-3 pb-6 md:px-8 md:pt-4 md:pb-8 transition-all duration-300 ${
            isDarkMode
              ? 'bg-neutral-900 shadow-2xl shadow-black/50 border border-neutral-800 hover:shadow-2xl hover:shadow-black/60 hover:border-neutral-700'
              : 'bg-white shadow-lg border border-gray-200 hover:shadow-xl hover:border-gray-300'
          }`}
        >
          {/* Top row: company name + logo */}
          <div className="flex items-center justify-between gap-4 mb-0.5">
            <span
              className={`text-base font-semibold uppercase tracking-wider ${
                isDarkMode ? 'text-neutral-400' : 'text-gray-500'
              }`}
            >
              {exp.company}
            </span>

            {exp.logo && (
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-12 h-12 object-contain flex-shrink-0"
                style={isDarkMode ? undefined : { filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.35))' }}
              />
            )}
          </div>

          {/* Role title */}
          <h3
            className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {exp.position}
          </h3>

          {/* Date range · duration · description */}
          <p
            className={`text-base transition-colors duration-300 ${
              isDarkMode ? 'text-neutral-400' : 'text-gray-500'
            }`}
          >
            {formatDate(exp.startDate)} – {exp.endDate ? formatDate(exp.endDate) : 'Present'}
            <span className="mx-2 opacity-40">·</span>
            {calculateDuration(exp.startDate, exp.endDate)}
            {exp.description && (
              <>
                <span className="mx-2 opacity-40">·</span>
                {exp.description}
              </>
            )}
          </p>
        </div>
      ))}
    </div>
  );
}