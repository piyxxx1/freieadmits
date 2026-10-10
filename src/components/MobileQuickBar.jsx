import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export function MobileQuickBar({ onOpenCounselling }) {
  return (
    <>
      <div className="mobile-bottom-quickbar">
        <a
          href="tel:+919974798803"
          className="mobile-quick-btn mobile-quick-call"
          aria-label="Call admissions support"
        >
          <Phone size={15} />
          <span>Call</span>
        </a>

        <a
          href="https://wa.me/919974798803"
          target="_blank"
          rel="noreferrer"
          className="mobile-quick-btn mobile-quick-wa"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare size={15} />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenCounselling}
          className="mobile-quick-btn mobile-quick-counsel"
          aria-label="Book free counselling session"
        >
          <span>Counselling</span>
        </button>
      </div>

      <style>{`
        .mobile-bottom-quickbar {
          display: none;
        }

        @media (max-width: 768px) {
          .mobile-bottom-quickbar {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 998;
            background: rgba(255, 255, 255, 0.96);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            padding: 8px 12px calc(8px + env(safe-area-inset-bottom, 0px)) 12px;
            border-top: 1px solid #e2e8f0;
            box-shadow: 0 -3px 14px rgba(15, 23, 42, 0.08);
          }

          /* Leave space at bottom of page so footer doesn't get covered by sticky bar */
          body {
            padding-bottom: 58px;
          }

          .mobile-quick-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            height: 40px;
            width: 100%;
            border-radius: 9px;
            font-size: 0.82rem;
            font-weight: 700;
            text-decoration: none;
            cursor: pointer;
            border: none;
            transition: transform 0.15s ease, background 0.15s ease;
            white-space: nowrap;
          }

          .mobile-quick-btn:active {
            transform: scale(0.97);
          }

          .mobile-quick-call {
            background: #f8fafc;
            color: #1c2a4f;
            border: 1px solid #bfdbfe;
          }

          .mobile-quick-wa {
            background: #ffffff;
            color: #1c2a4f;
            border: 1px solid #e2e8f0;
          }

          .mobile-quick-counsel {
            background: #1c2a4f;
            color: #ffffff;
            box-shadow: 0 2px 6px rgba(29, 78, 216, 0.25);
          }
        }

        @media (max-width: 360px) {
          .mobile-bottom-quickbar {
            gap: 6px;
            padding: 6px 8px calc(6px + env(safe-area-inset-bottom, 0px)) 8px;
          }
          .mobile-quick-btn {
            font-size: 0.74rem;
            height: 38px;
            gap: 4px;
          }
        }
      `}</style>
    </>
  );
}
