import React from 'react';

export function IllustratedAvatar({ type = 'student1', size = 56 }) {
  const s = size;

  switch (type) {
    case 'student1':
      // Male student with glasses and blue hoodie
      return (
        <svg width={s} height={s} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="#dbeafe" />
          {/* Hoodie / Torso */}
          <path d="M16 80 C16 62 26 56 40 56 C54 56 64 62 64 80 Z" fill="#2563eb" />
          <polygon points="40,56 36,66 44,66" fill="#ffffff" />
          {/* Neck */}
          <rect x="36" y="46" width="8" height="12" fill="#fed7aa" rx="2" />
          {/* Head */}
          <circle cx="40" cy="38" r="16" fill="#fed7aa" />
          {/* Hair */}
          <path d="M24 34 C24 24 30 20 40 20 C50 20 56 24 56 34 C50 28 44 26 40 26 C35 26 28 28 24 34 Z" fill="#1e293b" />
          {/* Glasses */}
          <rect x="29" y="34" width="9" height="7" rx="2" stroke="#0f172a" strokeWidth="1.5" fill="none" />
          <rect x="42" y="34" width="9" height="7" rx="2" stroke="#0f172a" strokeWidth="1.5" fill="none" />
          <line x1="38" y1="37" x2="42" y2="37" stroke="#0f172a" strokeWidth="1.5" />
          {/* Smile */}
          <path d="M37 46 Q40 49 43 46" stroke="#9a3412" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'student2':
      // Female student with bun hairstyle and coral sweater
      return (
        <svg width={s} height={s} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="#ffedd5" />
          {/* Top knot bun */}
          <circle cx="40" cy="18" r="9" fill="#451a03" />
          {/* Sweater */}
          <path d="M16 80 C16 62 26 55 40 55 C54 55 64 62 64 80 Z" fill="#ea580c" />
          {/* Neck */}
          <rect x="36" y="46" width="8" height="12" fill="#fcd34d" rx="2" />
          {/* Head */}
          <circle cx="40" cy="38" r="16" fill="#fcd34d" />
          {/* Hair Front */}
          <path d="M24 34 C24 24 32 24 40 26 C48 24 56 24 56 34 C52 30 46 28 40 28 C34 28 28 30 24 34 Z" fill="#451a03" />
          {/* Eyes */}
          <circle cx="34" cy="37" r="2" fill="#1e293b" />
          <circle cx="46" cy="37" r="2" fill="#1e293b" />
          {/* Cheerful Smile */}
          <path d="M36 45 Q40 49 44 45" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Earring studs */}
          <circle cx="23" cy="40" r="1.5" fill="#f59e0b" />
          <circle cx="57" cy="40" r="1.5" fill="#f59e0b" />
        </svg>
      );

    case 'student3':
      // Male student with headphone and emerald shirt
      return (
        <svg width={s} height={s} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="#ecfdf5" />
          {/* Shirt */}
          <path d="M16 80 C16 60 26 56 40 56 C54 56 64 60 64 80 Z" fill="#059669" />
          {/* Neck */}
          <rect x="36" y="46" width="8" height="12" fill="#fed7aa" rx="2" />
          {/* Head */}
          <circle cx="40" cy="38" r="16" fill="#fed7aa" />
          {/* Hair */}
          <path d="M24 35 C24 23 32 20 40 20 C48 20 56 23 56 35 C52 28 44 26 40 26 C36 26 28 28 24 35 Z" fill="#334155" />
          {/* Headphones over ears */}
          <path d="M22 36 Q40 18 58 36" stroke="#475569" strokeWidth="3" fill="none" />
          <rect x="20" y="34" width="5" height="12" rx="2.5" fill="#0f172a" />
          <rect x="55" y="34" width="5" height="12" rx="2.5" fill="#0f172a" />
          {/* Eyes */}
          <circle cx="35" cy="37" r="1.8" fill="#1e293b" />
          <circle cx="45" cy="37" r="1.8" fill="#1e293b" />
          {/* Smile */}
          <path d="M37 46 Q40 48 43 46" stroke="#9a3412" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'student4':
      // Female student with ponytail and purple blazer
      return (
        <svg width={s} height={s} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="#f5f3ff" />
          {/* Blazer */}
          <path d="M16 80 C16 60 26 56 40 56 C54 56 64 60 64 80 Z" fill="#7c3aed" />
          <polygon points="40,56 34,68 46,68" fill="#ffffff" />
          {/* Neck */}
          <rect x="36" y="46" width="8" height="12" fill="#fde68a" rx="2" />
          {/* Head */}
          <circle cx="40" cy="38" r="16" fill="#fde68a" />
          {/* Hair with side ponytail */}
          <path d="M24 36 C24 23 32 21 40 21 C48 21 56 23 56 36 C52 28 44 26 40 26 C36 26 28 28 24 36 Z" fill="#18181b" />
          <path d="M54 30 Q66 36 64 50" stroke="#18181b" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* Eyes & Smile */}
          <circle cx="34" cy="37" r="1.8" fill="#1e293b" />
          <circle cx="46" cy="37" r="1.8" fill="#1e293b" />
          <path d="M37 46 Q40 49 43 46" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'student5':
      // Male student with smart casual polo
      return (
        <svg width={s} height={s} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="#fefce8" />
          {/* Polo */}
          <path d="M16 80 C16 60 26 56 40 56 C54 56 64 60 64 80 Z" fill="#0284c7" />
          <polygon points="40,56 36,66 44,66" fill="#ffffff" />
          {/* Neck */}
          <rect x="36" y="46" width="8" height="12" fill="#fed7aa" rx="2" />
          {/* Head */}
          <circle cx="40" cy="38" r="16" fill="#fed7aa" />
          {/* Hair */}
          <path d="M25 34 C26 22 34 21 40 21 C47 21 54 22 55 34 Z" fill="#451a03" />
          {/* Eyes */}
          <circle cx="35" cy="37" r="1.8" fill="#1e293b" />
          <circle cx="45" cy="37" r="1.8" fill="#1e293b" />
          {/* Smile */}
          <path d="M36 45 Q40 49 44 45" stroke="#9a3412" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'student6':
    default:
      // Female student with bob cut and glasses
      return (
        <svg width={s} height={s} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="40" cy="40" r="40" fill="#fce7f3" />
          {/* Dress */}
          <path d="M16 80 C16 60 26 56 40 56 C54 56 64 60 64 80 Z" fill="#db2777" />
          {/* Neck */}
          <rect x="36" y="46" width="8" height="12" fill="#fed7aa" rx="2" />
          {/* Head */}
          <circle cx="40" cy="38" r="16" fill="#fed7aa" />
          {/* Sleek bob hair */}
          <path d="M22 38 C22 24 30 22 40 22 C50 22 58 24 58 38 L58 44 C55 42 54 36 54 34 C48 30 44 28 40 28 C36 28 32 30 26 34 C26 36 25 42 22 44 Z" fill="#292524" />
          {/* Stylish Glasses */}
          <rect x="29" y="34" width="9" height="7" rx="3" stroke="#db2777" strokeWidth="1.5" fill="none" />
          <rect x="42" y="34" width="9" height="7" rx="3" stroke="#db2777" strokeWidth="1.5" fill="none" />
          <line x1="38" y1="37" x2="42" y2="37" stroke="#db2777" strokeWidth="1.5" />
          {/* Smile */}
          <path d="M37 46 Q40 49 43 46" stroke="#9a3412" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
      );
  }
}
