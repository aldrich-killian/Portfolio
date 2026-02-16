import React, { useState, useEffect, useRef } from 'react';

const MobileFAB: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fabRef = useRef<HTMLButtonElement>(null);
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    // Show FAB immediately
    setShowGlow(true);
    
    // Check if tooltip message has been shown before
    const tooltipShown = localStorage.getItem('fab-tooltip-shown');
    if (!tooltipShown) {
      // Show tooltip after page load
      const timer = setTimeout(() => {
        setShowTooltip(true);
        
        // Auto fade out tooltip after 8 seconds
        setTimeout(() => {
          setShowTooltip(false);
          localStorage.setItem('fab-tooltip-shown', 'true');
        }, 10000);  // ← 8000ms = 8 seconds
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!fabRef.current) return;
      
      const fabRect = fabRef.current.getBoundingClientRect();
      const fabCenterX = fabRect.left + fabRect.width / 2;
      const fabCenterY = fabRect.top + fabRect.height / 2;
      
      const distance = Math.sqrt(
        Math.pow(e.clientX - fabCenterX, 2) + Math.pow(e.clientY - fabCenterY, 2)
      );
      
      // Magnet effect within 100px radius
      if (distance < 100) {
        const attraction = Math.max(0, (100 - distance) / 100);
        const offsetX = (e.clientX - fabCenterX) * attraction * 0.15;
        const offsetY = (e.clientY - fabCenterY) * attraction * 0.15;
        
        setMousePosition({ x: offsetX, y: offsetY });
      } else {
        setMousePosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fabGlow {
          0% { box-shadow: 0 4px 20px rgba(147, 51, 234, 0.3); }
          50% { box-shadow: 0 8px 40px rgba(147, 51, 234, 0.6), 0 0 60px rgba(147, 51, 234, 0.4); }
          100% { box-shadow: 0 4px 20px rgba(147, 51, 234, 0.3); }
        }
        
        @keyframes tooltipAppear {
          0% { opacity: 0; transform: translateY(10px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes tooltipFadeOut {
          0% { opacity: 1; transform: translateY(0) scale(1); }
          100% { opacity: 0; transform: translateY(-10px) scale(0.8); }
        }
      `}</style>
    </>
  );
};

export default MobileFAB;
