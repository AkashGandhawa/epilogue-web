import { useState, useEffect, useRef } from 'react';

export default function Gallery({ galleryImages, openLightbox }) {
  const sliderRef = useRef(null);
  const [isSliderPaused, setIsSliderPaused] = useState(false);

  // Autonomous sliding for the MoraSpirit club gallery
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const autoScroll = () => {
      if (isSliderPaused) return;
      const card = slider.firstChild;
      if (!card) return;
      const cardWidth = card.offsetWidth;
      const step = cardWidth + 24; // card width + gap-6 (24px)

      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      if (slider.scrollLeft >= maxScrollLeft - 10) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: step, behavior: 'smooth' });
      }
    };

    const intervalId = setInterval(autoScroll, 3500); // slide every 3.5s
    return () => clearInterval(intervalId);
  }, [isSliderPaused]);

  return (
    <section className="py-20 px-4 md:px-gutter reveal bg-surface-container-lowest" id="gallery">
      <div className="max-w-container-max mx-auto relative px-4">
        <h2 className="font-display-lg text-4xl sm:text-6xl lg:text-display-lg mb-16 text-center text-gray-900/10 dark:text-on-surface/10 uppercase tracking-widest font-extrabold relative">
          THE GALLERY
          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-900 dark:text-white opacity-100 text-lg sm:text-2xl lg:text-headline-md tracking-normal font-sans">THE GALLERY</span>
        </h2>
        
        {/* Horizontal Slider Wrapper */}
        <div className="relative w-full">
          {/* Scrollable Container */}
          <div 
            ref={sliderRef}
            onMouseEnter={() => setIsSliderPaused(true)}
            onMouseLeave={() => setIsSliderPaused(false)}
            onTouchStart={() => setIsSliderPaused(true)}
            onTouchEnd={() => setIsSliderPaused(false)}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth pb-6 hide-scrollbar cursor-grab active:cursor-grabbing"
            style={{
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none', /* IE/Edge */
            }}
          >
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                onClick={() => openLightbox(idx)}
                className="flex-shrink-0 w-[85vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw] snap-start relative cursor-pointer overflow-hidden rounded-xl glass-panel border border-outline-variant/20 hover:border-green-700/50 dark:hover:border-primary-container/50 transition-all duration-500 shadow-lg hover:shadow-2xl"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-black/20">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110 saturate-[0.8] hover:saturate-[1.2]"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
