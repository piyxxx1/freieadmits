import React, { useState, useRef, useEffect } from 'react';
import { Link, useRouter } from '../context/RouterContext';
import { destinationsData } from '../data/destinationsData';
import { CountryFlag } from './CountryFlag';
import { BrandLogo } from './BrandLogo';
import { 
  Menu, 
  X, 
  PhoneCall, 
  Sparkles,
  ChevronDown,
  ChevronRight,
  GraduationCap,
  Users,
  Globe,
  Wrench,
  Phone,
  Laptop,
  ArrowRight,
  CheckCircle2,
  Handshake
} from 'lucide-react';

export function Navbar({ onOpenCounselling, onOpenEvaluation }) {
  const { currentPath, navigate } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [mobileDestExpanded, setMobileDestExpanded] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDestinationsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: GraduationCap },
    { name: 'About Us', path: '/about', icon: Users },
    { name: 'Destinations', path: '/destinations', icon: Globe, hasDropdown: true },
    { name: 'Services', path: '/services', icon: Wrench },
    { name: 'dMAT', path: '/dmat-germany', icon: Laptop, isSpecial: true },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'B2B Partner', path: '/b2b', icon: Handshake, isB2B: true },
  ];

  const handleDestinationSelect = (_slug) => {
    setDestinationsOpen(false);
    setMobileMenuOpen(false);
    navigate('/destinations');
  };

  // 3-3-3-2 structured layout: Row 1-3 (9 countries), Row 4 (Netherlands & Ireland at bottom)
  const orderedDestinations = [
    destinationsData.find(d => d.id === 'germany'),
    destinationsData.find(d => d.id === 'finland'),
    destinationsData.find(d => d.id === 'france'),
    destinationsData.find(d => d.id === 'spain'),
    destinationsData.find(d => d.id === 'italy'),
    destinationsData.find(d => d.id === 'poland'),
    destinationsData.find(d => d.id === 'austria'),
    destinationsData.find(d => d.id === 'sweden'),
    destinationsData.find(d => d.id === 'denmark'),
    destinationsData.find(d => d.id === 'netherlands'),
    destinationsData.find(d => d.id === 'ireland'),
  ].filter(Boolean);

  return (
    <header className="site-header">
      {/* 1. TOP UTILITY STRIP */}
      <div className="top-strip">
        <div className="container top-strip-inner">
          <div className="top-strip-left">
            <span className="top-pill">Germany &amp; Europe Specialist</span>
            <span className="top-msg">
              Public Universities • Master's &amp; IT • dMAT Prep • Ausbildung Pathways
            </span>
          </div>

          <div className="top-strip-right">
            <button onClick={onOpenEvaluation} className="top-eval-btn">
              <span>Free Profile Evaluation</span>
            </button>
            <span className="top-dot">•</span>
            <a href="tel:+919220406733" className="top-phone">
              <PhoneCall size={12} />
              <span>+91 92204 06733</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <div className="main-nav">
        <div className="container main-nav-inner">
          {/* Logo */}
          <Link to="/" className="nav-logo" onClick={() => setMobileMenuOpen(false)}>
            <BrandLogo />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="nav-menu-desktop">
            {navLinks.map((item) => {
              const isActive = currentPath === item.path;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.path}
                    className="dropdown-wrapper"
                    ref={dropdownRef}
                    onMouseEnter={() => setDestinationsOpen(true)}
                    onMouseLeave={() => setDestinationsOpen(false)}
                  >
                    <button
                      type="button"
                      className={`nav-link-btn ${isActive ? 'active' : ''} ${destinationsOpen ? 'hovered' : ''}`}
                      onClick={() => {
                        navigate('/destinations');
                        setDestinationsOpen(false);
                      }}
                    >
                      <Globe size={15} className="link-icon-subtle" />
                      <span>{item.name}</span>
                      <ChevronDown size={14} className={`chevron-icon ${destinationsOpen ? 'open' : ''}`} />
                    </button>

                    {/* Clean 3-Column Structured Mega Dropdown */}
                    {destinationsOpen && (
                      <div className="mega-dropdown-box">
                        <div className="mega-hover-bridge" />
                        <div className="mega-dropdown-inner">
                          {/* Header */}
                          <div className="mega-header">
                            <div className="mega-header-left">
                              <h4 className="mega-title">European Study Destinations</h4>
                              <p className="mega-subtitle">
                                Explore tuition-free public universities, top engineering hubs &amp; post-study work permits
                              </p>
                            </div>
                            <Link 
                              to="/destinations" 
                              className="mega-view-all-btn"
                              onClick={() => setDestinationsOpen(false)}
                            >
                              <span>Explore All 11 Countries</span>
                              <ArrowRight size={14} />
                            </Link>
                          </div>

                          {/* 3-Column Clean Grid (3-3-3-2) */}
                          <div className="mega-grid-3col">
                            {orderedDestinations.map((dest) => {
                              const isGermany = dest.id === 'germany';
                              return (
                                <div
                                  key={dest.id}
                                  className={`mega-card-item ${isGermany ? 'germany-card-item' : ''}`}
                                  onClick={() => handleDestinationSelect(dest.slug)}
                                >
                                  <div className="mega-card-thumb">
                                    <img src={dest.image} alt={dest.name} />
                                    <div className="mega-card-flag-overlay">
                                      <CountryFlag countryId={dest.id} size={14} />
                                    </div>
                                  </div>
                                  <div className="mega-card-info">
                                    <div className="mega-card-name-row">
                                      <span className="mega-card-name">{dest.name}</span>
                                      {isGermany && <span className="badge-focus">Core Focus</span>}
                                      {(dest.id === 'finland' || dest.id === 'ireland') && <span className="badge-hot">Popular</span>}
                                    </div>
                                    <span className="mega-card-desc">
                                      {isGermany 
                                        ? '€0 Tuition • dMAT • Tech' 
                                        : (dest.popularStudyAreas ? dest.popularStudyAreas.slice(0, 2).join(' • ') : dest.headline)}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                          {/* Footer */}
                          <div className="mega-footer">
                            <div className="mega-footer-left">
                              <CheckCircle2 size={16} color="#1c2a4f" />
                              <span>Not sure which destination fits your GPA, budget &amp; career goals?</span>
                            </div>
                            <button
                              onClick={() => {
                                setDestinationsOpen(false);
                                onOpenEvaluation();
                              }}
                              className="mega-footer-action-btn"
                            >
                              Get Free Profile Evaluation →
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${isActive ? 'active' : ''} ${item.isSpecial ? 'special-link' : ''} ${item.isB2B ? 'b2b-link' : ''}`}
                >
                  {item.isSpecial && <CountryFlag countryId="germany" size={14} />}
                  {item.isB2B && <Handshake size={14} />}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="nav-actions-right">
            <button
              onClick={onOpenCounselling}
              className="counselling-cta-btn"
            >
              <Sparkles size={15} />
              <span>Book Free Counselling</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hamburger-btn"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          <div className="mobile-drawer-body">
            {navLinks.map((item) => {
              const isActive = currentPath === item.path;
              const Icon = item.icon;

              if (item.hasDropdown) {
                return (
                  <div key={item.path} className="mobile-nav-group">
                    <div
                      className={`mobile-row ${isActive ? 'active' : ''}`}
                      onClick={() => setMobileDestExpanded(!mobileDestExpanded)}
                    >
                      <div className="mobile-row-left">
                        <Icon size={18} className="mobile-icon" />
                        <span>{item.name}</span>
                        <span className="mobile-badge-count">11 Countries</span>
                      </div>
                      <ChevronDown size={16} className={`chevron-trans ${mobileDestExpanded ? 'open' : ''}`} />
                    </div>

                    {mobileDestExpanded && (
                      <div className="mobile-dest-expand">
                        <Link
                          to="/destinations"
                          className="mobile-all-dest-link"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span>View All Destinations Page →</span>
                        </Link>
                        <div className="mobile-dest-grid">
                          {destinationsData.map((dest) => (
                            <Link
                              key={dest.id}
                              to="/destinations"
                              className="mobile-dest-item"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <CountryFlag countryId={dest.id} size={14} />
                              <span>{dest.name}</span>
                              {dest.id === 'germany' && <span className="m-tag-focus">Focus</span>}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mobile-row ${isActive ? 'active' : ''} ${item.isSpecial ? 'special-mobile' : ''}`}
                >
                  <div className="mobile-row-left">
                    {item.isSpecial ? <CountryFlag countryId="germany" size={16} /> : <Icon size={18} className="mobile-icon" />}
                    <span>{item.name}</span>
                    {item.isSpecial && <span className="m-tag-focus">Specialization</span>}
                  </div>
                  <ChevronRight size={16} className="chevron-right-muted" />
                </Link>
              );
            })}

            <div className="mobile-drawer-bottom">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCounselling();
                }}
                className="mobile-cta-primary"
              >
                <Sparkles size={16} />
                <span>Book Free Counselling</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEvaluation();
                }}
                className="mobile-cta-secondary"
              >
                Get Free Profile Evaluation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STYLES */}
      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.06);
          font-family: inherit;
        }

        /* Top utility strip */
        .top-strip {
          background: #090e1a;
          color: #94a3b8;
          font-size: 0.78rem;
          padding: 6px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .top-strip-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
        }

        .top-strip-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .top-pill {
          background: #475569;
          color: #ffffff;
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .top-msg {
          color: #cbd5e1;
          font-weight: 500;
        }

        .top-strip-right {
          display: flex;
          align-items: center;
          gap: 12px;
          white-space: nowrap;
        }

        .top-eval-btn {
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.35);
          color: #eef2fa;
          padding: 2px 9px;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .top-eval-btn:hover {
          background: #eef2fa;
          color: #090e1a;
        }

        .top-dot {
          color: #475569;
        }

        .top-phone {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #cbd5e1;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s;
        }

        .top-phone:hover {
          color: #eef2fa;
        }

        /* Main Navigation */
        .main-nav {
          background: #ffffff;
          border-bottom: 1px solid #f1f5f9;
        }

        .main-nav-inner {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
          gap: 16px;
        }

        /* Logo */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #1c2a4f 0%, #1c2a4f 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(15, 23, 42, 0.2);
        }

        .logo-text-box {
          display: flex;
          flex-direction: column;
        }

        .logo-brand {
          font-family: var(--font-heading, sans-serif);
          font-size: 1.25rem;
          font-weight: 800;
          color: #1c2a4f;
          line-height: 1.1;
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        .logo-tagline {
          font-size: 0.64rem;
          font-weight: 700;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 2px;
          white-space: nowrap;
        }

        /* Desktop Menu */
        .nav-menu-desktop {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .dropdown-wrapper {
          position: static;
        }

        .nav-link, .nav-link-btn {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          font-size: 0.88rem;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          border-radius: 8px;
          background: transparent;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
        }

        .link-icon-subtle {
          color: #64748b;
        }

        .nav-link:hover, .nav-link-btn:hover, .nav-link-btn.hovered {
          color: #1c2a4f;
          background: #f8fafc;
        }

        .nav-link.active, .nav-link-btn.active {
          color: #1c2a4f;
          background: #f8fafc;
          font-weight: 700;
        }

        .nav-link.special-link {
          color: #92400e;
        }

        .nav-link.special-link:hover {
          background: #ffffff;
          color: #334155;
        }

        .nav-link.b2b-link {
          color: #047857;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          font-weight: 700;
        }

        .nav-link.b2b-link:hover {
          background: #d1fae5;
          border-color: #6ee7b7;
          color: #065f46;
        }

        .nav-link.b2b-link.active {
          background: #d1fae5;
          color: #065f46;
        }

        .chevron-icon {
          transition: transform 0.2s ease;
          color: #64748b;
        }

        .chevron-icon.open {
          transform: rotate(180deg);
          color: #1c2a4f;
        }

        /* MEGA DROPDOWN BOX - 3-Column Layout */
        .mega-dropdown-box {
          position: absolute;
          top: calc(100% - 4px);
          left: 0;
          right: 0;
          width: 100%;
          max-width: 960px;
          margin: 0 auto;
          z-index: 1200;
          animation: megaIn 0.2s ease-out;
        }

        .mega-hover-bridge {
          height: 12px;
          width: 100%;
        }

        .mega-dropdown-inner {
          background: #ffffff;
          border-radius: 18px;
          border: 1.5px solid #e2e8f0;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.16);
          padding: 22px 26px;
          box-sizing: border-box;
        }

        @keyframes megaIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mega-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 12px;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: 16px;
        }

        .mega-title {
          font-size: 1rem;
          font-weight: 800;
          color: #1c2a4f;
          margin: 0;
        }

        .mega-subtitle {
          font-size: 0.78rem;
          color: #64748b;
          margin: 3px 0 0 0;
        }

        .mega-view-all-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #1c2a4f;
          text-decoration: none;
          background: #f8fafc;
          padding: 6px 14px;
          border-radius: 7px;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .mega-view-all-btn:hover {
          background: #f8fafc;
        }

        /* 3-Column Clean Grid (3-3-3-2) */
        .mega-grid-3col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .mega-card-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid #f1f5f9;
          background: #ffffff;
          cursor: pointer;
          transition: all 0.18s ease;
          text-decoration: none;
          min-width: 0;
          overflow: hidden;
        }

        .mega-card-item:hover {
          background: #f0f7ff;
          border-color: #bfdbfe;
          transform: translateY(-1px);
        }

        .germany-card-item {
          background: #ffffff;
          border-color: #e2e8f0;
        }

        .germany-card-item:hover {
          background: #f8fafc;
          border-color: #475569;
        }

        .mega-card-thumb {
          position: relative;
          width: 48px;
          height: 38px;
          border-radius: 6px;
          overflow: hidden;
          flex-shrink: 0;
          background: #1c2a4f;
        }

        .mega-card-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .mega-card-flag-overlay {
          position: absolute;
          bottom: 1px;
          right: 1px;
          line-height: 1;
        }

        .mega-card-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
          flex-grow: 1;
        }

        .mega-card-name-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
        }

        .mega-card-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: #1c2a4f;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .mega-card-item:hover .mega-card-name {
          color: #1c2a4f;
        }

        .badge-focus {
          background: #475569;
          color: #ffffff;
          font-size: 0.62rem;
          font-weight: 700;
          padding: 1px 5px;
          border-radius: 3px;
          white-space: nowrap;
        }

        .badge-hot {
          background: #1c2a4f;
          color: #ffffff;
          font-size: 0.62rem;
          font-weight: 700;
          padding: 1px 5px;
          border-radius: 3px;
          white-space: nowrap;
        }

        .mega-card-desc {
          font-size: 0.72rem;
          color: #64748b;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: 1px;
        }

        /* Footer */
        .mega-footer {
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .mega-footer-left {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #475569;
          font-weight: 500;
        }

        .mega-footer-action-btn {
          background: transparent;
          border: none;
          color: #1c2a4f;
          font-weight: 700;
          font-size: 0.84rem;
          cursor: pointer;
          padding: 5px 12px;
          border-radius: 6px;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .mega-footer-action-btn:hover {
          background: #f8fafc;
        }

        /* Right Actions */
        .nav-actions-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .counselling-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: linear-gradient(135deg, #1c2a4f 0%, #1c2a4f 100%);
          color: #ffffff;
          padding: 9px 16px;
          border-radius: 9px;
          border: none;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(29, 78, 216, 0.25);
          white-space: nowrap;
        }

        .counselling-cta-btn:hover {
          background: linear-gradient(135deg, #293d73 0%, #1c2a4f 100%);
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(29, 78, 216, 0.35);
        }

        .hamburger-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: #f1f5f9;
          border: none;
          cursor: pointer;
          color: #1c2a4f;
          transition: background 0.2s;
        }

        .hamburger-btn:hover {
          background: #e2e8f0;
        }

        /* Mobile Drawer */
        .mobile-menu-drawer {
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
          max-height: 85vh;
          overflow-y: auto;
          animation: drawerIn 0.2s ease-out;
        }

        .mobile-drawer-body {
          padding: 14px 18px 20px 18px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mobile-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 11px 12px;
          border-radius: 9px;
          font-size: 0.92rem;
          font-weight: 600;
          color: #334155;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s;
        }

        .mobile-row:hover {
          background: #f8fafc;
        }

        .mobile-row.active {
          background: #f8fafc;
          color: #1c2a4f;
          font-weight: 700;
        }

        .mobile-row.special-mobile {
          background: #ffffff;
          color: #92400e;
        }

        .mobile-row-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .mobile-icon {
          color: #64748b;
        }

        .mobile-row.active .mobile-icon {
          color: #1c2a4f;
        }

        .mobile-badge-count {
          background: #e2e8f0;
          color: #475569;
          font-size: 0.7rem;
          padding: 2px 6px;
          border-radius: 4px;
        }

        .m-tag-focus {
          background: #f8fafc;
          color: #92400e;
          font-size: 0.68rem;
          padding: 2px 6px;
          border-radius: 4px;
          margin-left: 6px;
        }

        .chevron-trans {
          color: #94a3b8;
          transition: transform 0.2s ease;
        }

        .chevron-trans.open {
          transform: rotate(180deg);
        }

        .chevron-right-muted {
          color: #cbd5e1;
        }

        .mobile-dest-expand {
          background: #f8fafc;
          border-radius: 10px;
          padding: 10px;
          margin: 4px 0 6px 0;
          border: 1px solid #e2e8f0;
        }

        .mobile-all-dest-link {
          display: block;
          font-size: 0.82rem;
          font-weight: 700;
          color: #1c2a4f;
          text-decoration: none;
          margin-bottom: 8px;
          padding-bottom: 6px;
          border-bottom: 1px solid #e2e8f0;
        }

        .mobile-dest-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px;
        }

        .mobile-dest-item {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          padding: 7px 8px;
          border-radius: 6px;
          border: 1px solid #e2e8f0;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 600;
          color: #1c2a4f;
        }

        .mobile-drawer-bottom {
          margin-top: 10px;
          padding-top: 12px;
          border-top: 1px solid #f1f5f9;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobile-cta-primary {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #1c2a4f;
          color: #ffffff;
          padding: 11px;
          border-radius: 9px;
          border: none;
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
        }

        .mobile-cta-secondary {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          color: #1c2a4f;
          border: 1.5px solid #cbd5e1;
          padding: 10px;
          border-radius: 9px;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
        }

        @keyframes drawerIn {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive Breakpoints */
        @media (max-width: 1180px) {
          .nav-link, .nav-link-btn {
            padding: 7px 9px;
            font-size: 0.82rem;
          }
          .mega-dropdown-box {
            max-width: 860px;
          }
          .logo-tagline {
            display: none;
          }
        }

        @media (max-width: 992px) {
          .nav-menu-desktop {
            display: none;
          }
          .hamburger-btn {
            display: flex;
          }
          .top-msg {
            display: none;
          }
          .top-eval-btn {
            display: none;
          }
          .top-dot {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .top-strip {
            padding: 4px 0;
          }
          .top-strip-inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .top-strip-left {
            gap: 6px;
          }
          .top-pill {
            font-size: 0.65rem;
            padding: 2px 6px;
          }
          .top-phone {
            font-size: 0.76rem;
            color: #eef2fa;
          }
          .counselling-cta-btn {
            display: none;
          }
          .main-nav-inner {
            height: 60px;
          }
          .mobile-menu-drawer {
            max-height: calc(100vh - 85px);
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
            padding: 14px 16px 28px 16px;
          }
          .mobile-dest-grid {
            grid-template-columns: 1fr 1fr;
            gap: 6px;
          }
        }

        @media (max-width: 420px) {
          .mobile-dest-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </header>
  );
}
