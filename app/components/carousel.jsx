// components/ScrollCarousel.jsx
'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the plugin globally (or within useGSAP hook)
gsap.registerPlugin(ScrollTrigger);

const ScrollCarousel = () => {
  const containerRef = useRef(null);
  const panels = useRef([]);

  useGSAP(() => {
    // Ensure ScrollTrigger is registered inside the context if preferred
    // gsap.registerPlugin(ScrollTrigger); 

    const panelsArr = gsap.utils.toArray(panels.current);
    
    // Create the horizontal scroll effect
    gsap.to(panelsArr, {
      xPercent: -200 * (panelsArr.length - 1), // Move the full width of all but one panel
        trigger: ".scroll-container",
                scrub: true,
                pin: true,
                start: "top top",
                end: "+=100%"
      
    });

  }, { scope: containerRef }); // Use the container ref as the scope

  // Helper function to add a ref to each panel element
  const addToPanels = (el) => {
    if (el && !panels.current.includes(el)) {
      panels.current.push(el);
    }
  };

  return (
    <div ref={containerRef} className="scroll-container h-screen w-screen flex flex-nowrap overflow-hidden">
      {/* Example Carousel Items (Panels) */}
      <div ref={addToPanels} className="panelo w-screen h-screen bg-red-400 flex items-center justify-center text-4xl">
        Slide 1
      </div>
      <div ref={addToPanels} className="panelo w-screen h-screen bg-blue-400 flex items-center justify-center text-4xl">
        Slide 2
      </div>
      <div ref={addToPanels} className="panelo w-screen h-screen bg-green-400 flex items-center justify-center text-4xl">
        Slide 3
      </div>
      <div ref={addToPanels} className="panelo w-screen h-screen bg-purple-400 flex items-center justify-center text-4xl">
        Slide 4
      </div>
    </div>
  );
};

export default ScrollCarousel;
