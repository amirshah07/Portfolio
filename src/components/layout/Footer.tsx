interface FooterProps {
  isDarkMode: boolean;
  name: string;
}

export default function Footer({ isDarkMode, name }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-1.5 px-6 text-center border-t transition-all duration-300 ${
      isDarkMode
        ? 'bg-neutral-900/60 text-neutral-400 border-neutral-800'
        : 'bg-gray-50 text-gray-600 border-gray-200'
    }`}>
      <p className="text-sm">© {currentYear} {name}. All rights reserved.</p>
    </footer>
  );
}