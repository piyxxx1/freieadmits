import React from 'react';
import { servicesData } from '../data/servicesData';
import { ServiceIllustration } from '../components/illustrations/ServiceIllustrations';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldAlert
} from 'lucide-react';

export function Services({ onOpenCounselling, onOpenEvaluation }) {
  return (
    <div>
      {/* 1. HERO HEADER */}
      <section style={{
        background: 'linear-gradient(180deg, #eff6ff 0%, #ffffff 100%)',
        padding: '54px 0 44px 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="badge-pill badge-primary">
            <Sparkles size={14} /> End-to-End Structured Guidance
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
            Our Services
          </h1>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#d97706', marginBottom: '16px' }}>
            From Your First Counselling Session to Your Departure
          </div>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.65, marginBottom: '28px' }}>
            Studying abroad involves multiple decisions and processes. <strong>FREIE ADMITS</strong> provides 
            structured guidance at every important stage of your journey.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={onOpenCounselling} className="btn btn-primary btn-lg">
              <span>Book Free Counselling</span>
              <ArrowRight size={18} />
            </button>
            <button onClick={onOpenEvaluation} className="btn btn-secondary btn-lg">
              <span>Get Profile Evaluation</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE 8 SERVICES BREAKDOWN */}
      <section className="section-py" style={{ background: '#ffffff', paddingTop: '20px' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {servicesData.map((service, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={service.id}
                  className="card-white service-breakdown-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isEven ? '120px 1fr' : '120px 1fr',
                    gap: '32px',
                    alignItems: 'start',
                    padding: '36px',
                    border: '1.5px solid #e2e8f0',
                    borderLeft: `6px solid ${service.color}`
                  }}
                >
                  {/* Left Column: Number & Illustration */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <span style={{
                      fontSize: '1.8rem',
                      fontWeight: 800,
                      color: service.color,
                      fontFamily: 'var(--font-heading)',
                      marginBottom: '8px'
                    }}>
                      {service.stepNumber}
                    </span>
                    <ServiceIllustration serviceId={service.id.replace('-evaluation', '').replace('-selection', '').replace('-guidance', '').replace('-support', '').replace('-assistance', '') || 'counseling'} width="64px" height="64px" />
                  </div>

                  {/* Right Column: Title, Description, and Key Points */}
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 800, color: service.color, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                      STAGE {service.stepNumber}
                    </div>
                    <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                      {service.title}
                    </h3>
                    <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.65, marginBottom: '20px' }}>
                      {service.fullDesc}
                    </p>

                    {/* Bullet Points */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginBottom: '16px' }} className="service-bullets-grid">
                      {service.keyPoints.map((pt, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}>
                          <CheckCircle2 size={16} color="#10b981" style={{ marginTop: '3px', flexShrink: 0 }} />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    {/* Disclaimer note for visa */}
                    {service.disclaimer && (
                      <div style={{
                        background: '#fffbeb',
                        border: '1px solid #fde68a',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        fontSize: '0.82rem',
                        color: '#92400e',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        marginTop: '12px'
                      }}>
                        <ShieldAlert size={16} color="#d97706" style={{ flexShrink: 0 }} />
                        <span>{service.disclaimer}</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. YOUR JOURNEY. ONE TEAM. CTA */}
      <section className="section-py" style={{ background: '#0a1128', color: '#ffffff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span style={{ background: 'rgba(59, 130, 246, 0.25)', color: '#60a5fa', padding: '4px 14px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            FREIE ADMITS
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', margin: '16px 0 12px 0' }}>
            Your Journey. One Team.
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '32px' }}>
            From choosing a course to preparing for your departure, FREIE ADMITS is here to guide you through the process.
          </p>
          <button onClick={onOpenCounselling} className="btn btn-primary btn-lg">
            <span>Start Your Journey</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .service-breakdown-row {
            grid-template-columns: 1fr !important;
          }
          .service-bullets-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
