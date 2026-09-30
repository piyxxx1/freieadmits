import React, { useState } from 'react';
import {
  Building2,
  Users,
  GraduationCap,
  Globe,
  Handshake,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  FileText,
  TrendingUp,
  ShieldCheck,
  Briefcase,
  School,
  Star
} from 'lucide-react';

export function B2B({ onOpenCounselling: _onOpenCounselling }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    orgName: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    orgType: 'School / Junior College',
    city: '',
    state: '',
    studentsPerYear: 'Less than 50',
    interestedIn: [],
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (value) => {
    setFormData(prev => {
      const arr = prev.interestedIn.includes(value)
        ? prev.interestedIn.filter(v => v !== value)
        : [...prev.interestedIn, value];
      return { ...prev, interestedIn: arr };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const partners = [
    { icon: School, label: 'Schools & Junior Colleges', desc: 'Offer European study abroad options to your Class 11 & 12 students as a premium add-on to your institution.' },
    { icon: GraduationCap, label: 'Degree Colleges & Universities', desc: "Help graduating students and alumni unlock EU master's, bachelor's and research opportunities." },
    { icon: Briefcase, label: 'HR & Corporate Teams', desc: 'Enable employees & sponsored talents with structured international upskilling and MBA pathways.' },
    { icon: Users, label: 'Coaching & Training Centers', desc: 'Add a Europe study-abroad vertical to your student services — we handle end-to-end guidance.' },
    { icon: Globe, label: 'Education Consultants & Agencies', desc: 'Collaborate under a referral or co-counselling model and expand your Europe offering instantly.' },
    { icon: Building2, label: 'NGOs & Skill Development Bodies', desc: 'Help your beneficiaries access tuition-free European university education and vocational programs.' },
  ];

  const benefits = [
    { icon: ShieldCheck, title: 'Dedicated B2B Relationship Manager', desc: 'A single point of contact who works closely with your team to onboard and support students.' },
    { icon: TrendingUp, title: 'Revenue Sharing / Referral Model', desc: 'Earn on every successful admission through a transparent and structured referral agreement.' },
    { icon: FileText, title: 'Co-branded Student Materials', desc: "Workshops, brochures, webinars and info sessions with your institution's branding." },
    { icon: GraduationCap, title: 'Expert Europe Counselling', desc: 'We cover Germany (dMAT, APS), Finland, Ireland, Netherlands, France, Poland & 6 more destinations.' },
    { icon: Star, title: 'Priority Processing for Partner Students', desc: 'Students referred by partner institutions get priority slots and dedicated advisor attention.' },
    { icon: Handshake, title: 'Flexible Partnership Models', desc: 'Choose from referral, co-counselling, campus integration, or white-label model — whatever fits you best.' },
  ];

  const interestOptions = [
    'Germany (dMAT / Public Universities)',
    'Finland Public Universities',
    'Ireland Universities',
    'Ausbildung / Vocational Programs',
    'Bachelor\'s Programs',
    'Master\'s Programs',
    'MBA / Management',
    'Campus Workshops & Webinars',
    'Co-branded Collateral',
    'Referral Partnership',
  ];

  return (
    <div>
      {/* 1. HERO */}
      <section style={{
        background: 'linear-gradient(160deg, #1c2a4f 0%, #1e3a5f 60%, #0f2a4a 100%)',
        padding: '68px 0 60px 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* bg orb */}
        <div style={{ position: 'absolute', top: '-80px', right: '-100px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '340px', height: '340px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.35)',
            borderRadius: '100px', padding: '6px 16px', marginBottom: '24px',
            fontSize: '0.8rem', fontWeight: 700, color: '#93c5fd', letterSpacing: '0.04em'
          }}>
            <Handshake size={15} />
            <span>INSTITUTIONAL & CORPORATE PARTNERSHIPS</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            fontWeight: 800, color: '#ffffff',
            lineHeight: 1.12, marginBottom: '20px',
            letterSpacing: '-0.025em'
          }}>
            Partner with FREIE ADMITS<br />
            <span style={{ background: 'linear-gradient(135deg, #eef2fa 0%, #eef2fa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Grow Together in European Education
            </span>
          </h1>

          <p style={{ fontSize: '1.1rem', color: '#94a3b8', lineHeight: 1.68, maxWidth: '680px', margin: '0 auto 36px auto' }}>
            Join our B2B network — schools, colleges, corporates, coaching centres and education agencies — and help your students or employees unlock world-class European university education.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#b2b-form" style={{ textDecoration: 'none' }}>
              <button className="btn btn-primary btn-lg" style={{ boxShadow: '0 10px 28px rgba(29,78,216,0.4)' }}>
                <Sparkles size={18} />
                <span>Register as Partner</span>
                <ArrowRight size={16} />
              </button>
            </a>
            <a href="tel:+919220406733" style={{ textDecoration: 'none' }}>
              <button className="b2b-outline-btn">
                <Phone size={16} />
                <span>Talk to B2B Team</span>
              </button>
            </a>
          </div>

          {/* Quick trust bar */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', flexWrap: 'wrap', marginTop: '48px' }}>
            {[
              { val: '11+', label: 'European Destinations' },
              { val: '100+', label: 'Profiles Guided' },
              { val: '3', label: 'Office Locations' },
              { val: '100%', label: 'Free Counselling' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '4px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. WHO IS THIS FOR */}
      <section className="section-py" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill badge-primary">Who Can Partner</span>
            <h2 className="section-title">
              Built for <span className="text-highlight">Organizations Like Yours</span>
            </h2>
            <p className="section-desc">
              Whether you're an educational institution, a company or a consultancy — there's a partnership model designed for you.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '20px' }}>
            {partners.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="b2b-partner-card">
                  <div className="b2b-partner-icon">
                    <Icon size={22} />
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1c2a4f', marginBottom: '8px' }}>{p.label}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BENEFITS */}
      <section className="section-py" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-pill badge-secondary">Partnership Benefits</span>
            <h2 className="section-title">
              What You <span className="text-highlight">Get as a Partner</span>
            </h2>
            <p className="section-desc">
              We make the partnership rewarding for you and transformative for your students or employees.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '20px' }}>
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease'
                }} className="b2b-benefit-card">
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: 'linear-gradient(135deg, #1c2a4f 0%, #1c2a4f 100%)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '16px', color: '#ffffff'
                  }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1c2a4f', marginBottom: '8px' }}>{b.title}</h3>
                  <p style={{ fontSize: '0.86rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. B2B ENQUIRY FORM */}
      <section id="b2b-form" className="section-py" style={{ background: 'linear-gradient(160deg, #f0f7ff 0%, #ffffff 100%)' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-header">
            <span className="badge-pill badge-primary">
              <Handshake size={14} /> Partner Registration
            </span>
            <h2 className="section-title">
              Register Your <span className="text-highlight">Organisation</span>
            </h2>
            <p className="section-desc">
              Fill in the form below and our B2B team will contact you within 1 business day to discuss partnership options.
            </p>
          </div>

          {submitted ? (
            <div style={{
              background: '#ffffff',
              border: '2px solid #bbf7d0',
              borderRadius: '20px',
              padding: '56px 40px',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(16,185,129,0.1)'
            }}>
              <div style={{
                width: '72px', height: '72px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #1c2a4f 0%, #1c2a4f 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 24px auto'
              }}>
                <CheckCircle2 size={36} color="#ffffff" />
              </div>
              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '12px' }}>
                Partnership Request Received!
              </h2>
              <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.6, maxWidth: '520px', margin: '0 auto 24px auto' }}>
                Thank you, <strong>{formData.orgName || 'your organisation'}</strong>. Our B2B team will review your request and reach out to <strong>{formData.email}</strong> within 1 business day.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="mailto:freieadmits@gmail.com" style={{ textDecoration: 'none' }}>
                  <button className="btn btn-primary">
                    <Mail size={16} />
                    <span>Email Us Directly</span>
                  </button>
                </a>
                <a href="tel:+919220406733" style={{ textDecoration: 'none' }}>
                  <button className="btn btn-secondary">
                    <Phone size={16} />
                    <span>+91 92204 06733</span>
                  </button>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 8px 32px rgba(15,23,42,0.07)',
              border: '1px solid #e2e8f0'
            }}>

              {/* SECTION A: Organisation Details */}
              <div className="b2b-form-section">
                <div className="b2b-form-section-title">
                  <Building2 size={17} />
                  <span>Organisation Details</span>
                </div>
                <div className="form-grid-2">
                  <div className="b2b-field">
                    <label>Organisation Name <span className="req">*</span></label>
                    <input type="text" name="orgName" required value={formData.orgName} onChange={handleChange} placeholder="e.g. Sunrise International School" />
                  </div>
                  <div className="b2b-field">
                    <label>Organisation Type <span className="req">*</span></label>
                    <select name="orgType" required value={formData.orgType} onChange={handleChange}>
                      <option>School / Junior College</option>
                      <option>Degree College / University</option>
                      <option>Coaching / Training Centre</option>
                      <option>Corporate / Company HR</option>
                      <option>Education Consultant / Agency</option>
                      <option>NGO / Skill Development Body</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="b2b-field">
                    <label>City <span className="req">*</span></label>
                    <input type="text" name="city" required value={formData.city} onChange={handleChange} placeholder="e.g. Mumbai" />
                  </div>
                  <div className="b2b-field">
                    <label>State <span className="req">*</span></label>
                    <input type="text" name="state" required value={formData.state} onChange={handleChange} placeholder="e.g. Maharashtra" />
                  </div>
                </div>
              </div>

              {/* SECTION B: Contact Person */}
              <div className="b2b-form-section">
                <div className="b2b-form-section-title">
                  <Users size={17} />
                  <span>Contact Person</span>
                </div>
                <div className="form-grid-2">
                  <div className="b2b-field">
                    <label>Full Name <span className="req">*</span></label>
                    <input type="text" name="contactPerson" required value={formData.contactPerson} onChange={handleChange} placeholder="Your full name" />
                  </div>
                  <div className="b2b-field">
                    <label>Designation <span className="req">*</span></label>
                    <input type="text" name="designation" required value={formData.designation} onChange={handleChange} placeholder="e.g. Principal, HR Manager, Director" />
                  </div>
                  <div className="b2b-field">
                    <label>Work Email <span className="req">*</span></label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@organisation.com" />
                  </div>
                  <div className="b2b-field">
                    <label>Phone / WhatsApp <span className="req">*</span></label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>
              </div>

              {/* SECTION C: Partnership Scope */}
              <div className="b2b-form-section">
                <div className="b2b-form-section-title">
                  <TrendingUp size={17} />
                  <span>Partnership Scope</span>
                </div>
                <div className="b2b-field" style={{ marginBottom: '20px' }}>
                  <label>Estimated Students / Referrals Per Year</label>
                  <select name="studentsPerYear" value={formData.studentsPerYear} onChange={handleChange}>
                    <option>Less than 50</option>
                    <option>50 – 150</option>
                    <option>150 – 300</option>
                    <option>300 – 500</option>
                    <option>500+</option>
                  </select>
                </div>

                <div className="b2b-field">
                  <label>Areas of Interest <span style={{ fontWeight: 400, color: '#94a3b8', fontSize: '0.8rem' }}>(Select all that apply)</span></label>
                  <div className="b2b-checkbox-grid">
                    {interestOptions.map((opt) => (
                      <label key={opt} className={`b2b-checkbox-item ${formData.interestedIn.includes(opt) ? 'checked' : ''}`}>
                        <input
                          type="checkbox"
                          checked={formData.interestedIn.includes(opt)}
                          onChange={() => handleCheckbox(opt)}
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTION D: Message */}
              <div className="b2b-form-section" style={{ borderBottom: 'none', paddingBottom: 0 }}>
                <div className="b2b-form-section-title">
                  <FileText size={17} />
                  <span>Additional Message</span>
                </div>
                <div className="b2b-field">
                  <label>Tell us more about your requirements</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any specific requests, preferred partnership model, campus visit availability, etc."
                  />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginTop: '28px' }}>
                <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0, maxWidth: '400px' }}>
                  By submitting, you agree to be contacted by our B2B team. We never share your data with third parties.
                </p>
                <button type="submit" className="btn btn-primary btn-lg" style={{ boxShadow: '0 8px 24px rgba(29,78,216,0.35)' }}>
                  <Send size={18} />
                  <span>Submit Partnership Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 5. CONTACT CTA BAR */}
      <section className="section-py" style={{ background: '#1c2a4f' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
            Prefer to Talk First?
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '28px' }}>
            Our B2B team is available Mon–Sat, 10am–7pm IST. Reach us at any of our offices.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919220406733" style={{ textDecoration: 'none' }}>
              <button className="btn btn-primary btn-lg">
                <Phone size={18} />
                <span>+91 92204 06733</span>
              </button>
            </a>
            <a href="mailto:freieadmits@gmail.com" style={{ textDecoration: 'none' }}>
              <button className="b2b-outline-btn b2b-outline-btn-light">
                <Mail size={16} />
                <span>freieadmits@gmail.com</span>
              </button>
            </a>
          </div>
        </div>
      </section>

      <style>{`
        .b2b-outline-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.08);
          border: 1.5px solid rgba(255,255,255,0.25);
          color: #ffffff;
          padding: 13px 24px;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .b2b-outline-btn:hover {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.5);
        }
        .b2b-outline-btn-light {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.2);
        }

        /* Partner cards */
        .b2b-partner-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .b2b-partner-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(15,23,42,0.08);
        }
        .b2b-partner-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #f8fafc 0%, #f8fafc 100%);
          color: #1c2a4f;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        /* Benefit cards */
        .b2b-benefit-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(15,23,42,0.08);
        }

        /* Form */
        .b2b-form-section {
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 28px;
          margin-bottom: 28px;
        }
        .b2b-form-section-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #1c2a4f;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #f8fafc;
        }
        .b2b-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .b2b-field label {
          font-size: 0.84rem;
          font-weight: 600;
          color: #374151;
        }
        .req { color: #ef4444; }
        .b2b-field input,
        .b2b-field select,
        .b2b-field textarea {
          padding: 11px 14px;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.9rem;
          color: #1c2a4f;
          background: #fafafa;
          outline: none;
          font-family: inherit;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
          box-sizing: border-box;
        }
        .b2b-field input:focus,
        .b2b-field select:focus,
        .b2b-field textarea:focus {
          border-color: #1c2a4f;
          box-shadow: 0 0 0 3px rgba(59,130,246,0.12);
          background: #ffffff;
        }
        .b2b-field textarea { resize: vertical; }

        /* Checkbox grid */
        .b2b-checkbox-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          margin-top: 4px;
        }
        .b2b-checkbox-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border: 1.5px solid #e2e8f0;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.83rem;
          font-weight: 500;
          color: #374151;
          background: #fafafa;
          transition: all 0.15s ease;
          user-select: none;
        }
        .b2b-checkbox-item input[type="checkbox"] {
          width: 15px;
          height: 15px;
          accent-color: #1c2a4f;
          cursor: pointer;
          flex-shrink: 0;
          padding: 0;
          border: none;
          background: transparent;
        }
        .b2b-checkbox-item.checked {
          background: #f8fafc;
          border-color: #93c5fd;
          color: #1c2a4f;
          font-weight: 600;
        }

        /* Mobile */
        @media (max-width: 640px) {
          .b2b-checkbox-grid { grid-template-columns: 1fr; }
          form[onsubmit] { padding: 24px 16px !important; }
        }
      `}</style>
    </div>
  );
}
