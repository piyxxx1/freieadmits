import React from 'react';
import { useRouter } from '../context/RouterContext';
import { HeroIllustration } from '../components/illustrations/HeroIllustration';
import { CountryFlag } from '../components/CountryFlag';
import { destinationsData } from '../data/destinationsData';
import { IllustratedAvatar } from '../components/illustrations/AvatarIllustrations';
import { 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  Globe, 
  BookOpen, 
  FileText, 
  ShieldCheck, 
  PlaneTakeoff, 
  ChevronRight,
  UserCheck,
  Laptop
} from 'lucide-react';

export function Home({ onOpenCounselling, onOpenEvaluation }) {
  const { navigate } = useRouter();

  const whyChooseUs = [
    {
      icon: GraduationCap,
      color: '#1d4ed8',
      title: 'Profile-Based Guidance',
      desc: 'We understand your academic background, interests and career goals before recommending study options.',
      image: '/images/features/profile_guidance.jpg'
    },
    {
      icon: Globe,
      color: '#d97706',
      title: 'Europe-Focused Opportunities',
      desc: 'Explore quality education opportunities across Germany, Netherlands, France, Spain, Poland, Italy, Austria and other European destinations.',
      image: '/images/features/europe_opportunities.jpg'
    },
    {
      icon: BookOpen,
      color: '#059669',
      title: 'Course & University Selection',
      desc: 'Find programs that match your academic profile, career aspirations and preferred budget.',
      image: '/images/features/course_selection.jpg'
    },
    {
      icon: FileText,
      color: '#7c3aed',
      title: 'Application Support',
      desc: 'Get structured assistance with university applications and required documentation.',
      image: '/images/features/application_support.jpg'
    },
    {
      icon: ShieldCheck,
      color: '#16a34a',
      title: 'Visa Guidance',
      desc: 'We help you understand visa requirements, documentation and the application process.',
      image: '/images/features/visa_guidance.jpg'
    },
    {
      icon: PlaneTakeoff,
      color: '#0284c7',
      title: 'Pre-Departure Support',
      desc: 'Our assistance continues beyond admission, helping you prepare for your international student journey.',
      image: '/images/features/pre_departure.jpg'
    }
  ];

  const processSteps = [
    { number: '01', title: 'Profile Evaluation', desc: 'We understand your academic profile, goals and preferences.' },
    { number: '02', title: 'Course & University Selection', desc: 'We identify suitable programs and institutions.' },
    { number: '03', title: 'Application Preparation', desc: 'We assist with documentation and application requirements.' },
    { number: '04', title: 'Admission Support', desc: 'We guide you through the admission process and next steps.' },
    { number: '05', title: 'Visa Guidance', desc: 'We help you prepare for the student visa application.' },
    { number: '06', title: 'Pre-Departure', desc: 'Prepare for your new academic and international experience.' },
  ];

  const studyLevels = [
    {
      title: "Bachelor's",
      desc: 'Start your international academic journey after Class 12 with direct or pathway programs across top European faculties.',
      tag: 'After 12th',
      action: () => navigate('/courses')
    },
    {
      title: "Master's",
      desc: 'Advance your qualifications with an international Master’s degree in science, engineering, tech, or business.',
      tag: 'High Demand',
      featured: true,
      action: () => navigate('/courses')
    },
    {
      title: 'MBA & Management',
      desc: 'Build business and management expertise in a global environment with international corporate linkages.',
      tag: 'Global Careers',
      action: () => navigate('/courses')
    },
    {
      title: 'Engineering & Technology',
      desc: 'Explore programs in engineering, computer science, AI, data and emerging technologies in industrial hubs.',
      tag: 'TU9 & Tech',
      featured: true,
      action: () => navigate('/courses')
    },
    {
      title: 'Computer Science & IT',
      desc: 'Explore the rapidly expanding world of digital technology, AI, cybersecurity, and software architecture.',
      tag: 'High ROI',
      action: () => navigate('/courses')
    },
    {
      title: 'Nursing & Healthcare',
      desc: 'Explore study and career pathways in healthcare-related fields across Germany, Poland, and Europe.',
      tag: 'Career Direct',
      action: () => navigate('/courses')
    },
    {
      title: 'Ausbildung & Vocational Programs',
      desc: 'Explore Germany’s dual vocational education and training pathways with monthly paid stipends from month 1.',
      tag: 'Stipend Included 🇩🇪',
      highlight: true,
      action: () => navigate('/courses')
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
                Study Abroad with{' '}
                <span className="hero-gradient-text-blue">Clarity</span>,{' '}
                <span className="hero-headline-dark">Confidence</span>
                <br className="hero-br-hide-sm" />
                {' '}&amp; <span className="hero-gradient-text-amber">The Right Guidance</span>
              </h1>

              <p className="hero-subtext">
                Your international education journey starts with profile-driven alignment. We help students get into top public universities across <strong>Germany &amp; Europe</strong> — with zero tuition fees, tailored dMAT prep, and end-to-end visa support.
              </p>

              {/* 2x2 Bento Feature Highlights — Glassmorphism */}
              <div className="hero-bento-grid">
                <div className="hero-bento-card">
                  <div className="bento-icon-box bento-blue">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <div className="bento-title">€0 Tuition Public Unis</div>
                    <div className="bento-sub">Top German &amp; EU faculties</div>
                  </div>
                  <div className="bento-shimmer" />
                </div>

                <div className="hero-bento-card">
                  <div className="bento-icon-box bento-amber">
                    <Laptop size={20} />
                  </div>
                  <div>
                    <div className="bento-title">dMAT Prep &amp; APS</div>
                    <div className="bento-sub">Master's test prep support</div>
                  </div>
                  <div className="bento-shimmer" />
                </div>

                <div className="hero-bento-card">
                  <div className="bento-icon-box bento-green">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="bento-title">Profile-First Advisory</div>
                    <div className="bento-sub">100% transparent &amp; unbiased</div>
                  </div>
                  <div className="bento-shimmer" />
                </div>

                <div className="hero-bento-card">
                  <div className="bento-icon-box bento-purple">
                    <PlaneTakeoff size={20} />
                  </div>
                  <div>
                    <div className="bento-title">Visa &amp; Pre-Departure</div>
                    <div className="bento-sub">Complete roadmap assistance</div>
                  </div>
                  <div className="bento-shimmer" />
                </div>
              </div>

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

              {/* Social Proof & Quick Destination Shortcuts */}
              <div className="hero-trust-bar">
                <div className="hero-trust-rating-box">
                  <div className="hero-avatar-stack">
                    <div className="hero-avatar-ring" style={{ background: '#dbeafe' }}>
                      <IllustratedAvatar type="student1" size={34} />
                    </div>
                    <div className="hero-avatar-ring" style={{ background: '#ffedd5', marginLeft: '-10px' }}>
                      <IllustratedAvatar type="student2" size={34} />
                    </div>
                    <div className="hero-avatar-ring" style={{ background: '#ecfdf5', marginLeft: '-10px' }}>
                      <IllustratedAvatar type="student3" size={34} />
                    </div>
                  </div>
                  <div className="hero-rating-text-wrap">
                    <div className="hero-rating-stars-row">
                      <span className="hero-rating-stars">★★★★★</span>
                      <span className="hero-rating-score">5.0 Rating</span>
                    </div>
                    <div className="hero-rating-subtext">100+ Profiles Evaluated</div>
                  </div>
                </div>

                <div className="hero-quick-destinations">
                  <span className="hero-quick-label">Top Destinations:</span>
                  <div className="hero-quick-flags-row">
                    <button onClick={() => navigate('/destinations')} className="hero-flag-btn">
                      <CountryFlag countryId="germany" size={15} /> <span>Germany</span>
                    </button>
                    <button onClick={() => navigate('/destinations')} className="hero-flag-btn">
                      <CountryFlag countryId="finland" size={15} /> <span>Finland</span>
                    </button>
                    <button onClick={() => navigate('/destinations')} className="hero-flag-btn">
                      <CountryFlag countryId="ireland" size={15} /> <span>Ireland</span>
                    </button>
                  </div>
                </div>
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
      <section style={{ background: '#0a1128', color: '#ffffff', padding: '48px 0', borderTop: '1px solid #1e293b', borderBottom: '1px solid #1e293b' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '36px', alignItems: 'center' }} className="dmat-banner-grid">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24', padding: '4px 12px', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '12px' }}>
                <span>🇩🇪 Germany dMAT Guidance</span>
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.25, marginBottom: '14px' }}>
                Planning to Study a <span style={{ color: '#38bdf8' }}>Master's in Germany?</span>
              </h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '24px' }}>
                FREIE ADMITS provides structured guidance for students preparing for the <strong>Digital Master's Assessment Test (dMAT)</strong>. Understand the process, prepare effectively and move forward with greater confidence.
              </p>
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button onClick={() => navigate('/dmat-germany')} className="btn btn-gold">
                  <span>Explore dMAT Germany</span>
                  <ArrowRight size={16} />
                </button>
                <button onClick={() => navigate('/destinations')} className="btn btn-secondary" style={{ background: '#1e293b', color: '#ffffff', borderColor: '#334155' }}>
                  <span>Why Germany?</span>
                </button>
              </div>
            </div>

            {/* Quick Spec Box for Germany */}
            <div style={{ background: '#111c38', border: '1px solid #2a3a5e', borderRadius: '16px', padding: '28px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '14px' }}>
                German Higher Education Highlights
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1e293b', paddingBottom: '8px' }}>
                  <span style={{ color: '#94a3b8' }}>Tuition at Public Unis:</span>
                  <strong style={{ color: '#10b981' }}>€0 (Tuition-Free)</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1e293b', paddingBottom: '8px' }}>
                  <span style={{ color: '#94a3b8' }}>Post-Study Work Visa:</span>
                  <strong style={{ color: '#ffffff' }}>18 Months Job Seeker</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1e293b', paddingBottom: '8px' }}>
                  <span style={{ color: '#94a3b8' }}>Target Programs:</span>
                  <strong style={{ color: '#ffffff' }}>Master's, IT &amp; Engineering</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#94a3b8' }}>Vocational Training:</span>
                  <strong style={{ color: '#fbbf24' }}>Ausbildung with Stipend</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE FREIE ADMITS */}
      <section className="section-py" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill badge-primary">Guiding Principles</span>
            <h2 className="section-title">
              Why Choose <span className="text-highlight">FREIE ADMITS?</span>
            </h2>
            <p className="section-desc">
              We focus on profile-based alignment rather than generic sales pitches. Understand the student first, recommend the pathway second.
            </p>
          </div>

          <div className="grid-3">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                style={{ 
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  display: 'flex', 
                  flexDirection: 'column',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
                }}
              >
                {item.image && (
                  <div style={{ height: '190px', width: '100%', overflow: 'hidden', background: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      loading="lazy"
                    />
                  </div>
                )}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
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

          {/* Featured Primary Card: GERMANY */}
          <div className="germany-featured-box" style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #fffbeb 100%)',
            border: '2px solid #fde68a',
            borderRadius: '20px',
            padding: '36px',
            boxShadow: '0 10px 28px rgba(217, 119, 6, 0.1)',
            marginBottom: '32px'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '32px', alignItems: 'center' }} className="germany-card-grid">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <CountryFlag countryId="germany" size={26} />
                  <div>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                      Germany
                    </h3>
                    <span style={{ fontSize: '0.78rem', background: '#f59e0b', color: '#ffffff', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                      PRIMARY DESTINATION FOCUS
                    </span>
                  </div>
                </div>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '20px' }}>
                  Study at public and private universities and explore Bachelor's, Master's and vocational pathways. Home to Europe’s strongest economy, zero-tuition universities, and world-leading engineering ecosystems.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {['Engineering & Mechatronics', 'Computer Science & AI', 'Data Science', 'Automotive', 'Ausbildung Programs'].map((field, i) => (
                    <span key={i} style={{ background: '#ffffff', border: '1px solid #fde68a', color: '#92400e', padding: '4px 10px', borderRadius: '6px', fontSize: '0.82rem', fontWeight: 600 }}>
                      {field}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button onClick={() => navigate('/destinations')} className="btn btn-gold">
                    <span>Explore Germany In Detail</span>
                    <ArrowRight size={16} />
                  </button>
                  <button onClick={() => navigate('/dmat-germany')} className="btn btn-secondary">
                    <span>dMAT Test Guidance</span>
                  </button>
                </div>
              </div>

              {/* Germany Visual Illustration */}
              <div style={{ height: '240px', borderRadius: '14px', overflow: 'hidden', border: '1px solid #fed7aa', position: 'relative' }}>
                <img
                  src="/images/destinations/germany.jpg"
                  alt="Study in Germany"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Grid of Other European Destinations */}
          <div className="grid-3" style={{ marginBottom: '36px' }}>
            {destinationsData.filter(d => d.id !== 'germany').slice(0, 6).map((dest) => (
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
                    src={dest.image}
                    alt={`Study in ${dest.name}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    className="dest-img-hover"
                  />
                  <div style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                    color: '#0f172a'
                  }}>
                    <CountryFlag countryId={dest.id} size={14} />
                    <span>{dest.name}</span>
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '10px',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    color: '#0f172a',
                    padding: '3px 8px',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: 700
                  }}>
                    {dest.tuitionRange.split('(')[0].trim()}
                  </div>
                </div>

                <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#1d4ed8', marginBottom: '4px' }}>
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

      {/* 5. FIND THE RIGHT PROGRAM (STUDY LEVELS & AUSBILDUNG) */}
      <section className="section-py" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill badge-primary">Academic Offerings</span>
            <h2 className="section-title">
              Find the <span className="text-highlight">Right Program</span>
            </h2>
            <p className="section-desc">
              Choose a qualification that builds your future, matched to your previous education, interests and long-term career goals.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '36px' }}>
            {studyLevels.map((lvl, idx) => (
              <div
                key={idx}
                className="card-white"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: lvl.highlight ? '2px solid #f59e0b' : lvl.featured ? '1.5px solid #93c5fd' : '1px solid #e2e8f0',
                  background: lvl.highlight ? '#fffbeb' : '#ffffff'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{
                      background: lvl.highlight ? '#fef3c7' : '#eff6ff',
                      color: lvl.highlight ? '#92400e' : '#1d4ed8',
                      padding: '3px 9px',
                      borderRadius: '6px',
                      fontSize: '0.76rem',
                      fontWeight: 700
                    }}>
                      {lvl.tag}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                    {lvl.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {lvl.desc}
                  </p>
                </div>

                <button
                  onClick={lvl.action}
                  className="btn btn-secondary"
                  style={{ width: '100%', borderRadius: '8px', fontSize: '0.88rem' }}
                >
                  <span>Explore Courses</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button onClick={() => navigate('/courses')} className="btn btn-primary btn-lg">
              <span>Explore All Courses &amp; Programs</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. OUR 6-STEP PROCESS */}
      <section className="section-py" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill badge-primary">Clear &amp; Structured</span>
            <h2 className="section-title">
              Our <span className="text-highlight">Process</span>
            </h2>
            <p className="section-desc">
              From your initial profile evaluation to pre-departure, our structured assistance guides you with transparency.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '36px' }}>
            {processSteps.map((step, idx) => (
              <div key={idx} className="card-white" style={{ position: 'relative', overflow: 'hidden' }}>
                <span style={{
                  position: 'absolute',
                  top: '14px',
                  right: '18px',
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#e2e8f0',
                  fontFamily: 'var(--font-heading)'
                }}>
                  {step.number}
                </span>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#1d4ed8', marginBottom: '6px' }}>
                  STAGE {step.number}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.55 }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button onClick={() => navigate('/services')} className="btn btn-secondary btn-lg">
              <span>View Full Services Breakdown</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 7. FINAL INSPIRATIONAL CTA SECTION */}
      <section className="section-py" style={{ background: '#0a1128', color: '#ffffff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24', padding: '4px 14px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            FREIE ADMITS
          </span>
          <h2 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#ffffff', margin: '18px 0 14px 0' }}>
            Your Future Starts with the Right Decision
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '32px' }}>
            Don't choose a country simply because it is popular. Choose a course and university that fit your profile and your future goals.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={onOpenCounselling} className="btn btn-primary btn-lg">
              <span>Book Free Counselling</span>
              <ArrowRight size={18} />
            </button>
            <button onClick={onOpenEvaluation} className="btn btn-gold btn-lg">
              <span>Get Profile Evaluation</span>
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
          padding: 68px 0 76px 0;
          background: linear-gradient(160deg, #f0f7ff 0%, #f8faff 40%, #fffbf0 100%);
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
          background: radial-gradient(circle, rgba(191, 219, 254, 0.55) 0%, rgba(147, 197, 253, 0.2) 60%, transparent 100%);
          animation: orbFloat1 14s ease-in-out infinite;
        }
        .hero-orb-2 {
          width: 420px; height: 420px;
          bottom: -10%; left: -6%;
          background: radial-gradient(circle, rgba(254, 243, 199, 0.6) 0%, rgba(252, 211, 77, 0.15) 60%, transparent 100%);
          animation: orbFloat2 18s ease-in-out infinite;
        }
        .hero-orb-3 {
          width: 280px; height: 280px;
          top: 40%; left: 40%;
          background: radial-gradient(circle, rgba(221, 214, 254, 0.35) 0%, transparent 70%);
          animation: orbFloat3 10s ease-in-out infinite;
        }
        .hero-grid-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(30, 64, 175, 0.07) 1.5px, transparent 1.5px);
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
          color: #1d4ed8;
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
          font-weight: 800;
          color: #0f172a;
          line-height: 1.14;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
          font-family: var(--font-heading);
        }
        .hero-headline-dark { color: #0f172a; }
        .hero-gradient-text-blue {
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-gradient-text-amber {
          background: linear-gradient(135deg, #b45309 0%, #d97706 40%, #f59e0b 100%);
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
        .bento-blue { background: #eff6ff; color: #1d4ed8; }
        .bento-amber { background: #fffbeb; color: #d97706; }
        .bento-green { background: #ecfdf5; color: #059669; }
        .bento-purple { background: #f5f3ff; color: #7c3aed; }
        .bento-title { font-size: 0.875rem; font-weight: 700; color: #0f172a; }
        .bento-sub { font-size: 0.775rem; color: #64748b; margin-top: 1px; }

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
          color: #0f172a;
          backdrop-filter: blur(8px);
          transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }
        .hero-btn-outline:hover {
          background: #f8faff;
          border-color: #93c5fd;
          color: #1d4ed8;
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
          font-size: 0.84rem; font-weight: 700; color: #0f172a;
        }
        .hero-rating-stars { color: #f59e0b; letter-spacing: 1px; }
        .hero-rating-score { font-weight: 800; color: #0f172a; }
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
          font-size: 0.8rem; font-weight: 700; color: #1e293b;
          transition: all 0.2s ease; white-space: nowrap;
        }
        .hero-flag-btn:hover {
          background: #eff6ff; border-color: #93c5fd; color: #1d4ed8;
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
        .hero-stat-number { font-size: 1.05rem; font-weight: 800; color: #0f172a; line-height: 1.2; }
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
          .hero-section-premium { padding: 48px 0 56px 0; }
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
