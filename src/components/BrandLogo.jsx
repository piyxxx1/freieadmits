import React from 'react';

export function BrandLogo({ size = 'default', theme = 'light', showTagline = true, className = '' }) {
  const isDark = theme === 'dark';
  
  // Dimensions
  const logoHeight = size === 'small' ? 24 : size === 'large' ? 34 : 28;
  const taglineFontSize = size === 'small' ? '0.6rem' : size === 'large' ? '0.72rem' : '0.64rem';

  const logoSrc = isDark ? '/logomain_white_cropped.png' : '/logomain_cropped.png';

  return (
    <div className={`brand-logo-container ${className}`} style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', textDecoration: 'none' }}>
      <img
        src={logoSrc}
        alt="FREIE ADMITS"
        style={{
          height: `${logoHeight}px`,
          width: 'auto',
          objectFit: 'contain',
          display: 'block'
        }}
      />
      {showTagline && (
        <span
          style={{
            fontSize: taglineFontSize,
            fontWeight: 700,
            color: '#475569',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginTop: '3px',
            whiteSpace: 'nowrap',
            lineHeight: 1
          }}
        >
          Dream. Study. Settle.
        </span>
      )}
    </div>
  );
}
