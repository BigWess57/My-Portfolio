'use client'

import { ChevronDown, ChevronsDown, ChevronsUp } from 'lucide-react';
import React, { useState, useRef, useEffect, useCallback } from 'react';



// interface MenuProps<T> {
//   items: T[];
//   currentIndex: number;
//   scrollToItem: (index: number) => void;
//   renderNavigationButton: (item: T, index: number, isCurrent: boolean) => React.ReactNode;
// }

// const Menu = <T,>({ 
//   items, 
//   currentIndex, 
//   scrollToItem, 
//   renderNavigationButton 
// }: MenuProps<T>) => (
//   <div className="relative mr-8">
//     {/* timeline line */}
//     <div className="absolute timeline-line bg-neutral-600"></div>

//     <div className="flex flex-row lg:flex-col gap-8 pt-7 lg:pt-0 lg:pl-7">
//       {items.map((item, index) => (
//         <div key={index} className="relative">
//           {/* Timeline dot */}
//           <div className={`absolute timeline-dot w-3 h-3 rounded-full transition-all duration-300 ${
//             currentIndex === index
//               ? 'bg-primary-500 border-primary-500 scale-125 animate-pulse'
//               : 'bg-neutral-800 border-neutral-50 border-2'
//           }`}></div>
          
//           <button
//             onClick={() => {
//               scrollToItem(index);
//             }}
//             className={`text-left transition-all duration-300 w-full hover:translate-y-1 lg:hover:translate-x-1`}
//           >
//             {renderNavigationButton(item, index, currentIndex === index)}
//           </button>
//         </div>
//       ))}
//     </div>
//   </div>
// );



// Render function for navigation buttons
const defaultRenderNavigationButton = (exp: any, index: number, isCurrent: boolean) => (
  <div className={`px-4 py-3 rounded-lg transition-all duration-300 ${
    isCurrent 
      ? 'bg-primary-400 text-white shadow-lg scale-[1.04]' 
      : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
  }`}>
    <div className="font-medium text-sm">{exp.company}</div>
    <div className="text-xs opacity-80 mt-1">{exp.period}</div>
  </div>
);

interface SnapScrollCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  renderNavigationButton?: (item: T, index: number, isCurrent: boolean) => React.ReactNode;
  containerClassName?: string;
  itemClassName?: string;
  navigationClassName?: string;
  scaleFactor?: number; // New prop for scaling (e.g., 1.1 for 10% bigger)
  scrollDuration?: number; // New prop for scroll speed in ms
  menuLeft?: boolean;
}

