import React from 'react';
import { AboutHeroIllustration } from '../components/illustrations/AboutIllustrations';
import { 
  Target, 
  Compass, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck
} from 'lucide-react';

export function AboutUs({ onOpenCounselling }) {
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

  const whyStudentsChoose = [
    {
      title: 'Personalised Guidance',
      desc: 'Every student has a different academic profile and career goal. We provide tailored recommendations rather than generic templates.'
    },
    {
      title: 'European Study Opportunities',
      desc: 'We help students explore diverse, world-class academic and career opportunities across Germany and the wider European Union.'
    },
    {
      title: 'Transparent Process',
      desc: 'We explain entry requirements, real timelines, living costs, and processes clearly without making misleading guarantees.'
    },
    {
      title: 'End-to-End Support',
      desc: 'Our guidance covers the complete journey from initial counseling to university admissions, visa file checks, and pre-departure planning.'
    }
  ];

  return (
    <div>
      {/* 1. HERO HEADER */}
      <section style={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        padding: '60px 0 65px 0'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', alignItems: 'center', gap: '48px' }} className="about-hero-grid">
            <div>
              <span className="badge-pill badge-primary">
                <Sparkles size={14} /> About FREIE ADMITS
              </span>
              <h1 style={{ fontSize: '2.85rem', fontWeight: 800, color: '#1c2a4f', lineHeight: 1.18, marginBottom: '20px', letterSpacing: '-0.02em' }}>
                Education Deserves a <span style={{ color: '#1c2a4f' }}>Considered Choice</span>
              </h1>
              <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.65, marginBottom: '16px' }}>
                <strong>FREIE ADMITS</strong> is a European higher-education advisory built around a simple belief: where and what you study deserves careful consideration.
              </p>
              <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
                We help students make sense of the European academic landscape — its universities, programmes, admission pathways and possibilities — and approach it with greater knowledge and direction.
              </p>
              <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
                Our counsel is individual, informed and academically grounded, shaped by the understanding that no two students arrive with the same background or ambition.
              </p>
              <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.6, marginBottom: '28px' }}>
                We bring clarity to the possibilities; students can choose their path with purpose.
              </p>

              <button onClick={onOpenCounselling} className="btn btn-primary btn-lg">
                <span>Book a Counselling Session</span>
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="about-hero-art">
              <AboutHeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO */}
      <section className="section-py" style={{ background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <span className="badge-pill badge-primary">Comprehensive Guidance</span>
          <h2 className="section-title">
            What <span className="text-highlight">We Do</span>
          </h2>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, fontStyle: 'italic', fontSize: '1.8rem', color: '#1c2a4f', marginBottom: '24px' }}>
            From Ambition to Academic Direction.
          </h3>
          
          <div style={{ textAlign: 'left', color: '#475569', fontSize: '1.05rem', lineHeight: 1.7 }}>
            <p style={{ marginBottom: '16px' }}>
              European higher education is not a single system. Each country, university, and programme brings its own academic structures, expectations, and routes to admission.
            </p>
            <p style={{ marginBottom: '16px' }}>
              <strong>FREIE ADMITS</strong> brings these elements into perspective.
            </p>
            <p style={{ marginBottom: '16px' }}>
              We examine the opportunities available to each student, distinguish what is relevant from what is merely possible, and shape a coherent pathway from initial exploration through to admission.
            </p>
            <p style={{ marginBottom: '16px' }}>
              Behind every recommendation is research. Behind every application is preparation. And behind every pathway is a reason for choosing it.
            </p>
            <p>
              Our purpose is not to multiply possibilities, but to identify that worth pursuing.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH (5 STAGES) */}
      <section className="section-py" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill badge-primary">Structured Methodology</span>
            <h2 className="section-title">
              Our <span>Approach</span>
            </h2>
            <p className="section-desc">
              A 5-stage framework designed to give clarity, avoid common application errors, and keep you confident.
            </p>
          </div>

          <div className="milestone-grid">
            {approachSteps.map((st, i) => (
              <div key={i} className="milestone-card">
                <div className="milestone-img-wrap">
                  <img src={st.img} alt={st.title} className="milestone-img" loading="lazy" />
                </div>
                <div className="milestone-content">
                  <h3 className="milestone-title">{st.title}</h3>
                  <p className="milestone-desc">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* ====== MILESTONE TIMELINE ====== */
        .milestone-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
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
          box-shadow: 0 12px 32px rgba(28, 42, 79, 0.08);
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
          color: #475569;
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

      {/* 4. MISSION & VISION */}
      <section className="section-py" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }} className="mission-grid">
            {/* Mission */}
            <div className="card-white" style={{ borderTop: '5px solid #1c2a4f', padding: '36px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: '#f8fafc', color: '#1c2a4f', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Target size={30} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '8px', textTransform: 'uppercase' }}>
                Our Mission
              </h3>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, fontStyle: 'italic', fontSize: '1.4rem', color: '#1c2a4f', marginBottom: '20px' }}>
                To Cultivate Scholars, Not Merely Applicants.
              </h4>
              <div style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.6, flex: 1 }}>
                <p style={{ marginBottom: '14px' }}>
                  FREIE ADMITS exists to uphold the seriousness of the academic journey. We believe a university education is among the most consequential commitments a young person will make, and it deserves to be entered with rigor, reflection, and intellectual honesty.
                </p>
                <p style={{ marginBottom: '14px' }}>
                  We seek to nurture in every student a clear sense of scholarly purpose: the discipline to question, the humility to learn, and the resolve to pursue excellence for its own sake. In doing so, we hope to restore to the pursuit of higher education its proper dignity, where ambition is governed by understanding, and achievement is measured by substance rather than status.
                </p>
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: '#64748b', marginTop: '16px', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                To cultivate scholars, not merely applicants, guided by rigour, reflection and purpose.
              </p>
            </div>

            {/* Vision */}
            <div className="card-white" style={{ borderTop: '5px solid #475569', padding: '36px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: '#f8fafc', color: '#475569', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Compass size={30} />
              </div>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '8px', textTransform: 'uppercase' }}>
                Our Vision
              </h3>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, fontStyle: 'italic', fontSize: '1.4rem', color: '#1c2a4f', marginBottom: '20px' }}>
                To Advance the Enduring Ideals of Scholarship.
              </h4>
              <div style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.6, flex: 1 }}>
                <p style={{ marginBottom: '14px' }}>
                  We envision a generation of students who approach the world's great institutions not as destinations to be won, but as communities of thought to join and enrich. We aspire to become a trusted name in international education, recognized for our principles as much as our outcomes.
                </p>
                <p style={{ marginBottom: '14px' }}>
                  Guided by integrity, intellectual independence and a long view of what learning can achieve, we aim to help shape a culture in which education serves both the individual and the wider good. In every student we support, we hope to see the beginnings of a life devoted to knowledge, service and distinction.
                </p>
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '0.95rem', color: '#64748b', marginTop: '16px', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                To advance the enduring ideals of scholarship across the global academic community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY STUDENTS CHOOSE FREIE ADMITS */}
      <section className="section-py" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill badge-primary">Student Centricity</span>
            <h2 className="section-title">
              Why Students Choose <span className="text-highlight">FREIE ADMITS</span>
            </h2>
            <p className="section-desc">
              Integrity, deep European institutional expertise, and structured end-to-end guidance.
            </p>
          </div>

          <div className="grid-2">
            {whyStudentsChoose.map((item, idx) => (
              <div key={idx} className="card-white" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <ShieldCheck size={24} color="#1c2a4f" />
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#1c2a4f' }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. START WITH A CONVERSATION CTA */}
      <section className="section-py" style={{ background: '#1c2a4f', color: '#ffffff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <span style={{ background: 'rgba(217, 119, 6, 0.25)', color: '#94a3b8', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            Get in Touch
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', margin: '16px 0 14px 0' }}>
            Start With a Conversation
          </h2>
          <p style={{ fontSize: '1.12rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '28px' }}>
            Your international education journey doesn't need to begin with a complicated application. It can begin with one conversation.
          </p>
          <button onClick={onOpenCounselling} className="btn btn-primary btn-lg">
            <span>Book a Counselling Session</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .about-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .mission-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
