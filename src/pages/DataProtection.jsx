import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from '../context/RouterContext';

export function PrivacyPolicy() {
  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Hero Header */}
      <section style={{
        background: 'linear-gradient(180deg, #1c2a4f 0%, #15223e 100%)',
        color: '#ffffff',
        padding: '64px 0 54px 0',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', padding: '6px 16px', borderRadius: '50px', fontSize: '0.82rem', fontWeight: 700, marginBottom: '16px', border: '1px solid rgba(255,255,255,0.2)' }}>
            <Shield size={15} /> Legal & Compliance
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '14px', lineHeight: 1.2 }}>
            Privacy Policy
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
            Last Updated: January 2026 | EUROPA FUSION PRIVATE LIMITED (Brand: FREIE ADMITS)
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container" style={{ maxWidth: '860px', marginTop: '-24px' }}>
        <div style={{
          background: '#ffffff',
          borderRadius: '16px',
          border: '1.5px solid #e2e8f0',
          padding: '44px 48px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
          color: '#475569',
          lineHeight: 1.75,
          fontSize: '0.98rem'
        }}>
          
          <div style={{ marginBottom: '32px' }}>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1c2a4f', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            1. Introduction & Overview
          </h2>
          <p style={{ marginBottom: '20px' }}>
            Welcome to <strong>FREIE ADMITS</strong>, a premium overseas education guidance brand owned and operated by <strong>EUROPA FUSION PRIVATE LIMITED</strong> (CIN: U80302TN2021PTC146401), having its registered office at Office No. 715A, Spencer Plaza, Anna Salai, Chennai, Tamil Nadu – 600002.
          </p>
          <p style={{ marginBottom: '28px' }}>
            We respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines our practices concerning the collection, use, disclosure, and safeguarding of information when you interact with our website (<a href="https://www.freieadmits.io" style={{ color: '#1c2a4f', fontWeight: 600 }}>www.freieadmits.io</a>), consult with our counselors, or use our admission guidance services.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            2. Information We Collect
          </h2>
          <p style={{ marginBottom: '14px' }}>
            To facilitate admissions and accurate profile assessment, we collect personal and academic data provided voluntarily by students, parents, and guardians, including:
          </p>
          <ul style={{ paddingLeft: '22px', marginBottom: '28px' }}>
            <li><strong>Contact Details:</strong> Full name, email address, phone/WhatsApp number, residential address.</li>
            <li><strong>Academic Profile:</strong> Transcripts, marksheets, bachelor/master degree certificates, GPA/percentage, standardized test scores (IELTS, TOEFL, GRE, GMAT, TestAS, dMAT).</li>
            <li><strong>Application Documents:</strong> Statement of Purpose (SOP), Letters of Recommendation (LOR), Curriculum Vitae (CV), portfolio files, passport details for application processing.</li>
            <li><strong>Financial & Visa Information:</strong> Proof of funds, blocked account details, or sponsorship documentation needed for visa consultation.</li>
            <li><strong>Technical & Usage Data:</strong> IP address, device type, browser information, pages visited on our portal to improve user experience.</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            3. How We Use Your Information
          </h2>
          <p style={{ marginBottom: '14px' }}>
            We strictly use student information for legitimate educational and application guidance purposes:
          </p>
          <ul style={{ paddingLeft: '22px', marginBottom: '28px' }}>
            <li>Evaluating academic qualifications against country and university entrance criteria (e.g. Germany, Finland, Ireland, France, Sweden, Netherlands).</li>
            <li>Preparing, processing, and submitting applications to universities, uni-assist, APS India, or designated application portals.</li>
            <li>Assisting with appointment scheduling for VFS, embassy visa filings, blocked account setups, and health insurance.</li>
            <li>Providing structured prep materials for the Digital Master's Assessment Test (dMAT) and German language learning programs.</li>
            <li>Communicating updates, application status, dead-lines, and admission offers via email, telephone, or WhatsApp.</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            4. Data Sharing & Third Parties
          </h2>
          <p style={{ marginBottom: '14px' }}>
            <strong>We do not sell, rent, or trade your personal information.</strong> Your information is only shared with authorized third parties strictly required to process your studies:
          </p>
          <ul style={{ paddingLeft: '22px', marginBottom: '28px' }}>
            <li>Accredited partner universities, public universities, admission committees, and processing platforms (e.g. Uni-Assist, Hochschulstart).</li>
            <li>Official verification agencies and diplomatic missions (e.g., APS India, German Embassy, Consulates, VFS Global).</li>
            <li>Licensed service partners offering student accommodation, blocked accounts, educational loans, and student health insurance (only upon explicit student request).</li>
            <li>Legal or regulatory authorities if mandated by law or court order.</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            5. Data Protection & Security
          </h2>
          <p style={{ marginBottom: '28px' }}>
            We deploy strict physical, electronic, and administrative safeguards to protect your personal files against unauthorized access, alteration, or disclosure. All sensitive files are stored on secure servers with restricted employee access limited only to authorized counsellors and document processors.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            6. Your Privacy Rights
          </h2>
          <p style={{ marginBottom: '14px' }}>
            As a student or parent, you have full control over your personal records:
          </p>
          <ul style={{ paddingLeft: '22px', marginBottom: '28px' }}>
            <li>Right to access, verify, or update your submitted personal and academic data.</li>
            <li>Right to request deletion of your contact records from promotional and marketing lists.</li>
            <li>Right to revoke consent for university application processing at any time (subject to active application deadlines).</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            7. Contact Us Regarding Privacy
          </h2>
          <p style={{ marginBottom: '18px' }}>
            If you have questions, concerns, or requests regarding this Privacy Policy or data security, please contact our grievance officer:
          </p>
          <div style={{ background: '#f8fafc', padding: '20px 24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontWeight: 700, color: '#1c2a4f', marginBottom: '6px' }}>EUROPA FUSION PRIVATE LIMITED (FREIE ADMITS)</div>
            <div>Office No. 715A, Spencer Plaza, Anna Salai, Chennai, Tamil Nadu – 600002</div>
            <div>Email: <a href="mailto:info@freieadmits.io" style={{ color: '#1c2a4f', fontWeight: 600 }}>info@freieadmits.io</a> / <a href="mailto:freieadmits@gmail.com" style={{ color: '#1c2a4f', fontWeight: 600 }}>freieadmits@gmail.com</a></div>
            <div>Phone: <a href="tel:+919974798803" style={{ color: '#1c2a4f', fontWeight: 600 }}>+91 99747 98803</a></div>
          </div>

        </div>
      </div>
    </div>
  );
}
