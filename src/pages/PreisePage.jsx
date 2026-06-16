import React, { useState, useMemo } from "react";

// --- VIDEO CALCULATOR LOGIC ---
const AUTOMATION_PRICE = { none: 0, simple: 750, medium: 1200, complex: 2000 };
const roundDownTo10 = (num) => Math.floor(num / 10) * 10;

function computeVideoPrice(cfg) {
  const basePriceFromMinutes = (minutes) => {
    if (minutes === 0) return 0;
    if (minutes <= 1) return 200;
    if (minutes <= 5) return 300;
    if (minutes <= 10) return 650;
    if (minutes <= 15) return 850;
    if (minutes <= 20) return 950;
    if (minutes <= 25) return 1050;
    if (minutes <= 30) return 1150;
    const extraBlocks = Math.floor((minutes - 30) / 5);
    return 1150 + extraBlocks * 50;
  };

  const computeAiVideoCost = (minutes) => {
    if (minutes < 1) return 50;
    if (minutes <= 5) return 150;
    if (minutes <= 10) return 400;
    // Jede weitere 5 Minuten kosten 150€
    const extraBlocks = Math.floor((minutes - 10) / 5);
    return 400 + extraBlocks * 150;
  };

  const base = basePriceFromMinutes(cfg.minutes);
  const subtitles = cfg.subtitles ? base * 0.10 : 0;
  const motion = cfg.motionGraphics ? roundDownTo10(base * 0.25) : 0;
  const materialUpcharge = cfg.materialSource === "create" ? Math.max(100, roundDownTo10(base * 1.0)) : 0;
  const design = cfg.designType === "none" ? 0 : (cfg.designType === "thumbnail" ? 50 : 100);
  const shootDaysCost = cfg.shootDays && cfg.shootDays > 0 ? (500 + Math.max(0, cfg.shootDays - 1) * 400) : 0;
  const equipmentCost = (cfg.shootDays > 0 && cfg.equipmentRental) ? cfg.shootDays * 100 : 0;
  const aiVideoCost = cfg.aiVideo ? computeAiVideoCost(cfg.minutes) : 0;

  const extraRevisions = Math.max(0, (cfg.revisionsTotal || 2) - 2);
  let revisionsCost = 0;
  if (extraRevisions > 0) {
    const thirdCost = roundDownTo10(base * 0.2);
    revisionsCost = thirdCost * extraRevisions;
  }

  const automation = AUTOMATION_PRICE[cfg.automationLevel] || 0;
  const subtotal = Math.round(base + subtitles + motion + materialUpcharge + design + shootDaysCost + equipmentCost + aiVideoCost + revisionsCost + automation);

  const lines = [
    { label: "Videopreis (nach Länge)", amount: base },
  ];
  if (cfg.subtitles) lines.push({ label: "Untertitel (10%)", amount: Math.round(subtitles) });
  if (cfg.motionGraphics) lines.push({ label: "Animationen (25%)", amount: motion });
  if (materialUpcharge) lines.push({ label: "Videomaterial-Erstellung (100%)", amount: materialUpcharge });
  if (cfg.materialSource === 'create') lines.push({ label: "Hinweis: Eventuelles Stockfootage extra", note: true });
  if (cfg.designType !== "none") lines.push({ label: "Grafikdesign (pauschal)", amount: design });
  if (extraRevisions > 0) lines.push({ label: `Korrekturschleifen (${cfg.revisionsTotal} gesamt)`, amount: revisionsCost });
  if (shootDaysCost > 0) lines.push({ label: `Drehtag(e) (${cfg.shootDays}×)`, amount: shootDaysCost });
  if (equipmentCost > 0) lines.push({ label: `Equipment-Ausleihe (${cfg.shootDays}× Tage)`, amount: equipmentCost });
  if (aiVideoCost > 0) lines.push({ label: "KI-Videoerstellung", amount: aiVideoCost });
  if (automation) lines.push({ label: "Automatisierung", amount: automation });

  return { total: subtotal, lines };
}

