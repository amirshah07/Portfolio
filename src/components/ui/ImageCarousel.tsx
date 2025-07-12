import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  title: string;
  isDarkMode: boolean;
}

export default function ImageCarousel({ images, title, isDarkMode }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState<boolean[]>(new Array(images.length).fill(false));
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const prevImage = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const goToImage = (index: number) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleImageError = (index: number) => {
    const newErrors = [...imageError];
    newErrors[index] = true;
    setImageError(newErrors);
  };

  if (images.length === 0) {
    return (
      <div className={`relative h-64 md:h-96 rounded-t-xl flex items-center justify-center transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
      }`}>
        <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>No images available</p>
      </div>
    );
  }

  return (
    <div className={`relative h-64 md:h-96 rounded-t-xl overflow-hidden transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
    }`}>
      {/* Images Container with Slide Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0 flex items-center justify-center"
            >
              {imageError[index] ? (
                <div className={`w-full h-full flex items-center justify-center bg-gradient-to-br transition-colors duration-300 ${
                  isDarkMode ? 'from-gray-800 to-gray-900' : 'from-gray-50 to-gray-100'
                }`}>
                  <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Image unavailable</p>
                </div>
              ) : (
                <img
                  src={image}
                  alt={`${title} screenshot ${index + 1}`}
                  className="w-full h-full object-contain"
                  onError={() => handleImageError(index)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="group absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all duration-300 active:scale-95"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="transition-transform duration-300 group-hover:scale-110" />
          </button>
          <button
            onClick={nextImage}
            className="group absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all duration-300 active:scale-95"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="transition-transform duration-300 group-hover:scale-110" />
          </button>
          
          {/* Image Indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToImage(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                  idx === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}