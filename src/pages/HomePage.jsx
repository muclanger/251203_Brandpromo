import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ClapperboardIcon, LayoutTemplateIcon, BotIcon } from '../components/Icon';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#1a1a1a]"></div>
        <img
          src="/img/homepage1/hero/hero_right.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent"></div>
      </div>

      <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full border border-brand/30 bg-brand/10 text-brand text-sm font-semibold mb-2">
            Digitale Medienproduktion & Marketing
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Wir bringen deine <br />
            <span className="gradient-text">Vision zum Leben</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-lg mx-auto md:mx-0">
            Professionelles Video-Editing, Grafikdesign und Web-Development aus München.
            Wir verwandeln Ideen in digitale Meisterwerke.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <button onClick={() => navigate('/preise')} className="btn-brand px-8 py-4 rounded-lg text-lg">
              Preis berechnen
            </button>
            <button onClick={() => navigate('/portfolio')} className="btn-outline px-8 py-4 rounded-lg text-lg">
              Portfolio ansehen
            </button>
          </div>
        </div>

        {/* Right Side Visual (Video Showreel) */}
        <div className="hidden md:block relative">
          <div className="relative z-10 glass p-4 rounded-2xl transform rotate-2 hover:rotate-0 transition duration-500">
            <video
              src="https://filedn.eu/l8EFvi7k8xipJUKFtuECc5k/Brandpromo/Clips/Showreel%202204.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl w-full h-auto shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl flex items-center gap-3 animate-bounce">
              <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
                <ClapperboardIcon className="text-white w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Projekte</p>
                <p className="font-bold">150+ Abgeschlossen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => (
  <section className="py-20 relative">
    <div className="container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Unsere <span className="text-brand">Services</span></h2>
        <p className="text-gray-400">Alles aus einer Hand für deinen digitalen Erfolg.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Video Production", icon: <ClapperboardIcon className="w-8 h-8" />, desc: "Imagefilme, Social Media Clips und Post-Production auf höchstem Niveau.", img: "/img/homepage1/video_area/1.jpg" },
          { title: "Grafikdesign", icon: <LayoutTemplateIcon className="w-8 h-8" />, desc: "Logos, Branding und Printmedien, die im Gedächtnis bleiben.", img: "/img/services/brand-bg.png" },
          { title: "Automation", icon: <BotIcon className="w-8 h-8" />, desc: "Wir automatisieren deine Workflows mit n8n und modernen Tools.", img: "/img/homepage3/services/bg.jpg" }
        ].map((s, i) => (
          <div key={i} className="glass rounded-2xl overflow-hidden group hover:border-brand/50 transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all z-10"></div>
              <img src={s.img} alt={s.title} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700" />
              <div className="absolute bottom-4 left-4 z-20 w-12 h-12 bg-brand rounded-lg flex items-center justify-center text-white">
                {s.icon}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TeamPreview = () => (
  <section className="py-20 bg-[#151515]">
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Unser <span className="text-brand">Team</span></h2>
          <p className="text-gray-400">Kreative Köpfe für dein Projekt.</p>
        </div>
        <a href="/kontakt" className="hidden md:block text-brand font-semibold hover:text-white transition">Werde Teil des Teams &rarr;</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="group relative rounded-xl overflow-hidden">
            <img
              src={`/img/homepage1/team_members/${num}.png`}
              alt={`Team Member ${num}`}
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div>
                <p className="font-bold text-white">Mitglied {num}</p>
                <p className="text-xs text-brand">Experte</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AboutShort = () => (
  <section className="py-20 container grid md:grid-cols-2 gap-12 items-center">
    <div className="order-2 md:order-1 relative">
      <div className="absolute -inset-4 bg-brand/20 rounded-full blur-3xl"></div>
      <img src="/img/about_me/me.png" alt="Founder" className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl" />
    </div>
    <div className="order-1 md:order-2">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Über <span className="text-brand">BrandPromo</span></h2>
      <p className="text-gray-300 mb-4 leading-relaxed">
        Seit Jahren unterstützen wir Unternehmen dabei, ihre digitale Präsenz zu maximieren.
        Angefangen als kleines Projekt, sind wir heute ein Netzwerk aus Spezialisten für Video, Design und Code.
      </p>
      <p className="text-gray-300 mb-8">
        Unser Hosting und unsere Automatisierung laufen auf modernsten VPS Systemen (inkl. n8n), um maximale Performance und Effizienz zu garantieren.
      </p>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="glass p-4 rounded-lg">
          <div className="text-3xl font-black text-brand">5+</div>
          <div className="text-xs text-gray-400">Jahre Erfahrung</div>
        </div>
        <div className="glass p-4 rounded-lg">
          <div className="text-3xl font-black text-brand">100+</div>
          <div className="text-xs text-gray-400">Projekte</div>
        </div>
        <div className="glass p-4 rounded-lg">
          <div className="text-3xl font-black text-brand">24/7</div>
          <div className="text-xs text-gray-400">Support</div>
        </div>
      </div>
    </div>
  </section>
);

const ReferenceSlider = () => (
  <section className="py-16 border-t border-white/5">
    <div className="container text-center">
      <p className="text-sm text-gray-500 mb-8 uppercase tracking-widest">Vertrauen durch Qualität</p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <img src="/img/homepage2/brand/brand-1.png" alt="Brand 1" className="h-12 w-auto object-contain" />
        <img src="/img/homepage2/brand/brand-2.png" alt="Brand 2" className="h-12 w-auto object-contain" />
        <img src="/img/homepage2/brand/brand-3.png" alt="Brand 3" className="h-12 w-auto object-contain" />
        <img src="/img/homepage2/brand/brand-4.png" alt="Brand 4" className="h-12 w-auto object-contain" />
      </div>
    </div>
  </section>
);

const HomePage = () => (
  <>
    <Hero />
    <Services />
    <TeamPreview />
    <AboutShort />
    <ReferenceSlider />
  </>
);

export default HomePage;