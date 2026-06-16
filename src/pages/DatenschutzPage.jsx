import React from "react";

export default function DatenschutzPage() {
  return (
    <div className="container py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 gradient-text">Datenschutzerklärung</h1>

        <div className="glass rounded-2xl p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-bold mb-2">Allgemeine Hinweise</h3>
            <p className="text-text-muted leading-relaxed mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand">2. Verantwortliche Stelle</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-text-muted leading-relaxed">
              Thomas Langer<br />
              Adlzreiterstraße 14<br />
              80337 München<br />
              Deutschland<br /><br />
              Telefon: +49 176 4444 9253<br />
              E-Mail: info@brandpromo.de
            </p>
            <p className="text-text-muted leading-relaxed mt-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand">3. Datenerfassung auf dieser Website</h2>
            <h3 className="font-bold mb-2">Cookies</h3>
            <p className="text-text-muted leading-relaxed mb-4">
              Diese Website verwendet keine Cookies zur Speicherung von Informationen auf Ihrem Computer.
            </p>

            <h3 className="font-bold mb-2">Server-Log-Dateien</h3>
            <p className="text-text-muted leading-relaxed mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an mich übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-text-muted leading-relaxed mb-4 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-text-muted leading-relaxed mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand">4. Kontaktformular</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Wenn Sie mir per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert.
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              Das Kontaktformular dieser Website verwendet einen mailto-Link, der Ihre standardmäßige E-Mail-Anwendung öffnet. Die Daten werden direkt über Ihren E-Mail-Client an mich übermittelt und nicht auf dieser Website gespeichert.
            </p>
            <p className="text-text-muted leading-relaxed">
              Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf meinem berechtigten Interesse an der effektiven Bearbeitung der an mich gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand">5. Hosting</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
            </p>
            <p className="text-text-muted leading-relaxed">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber meinen potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung meines Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand">6. Ihre Rechte</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an mich wenden.
            </p>

            <h3 className="font-bold mb-2">Recht auf Datenübertragbarkeit</h3>
            <p className="text-text-muted leading-relaxed mb-4">
              Sie haben das Recht, Daten, die ich auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeite, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
            </p>

            <h3 className="font-bold mb-2">Auskunft, Löschung und Berichtigung</h3>
            <p className="text-text-muted leading-relaxed mb-4">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
            </p>

            <h3 className="font-bold mb-2">Widerspruch gegen Werbe-E-Mails</h3>
            <p className="text-text-muted leading-relaxed">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Ich behalte mir ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-brand">7. Externe Links</h2>
            <p className="text-text-muted leading-relaxed">
              Diese Website enthält Links zu externen Webseiten Dritter (z. B. Social Media Plattformen). Auf deren Inhalte habe ich keinen Einfluss. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Beim Besuch verlinkter Seiten gelten die Datenschutzbestimmungen des jeweiligen Anbieters.
            </p>
          </section>

          <section>
            <p className="text-text-muted leading-relaxed text-sm italic">
              Stand: Dezember 2025
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
