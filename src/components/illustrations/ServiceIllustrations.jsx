import React from 'react';

export function ServiceIllustration({ serviceId, width = '80px', height = '80px' }) {
  switch (serviceId) {
    case 'counseling':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height }}>
          <circle cx="50" cy="50" r="46" fill="#eff6ff" />
          {/* Clipboard & Checklist */}
          <rect x="28" y="24" width="44" height="54" rx="6" fill="#ffffff" stroke="#2563eb" strokeWidth="2.5" />
          <rect x="40" y="18" width="20" height="10" rx="3" fill="#2563eb" />
          <line x1="38" y1="38" x2="62" y2="38" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
          <line x1="38" y1="48" x2="62" y2="48" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
          <line x1="38" y1="58" x2="52" y2="58" stroke="#93c5fd" strokeWidth="3" strokeLinecap="round" />
          {/* Checkmark */}
          <circle cx="68" cy="68" r="14" fill="#10b981" />
          <path d="M63 68 L67 72 L74 64" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'test-prep':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height }}>
          <circle cx="50" cy="50" r="46" fill="#fff7ed" />
          {/* Books Stack */}
          <rect x="24" y="58" width="52" height="12" rx="3" fill="#ea580c" />
          <rect x="28" y="44" width="44" height="12" rx="3" fill="#f97316" />
          <rect x="32" y="30" width="36" height="12" rx="3" fill="#fb923c" />
          {/* Bookmark ribbon */}
          <path d="M56 30 L56 46 L60 42 L64 46 L64 30 Z" fill="#ffffff" />
          {/* High Score 8.0 Badge */}
          <circle cx="72" cy="30" r="12" fill="#eab308" />
          <text x="64" y="34" fill="#ffffff" fontSize="10" fontWeight="bold">8.5</text>
        </svg>
      );

    case 'university-selection':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height }}>
          <circle cx="50" cy="50" r="46" fill="#ecfdf5" />
          {/* Target Bullseye & Compass Pin */}
          <circle cx="50" cy="50" r="32" stroke="#059669" strokeWidth="3" strokeDasharray="4 4" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="#10b981" strokeWidth="2.5" fill="none" />
          {/* Academic Shield */}
          <path d="M42 36 L58 36 L58 48 Q50 62 42 48 Z" fill="#047857" />
          <circle cx="50" cy="44" r="4" fill="#fef08a" />
        </svg>
      );

    case 'application-sop':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height }}>
          <circle cx="50" cy="50" r="46" fill="#f5f3ff" />
          {/* Document with Quill Pen */}
          <rect x="26" y="24" width="40" height="52" rx="5" fill="#ffffff" stroke="#7c3aed" strokeWidth="2.5" />
          <line x1="34" y1="36" x2="56" y2="36" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="34" y1="44" x2="56" y2="44" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="34" y1="52" x2="48" y2="52" stroke="#c4b5fd" strokeWidth="2.5" strokeLinecap="round" />
          {/* Golden Seal */}
          <circle cx="38" cy="62" r="6" fill="#f59e0b" />
          {/* Quill feather */}
          <path d="M74 22 Q58 42 56 64 L54 62 Q66 42 74 22 Z" fill="#7c3aed" />
        </svg>
      );

    case 'scholarships':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height }}>
          <circle cx="50" cy="50" r="46" fill="#fefce8" />
          {/* Trophy Cup */}
          <path d="M34 32 L66 32 L60 54 Q50 64 40 54 Z" fill="#eab308" />
          <rect x="47" y="58" width="6" height="12" fill="#ca8a04" />
          <rect x="38" y="70" width="24" height="8" rx="2" fill="#854d0e" />
          {/* Handles */}
          <path d="M34 36 C24 36 24 50 36 50" stroke="#eab308" strokeWidth="3" fill="none" />
          <path d="M66 36 C76 36 76 50 64 50" stroke="#eab308" strokeWidth="3" fill="none" />
          {/* Star on trophy */}
          <text x="46" y="47" fill="#ffffff" fontSize="12" fontWeight="bold">★</text>
        </svg>
      );

    case 'education-loans':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height }}>
          <circle cx="50" cy="50" r="46" fill="#f0f9ff" />
          {/* Bank / Vault & Coin */}
          <polygon points="50,22 28,34 72,34" fill="#0284c7" />
          <rect x="32" y="36" width="36" height="6" fill="#0369a1" />
          <rect x="34" y="42" width="6" height="24" fill="#38bdf8" />
          <rect x="47" y="42" width="6" height="24" fill="#38bdf8" />
          <rect x="60" y="42" width="6" height="24" fill="#38bdf8" />
          <rect x="28" y="66" width="44" height="8" rx="2" fill="#0369a1" />
          {/* Coin Badge */}
          <circle cx="68" cy="40" r="14" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
          <text x="63" y="45" fill="#ffffff" fontSize="12" fontWeight="bold">₹</text>
        </svg>
      );

    case 'visa-processing':
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height }}>
          <circle cx="50" cy="50" r="46" fill="#ecfdf5" />
          {/* Passport Booklet with Approved Stamp */}
          <rect x="28" y="24" width="40" height="52" rx="4" fill="#1e3a8a" />
          <circle cx="48" cy="42" r="10" stroke="#fde047" strokeWidth="1.5" fill="none" />
          {/* Approved Green Stamp */}
          <g transform="translate(42, 48) rotate(-15)">
            <rect x="0" y="0" width="36" height="18" rx="3" fill="#10b981" />
            <text x="4" y="13" fill="#ffffff" fontSize="8" fontWeight="bold">APPROVED</text>
          </g>
        </svg>
      );

    case 'pre-departure':
    default:
      return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height }}>
          <circle cx="50" cy="50" r="46" fill="#eef2ff" />
          {/* Suitcase luggage */}
          <rect x="30" y="38" width="40" height="34" rx="6" fill="#4338ca" />
          {/* Handle */}
          <path d="M42 38 L42 30 Q50 26 58 30 L58 38" stroke="#4338ca" strokeWidth="3" fill="none" />
          <line x1="30" y1="55" x2="70" y2="55" stroke="#818cf8" strokeWidth="2" />
          {/* Wheels */}
          <circle cx="38" cy="74" r="3" fill="#1e1b4b" />
          <circle cx="62" cy="74" r="3" fill="#1e1b4b" />
          {/* Airplane vector taking off */}
          <path d="M62 26 L80 20 L75 34 L71 30 L66 31 Z" fill="#ea580c" />
        </svg>
      );
  }
}
