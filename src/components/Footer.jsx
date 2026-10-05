import React from 'react';
import { Link } from '../context/RouterContext';
import { BrandLogo } from './BrandLogo';
import { Phone, Globe, Mail, MapPin } from 'lucide-react';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaYoutube, 
  FaGraduationCap,
  FaSearch,
  FaClipboardList,
  FaLanguage,
  FaLaptop,
  FaPassport,
  FaCreditCard,
  FaAward,
  FaPlaneDeparture
} from 'react-icons/fa';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Courses', to: '/courses' },
  { label: 'Services', to: '/services' },
  { label: 'dMAT Preparation', to: '/dmat-germany' },
  { label: 'Contact Us', to: '/contact' },
];

const studyDestinations = [
  { name: 'Germany',        iso: 'de' },
  { name: 'France',         iso: 'fr' },
  { name: 'Netherlands',    iso: 'nl' },
  { name: 'Spain',          iso: 'es' },
  { name: 'Poland',         iso: 'pl' },
  { name: 'Latvia',         iso: 'lv' },
  { name: 'Lithuania',      iso: 'lt' },
  { name: 'Sweden',         iso: 'se' },
  { name: 'Denmark',        iso: 'dk' },
  { name: 'United Kingdom', iso: 'gb' },
];

const services = [
  { icon: <FaGraduationCap size={13} />, label: 'University Admissions' },
  { icon: <FaSearch size={12} />, label: 'Course & University Selection' },
  { icon: <FaClipboardList size={13} />, label: 'Application Assistance' },
  { icon: <FaLanguage size={14} />, label: 'German Language Training' },
  { icon: <FaLaptop size={12} />, label: 'dMAT Preparation' },
  { icon: <FaPassport size={13} />, label: 'Visa Guidance' },
  { icon: <FaCreditCard size={12} />, label: 'Education Loan Assistance' },
  { icon: <FaAward size={13} />, label: 'Scholarship Guidance' },
  { icon: <FaPlaneDeparture size={12} />, label: 'Pre-Departure Support' },
];

