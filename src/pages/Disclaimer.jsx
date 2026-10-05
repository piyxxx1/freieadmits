import React from 'react';
import { AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from '../context/RouterContext';

export function Disclaimer() {
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
            <AlertTriangle size={15} /> Transparency & Disclosures
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 800, marginBottom: '14px', lineHeight: 1.2 }}>
            Legal Disclaimer
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
            Official disclosures by EUROPA FUSION PRIVATE LIMITED (Brand: FREIE ADMITS)
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
            1. Nature of Advisory Services
          </h2>
          <p style={{ marginBottom: '20px' }}>
            <strong>FREIE ADMITS</strong> (owned by <strong>EUROPA FUSION PRIVATE LIMITED</strong>, CIN: U80302TN2021PTC146401) is an independent overseas education advisory consultancy. We provide profile assessment, counseling, documentation review, and procedural assistance.
          </p>
          <p style={{ marginBottom: '28px' }}>
            We do NOT act as an official university admissions committee, nor are we an embassy, consular office, or sovereign immigration authority.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            2. University Admissions Disclaimer
          </h2>
          <p style={{ marginBottom: '14px' }}>
            All university admissions, including tuition-free public universities in Germany and top universities in Finland, France, Ireland, Netherlands, Sweden, etc., are granted solely at the discretion of the respective institution's admissions board.
          </p>
          <ul style={{ paddingLeft: '22px', marginBottom: '28px' }}>
            <li>No agent, counselor, or employee of FREIE ADMITS is authorized to promise or guarantee an admission letter.</li>
            <li>Admissions are based strictly on academic merit, ECTS credit matching, subject prerequisites, GPA requirements, language scores, and program seat limits.</li>
            <li>University tuition policies (e.g. €0 public university tuition in Germany) are set by sovereign state ministries and may be subject to legislative revisions beyond our control.</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            3. Visa & Immigration Authority Disclaimer
          </h2>
          <p style={{ marginBottom: '14px' }}>
            Visa issuance and entry permits are the sovereign privilege of the respective destination country's government:
          </p>
          <ul style={{ paddingLeft: '22px', marginBottom: '28px' }}>
            <li>Neither FREIE ADMITS nor its affiliates can influence, expedite, or guarantee the outcome of any visa, residence permit, or APS verification.</li>
            <li>Decisions are made entirely by the relevant Embassy, Consulate-General, Ausländerbehörde (Foreigners Authority), or immigration department.</li>
            <li>Processing timelines, appointment slot availability (VFS/Embassy), and financial requirements (such as blocked account amounts) are determined solely by government bodies.</li>
          </ul>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            4. dMAT & Test Preparation Guidance
          </h2>
          <p style={{ marginBottom: '28px' }}>
            FREIE ADMITS provides coaching frameworks, orientation, and preparatory guidance for the Digital Master's Assessment Test (dMAT) and language proficiencies. Performance on any standardized test depends entirely on the student's individual aptitude, dedication, and study efforts. We do not guarantee specific percentile rankings or test outcomes.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            5. Website Content Accuracy
          </h2>
          <p style={{ marginBottom: '28px' }}>
            While we strive to ensure that all information on <a href="https://www.freieadmits.io" style={{ color: '#1c2a4f', fontWeight: 600 }}>www.freieadmits.io</a> regarding course requirements, university deadlines, post-study work permits, and living costs is accurate and up-to-date, institutional guidelines and immigration rules change frequently. Students are strongly advised to verify details with our advisors and official university websites.
          </p>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '14px' }}>
            6. External Links & Third-Party Resources
          </h2>
          <p style={{ marginBottom: '20px' }}>
            Our website and resources may contain links to external government portals, university registries, APS India, Uni-Assist, and student banking platforms. FREIE ADMITS does not control, endorse, or assume responsibility for the content, privacy practices, or availability of third-party websites.
          </p>

        </div>
      </div>
    </div>
  );
}
