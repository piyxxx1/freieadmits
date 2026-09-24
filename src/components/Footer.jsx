import React from 'react';
import { Link } from '../context/RouterContext';
import { BrandLogo } from './BrandLogo';
import { 
  Phone, 
  Mail, 
  ShieldCheck,
  ArrowRight,
  Laptop
} from 'lucide-react';

export function Footer({ onOpenCounselling }) {
  return (
    <footer style={{ background: '#070c18', color: '#cbd5e1', paddingTop: '64px', paddingBottom: '32px', borderTop: '1px solid #1e293b' }}>
      <div className="container">
        {/* Top CTA Banner in Footer */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          border: '1.5px solid #334155',
          borderRadius: '20px',
          padding: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '56px',
          color: '#ffffff',
          boxShadow: '0 20px 30px rgba(0, 0, 0, 0.25)'
        }}>
          <div style={{ maxWidth: '640px' }}>
            <span style={{ background: 'rgba(217, 119, 6, 0.25)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.4)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Your Future Starts with the Right Decision
            </span>
            <h3 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#ffffff', margin: '14px 0 8px 0' }}>
              Don’t Choose a Country Simply Because It Is Popular.
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.98rem', margin: 0 }}>
              Choose a course and university that fit your profile and your future goals. Start your international education journey with FREIE ADMITS today.
            </p>
          </div>
          <button
            onClick={onOpenCounselling}
            className="btn btn-primary btn-lg"
            style={{ borderRadius: '12px' }}
          >
            <span>Book Free Counselling</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* 4 Column Main Footer */}
        <div className="grid-4" style={{ marginBottom: '48px', gap: '36px' }}>
          {/* Col 1: Brand & Tagline */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <BrandLogo theme="dark" size="default" />
            </div>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
              Helping students make informed global education decisions. Profile-based counselling, European study opportunities, dMAT preparation, and structured application guidance.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem' }}>
              <a href="tel:+919220406733" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', textDecoration: 'none' }}>
                <Phone size={14} color="#3b82f6" />
                <span>+91 92204 06733</span>
              </a>
              <a href="mailto:freieadmits@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', textDecoration: 'none' }}>
                <Mail size={14} color="#3b82f6" />
                <span>freieadmits@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.02rem', fontWeight: 700, marginBottom: '18px', borderLeft: '3px solid #3b82f6', paddingLeft: '10px' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
              <li>
                <Link to="/" style={{ color: '#94a3b8', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowRight size={13} color="#3b82f6" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#94a3b8', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowRight size={13} color="#3b82f6" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/destinations" style={{ color: '#94a3b8', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowRight size={13} color="#3b82f6" />
                  <span>Study Destinations</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" style={{ color: '#94a3b8', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowRight size={13} color="#3b82f6" />
                  <span>Courses &amp; Programs</span>
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: '#94a3b8', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowRight size={13} color="#3b82f6" />
                  <span>Our Services</span>
                </Link>
              </li>
              <li>
                <Link to="/dmat-germany" style={{ color: '#fbbf24', fontWeight: 600, transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Laptop size={13} color="#fbbf24" />
                  <span>dMAT Germany Guidance</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: '#94a3b8', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowRight size={13} color="#3b82f6" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: European Destinations */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.02rem', fontWeight: 700, marginBottom: '18px', borderLeft: '3px solid #d97706', paddingLeft: '10px' }}>
              Study in Europe
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              {[
                { name: 'Germany', flag: '🇩🇪' },
                { name: 'Finland', flag: '🇫🇮' },
                { name: 'France', flag: '🇫🇷' },
                { name: 'Spain', flag: '🇪🇸' },
                { name: 'Poland', flag: '🇵🇱' },
                { name: 'Italy', flag: '🇮🇹' },
                { name: 'Austria', flag: '🇦🇹' },
                { name: 'Sweden', flag: '🇸🇪' },
                { name: 'Denmark', flag: '🇩🇰' },
                { name: 'Netherlands', flag: '🇳🇱' },
                { name: 'Ireland', flag: '🇮🇪' }
              ].map((dest, i) => (
                <Link
                  key={i}
                  to="/destinations"
                  style={{
                    color: '#94a3b8',
                    fontSize: '0.86rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '3px 0',
                    transition: 'color 0.2s'
                  }}
                >
                  <span>{dest.flag}</span>
                  <span>{dest.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Col 4: Key Pillars */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.02rem', fontWeight: 700, marginBottom: '18px', borderLeft: '3px solid #10b981', paddingLeft: '10px' }}>
              Why FREIE ADMITS
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: '#94a3b8' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <ShieldCheck size={16} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Profile-based guidance over hype</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <ShieldCheck size={16} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Specialized Germany &amp; European admissions</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <ShieldCheck size={16} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Computer-based dMAT test guidance</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <ShieldCheck size={16} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span>Transparent and realistic advisory</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Legal & Regulatory Disclaimer */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.6)',
          border: '1px solid #1e293b',
          borderRadius: '10px',
          padding: '16px 20px',
          fontSize: '0.8rem',
          color: '#94a3b8',
          lineHeight: 1.55,
          marginBottom: '28px'
        }}>
          <strong style={{ color: '#e2e8f0' }}>Important Disclaimer: </strong>
          Admission decisions are made solely by individual universities. Visa decisions are made exclusively by the relevant immigration authorities and consulates. FREIE ADMITS provides counseling, documentation assistance, and process guidance throughout the application journey.
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #1e293b',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.82rem',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} FREIE ADMITS. All rights reserved.
          </div>
          <div>
            Your Journey. Our Guidance. Your Global Future.
          </div>
        </div>
      </div>
    </footer>
  );
}
