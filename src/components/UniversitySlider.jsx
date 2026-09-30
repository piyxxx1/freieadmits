import React from 'react';

const line1 = [
  { name: 'Technical University of Munich (TUM)', domain: 'tum.de' },
  { name: 'KU Leuven', domain: 'kuleuven.be' },
  { name: 'University of Amsterdam', domain: 'uva.nl' },
  { name: 'Politecnico di Milano', domain: 'polimi.it' },
  { name: 'University of Vienna', domain: 'univie.ac.at' },
  { name: 'Aalto University', domain: 'aalto.fi' },
  { name: 'Heidelberg University', domain: 'uni-heidelberg.de' }
];

const line2 = [
  { name: 'Ludwig Maximilian University of Munich (LMU)', domain: 'lmu.de' },
  { name: 'Delft University of Technology (TU Delft)', domain: 'tudelft.nl' },
  { name: 'University of Bologna', domain: 'unibo.it' },
  { name: 'TU Wien', domain: 'tuwien.at' },
  { name: 'Ghent University', domain: 'ugent.be' },
  { name: 'University of Helsinki', domain: 'helsinki.fi' },
  { name: 'RWTH Aachen University', domain: 'rwth-aachen.de' }
];

const line3 = [
  { name: 'Freie Universität Berlin', domain: 'fu-berlin.de' },
  { name: 'Utrecht University', domain: 'uu.nl' },
  { name: 'Sapienza University of Rome', domain: 'uniroma1.it' },
  { name: 'Eindhoven University of Technology (TU/e)', domain: 'tue.nl' },
  { name: 'University of Padua', domain: 'unipd.it' },
  { name: 'Leiden University', domain: 'universiteitleiden.nl' }
];

export function UniversitySlider() {
  // Using Clearbit Logo API
  const getLogo = (domain) => `https://logo.clearbit.com/${domain}`;

  // Fallback to a letter if logo fails
  const handleImageError = (e, name) => {
    e.target.style.display = 'none';
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.style.display = 'flex';
    }
  };

  const renderTrack = (items, direction, speed) => (
    <div className="slider-track-container" style={{ '--speed': speed, '--direction': direction === 'left' ? 'normal' : 'reverse' }}>
      <div className="slider-track">
        {[...items, ...items, ...items].map((uni, idx) => (
          <div key={idx} className="uni-badge">
            <div className="uni-logo-wrapper">
              <img 
                src={getLogo(uni.domain)} 
                alt={uni.name} 
                className="uni-logo" 
                onError={(e) => handleImageError(e, uni.name)}
                loading="lazy"
              />
              <div className="uni-logo-fallback" style={{ display: 'none' }}>
                {uni.name.charAt(0)}
              </div>
            </div>
            <span className="uni-name">{uni.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="university-slider-wrapper">
      <div className="slider-fade slider-fade-left"></div>
      <div className="slider-fade slider-fade-right"></div>
      
      <div className="slider-rows">
        {renderTrack(line1, 'left', '40s')}
        {renderTrack(line2, 'right', '45s')}
        {renderTrack(line3, 'left', '38s')}
      </div>

      <style>{`
        .university-slider-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 40px 0;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
        }
        .slider-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 150px;
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
          gap: 16px;
        }
        .slider-track-container {
          display: flex;
          width: max-content;
        }
        .slider-track {
          display: flex;
          gap: 16px;
          animation: slide var(--speed) linear infinite var(--direction);
        }
        .uni-badge {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 8px 20px 8px 8px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 100px;
          box-shadow: 0 2px 10px rgba(28, 42, 79, 0.03);
          white-space: nowrap;
          transition: all 0.3s ease;
        }
        .uni-badge:hover {
          border-color: #1c2a4f;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(28, 42, 79, 0.08);
        }
        
        .uni-logo-wrapper {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f1f5f9;
          flex-shrink: 0;
          border: 1px solid #e2e8f0;
        }
        .uni-logo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          background: white;
        }
        .uni-logo-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 0.8rem;
          color: #475569;
        }
        
        .uni-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1c2a4f;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-33.33% - 5.33px));
          }
        }
        
        @media (max-width: 768px) {
          .university-slider-wrapper { padding: 24px 0; }
          .slider-rows { gap: 12px; }
          .uni-badge { padding: 6px 16px 6px 6px; }
          .uni-logo-wrapper { width: 24px; height: 24px; }
          .uni-name { font-size: 0.85rem; }
        }
      `}</style>
    </div>
  );
}