// --- WEB CALCULATOR LOGIC ---
function computeWebPrice(cfg) {
  const websiteTypes = {
    onepage: { base: 800, label: "One-Pager" },
    multipage: { base: 1500, label: "Multi-Page (bis 5 Seiten)" },
    shop: { base: 2500, label: "Online-Shop" },
    custom: { base: 3500, label: "Custom Web-App" }
  };

  const base = websiteTypes[cfg.websiteType]?.base || 0;
  const responsive = cfg.responsive ? roundDownTo10(base * 0.15) : 0;
  const cms = cfg.cms ? 400 : 0;
  const seo = cfg.seo ? 300 : 0;
  const hosting = cfg.hosting === "managed" ? 50 : (cfg.hosting === "premium" ? 100 : 0);
  const maintenance = cfg.maintenance ? 150 : 0;

  let pagesCost = 0;
  if (cfg.websiteType === 'multipage' && cfg.extraPages > 0) {
    pagesCost = cfg.extraPages * 150;
  }

  const automation = AUTOMATION_PRICE[cfg.automationLevel] || 0;
  const subtotal = Math.round(base + responsive + cms + seo + hosting + maintenance + pagesCost + automation);

  const lines = [
    { label: websiteTypes[cfg.websiteType]?.label || "Website", amount: base },
  ];
  if (cfg.responsive) lines.push({ label: "Responsive Design (15%)", amount: responsive });
  if (cfg.cms) lines.push({ label: "CMS Integration", amount: cms });
  if (pagesCost > 0) lines.push({ label: `Extra Seiten (${cfg.extraPages}×)`, amount: pagesCost });
  if (cfg.seo) lines.push({ label: "SEO Optimierung", amount: seo });
  if (cfg.hosting !== "none") lines.push({ label: `Hosting (${cfg.hosting})`, amount: hosting });
  if (cfg.maintenance) lines.push({ label: "Wartung (monatlich)", amount: maintenance });
  if (automation) lines.push({ label: "Automatisierung", amount: automation });

  return { total: subtotal, lines };
}

