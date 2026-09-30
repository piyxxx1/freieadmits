import React from 'react';

export function AboutHeroIllustration({ width = '100%', height = 'auto' }) {
  return (
    <div style={{ maxWidth: '520px', margin: '0 auto' }}>
      <svg viewBox="0 0 500 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height, display: 'block' }}>
        <defs>
          <linearGradient id="aboutGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1c2a4f" />
            <stop offset="100%" stopColor="#1c2a4f" />
          </linearGradient>
          <linearGradient id="aboutGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#ea580c" />
          </linearGradient>
          <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#f8fafc" />
          </linearGradient>
        </defs>

        {/* Ambient Circles */}
        <circle cx="250" cy="190" r="170" fill="url(#circleGrad)" opacity="0.7" />
        <circle cx="410" cy="90" r="40" fill="#ffedd5" opacity="0.6" />
        <circle cx="90" cy="300" r="50" fill="#ffffff" opacity="0.6" />

        {/* Global Connection Nodes Network */}
        <g stroke="#93c5fd" strokeWidth="2" strokeDasharray="5 5">
          <line x1="120" y1="120" x2="250" y2="160" />
          <line x1="250" y1="160" x2="380" y2="110" />
          <line x1="250" y1="160" x2="220" y2="280" />
          <line x1="250" y1="160" x2="360" y2="270" />
        </g>

        {/* Center Golden Milestone Shield */}
        <g transform="translate(190, 80)">
          <path d="M60 0 L120 25 L120 95 Q60 150 60 150 Q0 95 0 25 Z" fill="url(#aboutGrad1)" />
          {/* Inner Crest */}
          <path d="M60 12 L108 32 L108 90 Q60 138 60 138 Q12 90 12 32 Z" fill="#1c2a4f" />
          {/* Star and 28+ */}
          <text x="60" y="65" fill="#e2e8f0" fontSize="28" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">28+</text>
          <text x="60" y="85" fill="#ffffff" fontSize="12" fontWeight="600" textAnchor="middle" letterSpacing="1" fontFamily="system-ui">YEARS</text>
          <text x="60" y="105" fill="#93c5fd" fontSize="9.5" textAnchor="middle" fontFamily="system-ui">ESTD 1998</text>
        </g>

        {/* Left Node: 1,200+ Global Universities */}
        <g transform="translate(45, 120)">
          <circle cx="40" cy="40" r="38" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="40" cy="40" r="28" fill="#f8fafc" />
          <path d="M40 24 L54 31 L40 38 L26 31 Z" fill="#1c2a4f" />
          <path d="M30 36 L30 46 Q40 52 50 46 L50 36" stroke="#1c2a4f" strokeWidth="2" fill="none" />
          <text x="40" y="68" fill="#1c2a4f" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">1200+ Unis</text>
        </g>

        {/* Right Node: 55+ Global Offices */}
        <g transform="translate(345, 110)">
          <circle cx="40" cy="40" r="38" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="40" cy="40" r="28" fill="#fff7ed" />
          {/* Pin */}
          <path d="M40 22 C34 22 29 27 29 33 C29 42 40 52 40 52 C40 52 51 42 51 33 C51 27 46 22 40 22 Z" fill="#ea580c" />
          <circle cx="40" cy="32" r="4.5" fill="#ffffff" />
          <text x="40" y="68" fill="#1c2a4f" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">55+ Offices</text>
        </g>

        {/* Bottom Node: 250,000+ Students */}
        <g transform="translate(190, 240)">
          <circle cx="60" cy="40" r="38" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="60" cy="40" r="28" fill="#ffffff" />
          <circle cx="60" cy="34" r="8" fill="#1c2a4f" />
          <path d="M48 54 C48 47 53 44 60 44 C67 44 72 47 72 54 Z" fill="#1c2a4f" />
          <text x="60" y="68" fill="#1c2a4f" fontSize="10.5" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">2.5L+ Students</text>
        </g>
      </svg>
    </div>
  );
}