export function Footer() {
  return (
    <footer style={{ background: '#0a1633', color: '#cbd5e1', borderTop: '1px solid #1c2a4f' }}>
      {/* Main 4-Column Footer Section */}
      <div style={{ padding: '60px 0 44px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.25fr 1fr 1.15fr 1.2fr',
            gap: '40px',
            alignItems: 'flex-start'
          }} className="footer-4col-grid">

            {/* Column 1 — FREIE ADMITS */}
            <div>
              <div style={{ marginBottom: '14px' }}>
                <BrandLogo theme="dark" size="default" />
              </div>
              <p style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 700, margin: '12px 0 6px 0', lineHeight: 1.4 }}>
                Your Journey. Our Guidance.<br />Your Global Future.
              </p>
              <div style={{ width: '40px', height: '3px', background: '#3b82f6', marginBottom: '14px', borderRadius: '2px' }} />
              <p style={{ fontSize: '0.84rem', color: '#94a3b8', lineHeight: 1.68, marginBottom: '22px' }}>
                FREIE ADMITS is a study-abroad guidance brand of <strong style={{ color: '#e2e8f0' }}>EUROPA FUSION PRIVATE LIMITED</strong>, helping students explore international education opportunities through personalised counselling, university applications, language preparation, and visa guidance.
              </p>

              {/* Contact Us Direct Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
                <a href="tel:+919974798803" style={{ color: '#cbd5e1', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                  <span style={{ width: '28px', height: '28px', background: 'rgba(59,130,246,0.18)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={13} color="#60a5fa" />
                  </span>
                  +91 99747 98803
                </a>
                <a href="https://www.freieadmits.io" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                  <span style={{ width: '28px', height: '28px', background: 'rgba(59,130,246,0.18)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Globe size={13} color="#60a5fa" />
                  </span>
                  www.freieadmits.io
                </a>
                <a href="mailto:info@freieadmits.io" style={{ color: '#cbd5e1', fontSize: '0.84rem', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                  <span style={{ width: '28px', height: '28px', background: 'rgba(59,130,246,0.18)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={13} color="#60a5fa" />
                  </span>
                  info@freieadmits.io
                </a>
              </div>

              {/* Follow Us */}
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
                  Follow Us
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  {[
                    { icon: <FaInstagram size={15} />, href: 'https://www.instagram.com/freieadmits/', title: 'Instagram' },
                    { icon: <FaFacebookF size={15} />, href: 'https://www.facebook.com/profile.php?id=61580822580581', title: 'Facebook' },
                    { icon: <FaLinkedinIn size={15} />, href: 'https://www.linkedin.com/company/freie-admits/', title: 'LinkedIn' },
                    { icon: <FaYoutube size={15} />, href: '#', title: 'YouTube' },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={s.title}
                      style={{
                        width: '36px', height: '36px',
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '8px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#cbd5e1', textDecoration: 'none',
                        transition: 'all 0.2s'
                      }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2 — Explore (Quick Links + Destinations) */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1.02rem', fontWeight: 700, marginBottom: '16px', marginTop: 0, borderLeft: '3px solid #3b82f6', paddingLeft: '10px' }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {quickLinks.map((lnk, i) => (
                  <li key={i}>
                    <Link to={lnk.to} style={{ color: '#94a3b8', fontSize: '0.86rem', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', transition: 'color 0.2s' }}>
                      <span style={{ color: '#60a5fa', fontSize: '0.72rem' }}>›</span>
                      {lnk.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 style={{ color: '#ffffff', fontSize: '1.02rem', fontWeight: 700, marginBottom: '14px', marginTop: 0, borderLeft: '3px solid #3b82f6', paddingLeft: '10px' }}>
                Study Destinations
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 10px' }}>
                {studyDestinations.map((dest, i) => (
                  <Link
                    key={i}
                    to="/destinations"
                    style={{
                      color: '#94a3b8',
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      textDecoration: 'none',
                      padding: '2px 0'
                    }}
                  >
                    <img
                      src={`https://flagcdn.com/w40/${dest.iso}.png`}
                      alt={dest.name}
                      style={{ width: '18px', height: '13px', objectFit: 'cover', borderRadius: '2px', flexShrink: 0, boxShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                      loading="lazy"
                    />
                    <span>{dest.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 3 — Services */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1.02rem', fontWeight: 700, marginBottom: '16px', marginTop: 0, borderLeft: '3px solid #3b82f6', paddingLeft: '10px' }}>
                Our Services
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {services.map((svc, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                      width: '28px', height: '28px',
                      background: 'rgba(59, 130, 246, 0.18)',
                      border: '1px solid rgba(59, 130, 246, 0.32)',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#60a5fa', flexShrink: 0
                    }}>
                      {svc.icon}
                    </span>
                    <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{svc.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 4 — Branch Offices */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1.02rem', fontWeight: 700, marginBottom: '16px', marginTop: 0, borderLeft: '3px solid #3b82f6', paddingLeft: '10px' }}>
                Our Offices
              </h4>

              {/* Noida Office */}
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                padding: '14px 16px',
                marginBottom: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <MapPin size={14} color="#60a5fa" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.88rem' }}>Noida Office</span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.5, margin: '4px 0 8px 0' }}>
                  B-1A/06, Sector 51, Noida<br />
                  Landmark: Above CSB Bank<br />
                  Uttar Pradesh – 201301
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1', fontSize: '0.8rem' }}>
                  <Phone size={12} color="#60a5fa" />
                  <a href="tel:+919974798803" style={{ color: '#cbd5e1', textDecoration: 'none' }}>+91 99747 98803</a>
                  <span>/</span>
                  <a href="tel:+919220406733" style={{ color: '#cbd5e1', textDecoration: 'none' }}>+91 92204 06733</a>
                </div>
              </div>

              {/* Kochi Office */}
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                padding: '14px 16px',
                marginBottom: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <MapPin size={14} color="#60a5fa" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.88rem' }}>Kochi Office</span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.5, margin: '4px 0 8px 0' }}>
                  2nd Floor, Rameesha Building<br />
                  Opp. Nirmala Shishu Bhavan, SRM Road<br />
                  Kaloor, Ernakulam North – 682018
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1', fontSize: '0.8rem' }}>
                  <Phone size={12} color="#60a5fa" />
                  <a href="tel:+917593066771" style={{ color: '#cbd5e1', textDecoration: 'none' }}>+91 75930 66771</a>
                  <span>/</span>
                  <a href="tel:+917593066776" style={{ color: '#cbd5e1', textDecoration: 'none' }}>+91 75930 66776</a>
                </div>
              </div>

              {/* South Junction Office – Kochi */}
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                padding: '14px 16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                  <MapPin size={14} color="#60a5fa" style={{ flexShrink: 0 }} />
                  <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.88rem' }}>South Junction Office – Kochi</span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.5, margin: '4px 0 8px 0' }}>
                  63/3115 G, Karshaka Road<br />
                  Near South Railway Station<br />
                  Ernakulam – 682016, Kerala
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#cbd5e1', fontSize: '0.8rem' }}>
                  <Phone size={12} color="#60a5fa" />
                  <a href="tel:+917593066771" style={{ color: '#cbd5e1', textDecoration: 'none' }}>+91 75930 66771</a>
                  <span>/</span>
                  <a href="tel:+917593066776" style={{ color: '#cbd5e1', textDecoration: 'none' }}>+91 75930 66776</a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Full-width Registered Office Strip */}
      <div style={{
        background: '#071026',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '20px 0'
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', maxWidth: '780px' }}>
              <span style={{
                background: 'rgba(59,130,246,0.18)',
                color: '#60a5fa',
                border: '1px solid rgba(59,130,246,0.35)',
                borderRadius: '6px',
                padding: '4px 10px',
                fontSize: '0.74rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                flexShrink: 0,
                marginTop: '2px'
              }}>
                Registered Office
              </span>
              <div>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.9rem', marginBottom: '2px' }}>
                  Registered Office – Chennai, Tamil Nadu (EUROPA FUSION PRIVATE LIMITED)
                </div>
                <div style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.5 }}>
                  Office No. 715A, No. 769, Spencer Plaza, Anna Salai, Chennai, Tamil Nadu – 600002, India
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.84rem' }}>
              <Phone size={13} color="#60a5fa" />
              <span style={{ color: '#94a3b8' }}>Phone:</span>
              <a href="tel:+919974798803" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}>+91 99747 98803</a>
              <span style={{ color: '#475569' }}>/</span>
              <a href="tel:+919220406733" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'none' }}>+91 92204 06733</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Regulatory Strip */}
      <div style={{ background: '#050c1e', padding: '22px 0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            marginBottom: '10px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.88rem' }}>EUROPA FUSION PRIVATE LIMITED</span>
              <span style={{ color: '#334155' }}>|</span>
              <span style={{ color: '#94a3b8', fontSize: '0.82rem' }}>CIN: U80302TN2021PTC146401</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <span style={{ color: '#64748b', fontSize: '0.82rem' }}>© 2026 FREIE ADMITS. All Rights Reserved.</span>
              <span style={{ color: '#334155' }}>|</span>
              {[
                { label: 'Privacy Policy', to: '/privacy-policy' },
                { label: 'Terms & Conditions', to: '/terms-conditions' },
                { label: 'Disclaimer', to: '/disclaimer' },
                { label: 'Refund Policy', to: '/refund-policy' }
              ].map((item, i) => (
                <Link
                  key={i}
                  to={item.to}
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => (e.target.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.target.style.color = '#94a3b8')}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <p style={{ color: '#475569', fontSize: '0.76rem', margin: 0, lineHeight: 1.55 }}>
            <em>FREIE ADMITS is an education consultancy brand. Admission, scholarship, visa, and employment outcomes depend on eligibility, university/institutional decisions, and applicable immigration regulations.</em>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-4col-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-4col-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </footer>
  );
}
