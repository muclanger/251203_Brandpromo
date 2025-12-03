import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-[#111] border-t border-gray-800 mt-20 py-12">
    <div className="container grid md:grid-cols-4 gap-8">
      <div className="col-span-1 md:col-span-2">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white mb-4 block">brand<span className="text-brand">Promo</span></Link>
        <p className="text-gray-500 max-w-sm text-sm">
          Ihr Partner für digitale Medienproduktion und Automatisierung in München.
          Wir bringen Qualität und Effizienz zusammen.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-4 text-white">Links</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><Link to="/" className="hover:text-brand">Home</Link></li>
          <li><Link to="/preise" className="hover:text-brand">Preise</Link></li>
          <li><Link to="/portfolio" className="hover:text-brand">Portfolio</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4 text-white">Rechtliches</h4>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><Link to="/impressum" className="hover:text-brand">Impressum</Link></li>
          <li><Link to="/datenschutz" className="hover:text-brand">Datenschutz</Link></li>
        </ul>
      </div>
    </div>
    <div className="container mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
      &copy; {new Date().getFullYear()} brandPromo. Alle Rechte vorbehalten.
    </div>
  </footer>
);

export default Footer;