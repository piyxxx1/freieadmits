import React from 'react';

export function DmatIllustration({ width = '100%', height = 'auto' }) {
  return (
    <div style={{ maxWidth: '520px', margin: '0 auto', position: 'relative' }}>
      <svg
        viewBox="0 0 540 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width, height, display: 'block', filter: 'drop-shadow(0 20px 30px rgba(37, 99, 235, 0.12))' }}
      >
        <defs>
          <linearGradient id="dmatScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
          <linearGradient id="dmatBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="dmatGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
          <linearGradient id="ambientCircle" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#eff6ff" />
            <stop offset="100%" stopColor="#dbeafe" />
          </linearGradient>
        </defs>

        {/* Backdrop Glow Circles */}
        <circle cx="270" cy="200" r="180" fill="url(#ambientCircle)" opacity="0.7" />
        <circle cx="440" cy="80" r="45" fill="#fef3c7" opacity="0.6" />
        <circle cx="70" cy="300" r="50" fill="#ecfdf5" opacity="0.6" />

        {/* Floating German Colors Ribbon Accent */}
        <g transform="translate(180, 20)">
          <rect x="0" y="0" width="60" height="6" rx="3" fill="#0f172a" />
          <rect x="65" y="0" width="60" height="6" rx="3" fill="#dc2626" />
          <rect x="130" y="0" width="60" height="6" rx="3" fill="#f59e0b" />
        </g>

        {/* Digital Computer Terminal / Assessment Screen */}
        <g transform="translate(70, 50)">
          {/* Monitor Frame */}
          <rect x="0" y="0" width="400" height="260" rx="16" fill="url(#dmatScreenGrad)" stroke="#334155" strokeWidth="2.5" />
          {/* Top Window Bar */}
          <rect x="0" y="0" width="400" height="34" rx="16" fill="#1e293b" />
          <circle cx="22" cy="17" r="5" fill="#ef4444" />
          <circle cx="38" cy="17" r="5" fill="#f59e0b" />
          <circle cx="54" cy="17" r="5" fill="#10b981" />
          <text x="200" y="22" fill="#94a3b8" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
            dMAT • Digital Master's Assessment Test
          </text>

          {/* Screen Content Panels */}
          {/* Left Panel: Question / Logic Modules */}
          <rect x="20" y="50" width="220" height="185" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1" />
          <text x="34" y="74" fill="#38bdf8" fontSize="12" fontWeight="bold" fontFamily="monospace">
            &gt; Section: Analytical Logic &amp; Math
          </text>
          <rect x="34" y="86" width="180" height="6" rx="3" fill="#334155" />
          <rect x="34" y="98" width="140" height="6" rx="3" fill="#334155" />

          {/* Interactive MCQ Options */}
          <g transform="translate(34, 118)">
            <rect x="0" y="0" width="190" height="22" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1" />
            <circle cx="12" cy="11" r="5" fill="#3b82f6" />
            <rect x="26" y="8" width="120" height="6" rx="2" fill="#cbd5e1" />

            <rect x="0" y="28" width="190" height="22" rx="4" fill="#065f46" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="12" cy="39" r="5" fill="#10b981" />
            <path d="M10 39 L12 41 L15 37" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="26" y="36" width="100" height="6" rx="2" fill="#a7f3d0" />

            <rect x="0" y="56" width="190" height="22" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1" />
            <circle cx="12" cy="67" r="5" fill="#475569" />
            <rect x="26" y="64" width="135" height="6" rx="2" fill="#64748b" />
          </g>

          {/* Right Panel: Digital Timer & Progress */}
          <rect x="254" y="50" width="126" height="185" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="1" />
          <g transform="translate(268, 68)">
            <text x="50" y="10" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="sans-serif">TIME REMAINING</text>
            <rect x="0" y="18" width="100" height="30" rx="6" fill="#0f172a" stroke="#d97706" strokeWidth="1.5" />
            <text x="50" y="38" fill="#f59e0b" fontSize="15" fontWeight="bold" textAnchor="middle" fontFamily="monospace">42:18</text>

            <text x="50" y="66" fill="#94a3b8" fontSize="10" textAnchor="middle" fontFamily="sans-serif">PROGRESS</text>
            <rect x="0" y="74" width="100" height="8" rx="4" fill="#334155" />
            <rect x="0" y="74" width="75" height="8" rx="4" fill="url(#dmatBlueGrad)" />
            <text x="50" y="98" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">75% Complete</text>
          </g>

          {/* Monitor Base */}
          <rect x="160" y="260" width="80" height="30" fill="#475569" />
          <rect x="130" y="290" width="140" height="12" rx="6" fill="#334155" />
        </g>

        {/* Floating Verified Shield Badge */}
        <g transform="translate(30, 240)" filter="url(#shadow)">
          <circle cx="36" cy="36" r="32" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
          <circle cx="36" cy="36" r="24" fill="#ecfdf5" />
          <path d="M28 36 L34 42 L46 29" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="74" y="18" width="130" height="38" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
          <text x="86" y="34" fill="#0f172a" fontSize="11" fontWeight="bold" fontFamily="system-ui">Master's Ready</text>
          <text x="86" y="47" fill="#059669" fontSize="9.5" fontWeight="600" fontFamily="system-ui">German Standard</text>
        </g>

        {/* Floating Academic Cap Badge */}
        <g transform="translate(380, 260)">
          <rect x="0" y="0" width="135" height="48" rx="10" fill="#ffffff" stroke="#bfdbfe" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="14" fill="#eff6ff" />
          <polygon points="24,16 33,20 24,24 15,20" fill="#1d4ed8" />
          <text x="46" y="22" fill="#1e3a8a" fontSize="11" fontWeight="bold" fontFamily="system-ui">TU9 / Public</text>
          <text x="46" y="35" fill="#64748b" fontSize="9.5" fontFamily="system-ui">Targeted Intake</text>
        </g>
      </svg>
    </div>
  );
}
