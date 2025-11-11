'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'

export const SnapScrollCarouselCSS = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const items = [0, 1, 2, 3, 4];

  // Initialize the refs array
  useEffect(() => {
    itemRefs.current = items.map((_, i) => itemRefs.current[i] || null);
  }, [items]);

  // Set up Intersection Observer to detect visible item
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setCurrentIndex(index);
            }
          }
        });
      },
      {
        root: containerRef.current,
        threshold: 0.6, // Item is considered visible when 60% is in view
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);
  


  const scrollToItem = (index: number) => {
    itemRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  // Correct ref callback function
  const setItemRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    itemRefs.current[index] = el;
  }, []);

  

  return (
    <section className='section-to-right text-neutral-200 gap-5'>
      {/* Same navigation menu as above */}
      <div className='flex flex-col gap-4 p-6 bg-neutral-800 rounded-lg h-fit sticky top-4'>
        <h3 className="text-lg font-semibold mb-2">Navigation</h3>
        {items.map((index) => (
          <button
            key={index}
            onClick={() => scrollToItem(index)}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-blue-500 text-white shadow-lg scale-105' 
                : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
            }`}
          >
            Item {index}
            {currentIndex === index && <span className="ml-2 text-sm">●</span>}
          </button>
        ))}
        <div className="mt-4 p-3 bg-neutral-900 rounded text-center">
          <span className="text-sm text-neutral-400">Current: </span>
          <span className="text-blue-400 font-bold">{currentIndex}</span>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory border max-w-5xl scrollbar-hide"
      >
        {items.map((index) => (
          <div 
            key={index}
            ref={setItemRef(index)}
            className='w-[50vw] h-[70vh] flex items-center justify-center border border-red-500 snap-center bg-accent-600 my-30'
          >
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Item {index}</h2>
              <p className="text-lg">Current: {currentIndex}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
