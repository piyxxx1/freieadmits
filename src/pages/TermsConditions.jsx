import React from 'react';
import { Scale, ArrowLeft } from 'lucide-react';
import { Link } from '../context/RouterContext';

export function TermsConditions() {
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
            <Scale size={15} /> Legal Agreement
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '14px', lineHeight: 1.2 }}>
            Terms & Conditions
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
            Governing your relationship with EUROPA FUSION PRIVATE LIMITED (Brand: FREIE ADMITS)
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
            1. Acceptance of Terms
          </h2>
          <p style={{ marginBottom: '20px' }}>
            These Terms & Conditions constitute a legally binding agreement between you (the "Student", "Client", or "User") and <strong>EUROPA FUSION PRIVATE LIMITED</strong> (CIN: U80302TN2021PTC146401), operating under the trade name <strong>FREIE ADMITS</strong>.
          </p>
          <p style={{ marginBottom: '28px' }}>
            By registering on our website, scheduling a consultation, or engaging our overseas education services, you acknowledge that you have read, understood, and agreed to be bound by these Terms and our Privacy Policy.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            2. Scope of Services
          </h2>
          <p style={{ marginBottom: '14px' }}>
            FREIE ADMITS provides advisory, counseling, and logistical support services for international education, including:
          </p>
          <ul style={{ paddingLeft: '22px', marginBottom: '28px' }}>
            <li>Academic profile evaluation and eligibility verification.</li>
            <li>University and degree program recommendations across Germany, Finland, Ireland, France, Sweden, Netherlands, and other European study destinations.</li>
            <li>Guidance on drafting application documentation, such as Statements of Purpose (SOP), Letters of Recommendation (LOR), and Resumes (CV).</li>
            <li>Digital Master's Assessment Test (dMAT) preparation guidance and German language training support.</li>
            <li>Application submission coordination (Uni-Assist, direct portals) and visa interview/documentation preparation.</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            3. Student Responsibilities & Authenticity
          </h2>
          <p style={{ marginBottom: '14px' }}>
            Students entering into an agreement with FREIE ADMITS agree to the following obligations:
          </p>
          <ul style={{ paddingLeft: '22px', marginBottom: '28px' }}>
            <li><strong>Accuracy of Records:</strong> You warrant that all academic transcripts, certificates, identity proofs, and test scores provided are genuine, authentic, and free from misrepresentation.</li>
            <li><strong>Adherence to Deadlines:</strong> You agree to provide required documentation in a timely manner according to strict university and visa application windows.</li>
            <li><strong>Zero Tolerance for Fraud:</strong> Submission of forged documents, fabricated financial statements, or false academic credentials will lead to immediate service termination with no entitlement to refund, and may be reported to relevant authorities.</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            4. Absolute Disclaimer of Admission & Visa Guarantees
          </h2>
          <div style={{ background: '#f8fafc', padding: '18px 22px', borderRadius: '12px', borderLeft: '4px solid #1c2a4f', marginBottom: '28px' }}>
            <p style={{ margin: 0, fontWeight: 600, color: '#1c2a4f' }}>
              Important Notice: FREIE ADMITS is an independent educational consulting firm. We do NOT guarantee admission into any university or the issuance of any student visa.
            </p>
            <p style={{ margin: '8px 0 0 0', fontSize: '0.92rem' }}>
              Final admission decisions reside solely with the respective university admissions committees based on merit, capacity, and academic criteria. Visa issuance is exclusively within the sovereign discretion of the respective embassies, consulates, and immigration authorities.
            </p>
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            5. Fees & Third-Party Expenses
          </h2>
          <p style={{ marginBottom: '28px' }}>
            Service fees paid to FREIE ADMITS cover advisory and documentation assistance only. Students are solely responsible for all external third-party costs, including but not limited to university application fees (Uni-Assist, portals), APS verification charges, standardized examination fees (IELTS, TOEFL, GRE, dMAT), embassy visa fees, courier charges, blocked account deposits, and health insurance premiums.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            6. Intellectual Property
          </h2>
          <p style={{ marginBottom: '28px' }}>
            All logos, trademarks, website content, dMAT guidance modules, test prep strategies, and proprietary advisory frameworks are the exclusive intellectual property of <strong>EUROPA FUSION PRIVATE LIMITED</strong>. Reproduction or unauthorized distribution without express written consent is strictly prohibited.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            7. Limitation of Liability
          </h2>
          <p style={{ marginBottom: '28px' }}>
            To the maximum extent permitted by applicable law, EUROPA FUSION PRIVATE LIMITED and its directors, employees, and consultants shall not be held liable for any indirect, incidental, punitive, or consequential damages resulting from university rejections, visa refusals, changes in immigration policies, or student delays.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            8. Governing Law & Jurisdiction
          </h2>
          <p style={{ marginBottom: '20px' }}>
            These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the competent courts in <strong>Chennai, Tamil Nadu, India</strong>.
          </p>

        </div>
      </div>
    </div>
  );
}
