import React from 'react';

// Line 1: Germany & Netherlands (7 universities)
const line1 = [
  { name: 'Technical University of Munich (TUM)', logo: '/images/universitys/uni/5.jpeg', country: 'Germany' },
  { name: 'Heidelberg University', logo: '/images/universitys/germany3.jpg', country: 'Germany' },
  { name: 'RWTH Aachen University', logo: '/images/universitys/germany4.png', country: 'Germany' },
  { name: 'Delft University of Technology (TU Delft)', logo: '/images/universitys/uni/1.jpeg', country: 'Netherlands' },
  { name: 'University of Amsterdam', logo: '/images/universitys/uni/2.jpeg', country: 'Netherlands' },
  { name: 'Leiden University', logo: '/images/universitys/uni/3.jpeg', country: 'Netherlands' },
  { name: 'Eindhoven University of Technology (TU/e)', logo: '/images/universitys/uni/4.jpeg', country: 'Netherlands' },
];

// Line 2: Germany, Italy & Finland (7 universities)
const line2 = [
  { name: 'Karlsruhe Institute of Technology (KIT)', logo: '/images/universitys/uni/6.jpeg', country: 'Germany' },
  { name: 'Technical University of Berlin (TU Berlin)', logo: '/images/universitys/uni/7.jpeg', country: 'Germany' },
  { name: 'TU Dresden', logo: '/images/universitys/uni/8.jpeg', country: 'Germany' },
  { name: 'Politecnico di Milano (POLIMI)', logo: '/images/universitys/Italy1.jpg', country: 'Italy' },
  { name: 'University of Bologna', logo: '/images/universitys/Italy2.jpg', country: 'Italy' },
  { name: 'Aalto University', logo: '/images/universitys/finland1.jpg', country: 'Finland' },
  { name: 'University of Helsinki', logo: '/images/universitys/finland2.jpg', country: 'Finland' },
];

// Line 3: Austria, Belgium & Italy (7 universities)
const line3 = [
  { name: 'University of Vienna', logo: '/images/universitys/uni/9.jpeg', country: 'Austria' },
  { name: 'University of Innsbruck', logo: '/images/universitys/uni/10.jpeg', country: 'Austria' },
  { name: 'TU Wien', logo: '/images/universitys/Austria2.png', country: 'Austria' },
  { name: 'KU Leuven', logo: '/images/universitys/Belgium.avif', country: 'Belgium' },
  { name: 'Ghent University', logo: '/images/universitys/Belgium2.jpg', country: 'Belgium' },
  { name: 'Sapienza University of Rome', logo: '/images/universitys/italy3.jpg', country: 'Italy' },
  { name: 'University of Padua', logo: '/images/universitys/italy4.png', country: 'Italy' },
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

      <div className="container" style={{ textAlign: 'center', marginBottom: '36px', position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.9rem, 3vw, 2.5rem)',
          fontWeight: 700,
          color: '#1c2a4f',
          margin: 0,
          letterSpacing: '-0.02em',
          lineHeight: 1.2
        }}>
          Explore Leading Universities Across Europe
        </h2>
      </div>
      
      <div className="slider-rows">
        {renderTrack(line1, 'left', '75s', 4)}
        {renderTrack(line2, 'right', '68s', 4)}
        {renderTrack(line3, 'left', '72s', 4)}
      </div>

      <style>{`
        .university-slider-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 60px 0;
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }
        .slider-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 220px;
          z-index: 2;
          pointer-events: none;
        }
        .slider-fade-left {
          left: 0;
          background: linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0) 100%);
        }
        .slider-fade-right {
          right: 0;
          background: linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0) 100%);
        }
        .slider-rows {
          display: flex;
          flex-direction: column;
          gap: 44px;
        }
        .slider-track-container {
          display: flex;
          width: max-content;
        }
        .slider-track {
          display: flex;
          align-items: center;
          gap: 80px;
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
          height: 135px;
          padding: 0 16px;
          flex-shrink: 0;
          cursor: pointer;
          background: transparent;
          border: none;
          box-shadow: none;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .uni-logo-card:hover {
          transform: scale(1.08) translateZ(0);
        }
        .uni-logo-img {
          max-height: 120px;
          max-width: 340px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          mix-blend-mode: multiply;
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
          .university-slider-wrapper { padding: 36px 0; }
          .slider-rows { gap: 28px; }
          .slider-track { gap: 48px; }
          .uni-logo-card { 
            height: 85px; 
            padding: 0 8px; 
          }
          .uni-logo-img { 
            max-height: 75px; 
            max-width: 220px; 
          }
          .slider-fade { width: 80px; }
        }
      `}</style>
    </div>
  );
}
