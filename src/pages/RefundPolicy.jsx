import React from 'react';
import { RefreshCcw, ArrowLeft } from 'lucide-react';
import { Link } from '../context/RouterContext';

export function RefundPolicy() {
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
            <RefreshCcw size={15} /> Billing & Cancellations
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '14px', lineHeight: 1.2 }}>
            Refund Policy
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
            Clear, transparent terms by EUROPA FUSION PRIVATE LIMITED (Brand: FREIE ADMITS)
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
            1. Overview & Scope
          </h2>
          <p style={{ marginBottom: '20px' }}>
            This Refund & Cancellation Policy sets forth the terms and conditions under which <strong>EUROPA FUSION PRIVATE LIMITED</strong> (operating as <strong>FREIE ADMITS</strong>, CIN: U80302TN2021PTC146401) processes service cancellations and refund requests for student consulting, application processing, dMAT prep, and related educational services.
          </p>
          <p style={{ marginBottom: '28px' }}>
            We are dedicated to honest, student-first guidance. Our policies are designed to be equitable, transparent, and compliant with all statutory consumer protection norms in India.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            2. Service Fees & Consultation Tiers
          </h2>
          <p style={{ marginBottom: '28px' }}>
            Initial discovery calls and profile evaluations provided through our website or helpline are completely free of charge. Where students enroll in structured consulting programs, university application packages, or dMAT test coaching, fees are agreed upon in advance and outlined in the student onboarding agreement.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            3. Eligibility for Refund
          </h2>
          <p style={{ marginBottom: '14px' }}>
            Refund eligibility depends on the stage of work initiated:
          </p>
          <ul style={{ paddingLeft: '22px', marginBottom: '28px' }}>
            <li><strong>Cooling-off Period (Within 48 hours):</strong> If a student enrolls and decides to withdraw within 48 hours of payment, and before any university shortlisting, document drafting (SOP/LOR/CV), or test coaching has begun, a 100% refund of the consultancy fee (minus administrative/gateway processing charges of 5%) will be issued.</li>
            <li><strong>Prior to Application Submission:</strong> If a student cancels after profile assessment and shortlisting but before any university application is drafted or processed, up to 50% of the consultancy fee is eligible for refund, reflecting advisory time invested.</li>
            <li><strong>After Application Lodgement:</strong> Once university applications have been finalized, submitted to Uni-Assist, university portals, or APS India, the professional service fee is deemed fully rendered and non-refundable.</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            4. Strictly Non-Refundable Expenses
          </h2>
          <p style={{ marginBottom: '14px' }}>
            The following external expenses are strictly non-refundable under all circumstances:
          </p>
          <ul style={{ paddingLeft: '22px', marginBottom: '28px' }}>
            <li>Third-party university application fees (e.g. Uni-Assist assessment fees, direct university application charges).</li>
            <li>APS (Akademische Prüfstelle) verification fees paid directly to the Science Section of the German Embassy.</li>
            <li>Language test registration fees (IELTS, TOEFL, Goethe-Zertifikat, TestDaF) and official test exam centers.</li>
            <li>Embassy/Consular visa appointment fees, VFS processing charges, and translation/notarization costs.</li>
            <li>Payments made directly to blocked account providers (Expatrio, Fintiba, Coracle) or health insurance companies.</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            5. Rejection & Disqualification Grounds
          </h2>
          <p style={{ marginBottom: '28px' }}>
            No refund shall be granted if a university rejects an application due to student-submitted fraudulent documents, academic forgery, failure to attend mandatory interviews, failure to take the dMAT or language exams, or missed deadlines caused by student delays.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            6. Refund Processing Method & Timelines
          </h2>
          <p style={{ marginBottom: '14px' }}>
            Approved refund claims will be processed strictly as follows:
          </p>
          <ul style={{ paddingLeft: '22px', marginBottom: '28px' }}>
            <li>Refund requests must be formally submitted in writing via email to <a href="mailto:info@freieadmits.io" style={{ color: '#1c2a4f', fontWeight: 600 }}>info@freieadmits.io</a> with the payment receipt and student registration ID.</li>
            <li>Refund requests are reviewed by our finance committee within <strong>5 business days</strong> of receipt.</li>
            <li>Once approved, refunds are credited back to the original source of payment (bank account, UPI, or card) within <strong>7 to 10 working days</strong>.</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            7. Grievance & Escalation
          </h2>
          <p style={{ marginBottom: '18px' }}>
            If you have an unresolved billing or refund query, you may reach out directly to management:
          </p>
          <div style={{ background: '#f8fafc', padding: '20px 24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <div style={{ fontWeight: 700, color: '#1c2a4f', marginBottom: '6px' }}>EUROPA FUSION PRIVATE LIMITED</div>
            <div>Office No. 715A, Spencer Plaza, Anna Salai, Chennai, Tamil Nadu – 600002</div>
            <div>Billing & Finance Desk: <a href="mailto:info@freieadmits.io" style={{ color: '#1c2a4f', fontWeight: 600 }}>info@freieadmits.io</a></div>
            <div>Helpline: <a href="tel:+919974798803" style={{ color: '#1c2a4f', fontWeight: 600 }}>+91 99747 98803</a></div>
          </div>

        </div>
      </div>
    </div>
  );
}
