import React from 'react';

export function DestinationIllustration({ countryId, width = '100%', height = '180px' }) {
  switch (countryId) {
    case 'germany':
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height, borderRadius: '12px' }}>
          <rect width="320" height="200" fill="#ffffff" rx="12" />
          <defs>
            <linearGradient id="gerSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
            <linearGradient id="gerGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>
          <rect width="320" height="200" fill="url(#gerSky)" rx="12" />

          {/* Berlin TV Tower (Fernsehturm) in background */}
          <g transform="translate(240, 15)">
            <rect x="18" y="0" width="3" height="40" fill="#cbd5e1" />
            <circle cx="19.5" cy="45" r="14" fill="#94a3b8" />
            <rect x="18" y="59" width="3" height="100" fill="#cbd5e1" />
          </g>

          {/* Brandenburg Gate columns */}
          <g transform="translate(45, 40)">
            <rect x="10" y="42" width="190" height="14" fill="#94a3b8" rx="2" />
            {/* 6 Doric Pillars */}
            {[20, 52, 84, 116, 148, 180].map((x, i) => (
              <rect key={i} x={x} y="56" width="12" height="66" fill="#cbd5e1" rx="2" />
            ))}
            <rect x="5" y="122" width="200" height="14" fill="#64748b" rx="2" />
            {/* Quadriga Chariot */}
            <rect x="90" y="24" width="30" height="18" fill="url(#gerGold)" rx="3" />
            <polygon points="105,10 95,24 115,24" fill="#ca8a04" />
          </g>

          {/* German Flag Subtle Strip */}
          <g transform="translate(18, 18)">
            <rect x="0" y="0" width="12" height="6" fill="#1c2a4f" rx="1" />
            <rect x="0" y="6" width="12" height="6" fill="#1c2a4f" />
            <rect x="0" y="12" width="12" height="6" fill="#475569" rx="1" />
          </g>

          {/* Engineering Gear */}
          <g transform="translate(265, 30)">
            <circle cx="25" cy="25" r="18" fill="#475569" />
            <circle cx="25" cy="25" r="9" fill="#ffffff" />
            {[0, 60, 120, 180, 240, 300].map((deg, idx) => (
              <rect key={idx} x="22" y="3" width="6" height="6" fill="#334155" transform={`rotate(${deg} 25 25)`} />
            ))}
          </g>

          {/* Autobahn road ground */}
          <polygon points="120,200 200,200 170,140 150,140" fill="#334155" />
          <line x1="160" y1="145" x2="160" y2="195" stroke="#facc15" strokeWidth="3" strokeDasharray="6 6" />
          <rect y="172" width="320" height="28" fill="#1c2a4f" />
        </svg>
      );

    case 'netherlands':
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height, borderRadius: '12px' }}>
          <rect width="320" height="200" fill="#f0fdfa" rx="12" />
          <defs>
            <linearGradient id="dutchSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ccfbf1" />
              <stop offset="100%" stopColor="#f0fdfa" />
            </linearGradient>
            <linearGradient id="tulipOrange" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
          </defs>
          <rect width="320" height="200" fill="url(#dutchSky)" rx="12" />

          {/* Traditional Dutch Windmill */}
          <g transform="translate(60, 35)">
            {/* Tower */}
            <polygon points="40,30 25,125 55,125" fill="#475569" />
            <polygon points="40,15 32,30 48,30" fill="#1c2a4f" />
            <circle cx="40" cy="45" r="6" fill="#475569" />
            {/* Windmill Blades */}
            <line x1="40" y1="45" x2="0" y2="10" stroke="#1c2a4f" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="40" y1="45" x2="80" y2="80" stroke="#1c2a4f" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="40" y1="45" x2="5" y2="80" stroke="#1c2a4f" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="40" y1="45" x2="75" y2="10" stroke="#1c2a4f" strokeWidth="3.5" strokeLinecap="round" />
          </g>

          {/* Amsterdam Canal Gabled Townhouses */}
          <g transform="translate(180, 50)">
            {/* House 1: Bell Gable */}
            <rect x="0" y="30" width="36" height="85" fill="#c2410c" rx="2" />
            <path d="M0 30 Q18 10 36 30 Z" fill="#9a3412" />
            <rect x="8" y="40" width="8" height="12" fill="#ffffff" rx="1" />
            <rect x="20" y="40" width="8" height="12" fill="#ffffff" rx="1" />
            <rect x="8" y="60" width="8" height="12" fill="#ffffff" rx="1" />
            <rect x="20" y="60" width="8" height="12" fill="#ffffff" rx="1" />

            {/* House 2: Step Gable */}
            <rect x="42" y="35" width="40" height="80" fill="#1c2a4f" rx="2" />
            <polygon points="42,35 50,35 50,25 56,25 56,15 66,15 66,25 72,25 72,35 82,35" fill="#1c2a4f" />
            <rect x="50" y="45" width="9" height="12" fill="#ffffff" rx="1" />
            <rect x="65" y="45" width="9" height="12" fill="#ffffff" rx="1" />
            <rect x="50" y="65" width="9" height="12" fill="#ffffff" rx="1" />
            <rect x="65" y="65" width="9" height="12" fill="#ffffff" rx="1" />

            {/* House 3: Classic Dutch Brick */}
            <rect x="88" y="40" width="34" height="75" fill="#334155" rx="2" />
            <polygon points="88,40 105,20 122,40" fill="#78350f" />
            <rect x="94" y="48" width="8" height="10" fill="#ffffff" rx="1" />
            <rect x="106" y="48" width="8" height="10" fill="#ffffff" rx="1" />
          </g>

          {/* Dutch Tulip Flower Field Accent */}
          <g transform="translate(20, 140)">
            {[0, 16, 32, 48].map((x, i) => (
              <g key={i} transform={`translate(${x}, 0)`}>
                <line x1="8" y1="12" x2="8" y2="28" stroke="#1c2a4f" strokeWidth="2.5" />
                <path d="M4 12 C4 4 12 4 12 12 Z" fill="url(#tulipOrange)" />
              </g>
            ))}
          </g>

          {/* Amsterdam Canal Water */}
          <rect y="165" width="320" height="35" fill="#1c2a4f" opacity="0.9" />
          <line x1="0" y1="175" x2="320" y2="175" stroke="#eef2fa" strokeWidth="1.5" strokeDasharray="16 12" />
        </svg>
      );

    case 'france':
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height, borderRadius: '12px' }}>
          <rect width="320" height="200" fill="#eef2ff" rx="12" />
          {/* Eiffel Tower Vector */}
          <g transform="translate(135, 18)">
            <polygon points="25,0 22,45 28,45" fill="#475569" />
            <rect x="19" y="45" width="12" height="8" fill="#334155" rx="1" />
            <polygon points="21,53 13,105 37,105 29,53" fill="#64748b" />
            <rect x="9" y="105" width="32" height="10" fill="#334155" rx="1" />
            {/* Arch Base */}
            <path d="M3 150 L9 115 L41 115 L47 150 Q25 125 3 150 Z" fill="#475569" />
          </g>

          {/* Arc de Triomphe Silhouette */}
          <g transform="translate(225, 60)">
            <rect x="0" y="20" width="55" height="50" fill="#cbd5e1" rx="3" />
            <rect x="0" y="14" width="55" height="8" fill="#94a3b8" rx="2" />
            <path d="M16 70 L16 42 Q27 34 38 42 L38 70 Z" fill="#64748b" />
          </g>

          {/* French Fleur-de-lis / Palette */}
          <g transform="translate(45, 55)">
            <circle cx="35" cy="35" r="28" fill="#e2e8f0" stroke="#ca8a04" strokeWidth="2" />
            <circle cx="24" cy="25" r="5" fill="#ef4444" />
            <circle cx="42" cy="20" r="5" fill="#1c2a4f" />
            <circle cx="50" cy="35" r="5" fill="#1c2a4f" />
            <circle cx="30" cy="46" r="6" fill="#eef2ff" />
          </g>
          {/* Seine River Bank */}
          <rect y="165" width="320" height="35" fill="#4338ca" opacity="0.85" />
        </svg>
      );

    case 'spain':
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height, borderRadius: '12px' }}>
          <rect width="320" height="200" fill="#fff7ed" rx="12" />
          {/* Mediterranean Radiant Sun */}
          <circle cx="240" cy="50" r="32" fill="#fdba74" opacity="0.7" />
          <circle cx="240" cy="50" r="22" fill="#f97316" />

          {/* Sagrada Familia Spires (Barcelona) */}
          <g transform="translate(100, 30)">
            {/* 4 Iconic Spires */}
            <polygon points="20,15 14,120 26,120" fill="#475569" />
            <polygon points="40,5 34,120 46,120" fill="#334155" />
            <polygon points="65,5 59,120 71,120" fill="#334155" />
            <polygon points="85,15 79,120 91,120" fill="#475569" />
            {/* Top decorative finials */}
            <circle cx="20" cy="12" r="4" fill="#94a3b8" />
            <circle cx="40" cy="3" r="4" fill="#94a3b8" />
            <circle cx="65" cy="3" r="4" fill="#94a3b8" />
            <circle cx="85" cy="12" r="4" fill="#94a3b8" />
            {/* Connecting Bridges */}
            <rect x="18" y="55" width="70" height="6" fill="#92400e" />
            <rect x="22" y="80" width="62" height="6" fill="#92400e" />
            {/* Base */}
            <rect x="8" y="115" width="90" height="25" fill="#78350f" rx="3" />
            <path d="M42 140 L42 125 Q53 118 64 125 L64 140 Z" fill="#451a03" />
          </g>

          {/* Spanish Moorish Horseshoe Arch Motif */}
          <g transform="translate(30, 70)">
            <rect x="0" y="20" width="8" height="50" fill="#ea580c" />
            <rect x="36" y="20" width="8" height="50" fill="#ea580c" />
            <path d="M4 22 C4 4 40 4 40 22 Z" fill="#f97316" />
          </g>

          {/* Warm Spanish Terracotta Ground */}
          <rect y="165" width="320" height="35" fill="#c2410c" />
        </svg>
      );

    case 'poland':
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height, borderRadius: '12px' }}>
          <rect width="320" height="200" fill="#fef2f2" rx="12" />
          {/* Warsaw Royal Castle / Old Town Spire */}
          <g transform="translate(100, 25)">
            {/* Main Clock Tower */}
            <rect x="45" y="35" width="32" height="95" fill="#1c2a4f" rx="2" />
            <polygon points="61,5 42,35 80,35" fill="#991b1b" />
            <rect x="59" y="0" width="4" height="8" fill="#7f1d1d" />
            <circle cx="61" cy="55" r="7" fill="#ffffff" stroke="#991b1b" strokeWidth="1.5" />

            {/* Adjoining Palatial Wing */}
            <rect x="0" y="65" width="45" height="65" fill="#b91c1c" rx="2" />
            <polygon points="0,65 22,50 45,65" fill="#7f1d1d" />
            <rect x="77" y="65" width="55" height="65" fill="#b91c1c" rx="2" />
            <polygon points="77,65 104,50 132,65" fill="#7f1d1d" />

            {/* Arched windows */}
            <rect x="10" y="75" width="8" height="12" rx="4" fill="#fef2f2" />
            <rect x="26" y="75" width="8" height="12" rx="4" fill="#fef2f2" />
            <rect x="88" y="75" width="8" height="12" rx="4" fill="#fef2f2" />
            <rect x="104" y="75" width="8" height="12" rx="4" fill="#fef2f2" />
          </g>

          {/* Polish White Eagle / Amber motif */}
          <g transform="translate(35, 45)">
            <circle cx="28" cy="28" r="24" fill="#fee2e2" stroke="#1c2a4f" strokeWidth="2" />
            <polygon points="28,12 36,24 28,38 20,24" fill="#1c2a4f" />
            <circle cx="28" cy="24" r="5" fill="#ffffff" />
          </g>

          {/* Vistula River Waterfront */}
          <rect y="165" width="320" height="35" fill="#1c2a4f" opacity="0.9" />
          <line x1="0" y1="175" x2="320" y2="175" stroke="#eef2fa" strokeWidth="1.5" strokeDasharray="14 10" />
        </svg>
      );

    case 'italy':
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height, borderRadius: '12px' }}>
          <rect width="320" height="200" fill="#f0fdf4" rx="12" />
          {/* Roman Colosseum Classical Arches */}
          <g transform="translate(45, 45)">
            <path d="M0 100 C0 30 180 30 180 100 Z" fill="#cbd5e1" />
            {/* Outer Tier Arches */}
            {[20, 50, 80, 110, 140].map((x, i) => (
              <path key={i} d={`M${x} 80 L${x} 55 Q${x + 10} 45 ${x + 20} 55 L${x + 20} 80 Z`} fill="#94a3b8" />
            ))}
            {/* Lower Tier Arches */}
            {[15, 45, 75, 105, 135].map((x, i) => (
              <path key={i} d={`M${x} 115 L${x} 90 Q${x + 12} 80 ${x + 24} 90 L${x + 24} 115 Z`} fill="#475569" />
            ))}
            <rect x="0" y="115" width="180" height="15" fill="#334155" rx="2" />
          </g>

          {/* Leaning Tower of Pisa Silhouette */}
          <g transform="translate(235, 40) rotate(7 30 90)">
            <rect x="15" y="15" width="30" height="100" fill="#cbd5e1" rx="2" />
            <rect x="18" y="5" width="24" height="12" fill="#94a3b8" rx="2" />
            {[25, 45, 65, 85].map((y, i) => (
              <line key={i} x1="12" y1={y} x2="48" y2={y} stroke="#64748b" strokeWidth="2.5" />
            ))}
          </g>

          {/* Italian Olive green & Tuscan warm ground */}
          <rect y="165" width="320" height="35" fill="#15803d" opacity="0.85" />
        </svg>
      );

    case 'austria':
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height, borderRadius: '12px' }}>
          <rect width="320" height="200" fill="#fdf4ff" rx="12" />
          {/* Austrian Alps Snowy Peaks */}
          <polygon points="10,165 75,65 140,165" fill="#cbd5e1" opacity="0.7" />
          <polygon points="70,65 75,65 85,90 68,90" fill="#ffffff" />
          <polygon points="100,165 170,45 240,165" fill="#94a3b8" opacity="0.6" />
          <polygon points="163,45 170,45 180,75 160,75" fill="#ffffff" />

          {/* Vienna St. Stephen's Cathedral Gothic Spire */}
          <g transform="translate(195, 25)">
            <polygon points="30,0 20,60 40,60" fill="#475569" />
            <rect x="16" y="60" width="28" height="85" fill="#64748b" rx="2" />
            {/* Ornate rooftop mosaic motif */}
            <polygon points="44,60 100,90 100,145 44,145" fill="#9333ea" opacity="0.4" />
          </g>

          {/* Austrian Music Note Cleft / Imperial Crown motif */}
          <g transform="translate(45, 55)">
            <circle cx="30" cy="30" r="25" fill="#fae8ff" stroke="#c084fc" strokeWidth="2" />
            <path d="M26 40 L26 18 Q36 12 36 24 L26 28" stroke="#9333ea" strokeWidth="3" strokeLinecap="round" fill="none" />
            <circle cx="22" cy="40" r="6" fill="#9333ea" />
          </g>
          <rect y="165" width="320" height="35" fill="#7e22ce" opacity="0.8" />
        </svg>
      );

    case 'sweden':
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height, borderRadius: '12px' }}>
          <rect width="320" height="200" fill="#f0f9ff" rx="12" />
          {/* Nordic Sky Gradient */}
          <defs>
            <linearGradient id="sweSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bae6fd" />
              <stop offset="100%" stopColor="#f0f9ff" />
            </linearGradient>
          </defs>
          <rect width="320" height="200" fill="url(#sweSky)" rx="12" />

          {/* Stockholm Gamla Stan Waterfront Townhouses */}
          <g transform="translate(60, 45)">
            {/* Ocher House */}
            <rect x="0" y="30" width="42" height="90" fill="#475569" rx="2" />
            <polygon points="0,30 21,12 42,30" fill="#334155" />
            <rect x="10" y="40" width="9" height="12" fill="#ffffff" rx="1" />
            <rect x="24" y="40" width="9" height="12" fill="#ffffff" rx="1" />
            <rect x="10" y="60" width="9" height="12" fill="#ffffff" rx="1" />
            <rect x="24" y="60" width="9" height="12" fill="#ffffff" rx="1" />

            {/* Crimson Red House */}
            <rect x="46" y="25" width="40" height="95" fill="#b91c1c" rx="2" />
            <polygon points="46,25 66,10 86,25" fill="#991b1b" />
            <rect x="54" y="36" width="9" height="12" fill="#ffffff" rx="1" />
            <rect x="69" y="36" width="9" height="12" fill="#ffffff" rx="1" />
            <rect x="54" y="56" width="9" height="12" fill="#ffffff" rx="1" />
            <rect x="69" y="56" width="9" height="12" fill="#ffffff" rx="1" />

            {/* Yellow House */}
            <rect x="90" y="35" width="38" height="85" fill="#eab308" rx="2" />
            <polygon points="90,35 109,20 128,35" fill="#ca8a04" />
            <rect x="98" y="45" width="8" height="11" fill="#ffffff" rx="1" />
            <rect x="112" y="45" width="8" height="11" fill="#ffffff" rx="1" />
          </g>

          {/* Scandinavian Pine Tree Vector */}
          <g transform="translate(240, 65)">
            <polygon points="25,0 10,35 40,35" fill="#047857" />
            <polygon points="25,25 5,60 45,60" fill="#047857" />
            <polygon points="25,50 0,90 50,90" fill="#065f46" />
            <rect x="22" y="90" width="6" height="20" fill="#78350f" />
          </g>

          {/* Baltic Sea Waterfront */}
          <rect y="165" width="320" height="35" fill="#0369a1" />
        </svg>
      );

    case 'denmark':
    default:
      return (
        <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height, borderRadius: '12px' }}>
          <rect width="320" height="200" fill="#f8fafc" rx="12" />
          {/* Copenhagen Nyhavn Colorful Harbor Houses */}
          <g transform="translate(45, 50)">
            {/* Coral House */}
            <rect x="0" y="25" width="38" height="95" fill="#ea580c" rx="2" />
            <polygon points="0,25 19,10 38,25" fill="#c2410c" />
            <rect x="8" y="35" width="8" height="12" fill="#ffffff" rx="1" />
            <rect x="22" y="35" width="8" height="12" fill="#ffffff" rx="1" />
            <rect x="8" y="55" width="8" height="12" fill="#ffffff" rx="1" />
            <rect x="22" y="55" width="8" height="12" fill="#ffffff" rx="1" />

            {/* Cyan/Blue House */}
            <rect x="42" y="20" width="40" height="100" fill="#1c2a4f" rx="2" />
            <polygon points="42,20 62,5 82,20" fill="#0369a1" />
            <rect x="50" y="30" width="9" height="12" fill="#ffffff" rx="1" />
            <rect x="65" y="30" width="9" height="12" fill="#ffffff" rx="1" />
            <rect x="50" y="50" width="9" height="12" fill="#ffffff" rx="1" />
            <rect x="65" y="50" width="9" height="12" fill="#ffffff" rx="1" />

            {/* Amber House */}
            <rect x="86" y="30" width="36" height="90" fill="#475569" rx="2" />
            <polygon points="86,30 104,15 122,30" fill="#475569" />
            <rect x="94" y="40" width="8" height="12" fill="#ffffff" rx="1" />
            <rect x="106" y="40" width="8" height="12" fill="#ffffff" rx="1" />
          </g>

          {/* Danish Modern Wind Turbine */}
          <g transform="translate(230, 25)">
            <rect x="28" y="35" width="4" height="105" fill="#cbd5e1" rx="2" />
            <circle cx="30" cy="35" r="5" fill="#94a3b8" />
            {/* 3 Blades */}
            <line x1="30" y1="35" x2="30" y2="5" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
            <line x1="30" y1="35" x2="5" y2="52" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
            <line x1="30" y1="35" x2="55" y2="52" stroke="#64748b" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* Copenhagen Harbor Water */}
          <rect y="165" width="320" height="35" fill="#1c2a4f" opacity="0.9" />
          <line x1="0" y1="175" x2="320" y2="175" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="14 10" />
        </svg>
      );
  }
}
