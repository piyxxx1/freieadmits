import React from 'react';
import { useRouter } from '../context/RouterContext';
import { HeroIllustration } from '../components/illustrations/HeroIllustration';
import { CountryFlag } from '../components/CountryFlag';
import { destinationsData } from '../data/destinationsData';
import { UniversitySlider } from '../components/UniversitySlider';
import { 
  Sparkles, 
  ArrowRight, 
  Globe, 
  GraduationCap,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

const getFlagUrl = (id) => { 
  const map = { germany: 'de', finland: 'fi', ireland: 'ie', netherlands: 'nl', france: 'fr', spain: 'es', italy: 'it', poland: 'pl', austria: 'at', sweden: 'se', denmark: 'dk' }; 
  return `https://flagcdn.com/w640/${map[id] || 'eu'}.png`; 
};

export function Home({ onOpenCounselling, onOpenEvaluation }) {
  const { navigate } = useRouter();


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

      {/* 2. SPECIAL GERMANY & dMAT HIGHLIGHT BANNER */}
      <section style={{ background: '#1c2a4f', color: '#ffffff', padding: '48px 0', borderTop: '1px solid #1c2a4f', borderBottom: '1px solid #1c2a4f' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#ffffff', color: '#1c2a4f', padding: '4px 12px', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                <span>🇩🇪 Germany dMAT Guidance</span>
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.25, marginBottom: '14px' }}>
                Planning to Study a <span style={{ color: '#eef2fa' }}>Master's in Germany?</span>
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px' }}>
                FREIE ADMITS provides structured guidance for students preparing for the <strong>Digital Master's Assessment Test (dMAT)</strong>. Understand the process, prepare effectively and move forward with greater confidence.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button onClick={() => navigate('/dmat-germany')} className="btn btn-gold">
                  <span>Explore dMAT Germany</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UniversitySlider />
      
      {/* 3. WHY CHOOSE FREIE ADMITS */}
      <section className="section-py" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill badge-primary">Why FREIE ADMITS?</span>
            <h2 className="section-title">
              The Difference That <span className="text-highlight">Actually Matters</span>
            </h2>
            <p className="section-desc">
              Not every consultancy is the same. Here is what sets FREIE ADMITS apart.
            </p>
          </div>

          <div className="why-pillars-grid">
            {/* Pillar 1 */}
            <div className="why-pillar-card">
              <div className="why-pillar-num">01</div>
              <div style={{ width: "100%", height: "280px", overflow: "hidden", borderRadius: "12px", marginBottom: "16px", border: "1px solid #e2e8f0", background: "#ffffff" }}>
                <img src="/images/why/1.jpg" alt="Public University Focus" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3 className="why-pillar-title">Public University Focus</h3>
              <p className="why-pillar-desc">
                We specialise in guiding students into government-funded public universities across Europe — where tuition is free or near-zero, quality is world-class, and degrees are globally recognised.
              </p>
              <div className="why-pillar-tags">
                <span>€0 Tuition</span>
                <span>World Rankings</span>
                <span>No Capitation</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="why-pillar-card">
              <div className="why-pillar-num">02</div>
              <div style={{ width: "100%", height: "280px", overflow: "hidden", borderRadius: "12px", marginBottom: "16px", border: "1px solid #e2e8f0", background: "#ffffff" }}>
                <img src="/images/why/2.jpg" alt="Personalised Guidance" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3 className="why-pillar-title">Personalised Guidance</h3>
              <p className="why-pillar-desc">
                No templates, no mass counselling. Every student gets individual attention — we evaluate your academic background, goals and budget before suggesting a single university or country.
              </p>
              <div className="why-pillar-tags">
                <span>Profile-First</span>
                <span>1-on-1 Sessions</span>
                <span>Honest Advisory</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="why-pillar-card">
              <div className="why-pillar-num">03</div>
              <div style={{ width: "100%", height: "280px", overflow: "hidden", borderRadius: "12px", marginBottom: "16px", border: "1px solid #e2e8f0", background: "#ffffff" }}>
                <img src="/images/why/3.jpg" alt="Germany &amp; Europe Expertise" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3 className="why-pillar-title">Germany &amp; Europe Expertise</h3>
              <p className="why-pillar-desc">
                Deep specialisation in Germany (dMAT, APS, TU9 universities), Finland, Ireland, Netherlands, France, Poland and 6 more destinations — not a generic global consultancy.
              </p>
              <div className="why-pillar-tags">
                <span>dMAT Prep</span>
                <span>11+ Destinations</span>
                <span>APS Guidance</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="why-pillar-card">
              <div className="why-pillar-num">04</div>
              <div style={{ width: "100%", height: "280px", overflow: "hidden", borderRadius: "12px", marginBottom: "16px", border: "1px solid #e2e8f0", background: "#ffffff" }}>
                <img src="/images/why/4.jpg" alt="End-to-End Support" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3 className="why-pillar-title">End-to-End Support</h3>
              <p className="why-pillar-desc">
                From your first profile evaluation to visa filing and pre-departure prep — we are with you at every step, ensuring nothing falls through the cracks in your international journey.
              </p>
              <div className="why-pillar-tags">
                <span>Visa Support</span>
                <span>Documentation</span>
                <span>Pre-Departure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPLORE YOUR STUDY DESTINATION (GERMANY SPOTLIGHT) */}
      <section className="section-py" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill badge-amber">European Study Opportunities</span>
            <h2 className="section-title">
              Explore Your <span className="text-gold">Study Destination</span>
            </h2>
            <p className="section-desc">
              Consider your course, career goals, budget, language requirements, and academic profile before making a decision.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '36px' }}>
            {destinationsData.slice(0, 6).map((dest) => (
              <div
                key={dest.id}
                className="dest-card"
                style={{
                  background: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{ position: 'relative', width: '100%', height: '160px', overflow: 'hidden', background: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
                  <img
                    src={getFlagUrl(dest.id)}
                    alt={`Study in ${dest.name}`}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '20px' }}
                    className="dest-img-hover"
                  />
                  
                </div>

                <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1c2a4f', marginBottom: '4px' }}>
                      {dest.headline}
                    </div>
                    <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '14px' }}>
                      {dest.tagline}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                      {dest.popularStudyAreas.slice(0, 3).map((area, idx) => (
                        <span key={idx} style={{ background: '#f1f5f9', color: '#334155', padding: '3px 8px', borderRadius: '6px', fontSize: '0.76rem', fontWeight: 500 }}>
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => navigate('/destinations')}
                    className="btn btn-outline-primary"
                    style={{ width: '100%', borderRadius: '8px', fontSize: '0.86rem' }}
                  >
                    Explore {dest.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button onClick={() => navigate('/destinations')} className="btn btn-primary btn-lg">
              <span>Explore All European Destinations</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>


      {/* 5. STRUCTURED METHODOLOGY */}
      <section className="section-py" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill badge-primary">Structured Methodology</span>
            <h2 className="section-title">
              Our <span className="text-highlight">Approach</span>
            </h2>
            <p className="section-desc">
              A 5-stage framework designed to give clarity, avoid common application errors, and keep you confident.
            </p>
          </div>

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
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <button onClick={() => navigate('/services')} className="btn btn-secondary btn-lg">
              <span>View Full Services Breakdown</span>
              <ArrowRight size={18} />
            </button>
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
        @keyframes shimmerSlide {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(250%) skewX(-15deg); }
        }
        @keyframes badgePop {
          0% { opacity: 0; transform: translateY(12px) scale(0.92); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
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
        .hero-gradient-text-amber {
          background: linear-gradient(135deg, #334155 0%, #475569 40%, #475569 100%);
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

        /* ====== BENTO CARDS ====== */
        .hero-bento-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 32px;
        }
        .hero-bento-card {
          position: relative;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(226, 232, 240, 0.9);
          border-radius: 14px;
          padding: 13px 15px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04), 0 0 0 0 rgba(59, 130, 246, 0);
          backdrop-filter: blur(12px);
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }
        .hero-bento-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.09);
          border-color: #bfdbfe;
        }
        .hero-bento-card:hover .bento-shimmer {
          animation: shimmerSlide 0.75s ease forwards;
        }
        .bento-shimmer {
          position: absolute;
          top: 0; left: 0;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.55) 50%, transparent 100%);
          transform: translateX(-100%) skewX(-15deg);
          pointer-events: none;
        }
        .bento-icon-box {
          width: 40px; height: 40px;
          border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .bento-blue { background: #f8fafc; color: #1c2a4f; }
        .bento-amber { background: #ffffff; color: #475569; }
        .bento-green { background: #ffffff; color: #1c2a4f; }
        .bento-purple { background: #f5f3ff; color: #1c2a4f; }
        .bento-title { font-size: 0.875rem; font-weight: 700; color: #1c2a4f; }
        .bento-sub { font-size: 0.775rem; color: #64748b; margin-top: 1px; }

        /* ====== WHY PILLARS ====== */
        .why-pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .why-pillar-card {
          position: relative;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 18px;
          padding: 28px 28px 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
          overflow: hidden;
        }
        .why-pillar-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #1c2a4f, #0ea5e9);
          opacity: 0;
          transition: opacity 0.22s ease;
        }
        .why-pillar-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.09);
          border-color: #bfdbfe;
        }
        .why-pillar-card:hover::before { opacity: 1; }
        .why-pillar-num {
          font-size: 0.72rem;
          font-weight: 600;
          color: #94a3b8;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .why-pillar-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .why-pillar-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #1c2a4f;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .why-pillar-desc {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.65;
          margin: 0;
          flex: 1;
        }
        .why-pillar-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }
        .why-pillar-tags span {
          background: #f1f5f9;
          color: #334155;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 100px;
          border: 1px solid #e2e8f0;
        }
        @media (max-width: 640px) {
          .why-pillars-grid { grid-template-columns: 1fr; }
          .why-pillar-card { padding: 22px 18px; }
        }

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
          padding-top: 70%; /* Better aspect ratio for uncropped */
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

        /* ====== TRUST BAR ====== */
        .hero-trust-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding: 16px 20px;
          background: rgba(255, 255, 255, 0.88);
          border: 1.5px solid rgba(226, 232, 240, 0.9);
          border-radius: 16px;
          box-shadow: 0 4px 18px rgba(15, 23, 42, 0.05);
          backdrop-filter: blur(12px);
        }
        .hero-trust-rating-box {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .hero-avatar-stack { display: flex; align-items: center; }
        .hero-avatar-ring {
          border: 2.5px solid #ffffff;
          border-radius: 50%;
          overflow: hidden;
          width: 34px; height: 34px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
        }
        .hero-rating-text-wrap { display: flex; flex-direction: column; }
        .hero-rating-stars-row {
          display: flex; align-items: center; gap: 5px;
          font-size: 0.84rem; font-weight: 700; color: #1c2a4f;
        }
        .hero-rating-stars { color: #475569; letter-spacing: 1px; }
        .hero-rating-score { font-weight: 600; color: #1c2a4f; }
        .hero-rating-subtext { font-size: 0.75rem; color: #64748b; font-weight: 500; }
        .hero-quick-destinations { display: flex; align-items: center; gap: 8px; }
        .hero-quick-label {
          font-size: 0.78rem; color: #64748b; font-weight: 700; white-space: nowrap;
        }
        .hero-quick-flags-row { display: flex; align-items: center; gap: 6px; }
        .hero-flag-btn {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          padding: 6px 12px;
          display: inline-flex; align-items: center; gap: 6px;
          cursor: pointer;
          font-size: 0.8rem; font-weight: 700; color: #1c2a4f;
          transition: all 0.2s ease; white-space: nowrap;
        }
        .hero-flag-btn:hover {
          background: #f8fafc; border-color: #93c5fd; color: #1c2a4f;
          transform: translateY(-1px);
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

        /* ====== STAT BADGES ====== */
        .hero-stat-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.92);
          border: 1.5px solid rgba(226, 232, 240, 0.8);
          border-radius: 14px;
          padding: 10px 14px;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.1);
          backdrop-filter: blur(14px);
          z-index: 2;
          animation: badgePop 0.7s ease both;
        }
        .hero-stat-badge-1 {
          left: -18px;
          bottom: 18%;
          animation-delay: 0.3s;
        }
        .hero-stat-badge-2 {
          right: -14px;
          top: 18%;
          animation-delay: 0.55s;
        }
        .hero-stat-icon { font-size: 1.4rem; line-height: 1; }
        .hero-stat-number { font-size: 1.05rem; font-weight: 800; color: #1c2a4f; line-height: 1.2; }
        .hero-stat-label { font-size: 0.72rem; color: #64748b; font-weight: 600; }

        /* ====== RESPONSIVE ====== */
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
          .hero-stat-badge-1 { left: 0; }
          .hero-stat-badge-2 { right: 0; }
          .dmat-banner-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .germany-card-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 640px) {
          .hero-section-premium { padding: 100px 0 120px 0; min-height: 80vh; }
          .hero-headline { font-size: clamp(2rem, 7.5vw, 2.5rem); }
          .hero-br-hide-sm { display: none; }
          .hero-bento-grid { grid-template-columns: 1fr; gap: 10px; margin-bottom: 22px; }
          .hero-bento-card { padding: 10px 12px; }
          .hero-cta-row { gap: 10px; }
          .hero-trust-bar {
            flex-direction: column; align-items: flex-start;
            gap: 12px; padding: 14px; border-radius: 14px;
          }
          .hero-trust-rating-box { width: 100%; }
          .hero-quick-destinations {
            width: 100%; flex-direction: column; align-items: flex-start;
            gap: 6px; border-top: 1px solid #f1f5f9; padding-top: 10px;
          }
          .hero-quick-label { font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.5px; color: #94a3b8; }
          .hero-quick-flags-row {
            width: 100%; display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px;
          }
          .hero-flag-btn {
            width: 100%; justify-content: center; padding: 7px 4px;
            font-size: 0.76rem; border-radius: 8px;
          }
          .hero-stat-badge { display: none; }
          .germany-featured-box { padding: 20px 16px !important; border-radius: 16px !important; }
        }
        @media (max-width: 480px) {
          .hero-art-col { max-width: 100%; }
          .hero-flag-btn { font-size: 0.74rem; gap: 4px; }
        }
      `}</style>
    </div>
  );
}
