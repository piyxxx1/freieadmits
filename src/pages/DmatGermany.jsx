import React from 'react';
import { DmatIllustration } from '../components/illustrations/DmatIllustration';
import { 
  Laptop, 
  Target, 
  BookOpen, 
  FileText, 
  Calendar, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Check
} from 'lucide-react';

export function DmatGermany({ onOpenCounselling }) {
  const whoShouldConsider = [
    "Hold or are completing a recognized Bachelor's degree in Engineering, Computer Science, or allied STEM fields",
    'Meet the general academic requirements and ECTS prerequisites of their target German Master’s program',
    'Need to understand the applicable assessment requirements mandated by specific German universities',
    'Want structured preparation for the computer-based evaluation format to present their strongest academic profile'
  ];

  const whatWeHelpWith = [
    {
      icon: Target,
      color: '#1d4ed8',
      title: 'Understanding the Process',
      desc: 'Understand how the assessment fits into the broader German Master’s application and university admissions process.'
    },
    {
      icon: BookOpen,
      color: '#d97706',
      title: 'Preparation Guidance',
      desc: 'Get structured guidance for preparing for the specific analytical, logical, and disciplinary subject modules.'
    },
    {
      icon: Laptop,
      color: '#059669',
      title: 'Test Preparation',
      desc: 'Become familiar with the computer-based assessment environment, timed question formats, and strategic approach.'
    },
    {
      icon: FileText,
      color: '#7c3aed',
      title: 'Application Guidance',
      desc: 'Understand how dMAT results relate to your overall Master’s application, transcripts, and Uni-Assist submission.'
    },
    {
      icon: Calendar,
      color: '#0284c7',
      title: 'Timeline Planning',
      desc: 'Plan your preparation around German university application deadlines for Winter and Summer intake rounds.'
    }
  ];

  return (
    <div>
      {/* 1. HERO HEADER */}
      <section style={{
        background: 'linear-gradient(180deg, #eff6ff 0%, #ffffff 100%)',
        padding: '54px 0 60px 0'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '44px', alignItems: 'center' }} className="dmat-hero-grid">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#fef3c7', color: '#92400e', border: '1px solid #fde68a', padding: '4px 12px', borderRadius: '50px', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '14px' }}>
                <span>🇩🇪 Germany Higher Education Pathway</span>
              </div>
              <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, marginBottom: '12px' }}>
                dMAT Germany
              </h1>
              <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#1d4ed8', marginBottom: '16px' }}>
                Digital Master's Assessment Test
              </div>
              <div style={{ fontSize: '1.15rem', fontWeight: 600, color: '#d97706', marginBottom: '20px' }}>
                Prepare. Assess. Move Forward.
              </div>

              <p style={{ color: '#475569', fontSize: '1.08rem', lineHeight: 1.65, marginBottom: '20px' }}>
                Planning to pursue a Master's degree in Germany? For certain Master's admission pathways, 
                students may be required to take an additional assessment such as the <strong>Digital Master's Assessment Test (dMAT)</strong>.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '28px' }}>
                <strong>FREIE ADMITS</strong> provides structured guidance to students preparing for the dMAT, 
                helping you approach the test environment with clarity and confidence.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button onClick={onOpenCounselling} className="btn btn-primary btn-lg">
                  <span>Enquire About dMAT</span>
                  <ArrowRight size={18} />
                </button>
                <button onClick={onOpenCounselling} className="btn btn-gold btn-lg">
                  <span>Book Counselling</span>
                </button>
              </div>
            </div>

            <div className="dmat-art-col">
              <DmatIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT IS dMAT? */}
      <section className="section-py" style={{ background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header">
            <span className="badge-pill badge-primary">Assessment Overview</span>
            <h2 className="section-title">
              What is <span className="text-highlight">dMAT?</span>
            </h2>
          </div>

          <div className="card-white" style={{ borderLeft: '5px solid #1d4ed8', padding: '36px' }}>
            <p style={{ fontSize: '1.12rem', color: '#1e293b', lineHeight: 1.7, marginBottom: '18px' }}>
              The <strong>Digital Master's Assessment Test (dMAT)</strong> is a computer-based assessment associated with certain Master's admission processes in Germany.
            </p>
            <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.65, marginBottom: '18px' }}>
              Depending on the university and program, additional admission requirements may apply. 
              Students should always verify the specific requirements of their chosen university and program.
            </p>
            <div style={{ background: '#f8fafc', padding: '16px 20px', borderRadius: '10px', border: '1px solid #e2e8f0', fontSize: '0.92rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <CheckCircle2 size={20} color="#1d4ed8" style={{ flexShrink: 0 }} />
              <span>FREIE ADMITS helps students understand university-specific prerequisites and prepares them for the test environment.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO SHOULD CONSIDER dMAT PREPARATION? */}
      <section className="section-py" style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header">
            <span className="badge-pill badge-amber">Target Candidates</span>
            <h2 className="section-title">
              Who Should Consider <span className="text-gold">dMAT Preparation?</span>
            </h2>
            <p className="section-desc">
              Students planning to apply for Master's programs in Germany who:
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            {whoShouldConsider.map((point, idx) => (
              <div
                key={idx}
                className="card-white"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  padding: '20px 24px'
                }}
              >
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#eff6ff',
                  color: '#1d4ed8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  <Check size={18} />
                </div>
                <div style={{ fontSize: '1.02rem', color: '#1e293b', fontWeight: 600, lineHeight: 1.6 }}>
                  {point}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHAT WE HELP WITH */}
      <section className="section-py" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill badge-primary">Structured Support</span>
            <h2 className="section-title">
              What We <span className="text-highlight">Help With</span>
            </h2>
            <p className="section-desc">
              From understanding the evaluation syllabus to aligning test timelines with German admission cycles.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '48px' }} className="dmat-features-grid">
            {whatWeHelpWith.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="card-white" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '28px' }}>
                  <div>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${item.color}15`, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px' }}>
                      <Icon size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#64748b', fontSize: '0.94rem', lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 5. IMPORTANT TRANSPARENCY NOTICE (MANDATED COPY) */}
          <div style={{
            background: '#fffbeb',
            border: '2px solid #fde68a',
            borderRadius: '16px',
            padding: '32px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#92400e', marginBottom: '14px' }}>
              <AlertTriangle size={24} color="#d97706" />
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0 }}>
                Important Information &amp; Disclaimer
              </h3>
            </div>
            <div style={{ color: '#78350f', fontSize: '0.96rem', lineHeight: 1.65, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p style={{ margin: 0 }}>
                • <strong>dMAT is not a substitute for the complete university admission process.</strong>
              </p>
              <p style={{ margin: 0 }}>
                • Meeting or completing an assessment does not itself guarantee admission.
              </p>
              <p style={{ margin: 0 }}>
                • University-specific eligibility, academic requirements and other admission conditions continue to apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. YOUR MASTER'S JOURNEY STARTS WITH PREPARATION */}
      <section className="section-py" style={{ background: '#0a1128', color: '#ffffff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span style={{ background: 'rgba(245, 158, 11, 0.25)', color: '#fbbf24', padding: '4px 12px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            FREIE ADMITS
          </span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', margin: '16px 0 12px 0' }}>
            Your Master's Journey Starts With Preparation
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '14px' }}>
            If Germany is your target destination, start planning early.
          </p>
          <div style={{ fontSize: '0.95rem', color: '#94a3b8', fontStyle: 'italic', marginBottom: '32px' }}>
            Your Journey. Our Guidance. Your Global Future.
          </div>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={onOpenCounselling} className="btn btn-gold btn-lg">
              <span>Enquire About dMAT</span>
              <ArrowRight size={18} />
            </button>
            <button onClick={onOpenCounselling} className="btn btn-primary btn-lg">
              <span>Book Counselling</span>
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .dmat-hero-grid {
            grid-template-columns: 1fr !important;
          }
          .dmat-art-col {
            order: -1;
            max-width: 420px;
            margin: 0 auto;
          }
          .dmat-features-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
