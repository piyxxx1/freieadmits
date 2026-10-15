import React from 'react';
import { AboutHeroIllustration } from '../components/illustrations/AboutIllustrations';
import { HeroIllustration } from '../components/illustrations/HeroIllustration';
import { UniversitySlider } from '../components/UniversitySlider';
import { 
  Target, 
  Compass, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  UserCheck
} from 'lucide-react';

export function AboutUs({ onOpenCounselling, onOpenEvaluation }) {
  const approachSteps = [
    {
      step: '01',
      title: 'Understand',
      desc: 'We begin by understanding your academic background, interests, career goals and preferred destination.',
      img: '/images/about-process/step1.jpg'
    },
    {
      step: '02',
      title: 'Explore',
      desc: 'We identify relevant countries, courses and universities based on your profile.',
      img: '/images/about-process/step2.jpg'
    },
    {
      step: '03',
      title: 'Plan',
      desc: 'We create a practical application strategy and explain the requirements involved.',
      img: '/images/about-process/step3.jpg'
    },
    {
      step: '04',
      title: 'Apply',
      desc: 'We assist you through the application and documentation process.',
      img: '/images/about-process/step4.jpg'
    },
    {
      step: '05',
      title: 'Prepare',
      desc: 'After admission, we guide you through the next stages, including visa preparation and pre-departure planning.',
      img: '/images/about-process/step5.jpg'
    }
  ];

  return (
    <div>
      {/* 1. HERO SECTION */}
      <section className="hero-section-premium">
        {/* Animated Mesh Background */}
        <div className="hero-mesh-bg" aria-hidden="true">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
          <div className="hero-grid-dots" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-grid">
            {/* Left Column */}
            <div className="hero-left-col">

              {/* Premium eyebrow pill */}
              <div className="hero-eyebrow-pill">
                <span className="hero-eyebrow-dot" />
                <span>Trusted European Study Abroad Experts</span>
              </div>

              <h1 className="hero-headline">
                Where Academic <span className="hero-headline-dark">Ambition</span>
                <br className="hero-br-hide-sm" />
                Meets <span className="hero-gradient-text-blue">European Opportunity</span>
              </h1>

              <p className="hero-subtext">
                Personalised guidance for ambitious students seeking the right university and programme across <strong>Germany and Europe</strong>.
              </p>

              {/* Action Buttons */}
              <div className="hero-cta-row">
                <button onClick={onOpenCounselling} className="btn btn-primary btn-lg hero-btn-primary">
                  <Sparkles size={18} />
                  <span>Book Free Counselling</span>
                  <ArrowRight size={16} />
                </button>
                <button onClick={onOpenEvaluation} className="btn hero-btn-outline btn-lg">
                  <UserCheck size={18} />
                  <span>Get Profile Evaluation</span>
                </button>
              </div>
            </div>

            {/* Right Column: Hero Illustration */}
            <div className="hero-art-col">
              <div className="hero-art-glow-ring" />
              <div className="hero-art-inner animate-float">
                <HeroIllustration />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SLIDER */}
      <UniversitySlider />

      {/* 3. ABOUT US */}
      <section style={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        padding: '64px 0 65px 0'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', alignItems: 'center', gap: '48px' }} className="about-hero-grid">
            <div>
              <span className="badge-pill badge-primary">
                <Sparkles size={14} /> ABOUT US
              </span>
              <h1 className="about-hero-title">
                Education Deserves a Considered Choice.
              </h1>
              <div className="about-editorial-prose" style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: '1.42rem',
                lineHeight: 1.65,
                color: '#334155'
              }}>
                <p style={{ marginBottom: '18px' }}>
                  <strong style={{ fontStyle: 'normal', fontWeight: 700, color: '#1c2a4f' }}>EUROPA FUSION</strong> is a European higher-education advisory built around a simple belief: where and what you study deserves careful consideration.
                </p>
                <p style={{ marginBottom: '18px' }}>
                  We help students make sense of the European academic landscape — its universities, programmes, admission pathways and possibilities — and approach it with greater knowledge and direction.
                </p>
                <p style={{ marginBottom: '18px' }}>
                  Our counsel is individual, informed and academically grounded, shaped by the understanding that no two students arrive with the same background or ambition.
                </p>
                <p style={{ margin: 0 }}>
                  We bring clarity to the possibilities; students can choose their path with purpose.
                </p>
              </div>
            </div>

            <div className="about-hero-art">
              <AboutHeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR MISSION & OUR VISION */}
      <section className="section-py" style={{ background: '#ffffff', borderTop: '1px solid #f1f5f9', overflow: 'hidden' }}>
        <div className="container">
          
          {/* Mission Block - Left Aligned */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '72px' }}>
            <div style={{ maxWidth: '780px', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                <h2 style={{
                  fontSize: '1.85rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: '#1c2a4f',
                  margin: 0,
                  lineHeight: 1
                }}>
                  OUR <span style={{ color: '#3b82f6' }}>MISSION</span>
                </h2>
                <div style={{ flex: 1, height: '2px', background: 'linear-gradient(90deg, #3b82f6 0%, #e2e8f0 100%)' }} />
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontStyle: 'italic', fontSize: '2.15rem', color: '#1c2a4f', lineHeight: 1.28, marginBottom: '20px' }}>
                To Cultivate Scholars, Not Merely Applicants.
              </h3>

              <div style={{ color: '#475569', fontSize: '1.08rem', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '18px' }}>
                  EUROPA FUSION exists to uphold the seriousness of the academic journey. We believe a university education is among the most consequential commitments a young person will make, and it deserves to be entered with rigor, reflection, and intellectual honesty.
                </p>
                <p style={{ margin: 0 }}>
                  We seek to nurture in every student a clear sense of scholarly purpose: the discipline to question, the humility to learn, and the resolve to pursue excellence for its own sake. In doing so, we hope to restore to the pursuit of higher education its proper dignity, where ambition is governed by understanding, and achievement is measured by substance rather than status.
                </p>
              </div>
            </div>
          </div>

          {/* Elegant Connector Divider */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', margin: '0 auto 72px auto', maxWidth: '600px' }}>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, #cbd5e1)' }} />
            <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#3b82f6', opacity: 0.6 }} />
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #cbd5e1, transparent)' }} />
          </div>

          {/* Vision Block - Right Aligned */}
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ maxWidth: '780px', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                <div style={{ flex: 1, height: '2px', background: 'linear-gradient(90deg, #e2e8f0 0%, #3b82f6 100%)' }} />
                <h2 style={{
                  fontSize: '1.85rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                  color: '#1c2a4f',
                  margin: 0,
                  lineHeight: 1
                }}>
                  OUR <span style={{ color: '#3b82f6' }}>VISION</span>
                </h2>
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontStyle: 'italic', fontSize: '2.15rem', color: '#1c2a4f', lineHeight: 1.28, marginBottom: '20px' }}>
                To Advance the Enduring Ideals of Scholarship.
              </h3>

              <div style={{ color: '#475569', fontSize: '1.08rem', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '18px' }}>
                  We envision a generation of students who approach the world's great institutions not as destinations to be won, but as communities of thought to join and enrich. We aspire to become a trusted name in international education, recognized for our principles as much as our outcomes.
                </p>
                <p style={{ margin: 0 }}>
                  Guided by integrity, intellectual independence and a long view of what learning can achieve, we aim to help shape a culture in which education serves both the individual and the wider good. In every student we support, we hope to see the beginnings of a life devoted to knowledge, service and distinction.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. WHAT WE DO */}
      <section className="section-py" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="section-title">
            WHAT <span className="text-highlight">WE DO</span>
          </h2>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, fontStyle: 'italic', fontSize: '1.8rem', color: '#1c2a4f', marginBottom: '24px' }}>
            From Ambition to Academic Direction.
          </h3>
          
          <div style={{ textAlign: 'left', color: '#475569', fontSize: '1.05rem', lineHeight: 1.7 }}>
            <p style={{ marginBottom: '16px' }}>
              European higher education is not a single system. Each country, university, and programme brings its own academic structures, expectations, and routes to admission.
            </p>
            <p style={{ marginBottom: '16px' }}>
              <strong>EUROPA FUSION</strong> brings these elements into perspective.
            </p>
            <p style={{ marginBottom: '16px' }}>
              We examine the opportunities available to each student, distinguish what is relevant from what is merely possible, and shape a coherent pathway from initial exploration through to admission.
            </p>
            <p style={{ marginBottom: '16px' }}>
              Behind every recommendation is research. Behind every application is preparation. And behind every pathway is a reason for choosing it.
            </p>
          </div>
        </div>
      </section>

      {/* 6. OUR APPROACH (5 STAGES) - IN LAST */}
      <section className="section-py" style={{ background: '#ffffff', borderTop: '1px solid #e2e8f0', padding: '80px 0 90px 0' }}>
        <div className="container" style={{ maxWidth: '1160px' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '3rem',
              fontWeight: 700,
              color: '#1c2a4f',
              marginBottom: '14px',
              letterSpacing: '-0.01em'
            }}>
              Our Approach
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#475569',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              A 5-stage framework designed to give clarity, avoid common application errors, and keep you confident.
            </p>
          </div>

          {/* 3 + 2 Grid Layout matching the screenshot */}
          <div className="approach-cards-grid">
            {approachSteps.map((st, i) => (
              <div key={i} className="approach-card">
                <div className="approach-card-img-wrap">
                  <img src={st.img} alt={st.title} className="approach-card-img" />
                </div>
                <div className="approach-card-body">
                  <h3 className="approach-card-title">{st.title}</h3>
                  <p className="approach-card-desc">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>





      <style>{`
        /* ====== PREMIUM HERO KEYFRAMES ====== */
        @keyframes orbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 15px) scale(0.97); }
        }
        @keyframes orbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-40px, 30px) scale(1.08); }
          70% { transform: translate(20px, -10px) scale(0.95); }
        }
        @keyframes orbFloat3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(25px, 20px); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.75; transform: scale(1.06); }
        }
        @keyframes eyebrowFade {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dotScroll {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }

        /* ====== HERO SECTION ====== */
        .hero-section-premium {
          position: relative;
          overflow: hidden;
          padding: 140px 0 160px 0;
          min-height: 85vh;
          display: flex;
          align-items: center;
          background: #ffffff;
        }

        /* Animated mesh/orb background */
        .hero-mesh-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
        }
        .hero-orb-1 {
          width: 540px; height: 540px;
          top: -15%; right: -8%;
          background: radial-gradient(circle, rgba(28, 42, 79, 0.05) 0%, rgba(28, 42, 79, 0.02) 60%, transparent 100%);
          animation: orbFloat1 14s ease-in-out infinite;
        }
        .hero-orb-2 {
          width: 420px; height: 420px;
          bottom: -10%; left: -6%;
          background: radial-gradient(circle, rgba(148, 163, 184, 0.1) 0%, rgba(148, 163, 184, 0.03) 60%, transparent 100%);
          animation: orbFloat2 18s ease-in-out infinite;
        }
        .hero-orb-3 {
          width: 280px; height: 280px;
          top: 40%; left: 40%;
          background: radial-gradient(circle, rgba(28, 42, 79, 0.04) 0%, transparent 70%);
          animation: orbFloat3 10s ease-in-out infinite;
        }
        .hero-grid-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(28, 42, 79, 0.05) 1.5px, transparent 1.5px);
          background-size: 28px 28px;
          animation: dotScroll 6s linear infinite;
          opacity: 0.7;
        }

        /* ====== HERO GRID ====== */
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 48px;
        }

        .hero-left-col {
          animation: eyebrowFade 0.6s ease both;
        }

        /* ====== EYEBROW PILL ====== */
        .hero-eyebrow-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.85);
          border: 1.5px solid rgba(147, 197, 253, 0.6);
          border-radius: 100px;
          padding: 6px 14px 6px 10px;
          font-size: 0.78rem;
          font-weight: 700;
          color: #1c2a4f;
          margin-bottom: 20px;
          backdrop-filter: blur(8px);
          box-shadow: 0 2px 12px rgba(59, 130, 246, 0.12);
          letter-spacing: 0.02em;
        }
        .hero-eyebrow-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.25);
          animation: glowPulse 2.5s ease-in-out infinite;
          flex-shrink: 0;
        }

        /* ====== HEADLINE ====== */
        .hero-headline {
          font-size: clamp(2.3rem, 3.8vw, 3.35rem);
          font-weight: 700;
          color: #1c2a4f;
          line-height: 1.14;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
          font-family: var(--font-heading);
        }
        .hero-headline-dark { color: #1c2a4f; }
        .hero-gradient-text-blue {
          background: linear-gradient(135deg, #1c2a4f 0%, #1c2a4f 50%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-br-hide-sm { display: inline; }

        /* ====== SUBTEXT ====== */
        .hero-subtext {
          font-size: 1.07rem;
          color: #475569;
          line-height: 1.68;
          margin-bottom: 28px;
          max-width: 580px;
        }

        /* ====== CTA ROW ====== */
        .hero-cta-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 28px;
        }
        .hero-btn-primary {
          box-shadow: 0 10px 28px -4px rgba(29, 78, 216, 0.42), 0 0 0 0 rgba(29,78,216,0);
          padding: 14px 28px;
          transition: box-shadow 0.25s ease, transform 0.2s ease;
        }
        .hero-btn-primary:hover {
          box-shadow: 0 14px 36px -4px rgba(29, 78, 216, 0.55);
          transform: translateY(-2px);
        }
        .hero-btn-outline {
          background: rgba(255,255,255,0.9);
          border: 1.5px solid #cbd5e1;
          padding: 14px 24px;
          color: #1c2a4f;
          backdrop-filter: blur(8px);
          transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }
        .hero-btn-outline:hover {
          background: #f8faff;
          border-color: #93c5fd;
          color: #1c2a4f;
          transform: translateY(-2px);
        }

        /* ====== ART COLUMN ====== */
        .hero-art-col {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-art-glow-ring {
          position: absolute;
          width: 88%;
          height: 88%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(191, 219, 254, 0.45) 0%, rgba(254, 243, 199, 0.25) 60%, transparent 100%);
          animation: glowPulse 5s ease-in-out infinite;
          pointer-events: none;
        }
        .hero-art-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 560px;
        }

        .about-hero-title {
          font-size: clamp(1.75rem, 2.5vw, 2.65rem);
          font-weight: 800;
          color: #1c2a4f;
          line-height: 1.2;
          margin-bottom: 20px;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }

        /* ====== OUR APPROACH 3+2 CARDS GRID (FROM SCREENSHOT) ====== */
        .approach-cards-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 28px;
        }

        .approach-card {
          flex: 0 0 calc(33.333% - 20px);
          max-width: calc(33.333% - 20px);
          background: #ffffff;
          border: 1.5px solid #eef2f6;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(28, 42, 79, 0.05);
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .approach-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 40px rgba(28, 42, 79, 0.1);
          border-color: #cbd5e1;
        }

        .approach-card-img-wrap {
          width: 100%;
          height: 240px;
          background: #ffffff;
          padding: 24px 24px 10px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }

        .approach-card-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .approach-card-body {
          padding: 16px 28px 36px 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .approach-card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #1c2a4f;
          margin: 0 0 10px 0;
          letter-spacing: -0.01em;
        }

        .approach-card-desc {
          font-size: 0.96rem;
          color: #64748b;
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 992px) {
          .approach-card {
            flex: 0 0 calc(50% - 15px);
            max-width: calc(50% - 15px);
          }
        }

        @media (max-width: 640px) {
          .approach-card {
            flex: 0 0 100%;
            max-width: 100%;
          }
          .approach-card-img-wrap {
            height: 200px;
            padding: 18px;
          }
        }

        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .hero-art-col {
            order: -1;
            max-width: 380px;
            margin: 0 auto;
          }
          .about-hero-title {
            white-space: normal;
          }
          .about-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .mission-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .hero-section-premium { padding: 100px 0 120px 0; min-height: 80vh; }
          .hero-headline { font-size: clamp(2rem, 7.5vw, 2.5rem); }
          .hero-br-hide-sm { display: none; }
          .hero-cta-row { gap: 10px; }
        }

        @media (max-width: 480px) {
          .hero-art-col { max-width: 100%; }
        }
      `}</style>
    </div>
  );
}
