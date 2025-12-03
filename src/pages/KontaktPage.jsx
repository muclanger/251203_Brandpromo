import React, { useState } from "react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nachricht: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Vielen Dank für deine Nachricht! Wir melden uns bald bei dir.");
    setFormData({ name: "", email: "", nachricht: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 gradient-text">Kontakt</h1>
        <p className="text-text-muted mb-12 text-lg">Lass uns über dein Projekt sprechen</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Kontaktformular */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Schreib uns</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-bg-card border border-white/10 focus:border-brand outline-none transition-colors"
                  placeholder="Dein Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">E-Mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-bg-card border border-white/10 focus:border-brand outline-none transition-colors"
                  placeholder="deine@email.de"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Nachricht</label>
                <textarea
                  name="nachricht"
                  value={formData.nachricht}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-bg-card border border-white/10 focus:border-brand outline-none transition-colors resize-none"
                  placeholder="Erzähl uns von deinem Projekt..."
                />
              </div>
              <button type="submit" className="btn-brand w-full py-3 rounded-lg">
                Nachricht senden
              </button>
            </form>
          </div>

          {/* Kontaktinformationen */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">📧 E-Mail</h3>
              <a href="mailto:info@brandpromo.de" className="text-brand hover:underline">
                info@brandpromo.de
              </a>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">📱 Telefon</h3>
              <a href="tel:+491234567890" className="text-brand hover:underline">
                +49 123 456 7890
              </a>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">📍 Adresse</h3>
              <p className="text-text-muted">
                Musterstraße 123<br />
                12345 Musterstadt<br />
                Deutschland
              </p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4">🌐 Social Media</h3>
              <div className="flex gap-4">
                <a href="#" className="text-brand hover:text-brand-hover transition-colors">Instagram</a>
                <a href="#" className="text-brand hover:text-brand-hover transition-colors">LinkedIn</a>
                <a href="#" className="text-brand hover:text-brand-hover transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
