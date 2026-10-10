import React from 'react';

// Line 1: Germany & Netherlands
const line1 = [
  // Germany (5 universities)
  { name: 'Technical University of Munich (TUM)', logo: '/images/universitys/germany1.png', country: 'Germany' },
  { name: 'Ludwig Maximilian University of Munich (LMU)', logo: '/images/universitys/germany2.png', country: 'Germany' },
  { name: 'Heidelberg University', logo: '/images/universitys/germany3.jpg', country: 'Germany' },
  { name: 'RWTH Aachen University', logo: '/images/universitys/germany4.png', country: 'Germany' },
  { name: 'Frankfurt School of Finance & Management', logo: '/images/universitys/germany5.png', country: 'Germany' },
  // Netherlands (3 universities)
  { name: 'University of Amsterdam', logo: '/images/universitys/Netherlands1.png', country: 'Netherlands' },
  { name: 'Eindhoven University of Technology (TU/e)', logo: '/images/universitys/Netherlands2.png', country: 'Netherlands' },
  { name: 'Utrecht University', logo: '/images/universitys/Netherlands3.jpg', country: 'Netherlands' },
];

// Line 2: Italy & Finland
const line2 = [
  // Italy (3 universities)
  { name: 'Politecnico di Milano (POLIMI)', logo: '/images/universitys/Italy1.jpg', country: 'Italy' },
  { name: 'University of Bologna', logo: '/images/universitys/Italy2.jpg', country: 'Italy' },
  { name: 'Sapienza University of Rome', logo: '/images/universitys/italy3.jpg', country: 'Italy' },
  // Finland (2 universities)
  { name: 'Aalto University', logo: '/images/universitys/finland1.jpg', country: 'Finland' },
  { name: 'University of Helsinki', logo: '/images/universitys/finland2.jpg', country: 'Finland' },
];

// Line 3: Italy, Austria & Belgium
const line3 = [
  // Italy (1 university)
  { name: 'University of Padua', logo: '/images/universitys/italy4.png', country: 'Italy' },
  // Austria (2 universities)
  { name: 'University of Vienna', logo: '/images/universitys/Austria1.png', country: 'Austria' },
  { name: 'TU Wien', logo: '/images/universitys/Austria2.png', country: 'Austria' },
  // Belgium (2 universities)
  { name: 'KU Leuven', logo: '/images/universitys/Belgium.avif', country: 'Belgium' },
  { name: 'Ghent University', logo: '/images/universitys/Belgium2.jpg', country: 'Belgium' },
];

export function UniversitySlider() {
  const renderTrack = (items, direction, speed, repeatCount = 4) => {
    // Generate repeated items: setA and setB (identical) for seamless 50% translation loop
    const setA = Array(repeatCount).fill(items).flat();
    const allItems = [...setA, ...setA];

    return (
      <div 
        className="slider-track-container" 
        style={{ 
          '--speed': speed, 
          '--anim-name': direction === 'left' ? 'slide-left' : 'slide-right' 
        }}
      >
        <div className="slider-track">
          {allItems.map((uni, idx) => (
            <div 
              key={idx} 
              className="uni-logo-card" 
              title={`${uni.name} (${uni.country})`}
            >
              <img 
                src={uni.logo} 
                alt={uni.name} 
                className="uni-logo-img" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="university-slider-wrapper">
      <div className="slider-fade slider-fade-left"></div>
      <div className="slider-fade slider-fade-right"></div>
      
      <div className="slider-rows">
        {renderTrack(line1, 'left', '40s', 4)}
        {renderTrack(line2, 'right', '36s', 6)}
        {renderTrack(line3, 'left', '38s', 6)}
      </div>

      <style>{`
        .university-slider-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 52px 0;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }
        .slider-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 200px;
          z-index: 2;
          pointer-events: none;
        }
        .slider-fade-left {
          left: 0;
          background: linear-gradient(to right, #f8fafc 0%, rgba(248,250,252,0) 100%);
        }
        .slider-fade-right {
          right: 0;
          background: linear-gradient(to left, #f8fafc 0%, rgba(248,250,252,0) 100%);
        }
        .slider-rows {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .slider-track-container {
          display: flex;
          width: max-content;
        }
        .slider-track {
          display: flex;
          gap: 32px;
          animation: var(--anim-name) var(--speed) linear infinite;
          will-change: transform;
        }
        .slider-track:hover {
          animation-play-state: paused;
        }
        .uni-logo-card {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 160px;
          min-width: 380px;
          max-width: 480px;
          padding: 24px 48px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          box-shadow: 0 4px 14px rgba(28, 42, 79, 0.05);
          flex-shrink: 0;
          cursor: pointer;
          transition: all 0.25s ease;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .uni-logo-card:hover {
          border-color: #1c2a4f;
          transform: translateY(-6px) translateZ(0);
          box-shadow: 0 12px 32px rgba(28, 42, 79, 0.12);
        }
        .uni-logo-img {
          max-height: 125px;
          max-width: 360px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          border-radius: 6px;
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          image-rendering: high-quality;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        @keyframes slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes slide-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        @media (max-width: 768px) {
          .university-slider-wrapper { padding: 40px 0; }
          .slider-rows { gap: 20px; }
          .slider-track { gap: 20px; }
          .uni-logo-card { 
            height: 110px; 
            min-width: 250px; 
            max-width: 300px; 
            padding: 16px 28px; 
            border-radius: 18px;
          }
          .uni-logo-img { 
            max-height: 85px; 
            max-width: 240px; 
          }
          .slider-fade { width: 90px; }
        }
      `}</style>
    </div>
  );
}
