import React, { useState } from 'react';
import { destinationsData } from '../data/destinationsData';
import { CountryFlag } from '../components/CountryFlag';
import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  UserCheck,
  Filter
} from 'lucide-react';

export function Destinations({ onOpenCounselling, onOpenEvaluation }) {
  const [activeCountryModal, setActiveCountryModal] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredDestinations = selectedFilter === 'all'
    ? destinationsData.filter(d => d.id !== 'germany')
    : destinationsData.filter(d => d.id === selectedFilter && d.id !== 'germany');

  const filterOptions = [
    { id: 'all', label: 'All Countries' },
    { id: 'netherlands', label: 'Netherlands', flag: '🇳🇱' },
    { id: 'france', label: 'France', flag: '🇫🇷' },
    { id: 'ireland', label: 'Ireland', flag: '🇮🇪' },
    { id: 'finland', label: 'Finland', flag: '🇫🇮' },
    { id: 'spain', label: 'Spain', flag: '🇪🇸' },
    { id: 'italy', label: 'Italy', flag: '🇮🇹' },
    { id: 'poland', label: 'Poland', flag: '🇵🇱' },
    { id: 'austria', label: 'Austria', flag: '🇦🇹' },
    { id: 'sweden', label: 'Sweden', flag: '🇸🇪' },
    { id: 'denmark', label: 'Denmark', flag: '🇩🇰' },
  ];

  return (
    <div>
      {/* 1. HERO HEADER */}
      <section className="dest-hero-section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <span className="badge-pill badge-primary">
            <Globe size={14} /> European Higher Education Network
          </span>
          <h1 className="dest-hero-title">
            Study Destinations
          </h1>
          <div className="dest-hero-subtitle">
            Explore. Compare. Choose Your Path.
          </div>
          <p className="dest-hero-desc">
            The right destination depends on more than a university ranking. Consider your course, career goals, 
            budget, language requirements, academic profile and long-term plans before making a decision.
          </p>
          <p className="dest-hero-subdesc">
            <strong>FREIE ADMITS</strong> helps you explore study opportunities across Germany, Finland, Ireland, the Netherlands, France, Spain, Poland, Italy, Austria, Sweden and Denmark.
          </p>
        </div>
      </section>

      {/* Quick Filter Horizontal Scroll Bar for Mobile & Desktop */}
      <div className="dest-filter-bar">
        <div className="container">
          <div className="dest-filter-scroll horizontal-scroll-touch">
            <span className="dest-filter-label">
              <Filter size={14} color="#1d4ed8" /> Filter:
            </span>
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                className={`dest-filter-btn ${selectedFilter === opt.id ? 'active' : ''}`}
              >
                {opt.flag && <span>{opt.flag}</span>}
                <span>{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. GERMANY SPOTLIGHT SHOWCASE */}
      <section style={{ background: '#ffffff', paddingBottom: '32px' }}>
        <div className="container">
          {destinationsData.filter(d => d.id === 'germany').map((germany) => (
            <div
              key={germany.id}
              className="germany-spotlight-card"
            >
              <div className="germany-dest-grid">
                <div>
                  <div className="germany-card-header">
                    <CountryFlag countryId="germany" size={32} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <h2 style={{ fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                          Germany
                        </h2>
                        <span style={{ fontSize: '0.72rem', background: '#f59e0b', color: '#ffffff', padding: '3px 8px', borderRadius: '4px', fontWeight: 700 }}>
                          CORE SPECIALIZATION
                        </span>
                      </div>
                      <span className="germany-spec-sub">
                        TUITION-FREE PUBLIC UNIVERSITIES • dMAT ASSESSMENTS • AUSBILDUNG
                      </span>
                    </div>
                  </div>

                  <p style={{ color: '#475569', fontSize: '1rem', lineHeight: 1.65, marginBottom: '18px' }}>
                    {germany.overview}
                  </p>

                  <div className="germany-specs-grid">
                    <div className="germany-spec-box">
                      <div className="germany-spec-lbl">Tuition at Public Unis:</div>
                      <div className="germany-spec-val-green">€0 (Tuition-Free)</div>
                    </div>
                    <div className="germany-spec-box">
                      <div className="germany-spec-lbl">Post-Study Work Permit:</div>
                      <div className="germany-spec-val">18 Months Job Seeker</div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Popular Study Areas:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {germany.popularStudyAreas.map((area, i) => (
                        <span key={i} className="study-area-pill">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="dest-btn-group">
                    <button
                      onClick={() => setActiveCountryModal(germany)}
                      className="btn btn-gold btn-lg dest-action-btn"
                    >
                      <span>Explore Germany Details</span>
                      <ArrowRight size={17} />
                    </button>
                    <button
                      onClick={onOpenEvaluation}
                      className="btn btn-secondary btn-lg dest-action-btn"
                    >
                      <span>Check Germany Eligibility</span>
                    </button>
                  </div>
                </div>

                <div className="germany-dest-img-box">
                  <img
                    src={germany.image}
                    alt="Study in Germany"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="germany-img-caption">
                    <CountryFlag countryId="germany" size={14} />
                    <span>Brandenburg Gate &amp; Berlin</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* 3. ALL EUROPEAN DESTINATIONS GRID WITH CLEAN PHOTOS */}
          <div className="section-header" style={{ marginBottom: '32px' }}>
            <span className="badge-pill badge-primary">Continental Europe &amp; Nordics</span>
            <h2 className="section-title">
              Explore All <span className="text-highlight">Destinations</span>
            </h2>
            <p className="section-desc">
              Explore quality higher education, affordable tuition, post-study work rights, and research universities across top study destinations.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '48px' }}>
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="dest-card"
              >
                {/* Clean Destination Photo Header without dark shadows */}
                <div className="dest-card-img-wrap">
                  <img
                    src={dest.image}
                    alt={`Study abroad in ${dest.name}`}
                    className="dest-img-hover"
                  />

                  {/* Flag & Name Pill */}
                  <div className="dest-card-flag-pill">
                    <CountryFlag countryId={dest.id} size={15} />
                    <span>{dest.name}</span>
                  </div>

                  {/* Tuition Badge */}
                  <div className="dest-card-tuition-pill">
                    {dest.tuitionRange.split('(')[0].trim()}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="dest-card-body">
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1d4ed8', marginBottom: '6px' }}>
                      {dest.headline}
                    </div>

                    <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.55, marginBottom: '14px' }}>
                      {dest.tagline}
                    </p>

                    {/* Quick Specs Row */}
                    <div className="dest-specs-row">
                      <div>
                        <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>Work Rights</div>
                        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#16a34a' }}>{dest.workRights.split(';')[0]}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.7rem', color: '#64748b', textTransform: 'uppercase' }}>Living Cost</div>
                        <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#0f172a' }}>{dest.livingCost.split('(')[0]}</div>
                      </div>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', marginBottom: '6px' }}>
                        Popular Study Areas:
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {dest.popularStudyAreas.slice(0, 4).map((area, i) => (
                          <span key={i} className="dest-area-chip">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="dest-card-actions">
                    <button
                      onClick={() => setActiveCountryModal(dest)}
                      className="btn btn-secondary btn-sm"
                      style={{ borderRadius: '8px', fontSize: '0.84rem' }}
                    >
                      View Details
                    </button>
                    <button
                      onClick={onOpenCounselling}
                      className="btn btn-primary btn-sm"
                      style={{ borderRadius: '8px', fontSize: '0.84rem' }}
                    >
                      Explore {dest.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 4. NOT SURE WHICH COUNTRY IS RIGHT FOR YOU? */}
          <div className="profile-callout-box">
            <div className="profile-callout-grid">
              <div>
                <span style={{ background: 'rgba(59, 130, 246, 0.25)', color: '#60a5fa', padding: '4px 12px', borderRadius: '4px', fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  Profile-Based Guidance
                </span>
                <h3 className="profile-callout-title">
                  Not Sure Which Country Is Right for You?
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  Every student’s profile is unique. Match your goals with the right European destination based on your:
                </p>
                <div className="profile-formula-box">
                  Academic Qualification + GPA / Percentage + Course Preference + Budget + Career Goals
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', margin: 0 }}>
                  ...and our counsellors will provide personalized country &amp; university recommendations.
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <button
                  onClick={onOpenEvaluation}
                  className="btn btn-gold btn-lg profile-callout-btn"
                >
                  <UserCheck size={18} />
                  <span>Get Free Profile Evaluation</span>
                </button>
                <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '10px', margin: 0 }}>
                  100% Free • Objective Guidance • No Visa Guarantees
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Detail Modal */}
      {activeCountryModal && (
        <div className="modal-overlay" onClick={() => setActiveCountryModal(null)}>
          <div className="modal-content dest-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveCountryModal(null)}>
              <X size={20} />
            </button>

            {/* Modal Country Photo Banner without dark shadows */}
            <div className="dest-modal-banner">
              <img
                src={activeCountryModal.image}
                alt={`Study in ${activeCountryModal.name}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="dest-modal-banner-tag">
                <CountryFlag countryId={activeCountryModal.id} size={22} />
                <div>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                    Study in {activeCountryModal.name}
                  </h2>
                  <div style={{ color: '#1d4ed8', fontWeight: 600, fontSize: '0.75rem' }}>
                    {activeCountryModal.headline}
                  </div>
                </div>
              </div>
            </div>

            <div className="dest-modal-body">
              <p style={{ color: '#475569', fontSize: '0.94rem', lineHeight: 1.65, marginBottom: '18px' }}>
                {activeCountryModal.overview}
              </p>

              <div className="dest-modal-specs-grid">
                <div className="dest-modal-spec-cell">
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Estimated Tuition:</div>
                  <strong style={{ fontSize: '0.88rem', color: '#0f172a' }}>{activeCountryModal.tuitionRange}</strong>
                </div>
                <div className="dest-modal-spec-cell">
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Estimated Living Cost:</div>
                  <strong style={{ fontSize: '0.88rem', color: '#0f172a' }}>{activeCountryModal.livingCost}</strong>
                </div>
                <div className="dest-modal-spec-cell" style={{ gridColumn: 'span 2' }}>
                  <div style={{ fontSize: '0.74rem', color: '#64748b' }}>Post-Study Stay Back &amp; Work Rights:</div>
                  <strong style={{ fontSize: '0.88rem', color: '#16a34a' }}>{activeCountryModal.workRights}</strong>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  Key Highlights:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  {activeCountryModal.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
                      <CheckCircle2 size={15} color="#10b981" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {activeCountryModal.topUniversities && (
                <div style={{ marginBottom: '22px' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                    Top Ranked Universities:
                  </div>
                  <div className="dest-modal-unis-grid">
                    {activeCountryModal.topUniversities.map((uni, i) => (
                      <div key={i} style={{ background: '#f1f5f9', padding: '9px 11px', borderRadius: '8px', fontSize: '0.8rem' }}>
                        <div style={{ fontWeight: 700, color: '#0f172a' }}>{uni.name}</div>
                        <div style={{ color: '#64748b', fontSize: '0.74rem' }}>{uni.city} • {uni.rank}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => {
                  setActiveCountryModal(null);
                  onOpenCounselling();
                }}
                className="btn btn-primary btn-lg"
                style={{ width: '100%', borderRadius: '10px' }}
              >
                <span>Book Free Counselling for {activeCountryModal.name}</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .dest-hero-section {
          background: linear-gradient(180deg, #eff6ff 0%, #ffffff 100%);
          padding: 50px 0 38px 0;
          text-align: center;
        }
        .dest-hero-title {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .dest-hero-subtitle {
          font-size: 1.18rem;
          font-weight: 700;
          color: #d97706;
          margin-bottom: 14px;
        }
        .dest-hero-desc {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.65;
          margin-bottom: 16px;
        }
        .dest-hero-subdesc {
          font-size: 0.94rem;
          color: #64748b;
          line-height: 1.6;
        }

        /* Filter bar */
        .dest-filter-bar {
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          padding: 12px 0;
          margin-bottom: 32px;
        }
        .dest-filter-scroll {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
        }
        .dest-filter-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: #475569;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 6px;
          margin-right: 4px;
        }
        .dest-filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 13px;
          border-radius: 8px;
          font-size: 0.84rem;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          color: #334155;
          white-space: nowrap;
          transition: all 0.2s ease;
        }
        .dest-filter-btn.active {
          background: #1d4ed8;
          color: #ffffff;
          border-color: #1d4ed8;
        }
        .dest-filter-btn:hover:not(.active) {
          background: #eff6ff;
          border-color: #bfdbfe;
          color: #1d4ed8;
        }

        /* Germany Spotlight Card */
        .germany-spotlight-card {
          background: #ffffff;
          border: 1.5px solid #fde68a;
          border-radius: 20px;
          padding: 34px;
          margin-bottom: 44px;
        }
        .germany-dest-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 36px;
          align-items: center;
        }
        .germany-card-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 14px;
        }
        .germany-spec-sub {
          font-size: 0.78rem;
          color: #92400e;
          font-weight: 600;
          display: block;
          margin-top: 3px;
        }
        .germany-specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }
        .germany-spec-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 12px;
        }
        .germany-spec-lbl {
          font-size: 0.76rem;
          color: #64748b;
          font-weight: 600;
        }
        .germany-spec-val {
          font-size: 0.9rem;
          font-weight: 700;
          color: #0f172a;
        }
        .germany-spec-val-green {
          font-size: 0.9rem;
          font-weight: 700;
          color: #16a34a;
        }
        .study-area-pill {
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #0f172a;
          padding: 4px 10px;
          border-radius: 6px;
          fontSize: 0.82rem;
          font-weight: 600;
        }
        .dest-btn-group {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .germany-dest-img-box {
          height: 320px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #fed7aa;
          position: relative;
        }
        .germany-img-caption {
          position: absolute;
          bottom: 12px;
          left: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #0f172a;
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 0.78rem;
          font-weight: 700;
        }

        /* Destination Cards */
        .dest-card {
          background: #ffffff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          overflow: hidden;
          transition: all 0.25s ease;
        }
        .dest-card:hover {
          transform: translateY(-4px);
          border-color: #3b82f6 !important;
        }
        .dest-card-img-wrap {
          position: relative;
          width: 100%;
          height: 185px;
          overflow: hidden;
          background: #f8fafc;
          border-bottom: 1px solid #f1f5f9;
        }
        .dest-img-hover {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .dest-card:hover .dest-img-hover {
          transform: scale(1.04);
        }
        .dest-card-flag-pill {
          position: absolute;
          top: 12px;
          left: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.84rem;
          font-weight: 700;
          color: #0f172a;
        }
        .dest-card-tuition-pill {
          position: absolute;
          bottom: 10px;
          right: 12px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #0f172a;
          padding: 3px 8px;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 700;
        }
        .dest-card-body {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .dest-specs-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 14px;
          background: #f8fafc;
          padding: 8px 10px;
          border-radius: 10px;
          border: 1px solid #f1f5f9;
        }
        .dest-area-chip {
          background: #f1f5f9;
          color: #1e293b;
          border: 1px solid #e2e8f0;
          padding: 3px 7px;
          border-radius: 5px;
          font-size: 0.75rem;
          font-weight: 500;
        }
        .dest-card-actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        /* Profile Callout Box */
        .profile-callout-box {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-radius: 20px;
          padding: 40px 32px;
          color: #ffffff;
          border: 1.5px solid #334155;
        }
        .profile-callout-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 32px;
          align-items: center;
        }
        .profile-callout-title {
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          font-weight: 800;
          color: #ffffff;
          margin: 12px 0 8px 0;
        }
        .profile-formula-box {
          background: rgba(255, 255, 255, 0.08);
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 0.88rem;
          color: #f1f5f9;
          font-weight: 600;
          margin-bottom: 20px;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .profile-callout-btn {
          width: 100%;
          border-radius: 12px;
          padding: 14px;
          font-size: 1rem;
          font-weight: 700;
        }

        /* Modal styling */
        .dest-modal-box {
          max-width: 660px;
          max-height: 90vh;
          overflow-y: auto;
        }
        .dest-modal-banner {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }
        .dest-modal-banner-tag {
          position: absolute;
          bottom: 14px;
          left: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 6px 14px;
          border-radius: 10px;
        }
        .dest-modal-body {
          padding: 24px 28px;
        }
        .dest-modal-specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 18px;
        }
        .dest-modal-spec-cell {
          background: #f8fafc;
          padding: 12px;
          border-radius: 9px;
          border: 1px solid #e2e8f0;
        }
        .dest-modal-unis-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 960px) {
          .germany-dest-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .profile-callout-grid {
            grid-template-columns: 1fr !important;
            gap: 22px !important;
          }
        }

        @media (max-width: 640px) {
          .dest-hero-section {
            padding: 36px 0 24px 0;
          }
          .germany-spotlight-card {
            padding: 20px 16px !important;
            border-radius: 16px !important;
            margin-bottom: 32px !important;
          }
          .germany-dest-img-box {
            height: 180px !important;
            order: -1;
          }
          .dest-btn-group {
            flex-direction: column;
            gap: 8px;
          }
          .dest-action-btn {
            width: 100%;
          }
          .dest-card-img-wrap {
            height: 165px;
          }
          .dest-card-body {
            padding: 16px 14px;
          }
          .profile-callout-box {
            padding: 24px 16px !important;
            border-radius: 16px !important;
          }
          .dest-modal-body {
            padding: 18px 16px;
          }
          .dest-modal-banner {
            height: 160px;
          }
        }

        @media (max-width: 480px) {
          .dest-modal-unis-grid {
            grid-template-columns: 1fr !important;
          }
          .germany-specs-grid {
            grid-template-columns: 1fr !important;
            gap: 8px;
          }
          .dest-card-actions {
            grid-template-columns: 1fr 1fr;
            gap: 6px;
          }
          .dest-card-actions .btn {
            padding: 7px 10px;
            font-size: 0.78rem !important;
          }
        }
      `}</style>
    </div>
  );
}
