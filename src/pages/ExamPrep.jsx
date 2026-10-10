import React, { useState } from 'react';
import { Link, useRouter } from '../context/RouterContext';
import { 
  BookOpen, 
  Target, 
  Clock, 
  CheckCircle2, 
  TrendingUp, 
  ArrowRight, 
  Sparkles, 
  Globe, 
  FileText, 
  BarChart3, 
  ChevronDown, 
  ChevronUp,
  GraduationCap,
  Headphones,
  PenTool,
  Monitor,
  Lightbulb
} from 'lucide-react';

const ExamPrep = () => {
  const { navigate } = useRouter();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const benefits = [
    { number: '01', title: 'Expert Guidance', desc: 'Receive personalised guidance and exceptional training by our experienced faculty to ensure you achieve the best scores possible.', icon: <Lightbulb size={22} /> },
    { number: '02', title: 'Exclusive Study Materials', desc: 'Access meticulously curated study materials, designed to cover every aspect of the test for admission in international universities.', icon: <BookOpen size={22} /> },
    { number: '03', title: 'Performance Tracking', desc: 'Track and analyse your progress with numerous mock tests, tutorials and make-up classes to attain your target score.', icon: <BarChart3 size={22} /> },
    { number: '04', title: 'Personalised Strategies', desc: 'Our coaching uses a unique mentoring model with a personal trainer ensuring individualised attention through innovative teaching methodology.', icon: <Target size={22} /> },
    { number: '05', title: 'Timed to Your Application', desc: 'Test dates are planned backwards from deadlines, leaving room for a considered retake if necessary.', icon: <Clock size={22} /> },
  ];

  const englishExams = [
    { title: 'IELTS', full: 'International English Language Testing System', desc: 'Available in Academic and General Training forms, with the Speaking assessment conducted as a face-to-face interview. Widely accepted globally.', icon: <Headphones size={28} /> },
    { title: 'TOEFL iBT', full: 'Test of English as a Foreign Language', desc: 'A computer-based examination testing academic English. Heavily favoured by North American institutions.', icon: <Monitor size={28} /> },
    { title: 'PTE Academic', full: 'Pearson Test of English', desc: 'A fully computer-marked assessment known for the rapid return of results and objective scoring of spoken English.', icon: <FileText size={28} /> },
    { title: 'Duolingo English Test', full: '', desc: 'An adaptive, home-administered test increasingly accepted as a flexible alternative to traditional centre-based examinations.', icon: <Globe size={28} /> },
    { title: 'CAEL', full: 'Canadian Academic English Language', desc: 'Designed specifically for entry to Canadian institutions, evaluating language use in academic contexts.', icon: <PenTool size={28} /> },
    { title: 'CELPIP', full: 'Canadian English Language Proficiency Index Program', desc: 'For immigration and professional certification in Canada, assessing functional English for everyday situations.', icon: <CheckCircle2 size={28} /> },
  ];

  const standardizedExams = [
    { title: 'GRE', full: 'Graduate Record Examinations', desc: 'Required for many graduate programmes, assessing verbal reasoning, quantitative reasoning, and analytical writing.', tags: ['Verbal', 'Quantitative', 'Writing'] },
    { title: 'GMAT', full: 'Graduate Management Admission Test', desc: 'The standard assessment for MBA and other postgraduate business programmes, evaluating analytical and problem-solving abilities.', tags: ['MBA', 'Analytical', 'Problem-Solving'] },
    { title: 'dMAT', full: 'Digital Master Assessment Test', desc: 'Specialised assessment preparation tailored for German university entrance requirements for Master\'s programmes.', tags: ['Germany', 'Master\'s', 'Digital'] },
    { title: 'SAT', full: 'Scholastic Assessment Test', desc: 'A multiple-choice test used widely for undergraduate admissions in the United States and other countries.', tags: ['Undergraduate', 'US Admissions'] },
    { title: 'ACT', full: 'American College Testing', desc: 'An alternative to the SAT, covering English, mathematics, reading, and science, with an optional writing section.', tags: ['Science', 'English', 'Math'] },
  ];

  const faqs = [
    { q: 'How long does preparation usually take?', a: 'Preparation timelines vary by student and examination, but typically range from 4 to 12 weeks of focused study. After an initial diagnostic, we create a personalised timeline that works backwards from your application deadlines.' },
    { q: 'Do I need to take both the IELTS and TOEFL?', a: 'No. Most institutions will accept either. We advise taking a diagnostic test to determine which format better suits your strengths. We then help you focus entirely on one examination to maximise your score.' },
    { q: 'When should I start preparing?', a: 'We recommend beginning preparation at least 3 to 6 months before your application deadlines to allow time for thorough preparation and a retake if necessary.' },
    { q: 'Are materials provided?', a: 'Yes, all necessary study materials, including proprietary practice tests, diagnostic tools, and comprehensive e-books are included in our preparation programmes.' },
    { q: 'What is your approach to test preparation?', a: 'Each student begins with an assessment under examination conditions. The result — not a fixed syllabus — determines the course of study. We focus on the specific areas where you need improvement.' },
  ];

  return (
    <div>
      {/* ══════ HERO SECTION ══════ */}
      <section className="ep-hero">
        <div className="ep-hero-mesh" aria-hidden="true">
          <div className="ep-hero-orb ep-hero-orb-1" />
          <div className="ep-hero-orb ep-hero-orb-2" />
          <div className="ep-hero-dots" />
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="ep-hero-grid">
            <div className="ep-hero-left">
              <div className="hero-eyebrow-pill">
                <span className="hero-eyebrow-dot" />
                <span>Examination Preparation</span>
              </div>

              <h1 className="ep-hero-headline">
                Where Academic{' '}
                <span className="hero-gradient-text-blue">Preparation</span>
                <br className="ep-hero-br" />
                Meets the <span style={{ color: '#1c2a4f' }}>Standard</span>
              </h1>

              <p className="ep-hero-sub">
                A score is often the first line of an application that an admissions committee reads. We prepare students to make it a strong one — with structured coaching, diagnostic-led strategies, and expert faculty.
              </p>

              <div className="ep-hero-stats-row">
                <div className="ep-hero-stat-chip">
                  <TrendingUp size={16} />
                  <span><strong>11+</strong> Exams Covered</span>
                </div>
                <div className="ep-hero-stat-chip">
                  <GraduationCap size={16} />
                  <span><strong>Expert</strong> Faculty</span>
                </div>
                <div className="ep-hero-stat-chip">
                  <Target size={16} />
                  <span><strong>Diagnostic</strong> Led</span>
                </div>
              </div>

              <div className="hero-cta-row">
                <button onClick={() => navigate('/contact')} className="btn btn-primary btn-lg hero-btn-primary">
                  <Sparkles size={18} />
                  <span>Free Expert Consultation</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="ep-hero-right">
              <div className="ep-hero-art-glow" />
              <img src="/images/exams/exam_hero_vector.jpg" alt="Test Preparation" className="ep-hero-img" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════ BENEFITS SECTION ══════ */}
      <section className="section-py" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill badge-primary">Why FREIE ADMITS?</span>
            <h2 className="section-title">
              Unlock the Unparalleled Benefits of{' '}
              <span className="text-highlight">Test Prep</span>
            </h2>
            <p className="section-desc">
              Our test preparation coaching is comprehensive and provides complete coaching for study abroad tests like TOEFL, PTE, IELTS, GMAT, GRE, ACT, SAT and more.
            </p>
          </div>

          <div className="ep-benefits-grid">
            <div className="ep-benefits-img-col">
              <div className="ep-benefits-sticky">
                <img src="/images/exams/exam_benefits_vector.jpg" alt="Benefits" className="ep-benefits-img" />
              </div>
            </div>

            <div className="ep-benefits-list">
              {benefits.map((b, idx) => (
                <div key={idx} className="ep-benefit-card">
                  <div className="ep-benefit-icon-wrap">{b.icon}</div>
                  <div className="ep-benefit-body">
                    <div className="ep-benefit-num">{b.number}</div>
                    <h3 className="ep-benefit-title">{b.title}</h3>
                    <p className="ep-benefit-desc">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ ENGLISH LANGUAGE PROFICIENCY ══════ */}
      <section className="section-py" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill badge-primary">
              <Globe size={14} /> Language Proficiency
            </span>
            <h2 className="section-title">
              English Language{' '}
              <span className="text-highlight">Proficiency Tests</span>
            </h2>
            <p className="section-desc">
              Demonstrating linguistic competence is a strict requirement for almost all international applications. We provide targeted preparation for the full spectrum of accepted assessments.
            </p>
          </div>

          <div className="ep-lang-intro-row">
            <div className="ep-lang-intro-img-wrap">
              <img src="/images/exams/exam_language_vector.jpg" alt="Language Tests" className="ep-lang-intro-img" />
            </div>
            <div className="ep-lang-intro-text">
              <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.7 }}>
                For students whose degree will be taught in English, achieving the required score in an accepted English proficiency test is non-negotiable. We help you identify the right test, build a preparation plan, and practise under exam conditions until your score reflects your true ability.
              </p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '16px' }}>
                <span className="ep-tag">IELTS</span>
                <span className="ep-tag">TOEFL</span>
                <span className="ep-tag">PTE</span>
                <span className="ep-tag">Duolingo</span>
                <span className="ep-tag">CAEL</span>
                <span className="ep-tag">CELPIP</span>
              </div>
            </div>
          </div>

          <div className="ep-exam-grid">
            {englishExams.map((exam, idx) => (
              <div key={idx} className="ep-exam-card">
                <div className="ep-exam-icon-wrap">{exam.icon}</div>
                <h4 className="ep-exam-title">{exam.title}</h4>
                {exam.full && <p className="ep-exam-full">{exam.full}</p>}
                <p className="ep-exam-desc">{exam.desc}</p>
                <div className="ep-exam-footer">
                  <button onClick={() => navigate('/contact')} className="btn btn-sm" style={{ background: '#f1f5f9', color: '#1c2a4f', border: '1px solid #e2e8f0' }}>
                    <span>Start Preparation</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ STANDARDIZED ADMISSIONS TESTS ══════ */}
      <section className="section-py" style={{ background: '#1c2a4f', color: '#ffffff' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '48px' }}>
            <span className="badge-pill" style={{ background: 'rgba(255,255,255,0.1)', color: '#94a3b8', border: '1px solid rgba(255,255,255,0.15)' }}>
              <BookOpen size={14} /> Standardized Tests
            </span>
            <h2 className="section-title" style={{ color: '#ffffff' }}>
              Standardized Admissions Tests
            </h2>
            <p className="section-desc" style={{ color: '#cbd5e1' }}>
              Beyond language, many top-tier institutions require proof of academic readiness through standardized testing. Our curriculum is tailored to master the specific mechanics of each exam.
            </p>
          </div>

          <div className="ep-std-intro-row">
            <div className="ep-std-intro-img-wrap">
              <img src="/images/exams/exam_standard_vector.jpg" alt="Standardized Tests" className="ep-std-intro-img" />
            </div>
            <div className="ep-std-intro-content">
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '20px' }}>
                For undergraduate and graduate programme entry, standardized tests remain a key differentiator. Our approach is diagnostic-first — we assess where you stand before designing your study plan.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div className="ep-std-stat">
                  <div className="ep-std-stat-num">5+</div>
                  <div className="ep-std-stat-label">Exams Covered</div>
                </div>
                <div className="ep-std-stat">
                  <div className="ep-std-stat-num">100%</div>
                  <div className="ep-std-stat-label">Score-Focused</div>
                </div>
              </div>
            </div>
          </div>

          <div className="ep-std-grid">
            {standardizedExams.map((exam, idx) => (
              <div key={idx} className="ep-std-card">
                <div className="ep-std-card-top">
                  <h4 className="ep-std-card-title">{exam.title}</h4>
                  <p className="ep-std-card-full">{exam.full}</p>
                </div>
                <p className="ep-std-card-desc">{exam.desc}</p>
                <div className="ep-std-card-tags">
                  {exam.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="ep-std-tag">{tag}</span>
                  ))}
                </div>
                <button onClick={() => navigate('/contact')} className="ep-std-card-btn">
                  <span>Book Diagnostic</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FAQ SECTION ══════ */}
      <section className="section-py" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="section-header">
            <span className="badge-pill badge-primary">Got Questions?</span>
            <h2 className="section-title">
              Frequently Asked{' '}
              <span className="text-highlight">Questions</span>
            </h2>
          </div>

          <div className="ep-faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`ep-faq-item ${openFaq === idx ? 'ep-faq-item-open' : ''}`}>
                <button className="ep-faq-btn" onClick={() => toggleFaq(idx)}>
                  <span className="ep-faq-num">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="ep-faq-q">{faq.q}</span>
                  {openFaq === idx ? <ChevronUp size={20} className="ep-faq-chevron" /> : <ChevronDown size={20} className="ep-faq-chevron" />}
                </button>
                {openFaq === idx && (
                  <div className="ep-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ══════ PAGE-SCOPED STYLES ══════ */}
      <style>{`
        /* ====== KEYFRAMES ====== */
        @keyframes epOrbFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 15px) scale(0.97); }
        }
        @keyframes epOrbFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-40px, 30px) scale(1.08); }
          70% { transform: translate(20px, -10px) scale(0.95); }
        }
        @keyframes epDotScroll {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }
        @keyframes epFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ====== HERO ====== */
        .ep-hero {
          position: relative;
          overflow: hidden;
          padding: 140px 0 100px 0;
          min-height: 80vh;
          display: flex;
          align-items: center;
          background: #ffffff;
        }
        .ep-hero-mesh {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .ep-hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
        }
        .ep-hero-orb-1 {
          width: 500px; height: 500px;
          top: -12%; right: -5%;
          background: radial-gradient(circle, rgba(28, 42, 79, 0.06) 0%, transparent 70%);
          animation: epOrbFloat1 14s ease-in-out infinite;
        }
        .ep-hero-orb-2 {
          width: 380px; height: 380px;
          bottom: -8%; left: -4%;
          background: radial-gradient(circle, rgba(148, 163, 184, 0.08) 0%, transparent 70%);
          animation: epOrbFloat2 18s ease-in-out infinite;
        }
        .ep-hero-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(28, 42, 79, 0.04) 1.5px, transparent 1.5px);
          background-size: 28px 28px;
          animation: epDotScroll 6s linear infinite;
          opacity: 0.6;
        }
        .ep-hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 48px;
        }
        .ep-hero-left {
          animation: epFadeUp 0.6s ease both;
        }
        .ep-hero-headline {
          font-size: clamp(2.2rem, 3.8vw, 3.2rem);
          font-weight: 700;
          color: #1c2a4f;
          line-height: 1.14;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
          font-family: var(--font-heading);
        }
        .ep-hero-br { display: inline; }
        .ep-hero-sub {
          font-size: 1.07rem;
          color: #475569;
          line-height: 1.68;
          margin-bottom: 24px;
          max-width: 560px;
        }
        .ep-hero-stats-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }
        .ep-hero-stat-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 100px;
          padding: 6px 14px;
          font-size: 0.82rem;
          font-weight: 600;
          color: #1c2a4f;
        }
        .ep-hero-stat-chip strong { font-weight: 800; }
        .ep-hero-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .ep-hero-art-glow {
          position: absolute;
          width: 85%;
          height: 85%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(191, 219, 254, 0.35) 0%, transparent 70%);
          animation: epOrbFloat1 5s ease-in-out infinite;
          pointer-events: none;
        }
        .ep-hero-img {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 520px;
          border-radius: 20px;
          object-fit: contain;
        }

        /* ====== BENEFITS ====== */
        .ep-benefits-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 48px;
          align-items: flex-start;
        }
        .ep-benefits-sticky {
          position: sticky;
          top: 120px;
        }
        .ep-benefits-img {
          width: 100%;
          border-radius: 20px;
          object-fit: contain;
        }
        .ep-benefits-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .ep-benefit-card {
          display: flex;
          gap: 18px;
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px;
          transition: all 0.22s ease;
          position: relative;
          overflow: hidden;
        }
        .ep-benefit-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 3px; height: 100%;
          background: linear-gradient(180deg, #1c2a4f, #0ea5e9);
          opacity: 0;
          transition: opacity 0.22s ease;
        }
        .ep-benefit-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08);
          border-color: #bfdbfe;
        }
        .ep-benefit-card:hover::before { opacity: 1; }
        .ep-benefit-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #eef2fa;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #1c2a4f;
        }
        .ep-benefit-body { flex: 1; }
        .ep-benefit-num {
          font-size: 0.72rem;
          font-weight: 600;
          color: #94a3b8;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .ep-benefit-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1c2a4f;
          margin: 0 0 6px 0;
        }
        .ep-benefit-desc {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.65;
          margin: 0;
        }

        /* ====== LANGUAGE EXAMS ====== */
        .ep-lang-intro-row {
          display: grid;
          grid-template-columns: 0.45fr 0.55fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 48px;
        }
        .ep-lang-intro-img-wrap {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }
        .ep-lang-intro-img {
          width: 100%;
          object-fit: contain;
          display: block;
        }
        .ep-tag {
          background: #eef2fa;
          color: #1c2a4f;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 100px;
          border: 1px solid #d7e0f2;
        }
        .ep-exam-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ep-exam-card {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 18px;
          padding: 28px 24px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: all 0.22s ease;
          position: relative;
          overflow: hidden;
        }
        .ep-exam-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #1c2a4f, #0ea5e9);
          opacity: 0;
          transition: opacity 0.22s ease;
        }
        .ep-exam-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.09);
          border-color: #bfdbfe;
        }
        .ep-exam-card:hover::before { opacity: 1; }
        .ep-exam-icon-wrap {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: #eef2fa;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1c2a4f;
          margin-bottom: 4px;
        }
        .ep-exam-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1c2a4f;
          margin: 0;
        }
        .ep-exam-full {
          font-size: 0.82rem;
          color: #94a3b8;
          font-style: italic;
          margin: 0;
        }
        .ep-exam-desc {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.6;
          margin: 0;
          flex: 1;
        }
        .ep-exam-footer {
          margin-top: auto;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
        }

        /* ====== STANDARDIZED TESTS ====== */
        .ep-std-intro-row {
          display: grid;
          grid-template-columns: 0.4fr 0.6fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 48px;
        }
        .ep-std-intro-img-wrap {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .ep-std-intro-img {
          width: 100%;
          object-fit: contain;
          display: block;
        }
        .ep-std-stat {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 14px;
          padding: 18px;
          text-align: center;
        }
        .ep-std-stat-num {
          font-size: 2rem;
          font-weight: 800;
          color: #ffffff;
          font-family: var(--font-heading);
        }
        .ep-std-stat-label {
          font-size: 0.82rem;
          color: #94a3b8;
          font-weight: 600;
          margin-top: 2px;
        }
        .ep-std-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .ep-std-card {
          background: rgba(255,255,255,0.04);
          border: 1.5px solid rgba(255,255,255,0.1);
          border-radius: 18px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: all 0.22s ease;
        }
        .ep-std-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }
        .ep-std-card-top { }
        .ep-std-card-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 4px 0;
          font-family: var(--font-heading);
        }
        .ep-std-card-full {
          font-size: 0.82rem;
          color: #94a3b8;
          font-style: italic;
          margin: 0;
        }
        .ep-std-card-desc {
          font-size: 0.9rem;
          color: #cbd5e1;
          line-height: 1.6;
          margin: 0;
          flex: 1;
        }
        .ep-std-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .ep-std-tag {
          background: rgba(255,255,255,0.08);
          color: #94a3b8;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.12);
        }
        .ep-std-card-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 10px;
          color: #ffffff;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.22s ease;
          margin-top: auto;
        }
        .ep-std-card-btn:hover {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.3);
        }

        /* ====== FAQ ====== */
        .ep-faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .ep-faq-item {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 14px;
          overflow: hidden;
          transition: all 0.22s ease;
        }
        .ep-faq-item-open {
          border-color: #bfdbfe;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
        }
        .ep-faq-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: background 0.15s ease;
        }
        .ep-faq-btn:hover { background: #f8fafc; }
        .ep-faq-num {
          font-size: 0.78rem;
          font-weight: 800;
          color: #94a3b8;
          letter-spacing: 0.05em;
          flex-shrink: 0;
        }
        .ep-faq-q {
          font-size: 1.02rem;
          font-weight: 700;
          color: #1c2a4f;
          flex: 1;
        }
        .ep-faq-chevron {
          color: #94a3b8;
          flex-shrink: 0;
        }
        .ep-faq-answer {
          padding: 0 24px 20px 62px;
          animation: epFadeUp 0.2s ease both;
        }
        .ep-faq-answer p {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.7;
          margin: 0;
        }

        /* ====== RESPONSIVE ====== */
        @media (max-width: 960px) {
          .ep-hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .ep-hero-right { order: -1; max-width: 400px; margin: 0 auto; }
          .ep-benefits-grid { grid-template-columns: 1fr !important; }
          .ep-benefits-sticky { position: relative; top: 0; max-width: 400px; margin: 0 auto; }
          .ep-lang-intro-row { grid-template-columns: 1fr !important; }
          .ep-std-intro-row { grid-template-columns: 1fr !important; }
          .ep-exam-grid { grid-template-columns: repeat(2, 1fr); }
          .ep-std-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .ep-hero { padding: 100px 0 80px 0; min-height: auto; }
          .ep-hero-headline { font-size: clamp(1.8rem, 7vw, 2.4rem); }
          .ep-hero-br { display: none; }
          .ep-hero-stats-row { gap: 8px; }
          .ep-hero-stat-chip { padding: 5px 10px; font-size: 0.78rem; }
          .ep-exam-grid { grid-template-columns: 1fr; }
          .ep-std-grid { grid-template-columns: 1fr; }
          .ep-lang-intro-img-wrap { max-width: 300px; margin: 0 auto; }
          .ep-std-intro-img-wrap { max-width: 300px; margin: 0 auto; }
          .ep-faq-answer { padding-left: 24px; }
        }
      `}</style>
    </div>
  );
};

export default ExamPrep;
