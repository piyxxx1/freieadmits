import React from 'react';
import { Link } from '../context/RouterContext';
import { BrandLogo } from './BrandLogo';
import { Phone, Globe, Mail, MapPin } from 'lucide-react';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaLinkedinIn, 
  FaYoutube, 
  FaPaperPlane,
  FaGraduationCap,
  FaSearch,
  FaClipboardList,
  FaLanguage,
  FaLaptop,
  FaBriefcase,
  FaPassport,
  FaCreditCard,
  FaAward,
  FaPlaneDeparture
} from 'react-icons/fa';

const services = [
  { icon: <FaGraduationCap size={14} />, label: 'University Admissions' },
  { icon: <FaSearch size={13} />, label: 'Course & University Selection' },
  { icon: <FaClipboardList size={14} />, label: 'Application Assistance' },
  { icon: <FaLanguage size={15} />, label: 'German Language Training' },
  { icon: <FaLaptop size={13} />, label: 'dMAT Germany' },
  { icon: <FaBriefcase size={13} />, label: 'Ausbildung Programs' },
  { icon: <FaPassport size={14} />, label: 'Visa Guidance' },
  { icon: <FaCreditCard size={13} />, label: 'Education Loan Assistance' },
  { icon: <FaAward size={14} />, label: 'Scholarship Guidance' },
  { icon: <FaPlaneDeparture size={13} />, label: 'Pre-Departure Support' },
];

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Destinations', to: '/destinations' },
  { label: 'Courses', to: '/courses' },
  { label: 'Services', to: '/services' },
  { label: 'dMAT Germany', to: '/dmat-germany' },
  { label: 'Contact Us', to: '/contact' },
];

const studyDestinations = [
  { name: 'Germany',        iso: 'de' },
  { name: 'Lithuania',      iso: 'lt' },
  { name: 'France',         iso: 'fr' },
  { name: 'Sweden',         iso: 'se' },
  { name: 'Netherlands',    iso: 'nl' },
  { name: 'Denmark',        iso: 'dk' },
  { name: 'Spain',          iso: 'es' },
  { name: 'United Kingdom', iso: 'gb' },
  { name: 'Poland',         iso: 'pl' },
  { name: 'Australia',      iso: 'au' },
  { name: 'Latvia',         iso: 'lv' },
  { name: 'Canada',         iso: 'ca' },
];

