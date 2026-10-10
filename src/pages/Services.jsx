import React from 'react';
import { 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Compass,
  FileText,
  ShieldCheck,
  CheckSquare,
  Award,
  Landmark,
  Plane,
  Home,
  Map,
  Users
} from 'lucide-react';

export function Services({ onOpenCounselling, onOpenEvaluation }) {

  const academicServices = [
    {
      icon: <Compass size={24} />,
      title: "Counselling",
      subtitle: "Clarity before commitment.",
      desc: "A university is chosen once and lived in for years. We begin with unhurried conversation about a student's strengths, interests, circumstances and means, because the soundest decisions are made with a clear view of all four.\n\nWe do not steer students towards fashionable destinations or familiar names. We help them reason towards a path that is honest, achievable and worthy of their effort.",
      quote: "The right question, asked early, saves years."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Course Selection",
      subtitle: "The right discipline, rightly chosen.",
      desc: "A degree shapes how a person thinks long after the lectures end. We help students look beyond titles and rankings to the substance of a programme: its curriculum, its teaching, its standing in the field and it's fit with their intellectual strengths.\n\nEach recommendation is reasoned, comparative and candid, so that the course a student enters is one they can commit to fully.",
      quote: "Choose the subject. Then choose the institution."
    },
    {
      icon: <FileText size={24} />,
      title: "Applications",
      subtitle: "Precision in every submission.",
      desc: "An application is a student's first piece of scholarship. It should be accurate, coherent, and entirely their own.\n\nWe review each component with care, from academic records and personal statements to references and supporting documents, and refine them with the student, never for them. The result is a submission that speaks plainly, withstands scrutiny, and reflects genuine purpose.",
      quote: "Your voice, presented at its best."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Visa Guidance",
      subtitle: "Order and assurance.",
      desc: "Immigration requirements are exacting, and small oversights carry real consequences. We bring structure to the process: the documents required, the evidence to be assembled and the timelines to be observed.\n\nStudents are prepared for each stage with clarity, so they approach the visa process informed and composed rather than uncertain.",
      quote: "Every requirement understood. Every document in order."
    },
    {
      icon: <CheckSquare size={24} />,
      title: "Test Preparation",
      subtitle: "Readiness through discipline.",
      desc: "Examination results are often the threshold to admission. We prepare students for them through structured instruction, regular practice and honest assessment of progress.\n\nThe aim is not to teach shortcuts but to build real command of language and reasoning, so that performance on the day reflects true ability.",
      quote: "Preparation is the quietest form of confidence."
    },
    {
      icon: <Award size={24} />,
      title: "Scholarships",
      subtitle: "Merit, recognised.",
      desc: "Many awards go unclaimed because they are never discovered, or are poorly presented. We help students identify the scholarships, bursaries and grants for which they may rightfully compete.\n\nWe then assist in presenting their achievements, character and promise with clarity and economy, in the manner such committees value.",
      quote: "Excellence deserves to be seen."
    }
  ];

  const beyondServices = [
    {
      icon: <Landmark size={24} />,
      title: "Education Finance",
      subtitle: "Ambition, responsibly funded.",
      desc: "Studying abroad is a significant financial undertaking. We guide families through the available means of financing it, explaining the commitments involved and the documentation required.\n\nOur concern is prudence: that a student begins their studies with a plan they understand and obligations they can manage.",
      quote: "Plan the cost before the journey."
    },
    {
      icon: <Plane size={24} />,
      title: "Travel Arrangements",
      subtitle: "A considered departure.",
      desc: "The journey to a new country should not distract from the purpose of making it. We help students arrange their travel with attention to timing, routes, and the practicalities of arrival.\n\nIt is a small service with a simple aim: that attention remains on what lies ahead.",
      quote: "Depart with nothing left to chance."
    },
    {
      icon: <Home size={24} />,
      title: "Accommodation",
      subtitle: "A place to think and to rest.",
      desc: "Where a student lives shapes how well they study. We help secure lodging that is safe, suitable and well situated, whether within the university or beyond it, and arranged before arrival wherever possible.\n\nA settled home makes for a steadier mind.",
      quote: "A settled home makes for a steadier mind."
    },
    {
      icon: <Map size={24} />,
      title: "Pre-Departure Briefing",
      subtitle: "Prepared in mind and manner.",
      desc: "Every country has its customs, expectations and unwritten rules. Before departure, we brief students on academic conduct, daily life, cultural norms and practical matters, so that the first weeks abroad are met with understanding rather than surprise.",
      quote: "To arrive informed is to arrive at ease."
    },
    {
      icon: <Users size={24} />,
      title: "Arrival and Settlement",
      subtitle: "Welcomed on arrival.",
      desc: "The first days in a new country matter. We support students on landing and through the early period of settling in, so that unfamiliar surroundings become familiar quickly and studies can begin well.",
      quote: "The journey ends. The scholarship begins."
    }
  ];

  const renderServiceCard = (service, idx) => (
    <div key={idx} className="service-content-card">
      <div className="service-icon-wrap">
        {service.icon}
      </div>
      <div className="service-text-wrap">
        <h3 className="service-item-title">{service.title}</h3>
        <p className="service-item-subtitle">{service.subtitle}</p>
        <div className="service-item-desc">
          {service.desc.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="service-item-quote">
          {service.quote}
        </div>
      </div>
    </div>
  );

  return (
    <div className="services-page-wrap">
      {/* 1. HERO HEADER */}
      <section style={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        padding: '54px 0 44px 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <span className="badge-pill badge-primary">
            <Sparkles size={14} /> Comprehensive Support
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '12px' }}>
            Our Services
          </h1>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#475569', marginBottom: '16px' }}>
            From Ambition to Academic Direction
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

      {/* 2. CATEGORY I: ACADEMIC GUIDANCE */}
      <section className="section-py" style={{ background: '#ffffff', paddingTop: '40px' }}>
        <div className="container">
          <div className="service-cat-header">
            <span className="service-cat-num">I.</span>
            <h2 className="section-title" style={{ margin: 0 }}>Academic Guidance</h2>
          </div>
          
          <div className="service-cat-image-wrap">
            <img src="/images/services/academic.jpg" alt="Academic Guidance" className="service-cat-image" />
          </div>

          <div className="services-list-grid">
            {academicServices.map((service, idx) => renderServiceCard(service, idx))}
          </div>
        </div>
      </section>

      {/* 3. CATEGORY II: BEYOND ADMISSION */}
      <section className="section-py" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="service-cat-header">
            <span className="service-cat-num">II.</span>
            <h2 className="section-title" style={{ margin: 0 }}>Beyond Admission</h2>
          </div>
          
          <div className="service-cat-image-wrap">
            <img src="/images/services/beyond.jpg" alt="Beyond Admission" className="service-cat-image" />
          </div>

          <div className="services-list-grid">
            {beyondServices.map((service, idx) => renderServiceCard(service, idx))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="section-py" style={{ background: '#1c2a4f', color: '#ffffff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <span style={{ background: 'rgba(59, 130, 246, 0.25)', color: '#eef2fa', padding: '4px 14px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
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
        .service-cat-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
        }
        .service-cat-num {
          font-family: var(--font-heading);
          font-size: 2.2rem;
          font-weight: 700;
          color: #1c2a4f;
          opacity: 0.3;
        }
        .service-cat-image-wrap {
          width: 100%;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 48px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 12px 32px rgba(28, 42, 79, 0.05);
        }
        .service-cat-image {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .services-list-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .service-content-card {
          display: flex;
          gap: 24px;
          background: #ffffff;
          padding: 32px;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 12px rgba(28, 42, 79, 0.03);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .service-content-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(28, 42, 79, 0.08);
          border-color: #cbd5e1;
        }
        .service-icon-wrap {
          flex-shrink: 0;
          width: 54px;
          height: 54px;
          border-radius: 12px;
          background: #f8fafc;
          color: #1c2a4f;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #e2e8f0;
        }
        .service-text-wrap {
          flex: 1;
        }
        .service-item-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #1c2a4f;
          margin: 0 0 4px 0;
        }
        .service-item-subtitle {
          font-family: var(--font-heading);
          font-style: italic;
          font-size: 1.15rem;
          color: #475569;
          margin: 0 0 16px 0;
        }
        .service-item-desc {
          font-size: 1.02rem;
          color: #475569;
          line-height: 1.65;
          margin-bottom: 24px;
        }
        .service-item-desc p {
          margin: 0 0 12px 0;
        }
        .service-item-desc p:last-child {
          margin-bottom: 0;
        }
        .service-item-quote {
          font-family: var(--font-heading);
          font-weight: 500;
          font-style: italic;
          font-size: 1.15rem;
          color: #1c2a4f;
          padding-top: 16px;
          border-top: 1px solid #e2e8f0;
        }

        @media (max-width: 992px) {
          .services-list-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
        @media (max-width: 600px) {
          .service-content-card {
            flex-direction: column;
            gap: 16px;
            padding: 24px;
          }
          .service-cat-image {
            max-height: 240px;
          }
        }
      `}</style>
    </div>
  );
}
