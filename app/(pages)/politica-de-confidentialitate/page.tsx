export default function PoliticaConfidentialitate() {
  return (
    <div className="legal-wrap">
      <div className="legal-header">
        <p className="despre-tag">Legal</p>
        <h1 className="despre-title">Politică de confidențialitate</h1>
        <div className="hero-divider" style={{ maxWidth: 300, margin: "1.5rem auto 0" }}>
          <span /><span className="hero-divider-diamond">◆</span><span />
        </div>
        <p className="legal-updated">Ultima actualizare: iunie 2025</p>
      </div>

      <div className="legal-body">

        <section className="legal-section">
          <h2>1. Cine suntem</h2>
          <p>
            Acest site web, <strong>flaviadelice.ro</strong>, este operat de <strong>Flavia I.</strong>,
            cu sediul în Sibiu, România. Pentru orice întrebări legate de prelucrarea datelor
            personale ne puteți contacta la adresa de email:{" "}
            <a href="mailto:contact@flaviadelice.ro">contact@flaviadelice.ro</a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Ce date colectăm</h2>
          <p>
            Site-ul <strong>flaviadelice.ro</strong> funcționează exclusiv ca o prezentare online
            (carte de vizită digitală) și <strong>nu colectează, nu stochează și nu prelucrează
            date cu caracter personal</strong> ale vizitatorilor.
          </p>
          <p>
            Nu există formulare de înregistrare, conturi de utilizator sau mecanisme de urmărire
            a comportamentului online (tracking). Nu utilizăm cookie-uri de analiză, publicitate
            sau rețele sociale terțe.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Cookie-uri</h2>
          <p>
            Site-ul nu utilizează cookie-uri proprii sau de la terți în scopuri de analiză,
            marketing sau profilare. Este posibil ca browserul dumneavoastră să salveze
            cookie-uri tehnice strict necesare funcționării site-ului (de exemplu, pentru
            memorarea preferințelor de sesiune), fără a conține informații de identificare personală.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Date transmise voluntar</h2>
          <p>
            Dacă alegeți să ne contactați prin email la adresa{" "}
            <a href="mailto:contact@flaviadelice.ro">contact@flaviadelice.ro</a>, datele pe
            care le furnizați (nume, adresă de email, conținutul mesajului) vor fi utilizate
            exclusiv pentru a răspunde solicitării dumneavoastră și nu vor fi transmise
            către terți.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Drepturile dumneavoastră</h2>
          <p>
            În conformitate cu Regulamentul (UE) 2016/679 (GDPR), aveți dreptul de acces,
            rectificare, ștergere și opoziție cu privire la datele dumneavoastră personale.
            Întrucât nu colectăm date personale prin intermediul site-ului, aceste drepturi
            se aplică exclusiv în cazul corespondenței prin email.
          </p>
          <p>
            Pentru orice solicitare scrieți la:{" "}
            <a href="mailto:contact@flaviadelice.ro">contact@flaviadelice.ro</a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Linkuri externe</h2>
          <p>
            Site-ul poate conține linkuri către platforme externe (Instagram, Facebook, ANPC etc.).
            Nu suntem responsabili pentru practicile de confidențialitate ale acestor platforme
            și vă recomandăm să consultați politicile lor de confidențialitate înainte de a le accesa.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Modificări ale politicii</h2>
          <p>
            Ne rezervăm dreptul de a actualiza această politică de confidențialitate. Orice
            modificare va fi publicată pe această pagină cu data actualizării.
          </p>
        </section>

      </div>
    </div>
  );
}