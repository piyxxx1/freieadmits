import React, { useState } from 'react';
import { useRouter } from './context/RouterContext';
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
    </div>
  );
}

export default App;
