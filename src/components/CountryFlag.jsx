import React from 'react';

export function CountryFlag({ countryId, size = 20, className = '' }) {
  const width = size * 1.4;
  const height = size;
  const radius = 3;

  switch (countryId?.toLowerCase()) {
    case 'germany':
    case 'de':
      return (
        <svg width={width} height={height} viewBox="0 0 28 20" fill="none" className={className} style={{ borderRadius: radius, flexShrink: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }}>
          <rect width="28" height="6.66" fill="#1e293b" />
          <rect y="6.66" width="28" height="6.66" fill="#dc2626" />
          <rect y="13.33" width="28" height="6.66" fill="#f59e0b" />
        </svg>
      );

    case 'finland':
    case 'fi':
      return (
        <svg width={width} height={height} viewBox="0 0 28 20" fill="none" className={className} style={{ borderRadius: radius, flexShrink: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }}>
          <rect width="28" height="20" fill="#ffffff" />
          <rect x="7" width="5" height="20" fill="#0284c7" />
          <rect y="7.5" width="28" height="5" fill="#0284c7" />
        </svg>
      );

    case 'ireland':
    case 'ie':
      return (
        <svg width={width} height={height} viewBox="0 0 28 20" fill="none" className={className} style={{ borderRadius: radius, flexShrink: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }}>
          <rect width="9.33" height="20" fill="#16a34a" />
          <rect x="9.33" width="9.33" height="20" fill="#ffffff" />
          <rect x="18.66" width="9.34" height="20" fill="#f97316" />
        </svg>
      );

    case 'netherlands':
    case 'nl':
      return (
        <svg width={width} height={height} viewBox="0 0 28 20" fill="none" className={className} style={{ borderRadius: radius, flexShrink: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }}>
          <rect width="28" height="6.66" fill="#dc2626" />
          <rect y="6.66" width="28" height="6.66" fill="#ffffff" />
          <rect y="13.33" width="28" height="6.66" fill="#1d4ed8" />
        </svg>
      );

    case 'france':
    case 'fr':
      return (
        <svg width={width} height={height} viewBox="0 0 28 20" fill="none" className={className} style={{ borderRadius: radius, flexShrink: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }}>
          <rect width="9.33" height="20" fill="#1d4ed8" />
          <rect x="9.33" width="9.33" height="20" fill="#ffffff" />
          <rect x="18.66" width="9.34" height="20" fill="#dc2626" />
        </svg>
      );

    case 'spain':
    case 'es':
      return (
        <svg width={width} height={height} viewBox="0 0 28 20" fill="none" className={className} style={{ borderRadius: radius, flexShrink: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }}>
          <rect width="28" height="5" fill="#dc2626" />
          <rect y="5" width="28" height="10" fill="#facc15" />
          <rect y="15" width="28" height="5" fill="#dc2626" />
        </svg>
      );

    case 'poland':
    case 'pl':
      return (
        <svg width={width} height={height} viewBox="0 0 28 20" fill="none" className={className} style={{ borderRadius: radius, flexShrink: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }}>
          <rect width="28" height="10" fill="#ffffff" />
          <rect y="10" width="28" height="10" fill="#dc2626" />
        </svg>
      );

    case 'italy':
    case 'it':
      return (
        <svg width={width} height={height} viewBox="0 0 28 20" fill="none" className={className} style={{ borderRadius: radius, flexShrink: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }}>
          <rect width="9.33" height="20" fill="#16a34a" />
          <rect x="9.33" width="9.33" height="20" fill="#ffffff" />
          <rect x="18.66" width="9.34" height="20" fill="#dc2626" />
        </svg>
      );

    case 'austria':
    case 'at':
      return (
        <svg width={width} height={height} viewBox="0 0 28 20" fill="none" className={className} style={{ borderRadius: radius, flexShrink: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }}>
          <rect width="28" height="6.66" fill="#dc2626" />
          <rect y="6.66" width="28" height="6.66" fill="#ffffff" />
          <rect y="13.33" width="28" height="6.66" fill="#dc2626" />
        </svg>
      );

    case 'sweden':
    case 'se':
      return (
        <svg width={width} height={height} viewBox="0 0 28 20" fill="none" className={className} style={{ borderRadius: radius, flexShrink: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }}>
          <rect width="28" height="20" fill="#0284c7" />
          <rect x="7" width="5" height="20" fill="#facc15" />
          <rect y="7.5" width="28" height="5" fill="#facc15" />
        </svg>
      );

    case 'denmark':
    case 'dk':
    default:
      return (
        <svg width={width} height={height} viewBox="0 0 28 20" fill="none" className={className} style={{ borderRadius: radius, flexShrink: 0, boxShadow: '0 1px 3px rgba(0,0,0,0.15)' }}>
          <rect width="28" height="20" fill="#dc2626" />
          <rect x="7" width="4.5" height="20" fill="#ffffff" />
          <rect y="7.5" width="28" height="4.5" fill="#ffffff" />
        </svg>
      );
  }
}
