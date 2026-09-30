import React from 'react';

export function HeroIllustration({ className = '' }) {
  return (
    <div className={`hero-illustration-wrapper ${className}`} style={{ position: 'relative', width: '100%', maxWidth: '580px', margin: '0 auto' }}>
      <svg
        viewBox="0 0 600 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto', display: 'block', filter: 'drop-shadow(0 20px 30px rgba(29, 78, 216, 0.12))' }}
      >
        <defs>
          <linearGradient id="heroBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#bfdbfe" />
          </linearGradient>
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1c2a4f" />
            <stop offset="100%" stopColor="#1c2a4f" />
          </linearGradient>
          <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
          <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#1c2a4f" />
          </linearGradient>
          <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* Abstract Floating Backdrop Blobs */}
        <circle cx="300" cy="270" r="230" fill="url(#heroBgGrad)" opacity="0.8" />
        <circle cx="480" cy="120" r="45" fill="#f8fafc" opacity="0.7" />
        <circle cx="80" cy="380" r="60" fill="#fee2e2" opacity="0.6" />

        {/* Orbit Path & Flying Paper Airplane */}
        <ellipse cx="300" cy="260" rx="240" ry="90" stroke="#93c5fd" strokeWidth="2" strokeDasharray="6 6" transform="rotate(-15 300 260)" />
        
        {/* Airplane */}
        <g transform="translate(460, 160) rotate(-25)">
          <path d="M0 0 L40 18 L15 24 L22 40 Z" fill="url(#orangeGrad)" />
          <path d="M15 24 L40 18 L0 0 Z" fill="#c2410c" opacity="0.3" />
        </g>

        {/* Stylized Classical Campus / University Facade */}
        <g transform="translate(70, 140)">
          {/* Base & Pediment */}
          <polygon points="120,40 40,80 200,80" fill="#cbd5e1" />
          <rect x="40" y="80" width="160" height="12" fill="#94a3b8" rx="2" />
          {/* Columns */}
          <rect x="55" y="92" width="16" height="70" fill="#e2e8f0" rx="3" />
          <rect x="95" y="92" width="16" height="70" fill="#e2e8f0" rx="3" />
          <rect x="135" y="92" width="16" height="70" fill="#e2e8f0" rx="3" />
          <rect x="175" y="92" width="16" height="70" fill="#e2e8f0" rx="3" />
          {/* Base */}
          <rect x="30" y="162" width="180" height="16" fill="#94a3b8" rx="4" />
          {/* Clock or Crest */}
          <circle cx="120" cy="65" r="10" fill="#ffffff" />
          <path d="M120 58 L120 65 L125 65" stroke="#1c2a4f" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Globe / World Sphere Illustration */}
        <g transform="translate(360, 240)">
          <circle cx="80" cy="80" r="75" fill="#1c2a4f" />
          {/* Continents in stylized green */}
          <path d="M50 35 Q70 25 90 40 Q105 55 95 70 Q80 80 65 65 Q50 85 40 75 Q35 55 50 35 Z" fill="#1c2a4f" />
          <path d="M85 90 Q110 85 125 105 Q115 130 95 135 Q75 125 85 90 Z" fill="#1c2a4f" />
          <path d="M30 95 Q45 90 55 105 Q45 120 25 115 Z" fill="#1c2a4f" />
          {/* Meridian lines */}
          <ellipse cx="80" cy="80" rx="75" ry="30" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
          <ellipse cx="80" cy="80" rx="35" ry="75" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
          {/* Location Pin */}
          <g transform="translate(68, 40)">
            <path d="M12 0 C5.37 0 0 5.37 0 12 C0 21 12 32 12 32 C12 32 24 21 24 12 C24 5.37 18.63 0 12 0 Z" fill="url(#orangeGrad)" filter="url(#shadowFilter)" />
            <circle cx="12" cy="11" r="5" fill="#ffffff" />
          </g>
        </g>

        {/* Main Illustrated Student Character (Pure Vector Flat Art - No photo) */}
        <g transform="translate(180, 110)" filter="url(#shadowFilter)">
          {/* Body / Torso */}
          <path d="M100 240 L160 240 L175 370 L85 370 Z" fill="url(#blueGrad)" />
          {/* Collar & Tie */}
          <polygon points="120,240 130,265 140,240" fill="#ffffff" />
          <polygon points="127,265 133,265 135,295 130,305 125,295" fill="url(#orangeGrad)" />
          
          {/* Neck */}
          <rect x="120" y="215" width="20" height="30" fill="#fbcfe8" rx="4" />
          
          {/* Head & Face */}
          <circle cx="130" cy="190" r="32" fill="#fed7aa" />
          {/* Hair */}
          <path d="M98 185 C98 155 115 145 135 145 C155 145 168 160 165 185 C158 175 145 170 130 170 C115 170 105 175 98 185 Z" fill="#1c2a4f" />
          {/* Glasses */}
          <rect x="110" y="180" width="16" height="12" rx="4" stroke="#1c2a4f" strokeWidth="2.5" fill="#ffffff" fillOpacity="0.2" />
          <rect x="134" y="180" width="16" height="12" rx="4" stroke="#1c2a4f" strokeWidth="2.5" fill="#ffffff" fillOpacity="0.2" />
          <line x1="126" y1="186" x2="134" y2="186" stroke="#1c2a4f" strokeWidth="2.5" />
          {/* Cheerful Smile */}
          <path d="M124 205 Q130 212 136 205" stroke="#9a3412" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* Graduation Mortarboard / Cap */}
          <g transform="translate(130, 140)">
            <polygon points="0,-18 55,0 0,18 -55,0" fill="#1e1b4b" />
            <rect x="-24" y="0" width="48" height="18" fill="#312e81" rx="4" />
            <circle cx="0" cy="0" r="4" fill="url(#goldGrad)" />
            {/* Tassel */}
            <path d="M0 0 Q30 8 36 28" stroke="url(#goldGrad)" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="36" cy="30" r="3.5" fill="url(#goldGrad)" />
          </g>

          {/* Backpack Strap */}
          <path d="M102 245 Q90 280 96 330" stroke="#f97316" strokeWidth="9" strokeLinecap="round" fill="none" />

          {/* Arms & Laptop / Folder */}
          {/* Right Arm holding laptop */}
          <path d="M160 250 L195 295 L160 315" stroke="#1c2a4f" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Hand */}
          <circle cx="158" cy="316" r="10" fill="#fed7aa" />
          {/* Laptop */}
          <g transform="translate(135, 290) rotate(-10)">
            <rect x="0" y="0" width="60" height="42" rx="5" fill="#334155" />
            <rect x="4" y="4" width="52" height="34" rx="3" fill="#eef2fa" />
            <path d="M18 20 L25 26 L42 12" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </g>

          {/* Left Arm holding Degree Scroll */}
          <path d="M100 250 L75 300 L95 320" stroke="#1c2a4f" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="95" cy="320" r="10" fill="#fed7aa" />
          {/* Rolled Diploma Scroll */}
          <g transform="translate(68, 305) rotate(20)">
            <rect x="0" y="0" width="45" height="14" rx="4" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5" />
            <rect x="18" y="-2" width="8" height="18" fill="url(#orangeGrad)" rx="2" />
          </g>

          {/* Legs / Jeans */}
          <rect x="98" y="370" width="28" height="60" fill="#1c2a4f" rx="6" />
          <rect x="134" y="370" width="28" height="60" fill="#1c2a4f" rx="6" />
          {/* Sneakers */}
          <ellipse cx="110" cy="434" rx="18" ry="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
          <ellipse cx="150" cy="434" rx="18" ry="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
        </g>

        {/* Floating Achievement Card 1: 1,200+ Universities */}
        <g transform="translate(40, 290)" filter="url(#shadowFilter)">
          <rect x="0" y="0" width="165" height="64" rx="14" fill="#ffffff" />
          <circle cx="28" cy="32" r="18" fill="#f8fafc" />
          <path d="M28 22 L37 27 L28 32 L19 27 Z" fill="#1c2a4f" />
          <path d="M22 30 L22 36 Q28 40 34 36 L34 30" stroke="#1c2a4f" strokeWidth="2" fill="none" />
          <text x="56" y="28" fill="#1c2a4f" fontSize="13" fontWeight="bold" fontFamily="system-ui">1,200+ Partners</text>
          <text x="56" y="44" fill="#64748b" fontSize="10.5" fontFamily="system-ui">Top Global Unis</text>
        </g>

        {/* Floating Achievement Card 2: 98.4% Visa Success */}
        <g transform="translate(390, 80)" filter="url(#shadowFilter)">
          <rect x="0" y="0" width="170" height="64" rx="14" fill="#ffffff" />
          <circle cx="30" cy="32" r="18" fill="#ffffff" />
          <path d="M24 32 L28 36 L36 27" stroke="#1c2a4f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="58" y="28" fill="#1c2a4f" fontSize="13" fontWeight="bold" fontFamily="system-ui">98.4% Visa Rate</text>
          <text x="58" y="44" fill="#64748b" fontSize="10.5" fontFamily="system-ui">Consulate Mock Drills</text>
        </g>

        {/* Floating Card 3: Free Counselling */}
        <g transform="translate(370, 410)" filter="url(#shadowFilter)">
          <rect x="0" y="0" width="160" height="58" rx="14" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1.5" />
          <circle cx="26" cy="29" r="14" fill="url(#orangeGrad)" />
          <text x="22" y="34" fill="#ffffff" fontSize="14" fontWeight="bold">★</text>
          <text x="50" y="26" fill="#9a3412" fontSize="12" fontWeight="bold" fontFamily="system-ui">100% Free</text>
          <text x="50" y="42" fill="#c2410c" fontSize="10.5" fontFamily="system-ui">Expert Counselling</text>
        </g>

        {/* Decorative sparkles */}
        <g fill="#eab308">
          <path d="M120 70 Q125 75 130 75 Q125 75 120 80 Q120 75 115 75 Q120 75 120 70 Z" />
          <path d="M490 270 Q495 275 500 275 Q495 275 490 280 Q490 275 485 275 Q490 275 490 270 Z" />
          <path d="M290 60 Q294 64 298 64 Q294 64 290 68 Q290 64 286 64 Q290 64 290 60 Z" />
        </g>
      </svg>
    </div>
  );
}