// --- VIDEO CALCULATOR COMPONENT ---
const VideoCalculator = () => {
  const STEPS = [
    { label: '0', value: 0 }, { label: '<1', value: 1 }, { label: '1–5', value: 5 },
    { label: '10', value: 10 }, { label: '15', value: 15 }, { label: '20', value: 20 },
    { label: '25', value: 25 }, { label: '30', value: 30 }, { label: '60', value: 60 }, { label: '90', value: 90 },
  ];

  const [config, setConfig] = useState({
    minutes: 1, subtitles: false, motionGraphics: false, materialSource: "existing",
    revisionsTotal: 2, designType: "none", automationLevel: "none", shootDays: 0,
    equipmentRental: false, aiVideo: false,
  });

  const price = useMemo(() => computeVideoPrice(config), [config]);
  const currentStepIndex = STEPS.findIndex(s => s.value === config.minutes);

  return (
    <div className="glass rounded-3xl p-6 md:p-12 border border-brand/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="flex flex-col lg:flex-row gap-12 relative z-10">
        <div className="w-full lg:w-2/3 space-y-8">
          <h3 className="text-2xl font-bold border-l-4 border-brand pl-4">Konfiguration</h3>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-300">Videolänge (Minuten)</label>
              <span className="text-brand font-bold">{STEPS[Math.max(0, currentStepIndex)].label} Min.</span>
            </div>
            <input
              type="range" min={0} max={STEPS.length - 1} step={1}
              value={Math.max(0, currentStepIndex)}
              onChange={(e)=> setConfig(p => ({ ...p, minutes: STEPS[Number(e.target.value)].value }))}
              className="w-full"
            />
            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <span>0</span><span>90+</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <button
              className={`toggle w-full p-4 rounded-xl border transition-all text-left ${config.subtitles ? 'active border-brand' : 'border-white/20 hover:border-brand/50'}`}
              onClick={() => setConfig(p=>({...p, subtitles: !p.subtitles}))}
            >
              <div className="font-semibold">Untertitel</div>
              <div className="text-xs opacity-70">+10% Aufpreis</div>
            </button>

            <button
              className={`toggle w-full p-4 rounded-xl border transition-all text-left ${config.motionGraphics ? 'active border-brand' : 'border-white/20 hover:border-brand/50'}`}
              onClick={() => setConfig(p=>({...p, motionGraphics: !p.motionGraphics}))}
            >
              <div className="font-semibold">Motion Graphics</div>
              <div className="text-xs opacity-70">+25% für Animationen</div>
            </button>
          </div>

          <div className="glass p-6 rounded-xl">
            <label className="block text-sm font-medium mb-3">Videomaterial</label>
            <div className="flex gap-4">
              <button
                className={`px-4 py-2 rounded-lg text-sm transition font-semibold ${config.materialSource === 'existing' ? 'bg-brand text-white' : 'bg-bg-card border border-white/20 hover:border-brand/50'}`}
                onClick={()=>setConfig(p=>({...p, materialSource: 'existing', shootDays: 0}))}
              >
                Material vorhanden
              </button>
              <button
                className={`px-4 py-2 rounded-lg text-sm transition font-semibold ${config.materialSource === 'create' ? 'bg-brand text-white' : 'bg-bg-card border border-white/20 hover:border-brand/50'}`}
                onClick={()=>setConfig(p=>({...p, materialSource: 'create'}))}
              >
                Neu erstellen
              </button>
            </div>

            {config.materialSource === 'create' && (
              <div className="mt-4 pt-4 border-t border-white/10 space-y-4">
                 <div className="flex items-center gap-3">
                   <input
                      type="checkbox"
                      checked={config.shootDays > 0}
                      onChange={() => setConfig(p=>({...p, shootDays: p.shootDays > 0 ? 0 : 1, equipmentRental: false}))}
                      className="w-5 h-5 rounded"
                      style={{ accentColor: 'var(--brand)' }}
                   />
                   <span className="text-sm">Drehtag(e) benötigt?</span>
                 </div>
                 {config.shootDays > 0 && (
                   <div className="ml-8 space-y-3">
                     <div className="flex items-center gap-2">
                       <input
                         type="number" min="1" max="10"
                         value={config.shootDays}
                         onChange={(e)=>setConfig(p=>({...p, shootDays: Math.max(1, parseInt(e.target.value)||1)}))}
                         className="bg-bg-card border border-white/20 rounded p-2 w-16 text-center focus:border-brand outline-none"
                       />
                       <span className="text-xs text-gray-400">Tage (1. Tag 500€, weitere 400€)</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <input
                          type="checkbox"
                          checked={config.equipmentRental}
                          onChange={() => setConfig(p=>({...p, equipmentRental: !p.equipmentRental}))}
                          className="w-5 h-5 rounded"
                          style={{ accentColor: 'var(--brand)' }}
                       />
                       <span className="text-sm">Equipment mit ausleihen (100€/Tag)</span>
                     </div>
                   </div>
                 )}

                 <div className="flex items-center gap-3 pt-2">
                   <input
                      type="checkbox"
                      checked={config.aiVideo}
                      onChange={() => setConfig(p=>({...p, aiVideo: !p.aiVideo}))}
                      className="w-5 h-5 rounded"
                      style={{ accentColor: 'var(--brand)' }}
                   />
                   <span className="text-sm">KI-Videoerstellung benötigt?</span>
                 </div>
                 {config.aiVideo && (
                   <div className="ml-8 text-xs text-gray-400 space-y-1">
                     <div>{'<1 Min: 50€ | 1-5 Min: 150€ | 10 Min: 400€'}</div>
                     <div>Jede weitere 5 Minuten: +150€</div>
                   </div>
                 )}
              </div>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Grafikdesign</label>
              <select
                value={config.designType}
                onChange={(e) => setConfig(p=>({...p, designType: e.target.value}))}
                className="w-full bg-bg-card border border-white/20 rounded-lg p-3 focus:border-brand focus:outline-none"
              >
                <option value="none">Kein Design</option>
                <option value="thumbnail">Thumbnail (50€)</option>
                <option value="social">Social Media Post (100€)</option>
                <option value="logo">Logo Design (100€)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Automatisierung (n8n)</label>
              <select
                value={config.automationLevel}
                onChange={(e) => setConfig(p=>({...p, automationLevel: e.target.value}))}
                className="w-full bg-bg-card border border-white/20 rounded-lg p-3 focus:border-brand focus:outline-none"
              >
                <option value="none">Keine</option>
                <option value="simple">Simple (750€)</option>
                <option value="medium">Mittel (1200€)</option>
                <option value="complex">Komplex (2000€)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <div className="glass p-8 rounded-2xl sticky top-24">
            <h4 className="text-2xl font-bold mb-6">Geschätzter Preis</h4>

            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-300">Briefing (25€ / 30 Min. Meeting)</span>
                <span className="font-mono text-white">~25 €</span>
              </div>
              {price.lines.map((l, i) => (
                l.note ?
                <p key={i} className="text-xs text-gray-400 italic mt-2">{l.label}</p> :
                <div key={i} className="flex justify-between border-b border-white/10 pb-2 last:border-0">
                  <span className="text-gray-300">{l.label}</span>
                  <span className="font-mono text-white">{l.amount} €</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6 mb-6">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-gray-400">Gesamt</span>
                <div className="text-4xl font-black text-brand">{price.total}€</div>
              </div>
              <p className="text-xs text-gray-500">zzgl. gesetzl. MwSt.</p>
              <p className="text-xs text-gray-500">zzgl. Meetingpauschale 25€ / 30 Minuten</p>
            </div>

            <button className="btn-brand w-full py-4 rounded-lg font-bold">
              Unverbindlich anfragen
            </button>
            <p className="text-xs text-center text-gray-500 mt-3">
              Unverbindliche Preisschätzung. Finaler Preis nach Briefing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- WEB CALCULATOR COMPONENT ---
const WebCalculator = () => {
  const [config, setConfig] = useState({
    websiteType: "onepage",
    responsive: true,
    cms: false,
    seo: false,
    hosting: "none",
    maintenance: false,
    extraPages: 0,
    automationLevel: "none"
  });

  const price = useMemo(() => computeWebPrice(config), [config]);

  return (
    <div className="glass rounded-3xl p-6 md:p-12 border border-brand/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="flex flex-col lg:flex-row gap-12 relative z-10">
        <div className="w-full lg:w-2/3 space-y-8">
          <h3 className="text-2xl font-bold border-l-4 border-brand pl-4">Konfiguration</h3>

          <div>
            <label className="block text-sm font-medium mb-3">Website-Typ</label>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { key: 'onepage', label: 'One-Pager', desc: 'Einzelne scrollbare Seite' },
                { key: 'multipage', label: 'Multi-Page', desc: 'Bis zu 5 Seiten' },
                { key: 'shop', label: 'Online-Shop', desc: 'E-Commerce Lösung' },
                { key: 'custom', label: 'Custom Web-App', desc: 'Individuelle Lösung' }
              ].map(({ key, label, desc }) => (
                <button
                  key={key}
                  onClick={() => setConfig(p => ({ ...p, websiteType: key, extraPages: 0 }))}
                  className={`toggle p-4 rounded-xl border transition-all text-left ${
                    config.websiteType === key ? 'active border-brand' : 'border-white/20 hover:border-brand/50'
                  }`}
                >
                  <div className="font-semibold">{label}</div>
                  <div className="text-xs opacity-70">{desc}</div>
                </button>
              ))}
            </div>
          </div>

          {config.websiteType === 'multipage' && (
            <div className="glass p-6 rounded-xl">
              <label className="block text-sm font-medium mb-3">Zusätzliche Seiten (über 5 hinaus)</label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={config.extraPages}
                  onChange={(e) => setConfig(p => ({ ...p, extraPages: Number(e.target.value) }))}
                  className="w-full"
                />
                <span className="text-brand font-bold min-w-[3rem]">{config.extraPages}</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">150€ pro zusätzlicher Seite</p>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <button
              className={`toggle p-4 rounded-xl border transition-all text-left ${config.responsive ? 'active border-brand' : 'border-white/20 hover:border-brand/50'}`}
              onClick={() => setConfig(p => ({ ...p, responsive: !p.responsive }))}
            >
              <div className="font-semibold">Responsive Design</div>
              <div className="text-xs opacity-70">Mobile & Tablet optimiert (+15%)</div>
            </button>

            <button
              className={`toggle p-4 rounded-xl border transition-all text-left ${config.cms ? 'active border-brand' : 'border-white/20 hover:border-brand/50'}`}
              onClick={() => setConfig(p => ({ ...p, cms: !p.cms }))}
            >
              <div className="font-semibold">CMS Integration</div>
              <div className="text-xs opacity-70">WordPress, Webflow, o.ä. (+400€)</div>
            </button>

            <button
              className={`toggle p-4 rounded-xl border transition-all text-left ${config.seo ? 'active border-brand' : 'border-white/20 hover:border-brand/50'}`}
              onClick={() => setConfig(p => ({ ...p, seo: !p.seo }))}
            >
              <div className="font-semibold">SEO Optimierung</div>
              <div className="text-xs opacity-70">Meta-Tags, Performance (+300€)</div>
            </button>

            <button
              className={`toggle p-4 rounded-xl border transition-all text-left ${config.maintenance ? 'active border-brand' : 'border-white/20 hover:border-brand/50'}`}
              onClick={() => setConfig(p => ({ ...p, maintenance: !p.maintenance }))}
            >
              <div className="font-semibold">Wartung</div>
              <div className="text-xs opacity-70">Monatlich 150€</div>
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Hosting</label>
              <select
                value={config.hosting}
                onChange={(e) => setConfig(p => ({ ...p, hosting: e.target.value }))}
                className="w-full bg-bg-card border border-white/20 rounded-lg p-3 focus:border-brand focus:outline-none"
              >
                <option value="none">Selbst gehostet</option>
                <option value="managed">Managed Hosting (50€/Monat)</option>
                <option value="premium">Premium Hosting (100€/Monat)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Automatisierung (n8n)</label>
              <select
                value={config.automationLevel}
                onChange={(e) => setConfig(p => ({ ...p, automationLevel: e.target.value }))}
                className="w-full bg-bg-card border border-white/20 rounded-lg p-3 focus:border-brand focus:outline-none"
              >
                <option value="none">Keine</option>
                <option value="simple">Simple (750€)</option>
                <option value="medium">Mittel (1200€)</option>
                <option value="complex">Komplex (2000€)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <div className="glass p-8 rounded-2xl sticky top-24">
            <h4 className="text-2xl font-bold mb-6">Geschätzter Preis</h4>

            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-gray-300">Briefing (25€ / 30 Min. Meeting)</span>
                <span className="font-mono text-white">~25 €</span>
              </div>
              {price.lines.map((l, i) => (
                <div key={i} className="flex justify-between border-b border-white/10 pb-2 last:border-0">
                  <span className="text-gray-300">{l.label}</span>
                  <span className="font-mono text-white">{l.amount} €</span>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-6 mb-6">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-gray-400">Gesamt</span>
                <div className="text-4xl font-black text-brand">{price.total}€</div>
              </div>
              <p className="text-xs text-gray-500">zzgl. gesetzl. MwSt.</p>
              <p className="text-xs text-gray-500">zzgl. Meetingpauschale 25€ / 30 Minuten</p>
            </div>

            <button className="btn-brand w-full py-4 rounded-lg font-bold">
              Unverbindlich anfragen
            </button>
            <p className="text-xs text-center text-gray-500 mt-3">
              Unverbindliche Preisschätzung. Finaler Preis nach Briefing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- PACKAGES COMPONENT ---
const Packages = () => (
  <section className="py-10 container">
    <h2 className="text-3xl font-bold mb-4 text-center">Oder wähle ein <span className="text-brand">Paket</span></h2>
    <p className="text-center text-gray-400 mb-12">Fixpreise für wiederkehrende Projekte</p>

    <div className="grid md:grid-cols-3 gap-6">
      {[
        {name:'Starter', price:'ab 299 €', features:['4h Editing/Design','1 Korrekturschleife','E-Mail Support']},
        {name:'Pro', price:'ab 699 €', features:['12h Editing/Design','2 Korrekturschleifen','Priorisierter Support', 'Thumbnail inkl.'], popular: true},
        {name:'Enterprise', price:'Custom', features:['Flex-Kontingent','SLA & Termin-Garantie','Account Manager', 'Full Automation']}
      ].map((p, i) => (
        <div key={i} className={`glass p-8 rounded-2xl card-hover transition-all relative ${p.popular ? 'border-2 border-brand' : ''}`}>
          {p.popular && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand text-white text-xs px-3 py-1 rounded-full uppercase font-bold">Bestseller</span>}
          <h3 className="text-xl font-bold mb-2">{p.name}</h3>
          <div className="text-3xl font-black mb-1 text-brand">{p.price}</div>
          <div className="text-sm text-gray-400 mb-6">/ Monat</div>
          <ul className="space-y-3 mb-8 text-sm">
            {p.features.map((f,k)=>(
              <li key={k} className="flex items-center gap-2">
                <span className="text-brand">✓</span> {f}
              </li>
            ))}
          </ul>
          <button className={`w-full py-3 rounded-lg font-semibold transition ${p.popular ? 'btn-brand' : 'btn-outline'}`}>
            Wählen
          </button>
        </div>
      ))}
    </div>
  </section>
);

// --- MAIN PAGE COMPONENT ---
export default function PreisePage() {
  const [activeTab, setActiveTab] = useState('video');

  return (
    <div className="py-20">
      <div className="container mb-12">
        <h1 className="text-5xl font-bold mb-4 gradient-text">Preisrechner</h1>
        <p className="text-text-muted text-lg mb-8">Berechne den Preis für dein Projekt</p>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b border-white/10">
          <button
            onClick={() => setActiveTab('video')}
            className={`px-6 py-3 font-semibold transition-all relative ${
              activeTab === 'video'
                ? 'text-brand'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Video
            {activeTab === 'video' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab('web')}
            className={`px-6 py-3 font-semibold transition-all relative ${
              activeTab === 'web'
                ? 'text-brand'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Web
            {activeTab === 'web' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand"></div>
            )}
          </button>
        </div>
      </div>

      <div className="container mb-20">
        {activeTab === 'video' && <VideoCalculator />}
        {activeTab === 'web' && <WebCalculator />}
      </div>

      <Packages />
    </div>
  );
}
