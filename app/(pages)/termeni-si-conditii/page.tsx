export default function TermeniConditii() {
  return (
    <div className="legal-wrap">
      <div className="legal-header">
        <p className="despre-tag">Legal</p>
        <h1 className="despre-title">Termeni și condiții</h1>
        <div className="hero-divider" style={{ maxWidth: 300, margin: "1.5rem auto 0" }}>
          <span /><span className="hero-divider-diamond">◆</span><span />
        </div>
        <p className="legal-updated">Ultima actualizare: iunie 2025</p>
      </div>

      <div className="legal-body">

        <section className="legal-section">
          <h2>1. Informații generale</h2>
          <p>
            Site-ul <strong>flaviadelice.ro</strong> este operat de <strong>Flavia I.</strong>,
            Sibiu, România. Prin accesarea și utilizarea acestui site acceptați termenii și
            condițiile de mai jos.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Scopul site-ului</h2>
          <p>
            <strong>flaviadelice.ro</strong> este un site de prezentare cu caracter informativ.
            Conținutul publicat — texte, fotografii, articole de blog — are scop exclusiv
            de informare și promovare a activității de cofetărie artizanală. Site-ul nu
            facilitează comenzi online sau tranzacții financiare.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Proprietate intelectuală</h2>
          <p>
            Tot conținutul acestui site (texte, imagini, grafică, logo) este proprietatea
            exclusivă a <strong>Flavia I.</strong> și este protejat de legislația română și
            europeană privind drepturile de autor. Reproducerea, distribuirea sau utilizarea
            oricărui conținut fără acordul scris al proprietarului este interzisă.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Limitarea răspunderii</h2>
          <p>
            Informațiile publicate pe site sunt furnizate cu bună-credință și caracter
            informativ. Nu garantăm acuratețea completă sau continuă a conținutului și
            nu ne asumăm răspunderea pentru eventuale erori sau omisiuni.
          </p>
          <p>
            Nu suntem responsabili pentru daunele directe sau indirecte rezultate din
            utilizarea sau imposibilitatea utilizării site-ului.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Comenzi și contact</h2>
          <p>
            Comenzile de produse se realizează exclusiv prin contactarea directă a
            cofetăriei, prin email la{" "}
            <a href="mailto:contact@flaviadelice.ro">contact@flaviadelice.ro</a> sau
            prin rețelele sociale. Orice comandă confirmată reprezintă un acord între
            client și Flavia I. asupra detaliilor produsului, prețului și termenului de livrare.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Linkuri către terți</h2>
          <p>
            Site-ul poate conține linkuri către site-uri externe. Nu controlăm și nu
            suntem responsabili pentru conținutul acestora. Accesarea lor se face pe
            propria răspundere a utilizatorului.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Legea aplicabilă</h2>
          <p>
            Acești termeni sunt guvernați de legislația română. Orice litigiu va fi
            soluționat pe cale amiabilă sau, în caz de eșec, de instanțele competente
            din România. Puteți folosi și platforma europeană de soluționare online a
            litigiilor:{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              ec.europa.eu/consumers/odr
            </a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Modificări</h2>
          <p>
            Ne rezervăm dreptul de a modifica acești termeni oricând. Versiunea actualizată
            va fi publicată pe această pagină cu data revizuirii.
          </p>
        </section>

      </div>
    </div>
  );
}