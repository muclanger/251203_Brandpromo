import React, { useState } from "react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    nachricht: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Erstelle mailto Link mit den Formulardaten
    const subject = encodeURIComponent(`Kontaktanfrage von ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.nachricht}`);

    // Öffne E-Mail-Client
    window.location.href = `mailto:info@brandpromo.de?subject=${subject}&body=${body}`;

    // Erfolgsbenachrichtigung
    alert("Dein E-Mail-Client wird geöffnet. Bitte sende die Nachricht ab.");
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
              <a href="tel:+4917644449253" className="text-brand hover:underline">
                +49 176 4444 9253
              </a>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">📍 Adresse</h3>
              <p className="text-text-muted">
                Tom Langer<br />
                Adlzreiterstraße 14<br />
                80337 München
              </p>
            </div>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4">🌐 Social Media</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://www.facebook.com/Jean.Baptiste.Grenouille.Langer" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                  <img src="/img/stock/pack-short/icons8-facebook-circled-100.png" alt="Facebook" className="w-12 h-12" />
                </a>
                <a href="https://www.instagram.com/brandpromo.de?igsh=MW1vamphcXV1Z2Fraw==" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                  <img src="/img/stock/pack-short/icons8-instagram-100.png" alt="Instagram" className="w-12 h-12" />
                </a>
                <a href="https://www.youtube.com/@thomaslanger3513" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                  <img src="/img/stock/pack-short/icons8-youtube-100.png" alt="YouTube" className="w-12 h-12" />
                </a>
                <a href="https://www.linkedin.com/in/thomas-langer-35a767156/" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                  <img src="/img/stock/pack-short/icons8-linkedin-100.png" alt="LinkedIn" className="w-12 h-12" />
                </a>
                <a href="https://wa.me/4917644449253" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                  <img src="/img/stock/pack-short/icons8-whatsapp-100.png" alt="WhatsApp" className="w-12 h-12" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
