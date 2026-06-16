import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { MenuIcon } from './Icon';
import { mainNavLinks } from '../data/navigation';

const Header = ({ scrolled, onMenuToggle }) => {
  const location = useLocation();
  const activeRoute = location.pathname;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#1a1a1a]/90 backdrop-blur-md shadow-lg border-b border-white/5" : "bg-transparent"}`}>
      <div className="container flex justify-between items-center py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/img/homepage1/logo/logo.png" alt="brandPromo" className="h-10 w-auto transition-transform group-hover:scale-105" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block' }} />
          <span className="text-2xl font-black hidden text-white tracking-tighter">brand<span className="text-brand">Promo</span></span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {mainNavLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors hover:text-brand ${activeRoute === link.path ? 'text-brand' : 'text-gray-300'}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/preise" className="hidden md:inline-flex px-5 py-2.5 rounded-full btn-brand text-sm">
            Angebot erstellen
          </Link>
          <button onClick={onMenuToggle} className="md:hidden text-white p-2" aria-label="Menü">
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;