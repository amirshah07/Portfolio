import { useState } from 'react';
import { X } from 'lucide-react';
import DinoGame from './DinoGame';

interface FloatingGameButtonProps {
  isDarkMode: boolean;
}

export default function FloatingGameButton({ isDarkMode }: FloatingGameButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Floating Button - Desktop Only */}
      <button
        onClick={openModal}
        className={`hidden md:flex fixed bottom-8 right-8 w-14 h-14 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 z-40 ${
          isDarkMode
            ? 'bg-neutral-900 border-2 border-neutral-700 shadow-2xl shadow-black/50 hover:border-neutral-600 hover:shadow-2xl hover:shadow-black/60'
            : 'bg-white border-2 border-gray-300 shadow-lg hover:border-gray-400 hover:shadow-xl'
        }`}
        aria-label="Open Dino Game"
      >
        <img
          src={isDarkMode ? '/images/dino/dino_white.png' : '/images/dino/dino_black.png'}
          alt="Dino"
          className="w-7 h-7 object-contain"
        />
      </button>

      {/* Modal Backdrop */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
          onClick={closeModal}
        >
          {/* Modal Content */}
          <div
            className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
              isDarkMode
                ? 'bg-neutral-900 shadow-2xl shadow-black/50 border border-neutral-800'
                : 'bg-white shadow-lg border border-gray-200'
            }`}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className={`absolute top-4 right-4 z-10 p-2 rounded-lg transition-all duration-300 group ${
                isDarkMode
                  ? 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
              aria-label="Close game"
            >
              <X size={24} className="transition-transform duration-300 group-hover:scale-110" />
            </button>

            {/* Game */}
            <div className="p-8 pt-16">
              <DinoGame isDarkMode={isDarkMode} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
