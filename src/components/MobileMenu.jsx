import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { mobileNavLinks } from '../data/navigation';

const MobileMenu = ({ isOpen }) => {
  const location = useLocation();
  const activeRoute = location.pathname;
  
  return (
    <div className={`fixed inset-0 bg-[#1a1a1a] z-40 pt-24 px-6 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <nav className="flex flex-col space-y-6 text-xl font-semibold">
        {mobileNavLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block py-2 border-b border-white/10 ${activeRoute === link.path ? 'text-brand' : 'text-white'}`}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/preise" className="btn-brand text-center py-3 rounded-lg mt-4">
          Jetzt Angebot berechnen
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;