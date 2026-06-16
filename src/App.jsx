import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";

// Layout Components
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

// Page Components
import HomePage from "./pages/HomePage";
import PreisePage from "./pages/PreisePage";
import PortfolioPage from "./pages/PortfolioPage";
import KontaktPage from "./pages/KontaktPage";
import ImpressumPage from "./pages/ImpressumPage";
import DatenschutzPage from "./pages/DatenschutzPage";

// --- Main App Component ---
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Navbar Scroll Effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <style>{`
        /* Globale CSS Variablen und Stile */
        :root{
          --bg: #1a1a1a;
          --bg-card: #222222;
          --text: #ffffff;
          --text-muted: #a3a3a3;
          --brand: #fe6600;
          --brand-hover: #e55c00;
        }
        html{ scroll-behavior: smooth; }
        
        /* Typography */
        h1, h2, h3, h4, h5, h6 { font-weight: 700; letter-spacing: -0.02em; }
        
        /* Utilities */
        .container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
        .gradient-text { background: linear-gradient(to right, #fff, var(--brand)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .text-brand { color: var(--brand); }
        
        /* Glassmorphism & Cards */
        .glass { 
          background: rgba(30, 30, 30, 0.7); 
          border: 1px solid rgba(255, 255, 255, 0.08); 
          backdrop-filter: blur(12px); 
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }
        .card-hover:hover { transform: translateY(-5px); border-color: var(--brand); }
        
        /* Buttons */
        .btn-brand { 
          background: var(--brand); 
          color: #fff; 
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .btn-brand:hover { background: var(--brand-hover); transform: scale(1.02); box-shadow: 0 0 20px rgba(254, 102, 0, 0.4); }
        
        .btn-outline {
          border: 1px solid rgba(255,255,255,0.2);
          color: white;
          background: transparent;
          transition: all 0.2s;
        }
        .btn-outline:hover { border-color: var(--brand); color: var(--brand); }

        /* Inputs & Interactive */
        input[type="range"] { accent-color: var(--brand); width: 100%; cursor: pointer; }
        .toggle.active { background-color: var(--brand); color: white; border-color: var(--brand); }
        
        /* Chatbot Animations */
        #chatbot { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .chat-bubble.user { background: var(--brand); color: white; border-bottom-right-radius: 2px; }
        .chat-bubble.bot { background: #333; color: white; border-bottom-left-radius: 2px; }
      `}</style>

      <Header scrolled={scrolled} onMenuToggle={() => setIsMenuOpen(!isMenuOpen)} />
      <MobileMenu isOpen={isMenuOpen} />

      <main className="min-h-screen pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/preise" element={<PreisePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/kontakt" element={<KontaktPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
        </Routes>
      </main>

      <Footer />
      <Chatbot />
    </>
  );
}