function SnapScrollCarousel<T>({
  items,
  renderItem,
  renderNavigationButton = defaultRenderNavigationButton,
  containerClassName = "overflow-y-scroll snap-y snap-mandatory max-w-5xl scrollbar-hide",
  itemClassName = "w-full flex items-center justify-center snap-center py-12",
  navigationClassName = "flex flex-col gap-4 p-6 bg-neutral-800 rounded-lg h-fit sticky top-4 min-w-[200px]",
  scaleFactor = 1.05, // Default 5% bigger
  scrollDuration = 1000, // Default 1 second scroll
  menuLeft = true
}: SnapScrollCarouselProps<T>) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemScales, setItemScales] = useState<number[]>(items.map(() => 1));
  // const [isScrolling, setIsScrolling] = useState(false); // Use state for re-renders

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  // const animationRef = useRef<number | null>(null);
  
  // Initialize the refs array
  useEffect(() => {
    itemRefs.current = items.map((_, i) => itemRefs.current[i] || null);
  }, [items]);


  // Set up Intersection Observer
  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            const visibilityRatio = entry.intersectionRatio;
            const newScale = 1 + (scaleFactor - 1) * visibilityRatio;
            
            // Smooth scaling - update immediately
            setItemScales(prev => {
              const newScales = [...prev];
              newScales[index] = newScale;
              return newScales;
            });

            // Stable navigation - debounced with higher threshold
            if (entry.isIntersecting && visibilityRatio > 0.7) {
              setCurrentIndex(index);
              console.log(index)
              console.log(currentIndex)
              console.log(items.length)
            }
          }
        });
      },
      {
        root: containerRef.current,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    }
  }, [items, scaleFactor]);


  // Simple CSS-based scroll (much more reliable)
  const scrollToItem = useCallback((index: number) => {
    itemRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

  const setItemRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    itemRefs.current[index] = el;
  }, []);


  // const [currentItemHeight, setCurrentItemHeight] = useState(0);

  // // Update height when current index changes
  // useEffect(() => {
  //   const currentItem = itemRefs.current[currentIndex];
  //   if (currentItem) {
  //     setCurrentItemHeight(currentItem.scrollHeight);
  //   }
  // }, [currentIndex]);


  const menu = (
    <div className={navigationClassName}>
      <div className="relative">
          {/* timeline line */}
          <div className="absolute timeline-line bg-neutral-600"></div>

          <div className="flex flex-row lg:flex-col gap-8 pt-7 lg:pt-0 lg:pl-7">
            {items.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className={`absolute timeline-dot w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-primary-500 border-primary-500 scale-125 animate-pulse'
                    : 'bg-neutral-800 border-neutral-50 border-2'
                }`}></div>
                
                <button
                  onClick={() => {
                    scrollToItem(index);
                  }}
                  className={`text-left transition-all duration-300 w-full hover:translate-y-1 lg:hover:translate-x-1`}
                >
                  {renderNavigationButton(item, index, currentIndex === index)}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col lg:flex-row items-center">
      {/* Navigation menu (if on the left) */}

      {menuLeft && <div className='mr-8'>{menu}</div>}
      

      {/* Scroll container */}
      <div className='relative'>
        {currentIndex !== 0 && (
          <div className="absolute top-0 h-10 left-0 right-0 transform z-10">
            <div className="flex flex-col justify-center items-center text-primary-500 bg-radial from-primary-800/80 from-0% to-neutral-950 to-70%">
              <div className='w-30 h-15'> 
                <ChevronsUp className="w-full h-full" />
              </div>
              <span className="text-sm">Scroll or click timeline</span>
            </div>
          </div>
        )}
        <div 
          ref={containerRef} 
          className={`${containerClassName}`}
          // style={{ 
          //   height: `${currentItemHeight}px`, // Match current item height
          //   minHeight: '600px', // Fallback
          //   transition: 'height 0.3s ease' // Smooth height changes
          // }}
        >
          {items.map((item, index) => (
            <div 
              key={index}
              ref={setItemRef(index)}
              className={`${itemClassName} transition-transform duration-700 ease-out`}
              style={{
                transform: `scale(${itemScales[index]})`,
              }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
        {currentIndex !== items.length-1 && (
          <div className="absolute bottom-0 h-10 left-0 right-0 transform z-10">
            <div className="flex flex-col justify-center items-center text-primary-500 bg-radial from-primary-800/80 from-0% to-neutral-950 to-50%">
              <span className="text-sm">Scroll or click timeline</span>
              <div className='w-30 h-15'> 
                <ChevronsDown className="w-full h-full" />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Navigation menu (if on the right) */}
      {!menuLeft && <div className='ml-8'>{menu}</div>}
      
    </div>
  );
}

export default SnapScrollCarousel;



{/* menuLeft && <div className={navigationClassName}>
       <div className="relative mr-8">
          <div className="absolute timeline-line bg-neutral-600"></div>

          <div className="flex flex-row lg:flex-col gap-8 pt-7 lg:pt-0 lg:pl-7">
            {items.map((item, index) => (
              <div key={index} className="relative">
                <div className={`absolute timeline-dot w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-primary-500 border-primary-500 scale-125 animate-pulse'
                    : 'bg-neutral-800 border-neutral-50 border-2'
                }`}></div>
                
                <button
                  onClick={() => {
                    scrollToItem(index);
                  }}
                  className={`text-left transition-all duration-300 w-full hover:translate-y-1 lg:hover:translate-x-1`}
                >
                  {renderNavigationButton(item, index, currentIndex === index)}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div> */}


      {{/* !menuLeft && <div className={navigationClassName}>
        <div className="relative ml-8">
          <div className="absolute timeline-line bg-neutral-600"></div>

          <div className="flex flex-row lg:flex-col gap-8 pt-7 lg:pt-0 lg:pl-7">
            {items.map((item, index) => (
              <div key={index} className="relative">
                <div className={`absolute timeline-dot w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-primary-500 border-primary-500 scale-125 animate-pulse'
                    : 'bg-neutral-800 border-neutral-50 border-2'
                }`}></div>
                
                <button
                  onClick={() => {
                    scrollToItem(index);
                  }}
                  className={`text-left transition-all duration-300 w-full hover:translate-y-1 lg:hover:translate-x-1`}
                >
                  {renderNavigationButton(item, index, currentIndex === index)}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div> */}}