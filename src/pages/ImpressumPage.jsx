import React from "react";

export default function ImpressumPage() {
  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 gradient-text">Impressum</h1>

        <div className="glass rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand">Angaben gemäß § 5 TMG</h2>
            <p className="text-text-muted leading-relaxed">
              BrandPromo GmbH<br />
              Musterstraße 123<br />
              12345 Musterstadt<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand">Vertreten durch</h2>
            <p className="text-text-muted leading-relaxed">
              Max Mustermann<br />
              Geschäftsführer
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand">Kontakt</h2>
            <p className="text-text-muted leading-relaxed">
              Telefon: +49 123 456 7890<br />
              E-Mail: info@brandpromo.de
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand">Registereintrag</h2>
            <p className="text-text-muted leading-relaxed">
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Musterstadt<br />
              Registernummer: HRB 12345
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand">Umsatzsteuer-ID</h2>
            <p className="text-text-muted leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand">Verantwortlich für den Inhalt</h2>
            <p className="text-text-muted leading-relaxed">
              Max Mustermann<br />
              Musterstraße 123<br />
              12345 Musterstadt
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand">Haftungsausschluss</h2>
            <h3 className="font-bold mb-2">Haftung für Inhalte</h3>
            <p className="text-text-muted leading-relaxed mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>

            <h3 className="font-bold mb-2">Haftung für Links</h3>
            <p className="text-text-muted leading-relaxed">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand">Urheberrecht</h2>
            <p className="text-text-muted leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
