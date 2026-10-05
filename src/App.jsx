import React, { useState } from 'react';
import { useRouter } from './context/RouterContext';
import { FaWhatsapp } from 'react-icons/fa';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CounsellingModal } from './components/CounsellingModal';
import { MobileQuickBar } from './components/MobileQuickBar';

// Pages
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Destinations } from './pages/Destinations';

import { Services } from './pages/Services';
import { DmatGermany } from './pages/DmatGermany';
import { Contact } from './pages/Contact';
import { B2B } from './pages/B2B';
import { PrivacyPolicy } from './pages/DataProtection';
import { TermsConditions } from './pages/TermsConditions';
import { Disclaimer } from './pages/Disclaimer';
import { RefundPolicy } from './pages/RefundPolicy';

function App() {
  const { currentPath, navigate } = useRouter();
  const [modalState, setModalState] = useState({ isOpen: false, type: 'counselling' });

  const openCounselling = () => setModalState({ isOpen: true, type: 'counselling' });
  const openEvaluation = () => setModalState({ isOpen: true, type: 'evaluation' });
  const closeModal = () => setModalState({ isOpen: false, type: 'counselling' });

  // Route switcher for the 7 pages
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home onOpenCounselling={openCounselling} onOpenEvaluation={openEvaluation} />;
      case '/about':
        return <AboutUs onOpenCounselling={openCounselling} />;
      case '/destinations':
        return <Destinations onOpenCounselling={openCounselling} onOpenEvaluation={openEvaluation} />;
      case '/services':
        return <Services onOpenCounselling={openCounselling} onOpenEvaluation={openEvaluation} />;
      case '/dmat-germany':
      case '/dmat':
        return <DmatGermany onOpenCounselling={openCounselling} />;
      case '/contact':
        return <Contact onOpenCounselling={openCounselling} />;
      case '/b2b':
        return <B2B onOpenCounselling={openCounselling} />;
      case '/privacy-policy':
      case '/privacy':
        return <PrivacyPolicy />;
      case '/terms-conditions':
      case '/terms':
      case '/terms-and-conditions':
        return <TermsConditions />;
      case '/disclaimer':
        return <Disclaimer />;
      case '/refund-policy':
      case '/refund':
        return <RefundPolicy />;
      default:
        return (
          <div style={{ textAlign: 'center', padding: '100px 20px', minHeight: '60vh' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1c2a4f', marginBottom: '12px' }}>
              Page Not Found
            </h2>
            <p style={{ color: '#64748b', marginBottom: '24px' }}>
              The page you are looking for doesn't exist or has moved.
            </p>
            <button onClick={() => navigate('/')} className="btn btn-primary">
              Return to Home
            </button>
          </div>
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenCounselling={openCounselling} onOpenEvaluation={openEvaluation} />
      
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>

      <Footer onOpenCounselling={openCounselling} />

      {/* Mobile Sticky Quick Action Bar (Call / WhatsApp / Book) */}
      <MobileQuickBar onOpenCounselling={openCounselling} />

      {/* Profile Evaluation & Counselling Booking Modal */}
      <CounsellingModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        initialType={modalState.type}
      />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919974798803"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          width: '56px',
          height: '56px',
          background: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.45)',
          zIndex: 9999,
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          textDecoration: 'none',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.12)';
          e.currentTarget.style.boxShadow = '0 6px 28px rgba(37, 211, 102, 0.65)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.45)';
        }}
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={30} color="#ffffff" />
      </a>
    </div>
  );
}

export default App;