export function Footer({ onOpenCounselling }) {
  return (
    <footer style={{ background: '#0d1b3e', color: '#cbd5e1' }}>
      {/* Main Footer Body */}
      <div style={{ padding: '52px 0 36px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.8fr 1.1fr 1fr 0.9fr',
            gap: '36px',
            alignItems: 'flex-start'
          }} className="footer-main-grid">

            {/* Col 1: Brand */}
            <div>
              <div style={{ marginBottom: '12px' }}>
                <BrandLogo theme="dark" size="default" />
              </div>
              <p style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 700, margin: '12px 0 4px 0', lineHeight: 1.4 }}>
                Your Journey. Our Guidance.<br />Your Global Future.
              </p>
              <div style={{ width: '36px', height: '3px', background: '#1c5fa8', marginBottom: '14px' }} />
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.65, marginBottom: '20px' }}>
                FREIE ADMITS is a study-abroad guidance brand of <strong style={{ color: '#cbd5e1' }}>EUROPA FUSION PRIVATE LIMITED</strong>, helping students explore international education opportunities through personalised counselling, university applications, language preparation and visa guidance.
              </p>
              {/* Social Icons */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                {[
                  { icon: <FaInstagram size={16} />, href: 'https://www.instagram.com/freieadmits/' },
                  { icon: <FaFacebookF size={16} />, href: 'https://www.facebook.com/profile.php?id=61580822580581' },
                  { icon: <FaLinkedinIn size={16} />, href: 'https://www.linkedin.com/company/freie-admits/' },
                  { icon: <FaYoutube size={16} />, href: '#' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                    width: '36px', height: '36px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#cbd5e1', textDecoration: 'none',
                    transition: 'background 0.2s'
                  }}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Quick Links + Study Destinations */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '16px', marginTop: 0 }}>
                Quick Links
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {quickLinks.map((lnk, i) => (
                  <li key={i}>
                    <Link to={lnk.to} style={{ color: '#94a3b8', fontSize: '0.86rem', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                      <span style={{ color: '#4a90d9', fontSize: '0.7rem' }}>›</span>
                      {lnk.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '14px', marginTop: 0 }}>
                Study Destinations
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px 12px' }}>
                {studyDestinations.map((dest, i) => (
                  <Link key={i} to="/destinations" style={{ color: '#94a3b8', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                    <img
                      src={`https://flagcdn.com/w40/${dest.iso}.png`}
                      alt={dest.name}
                      style={{ width: '18px', height: '13px', objectFit: 'cover', borderRadius: '2px', flexShrink: 0, boxShadow: '0 1px 2px rgba(0,0,0,0.25)' }}
                      loading="lazy"
                    />
                    <span>{dest.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Col 3: Our Services */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '16px', marginTop: 0 }}>
                Our Services
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {services.map((svc, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{
                      width: '28px', height: '28px',
                      background: 'rgba(28, 95, 168, 0.25)',
                      border: '1px solid rgba(74, 144, 217, 0.35)',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#4a90d9', flexShrink: 0
                    }}>{svc.icon}</span>
                    <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{svc.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 4: Our Offices */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '16px', marginTop: 0 }}>
                Our Offices
              </h4>

              {/* Chennai */}
              <div style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '4px' }}>
                  <MapPin size={14} color="#4a90d9" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.88rem' }}>Registered Office – Chennai</div>
                    <div style={{ color: '#4a90d9', fontWeight: 700, fontSize: '0.78rem' }}>EUROPA FUSION PRIVATE LIMITED</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.5, margin: '4px 0' }}>
                      Office No. 715A, No. 769, Spencer Plaza,<br />
                      Anna Salai, Chennai, Tamil Nadu – 600002, India
                    </div>
                    <a href="tel:+919974798803" style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                      <Phone size={12} /> +91 99747 98803
                    </a>
                  </div>
                </div>
              </div>

              {/* Noida */}
              <div style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <MapPin size={14} color="#4a90d9" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.88rem' }}>Noida Office</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.5, margin: '4px 0' }}>
                      B-1A/06, Sector 51, Noida<br />
                      Landmark: Above CSB Bank<br />
                      Uttar Pradesh – 201301
                    </div>
                    <a href="tel:+919974798803" style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                      <Phone size={12} /> +91 99747 98803
                    </a>
                  </div>
                </div>
              </div>

              {/* Kochi */}
              <div style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <MapPin size={14} color="#4a90d9" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.88rem' }}>Kochi Office</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.5, margin: '4px 0' }}>
                      2nd Floor, Rameesha Building<br />
                      Opposite Nirmala Shishu Bhavan<br />
                      SRM Road, Kaloor<br />
                      Ernakulam North – 682018
                    </div>
                    <a href="tel:+917593066771" style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                      <Phone size={12} /> +91 75930 66771 / 76
                    </a>
                  </div>
                </div>
              </div>

              {/* South Junction – Kochi */}
              <div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <MapPin size={14} color="#4a90d9" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.88rem' }}>South Junction Office – Kochi</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.5, margin: '4px 0' }}>
                      83/3115 G, Karshaka Road<br />
                      Near South Railway Station<br />
                      Ernakulam – 682016, Kerala
                    </div>
                    <a href="tel:+917593066771" style={{ color: '#94a3b8', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}>
                      <Phone size={12} /> +91 75930 66771 / 76
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 5: Contact Us + Follow Us */}
            <div>
              <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '16px', marginTop: 0 }}>
                Contact Us
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                <a href="tel:+919974798803" style={{ color: '#94a3b8', fontSize: '0.86rem', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                  <span style={{ width: '28px', height: '28px', background: 'rgba(28,95,168,0.2)', border: '1px solid rgba(28,95,168,0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={13} color="#4a90d9" />
                  </span>
                  +91 99747 98803
                </a>
                <a href="https://www.freieadmits.io" target="_blank" rel="noreferrer" style={{ color: '#94a3b8', fontSize: '0.86rem', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                  <span style={{ width: '28px', height: '28px', background: 'rgba(28,95,168,0.2)', border: '1px solid rgba(28,95,168,0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Globe size={13} color="#4a90d9" />
                  </span>
                  www.freieadmits.io
                </a>
                <a href="mailto:info@freieadmits.io" style={{ color: '#94a3b8', fontSize: '0.86rem', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                  <span style={{ width: '28px', height: '28px', background: 'rgba(28,95,168,0.2)', border: '1px solid rgba(28,95,168,0.3)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={13} color="#4a90d9" />
                  </span>
                  info@freieadmits.io
                </a>
              </div>

              <h4 style={{ color: '#ffffff', fontSize: '1rem', fontWeight: 700, marginBottom: '14px', marginTop: 0 }}>
                Follow Us
              </h4>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '28px' }}>
                {[
                  { icon: <FaInstagram size={15} />, href: 'https://www.instagram.com/freieadmits/' },
                  { icon: <FaFacebookF size={15} />, href: 'https://www.facebook.com/profile.php?id=61580822580581' },
                  { icon: <FaLinkedinIn size={15} />, href: 'https://www.linkedin.com/company/freie-admits/' },
                  { icon: <FaYoutube size={15} />, href: '#' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                    width: '34px', height: '34px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#cbd5e1', textDecoration: 'none',
                    transition: 'background 0.2s'
                  }}>
                    {s.icon}
                  </a>
                ))}
              </div>

              {/* Dream Study Build Your Future */}
              <div style={{
                background: 'rgba(28,95,168,0.1)',
                border: '1px solid rgba(28,95,168,0.25)',
                borderRadius: '12px',
                padding: '16px 18px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{ fontFamily: 'Georgia, serif', color: '#4a90d9', lineHeight: 1.3 }}>
                  <div style={{ fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 700 }}>Dream</div>
                  <div style={{ fontSize: '1.3rem', fontStyle: 'italic', fontWeight: 700 }}>Study</div>
                  <div style={{ fontSize: '1.2rem', fontStyle: 'italic', fontWeight: 700 }}>Build Your</div>
                  <div style={{ fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 700 }}>Future</div>
                </div>
                <span style={{ position: 'absolute', right: '14px', bottom: '14px', color: '#4a90d9', opacity: 0.7 }}><FaPaperPlane size={22} /></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: '#081229' }}>
        <div className="container" style={{ padding: '18px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.88rem' }}>EUROPA FUSION PRIVATE LIMITED</span>
                <span style={{ color: '#475569' }}>|</span>
                <span style={{ color: '#64748b', fontSize: '0.82rem' }}>CIN: U80302TN2021PTC146401</span>
              </div>
              <p style={{ color: '#475569', fontSize: '0.75rem', margin: 0, maxWidth: '520px', lineHeight: 1.5 }}>
                <em>FREIE ADMITS is an education consultancy brand. Admission, scholarship, visa and employment outcomes are subject to eligibility, university/institutional decisions and applicable immigration regulations.</em>
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <span style={{ color: '#64748b', fontSize: '0.82rem' }}>© 2026 FREIE ADMITS. All Rights Reserved.</span>
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
                    color: '#64748b',
                    fontSize: '0.82rem',
                    textDecoration: 'none',
                    borderLeft: i > 0 ? '1px solid #1c2a4f' : 'none',
                    paddingLeft: i > 0 ? '16px' : '0'
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .footer-main-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
