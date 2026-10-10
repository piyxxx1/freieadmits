import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle, Sparkles, Send } from 'lucide-react';

export function CounsellingModal({ isOpen, onClose, initialType = 'counselling' }) {
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

  if (!isOpen) return null;

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

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={resetAndClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
        <button className="modal-close" onClick={resetAndClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <div className="counselling-modal-body" style={{ padding: '32px 28px' }}>
            <div style={{ textAlign: 'center', marginBottom: '22px' }}>
              <span className="badge-pill badge-primary" style={{ marginBottom: '8px' }}>
                <Sparkles size={14} /> Profile-Based Guidance
              </span>
              <h3 style={{ fontSize: '1.55rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '6px' }}>
                {initialType === 'evaluation' ? 'Get Your Profile Evaluated' : 'Book Free Counselling'}
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                Tell us about your background. We understand the student first and recommend the pathway second.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid-2">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aryan Sharma"
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
                    <option value="Class 12">Class 12 / Higher Secondary</option>
                    <option value="Master's Degree">Master's Degree (M.Tech / M.Sc / MCA)</option>
                    <option value="Diploma / Polytechnic">Diploma / Polytechnic</option>
                  </select>
                </div>

                <div>
                  <label className="form-label">Percentage / GPA *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 8.2 CGPA or 78%"
                    className="form-input"
                    value={formData.gpa}
                    onChange={(e) => setFormData({ ...formData, gpa: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div>
                  <label className="form-label">Preferred Course Area</label>
                  <select
                    className="form-select"
                    value={formData.preferredCourse}
                    onChange={(e) => setFormData({ ...formData, preferredCourse: e.target.value })}
                  >
                    <option value="Computer Science & AI">Computer Science &amp; AI</option>
                    <option value="Mechanical & Automotive Engineering">Mechanical &amp; Automotive Engineering</option>
                    <option value="Electrical & Electronics">Electrical &amp; Electronics</option>
                    <option value="Data Science & Big Data">Data Science &amp; Analytics</option>
                    <option value="Germany Ausbildung (Vocational)">Germany Ausbildung (Vocational)</option>
                    <option value="Nursing & Healthcare">Nursing &amp; Healthcare</option>
                    <option value="MBA & Management">MBA &amp; International Business</option>
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
                <label className="form-label">Target Intake</label>
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
                <span>Submit Details &amp; Get In Touch</span>
                <Send size={18} />
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.78rem', color: '#94a3b8', marginTop: '12px' }}>
                🔒 Admission decisions are made by individual universities. Visa decisions are made by relevant immigration authorities. FREIE ADMITS provides ethical guidance throughout the process.
              </p>
            </form>
          </div>
        ) : (
          <div style={{ padding: '44px 32px', textAlign: 'center' }}>
            <div style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px auto',
              color: '#1c2a4f'
            }}>
              <CheckCircle size={40} />
            </div>
            <h3 style={{ fontSize: '1.7rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '8px' }}>
              Enquiry Submitted Successfully!
            </h3>
            <p style={{ color: '#475569', fontSize: '0.98rem', marginBottom: '24px', lineHeight: 1.6 }}>
              Thank you, <strong>{formData.name}</strong>. Here is what happens next:
            </p>

            {/* 4 Steps Roadmap */}
            <div style={{ background: '#f8fafc', padding: '20px', borderRadius: '14px', border: '1px solid #e2e8f0', textAlign: 'left', marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '14px', marginBottom: '14px' }}>
                <span style={{ background: '#1c2a4f', color: '#fff', width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0 }}>
                  01
                </span>
                <div style={{ fontSize: '0.88rem', color: '#334155' }}>
                  <strong>Counsellor Review:</strong> Our counselor reviews your {formData.qualification} profile ({formData.gpa}) and target programs.
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', marginBottom: '14px' }}>
                <span style={{ background: '#1c2a4f', color: '#fff', width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0 }}>
                  02
                </span>
                <div style={{ fontSize: '0.88rem', color: '#334155' }}>
                  <strong>Profile Contact:</strong> We contact you to understand your specific academic profile and career goals.
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', marginBottom: '14px' }}>
                <span style={{ background: '#1c2a4f', color: '#fff', width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0 }}>
                  03
                </span>
                <div style={{ fontSize: '0.88rem', color: '#334155' }}>
                  <strong>Study Pathways:</strong> We discuss suitable study pathways for {formData.preferredCountry}.
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px' }}>
                <span style={{ background: '#1c2a4f', color: '#fff', width: '26px', height: '26px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 800, flexShrink: 0 }}>
                  04
                </span>
                <div style={{ fontSize: '0.88rem', color: '#334155' }}>
                  <strong>Action Plan:</strong> You receive actionable guidance on applications, timelines, and next steps.
                </div>
              </div>
            </div>

            <button onClick={resetAndClose} className="btn btn-primary" style={{ padding: '12px 32px' }}>
              Done, Thank You!
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
