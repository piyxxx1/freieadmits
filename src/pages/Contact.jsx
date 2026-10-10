import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';

export function Contact({ onOpenCounselling }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    qualification: "Bachelor's Degree",
    gpa: '',
    preferredCourse: 'Computer Science & AI',
    preferredCountry: 'Germany 🇩🇪',
    preferredIntake: 'Winter 2026/27 (Germany Primary)'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Fallback
    }
  };

  const stepsNext = [
    {
      num: '01',
      title: 'Our counsellor reviews your enquiry',
      desc: 'We examine your academic background, degree, marks/GPA, and target study preferences.'
    },
    {
      num: '02',
      title: 'We contact you to understand your profile',
      desc: 'A dedicated advisor reaches out to discuss your specific interests, budgets, and career objectives.'
    },
    {
      num: '03',
      title: 'We discuss suitable study pathways',
      desc: 'We evaluate public vs private options, language criteria, dMAT requirements, and deadlines.'
    },
    {
      num: '04',
      title: 'You receive guidance on the next steps',
      desc: 'Get structured checklists, documentation frameworks, and an actionable application roadmap.'
    }
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
            <Sparkles size={14} /> Get in Touch
          </span>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '12px' }}>
            Contact FREIE ADMITS
          </h1>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#475569', marginBottom: '16px' }}>
            Let's Start Your International Education Journey
          </div>
          <p style={{ fontSize: '1.08rem', color: '#475569', lineHeight: 1.65, marginBottom: '28px' }}>
            Have questions about studying abroad? Whether you're still exploring your options or already 
            know your target university, our team can help you understand the next steps.
          </p>

          {/* Quick Contact Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="contact-quick-strip">
            <div style={{ background: '#ffffff', padding: '18px', borderRadius: '12px', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ color: '#1c2a4f', marginBottom: '8px' }}><Phone size={22} /></div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Call Directly</div>
              <a href="tel:+919974798803" style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1c2a4f' }}>+91 99747 98803</a>
            </div>

            <div style={{ background: '#ffffff', padding: '18px', borderRadius: '12px', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ color: '#1c2a4f', marginBottom: '8px' }}><MessageSquare size={22} /></div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>WhatsApp Us</div>
              <a href="https://wa.me/919974798803" target="_blank" rel="noreferrer" style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1c2a4f' }}>+91 99747 98803</a>
            </div>

            <div style={{ background: '#ffffff', padding: '18px', borderRadius: '12px', border: '1.5px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <div style={{ color: '#475569', marginBottom: '8px' }}><Mail size={22} /></div>
              <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Official Email</div>
              <a href="mailto:freieadmits@gmail.com" style={{ fontSize: '0.92rem', fontWeight: 700, color: '#1c2a4f' }}>freieadmits@gmail.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FORM & WHAT HAPPENS NEXT SECTION */}
      <section className="section-py" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '48px', alignItems: 'start' }} className="contact-main-grid">
            {/* Left: Book a Counselling Session Form */}
            <div className="card-white" style={{ padding: '36px', border: '1.5px solid #e2e8f0' }}>
              <span className="badge-pill badge-primary" style={{ marginBottom: '8px' }}>
                <Sparkles size={14} /> Profile Intake Form
              </span>
              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '6px' }}>
                Book a Counselling Session
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.94rem', marginBottom: '24px' }}>
                Tell us a little about yourself and your academic aspirations:
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="form-grid-2">
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Aryan Sharma"
                        className="form-input"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="form-label">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 99747 98803"
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '14px' }}>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="aryan@example.com"
                      className="form-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-grid-2">
                    <div>
                      <label className="form-label">Highest Qualification</label>
                      <select
                        className="form-select"
                        value={formData.qualification}
                        onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                      >
                        <option value="Bachelor's Degree">Bachelor's Degree (B.Tech / BE / B.Sc / BCA)</option>
                        <option value="Class 12">Class 12 (Higher Secondary)</option>
                        <option value="Master's Degree">Master's Degree</option>
                        <option value="Diploma">Diploma / Polytechnic</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label">Percentage / GPA *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 8.4 CGPA or 80%"
                        className="form-input"
                        value={formData.gpa}
                        onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div>
                      <label className="form-label">Preferred Course</label>
                      <select
                        className="form-select"
                        value={formData.preferredCourse}
                        onChange={(e) => setFormData({ ...formData, preferredCourse: e.target.value })}
                      >
                        <option value="Computer Science & AI">Computer Science &amp; AI</option>
                        <option value="Mechanical & Automotive Engineering">Mechanical &amp; Automotive Engineering</option>
                        <option value="Electrical & Electronics">Electrical &amp; Electronics</option>
                        <option value="Data Science & Big Data">Data Science</option>
                        <option value="Germany Ausbildung (Vocational)">Germany Ausbildung (Vocational)</option>
                        <option value="Nursing & Healthcare">Nursing &amp; Healthcare</option>
                        <option value="MBA & Management">MBA &amp; Management</option>
                        <option value="dMAT Guidance (Master's in Germany)">dMAT Guidance (Master's in Germany)</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label">Preferred Country</label>
                      <select
                        className="form-select"
                        value={formData.preferredCountry}
                        onChange={(e) => setFormData({ ...formData, preferredCountry: e.target.value })}
                      >
                        <option value="Germany 🇩🇪">Germany 🇩🇪 (Focus)</option>
                        <option value="Netherlands 🇳🇱">Netherlands 🇳🇱</option>
                        <option value="France 🇫🇷">France 🇫🇷</option>
                        <option value="Spain 🇪🇸">Spain 🇪🇸</option>
                        <option value="Poland 🇵🇱">Poland 🇵🇱</option>
                        <option value="Italy 🇮🇹">Italy 🇮🇹</option>
                        <option value="Austria 🇦🇹">Austria 🇦🇹</option>
                        <option value="Sweden & Denmark 🇸🇪 🇩🇰">Sweden &amp; Denmark 🇸🇪 🇩🇰</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '22px' }}>
                    <label className="form-label">Preferred Intake</label>
                    <select
                      className="form-select"
                      value={formData.preferredIntake}
                      onChange={(e) => setFormData({ ...formData, preferredIntake: e.target.value })}
                    >
                      <option value="Winter 2026/27 (Germany Primary)">Winter 2026/27 (Primary Germany Intake - Oct)</option>
                      <option value="Summer 2027 (Germany Second Intake)">Summer 2027 (Germany Second Intake - Apr)</option>
                      <option value="Winter 2027/28">Winter 2027/28</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%', borderRadius: '12px', fontSize: '1rem', fontWeight: 700 }}
                  >
                    <span>Submit Enquiry</span>
                    <Send size={18} />
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '36px 16px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: '#ffffff',
                    color: '#1c2a4f',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px auto'
                  }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '8px' }}>
                    Enquiry Received!
                  </h4>
                  <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    Thank you, <strong>{formData.name}</strong>. Our counsellor will review your profile and reach out within 24 hours.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-secondary">
                    Submit Another Enquiry
                  </button>
                </div>
              )}
            </div>

            {/* Right: What Happens Next? (4 Steps) & Office Card */}
            <div>
              <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '18px', padding: '32px', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#1c2a4f', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '6px' }}>
                  Transparent Process
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '20px' }}>
                  What Happens Next?
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {stepsNext.map((step) => (
                    <div key={step.num} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: '#f8fafc',
                        color: '#1c2a4f',
                        fontSize: '0.9rem',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {step.num}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#1c2a4f', marginBottom: '2px' }}>
                          {step.title}
                        </h4>
                        <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office & Socials Card */}
              <div style={{ background: '#1c2a4f', color: '#ffffff', borderRadius: '16px', padding: '28px' }}>
                <div style={{ fontSize: '0.76rem', color: '#94a3b8', fontWeight: 800, letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: '6px' }}>
                  FREIE ADMITS
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
                  Your Journey. Our Guidance. Your Global Future.
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: '#cbd5e1', marginBottom: '20px' }}>
                  <div><strong>Phone:</strong> <a href="tel:+919974798803" style={{ color: '#eef2fa', textDecoration: 'none' }}>+91 99747 98803</a></div>
                  <div><strong>WhatsApp:</strong> <a href="https://wa.me/919974798803" target="_blank" rel="noreferrer" style={{ color: '#eef2fa', textDecoration: 'none' }}>+91 99747 98803</a></div>
                  <div><strong>Email:</strong> <a href="mailto:freieadmits@gmail.com" style={{ color: '#eef2fa', textDecoration: 'none' }}>freieadmits@gmail.com</a></div>
                  <div><strong>Website:</strong> www.freieadmits.com</div>
                </div>

                <div style={{ borderTop: '1px solid #1c2a4f', paddingTop: '16px' }}>
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginBottom: '8px' }}>FOLLOW US:</div>
                  <div style={{ display: 'flex', gap: '12px', fontSize: '0.84rem', color: '#eef2fa', fontWeight: 600 }}>
                    <span>Instagram</span> • <span>Facebook</span> • <span>LinkedIn</span> • <span>YouTube</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. READY TO EXPLORE OPTIONS? CTA */}
      <section className="section-py" style={{ background: '#1c2a4f', color: '#ffffff', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
            Ready to Explore Your Options?
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '28px' }}>
            Start with profile-based guidance. Talk to our counsellors today.
          </p>
          <button onClick={onOpenCounselling} className="btn btn-primary btn-lg">
            <span>Book Free Counselling</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Mandatory Disclaimer */}
      <div className="container" style={{ padding: '24px 20px', textAlign: 'center', fontSize: '0.8rem', color: '#64748b' }}>
        Admission decisions are made by individual universities. Visa decisions are made by the relevant immigration authorities. FREIE ADMITS provides guidance and assistance throughout the application process.
      </div>

      <style>{`
        @media (max-width: 960px) {
          .contact-quick-strip {
            grid-template-columns: 1fr !important;
          }
          .contact-main-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
