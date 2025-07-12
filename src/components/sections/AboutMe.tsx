interface AboutMeProps {
  description: string;
  isDarkMode: boolean;
}

export default function AboutMe({ description, isDarkMode }: AboutMeProps) {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <p className={`text-xl leading-relaxed transition-colors duration-300 ${
        isDarkMode ? 'text-gray-400' : 'text-gray-500'
      }`}>
        {description}
      </p>
    </div>
  );
}