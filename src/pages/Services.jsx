import React from 'react';
import { 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

export function Services({ onOpenCounselling, onOpenEvaluation }) {
  const processSteps = [
    { 
      number: '01', 
      title: 'Career Counselling', 
      desc: 'Get personalised guidance to choose the right course and destination based on your profile and goals.',
      img: '/images/process/step1.jpg'
    },
    { 
      number: '02', 
      title: 'University Applications', 
      desc: 'We assist with application preparation, document review and submission to your chosen universities.',
      img: '/images/process/step2.jpg'
    },
    { 
      number: '03', 
      title: 'Visa Assistance', 
      desc: 'Step-by-step support for your student visa documentation and application process.',
      img: '/images/process/step3.jpg'
    },
    { 
      number: '04', 
      title: 'Language & Funding', 
      desc: 'Prepare for your future with structured language training and guidance on scholarships and funding.',
      img: '/images/process/step4.jpg'
    },
    { 
      number: '05', 
      title: 'Pre-Departure Support', 
      desc: 'From accommodation and travel to essential guidance, we prepare you for a smooth transition abroad.',
      img: '/images/process/step5.jpg'
    },
  ];

  return (
    <div>
      {/* 1. HERO HEADER */}
      <section style={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        padding: '54px 0 44px 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="badge-pill badge-primary">
            <Sparkles size={14} /> End-to-End Structured Guidance
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>
            Our Services
          </h1>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#475569', marginBottom: '16px' }}>
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

      {/* 2. MILESTONE METHODOLOGY */}
      <section className="section-py" style={{ background: '#ffffff', paddingTop: '20px' }}>
        <div className="container">
          <div className="milestone-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="milestone-card">
                <div className="milestone-img-wrap">
                  <img src={step.img} alt={step.title} className="milestone-img" loading="lazy" />
                </div>
                <div className="milestone-content">
                  <h3 className="milestone-title">{step.title}</h3>
                  <p className="milestone-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. YOUR JOURNEY. ONE TEAM. CTA */}
      <section className="section-py" style={{ background: '#1c2a4f', color: '#ffffff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span style={{ background: 'rgba(59, 130, 246, 0.25)', color: '#eef2fa', padding: '4px 14px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            FREIE ADMITS
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', margin: '16px 0 12px 0', fontFamily: 'var(--font-heading)' }}>
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
        /* ====== MILESTONE TIMELINE ====== */
        .milestone-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          margin-bottom: 36px;
        }
        .milestone-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          width: calc(33.333% - 16px);
          min-width: 280px;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
        }
        .milestone-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
        }
        .milestone-img-wrap {
          position: relative;
          width: 100%;
          padding-top: 70%;
          background: #ffffff;
          overflow: hidden;
          border-bottom: 1px solid #e2e8f0;
        }
        .milestone-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 16px;
          box-sizing: border-box;
          transition: transform 0.5s ease;
        }
        .milestone-card:hover .milestone-img {
          transform: scale(1.05);
        }
        .milestone-content {
          padding: 32px 24px 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .milestone-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1c2a4f;
          margin: 0 0 10px 0;
          line-height: 1.3;
        }
        .milestone-desc {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.6;
          margin: 0;
        }
        
        @media (max-width: 992px) {
          .milestone-card { width: calc(50% - 12px); }
        }
        @media (max-width: 640px) {
          .milestone-card { width: 100%; }
        }
      `}</style>
    </div>
  );
}
