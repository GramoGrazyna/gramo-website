import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const products = [
  { number: "01", title: "OMNIedge™", description: "Monitoring predykcyjny dla prowadnic THK i inteligentnej diagnostyki maszyn.", image: "/omniedge.jpg", alt: "THK OMNIedge – monitoring predykcyjny" },
  { number: "02", title: "Prowadnice liniowe", description: "THK / NB — prowadzenie osi dla automatyki, CNC i maszyn specjalnych.", image: "/linear-guide.jpg", alt: "THK i NB – prowadnica liniowa" },
  { number: "03", title: "Śruby kulowe", description: "Precyzyjny ruch osi dla CNC, automatyki, robotyki i maszyn specjalnych.", image: "/ball-screw.jpg", alt: "Śruba kulowa do napędu osi" },
  { number: "04", title: "Stoły precyzyjne", description: "THK / NB — rozwiązania do dokładnego pozycjonowania i mikroruchów.", image: "/precision-table.jpg", alt: "THK i NB – stół precyzyjny" },
  { number: "05", title: "Slide Way – prowadnice wałeczkowo-krzyżowe", description: "Nippon Bearing — precyzyjne prowadzenie dla wymagających mechanizmów.", image: "/slide-way.jpg", alt: "NB Slide Way – prowadnice wałeczkowo-krzyżowe" },
  { number: "06", title: "Tuleje liniowe", description: "NB — kompaktowe rozwiązania prowadzenia dla aplikacji przemysłowych.", image: "/linear-bushing.jpg", alt: "Nippon Bearing – tuleja liniowa" }
];

const applications = [
  ["Automatyka", "Robotyka, osie liniowe i systemy pozycjonowania."],
  ["Maszyny CNC", "Prowadzenie osi i śruby kulowe."],
  ["Fotonika i optyka", "Precyzyjne pozycjonowanie elementów optycznych."],
  ["Medical & Laboratory", "Mechanizmy precyzyjne i aparatura laboratoryjna."],
  ["Semiconductor", "Cleanroom, wysoka powtarzalność i precyzja."],
  ["Urządzenia pomiarowe", "Ruch o wysokiej dokładności i stabilności."],
  ["Aerospace", "Precyzyjne mechanizmy i stanowiska testowe."],
  ["R&D / Deep Tech", "Mikrorobotyka, fotonika i nanopozycjonowanie."]
];

function QuoteModal({ onClose }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: ""
  });

  const update = (key) => (event) =>
    setForm((current) => ({ ...current, [key]: event.target.value }));

  const submit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Zapytanie ofertowe GRAMO${form.product ? ` – ${form.product}` : ""}`
    );

    const body = encodeURIComponent(
      [
        `Firma: ${form.company}`,
        `Osoba: ${form.name}`,
        `E-mail: ${form.email}`,
        `Telefon: ${form.phone}`,
        `Produkt / model: ${form.product}`,
        `Ilość: ${form.quantity}`,
        "",
        "Wiadomość:",
        form.message
      ].join("\n")
    );

    window.location.href = `mailto:biuro@gramo.com.pl?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="quote-modal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Zamknij">×</button>

        {!sent ? (
          <>
            <div className="kicker">B2B / Engineering</div>
            <h2>Zapytaj o ofertę</h2>
            <p className="modal-intro">
              Podaj podstawowe informacje. Możesz wpisać symbol produktu,
              parametry aplikacji albo opisać potrzebę.
            </p>

            <form onSubmit={submit}>
              <div className="quote-grid">
                <label>Firma*
                  <input required value={form.company} onChange={update("company")} />
                </label>
                <label>Imię i nazwisko*
                  <input required value={form.name} onChange={update("name")} />
                </label>
                <label>E-mail*
                  <input required type="email" value={form.email} onChange={update("email")} />
                </label>
                <label>Telefon
                  <input value={form.phone} onChange={update("phone")} />
                </label>
                <label>Produkt / model
                  <input placeholder="np. THK HSR20" value={form.product} onChange={update("product")} />
                </label>
                <label>Ilość
                  <input value={form.quantity} onChange={update("quantity")} />
                </label>
              </div>

              <label>Opis aplikacji / zapytania
                <textarea
                  rows="5"
                  placeholder="Parametry, wymiary, obciążenie, prędkość, ilość sztuk lub inne informacje..."
                  value={form.message}
                  onChange={update("message")}
                />
              </label>

              <div className="quote-actions">
                <button className="btn primary" type="submit">Wyślij zapytanie →</button>
                <button className="btn modal-secondary" type="button" onClick={onClose}>Anuluj</button>
              </div>
              <div className="privacy-note">
                Po wysłaniu zostanie otwarta wiadomość e-mail do GRAMO z uzupełnionymi danymi.
              </div>
            </form>
          </>
        ) : (
          <div className="success-state">
            <div className="success-icon">✓</div>
            <div className="kicker">Zapytanie przygotowane</div>
            <h2>Dziękujemy.</h2>
            <p>
              Otworzyliśmy wiadomość e-mail z przygotowaną treścią zapytania.
              Wystarczy ją wysłać.
            </p>
            <button className="btn primary" onClick={onClose}>Zamknij</button>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const openQuote = (event) => {
    event.preventDefault();
    setQuoteOpen(true);
  };

  return (
    <>
      <header className="hero" id="top">
        <img className="hero-img" src="/hero.png" alt="" />
        <div className="hero-overlay" />

        <nav className="nav container">
          <a className="brand" href="#top">
            GRAMO
            <small>MOTION FOR A BETTER TOMORROW</small>
          </a>

          <div className="links">
            <a href="#produkty">Produkty</a>
            <a href="#thk">THK</a>
            <a href="#nb">Nippon Bearing</a>
            <a href="#rozwiazania">Rozwiązania</a>
            <a href="#aplikacje">Aplikacje</a>
            <a href="#kontakt">Kontakt</a>
          </div>

          <button className="btn primary nav-cta" onClick={openQuote}>
            Zapytaj o ofertę →
          </button>
        </nav>

        <div className="container hero-content">
          <div className="eyebrow">Precision Motion Technology</div>
          <h1>
            Technologia,
            <br />
            która napędza <span>przyszłość</span>
          </h1>
          <p>
            THK i Nippon Bearing — precyzyjny ruch dla nowoczesnych maszyn,
            automatyki i aplikacji high-tech.
          </p>

          <div className="actions">
            <button className="btn primary" onClick={openQuote}>
              Zapytaj o ofertę →
            </button>
          </div>

          <div className="brands">
            <span>THK</span>
            <span>NB</span>
          </div>
        </div>
      </header>

      <section className="strip" aria-label="Wartości">
        <div className="container strip-grid">
          {[
            ["±", "Wysoka", "dokładność"],
            ["◇", "Niezawodność", "i długa żywotność"],
            ["↕", "Wsparcie", "inżynierskie"],
            ["⌘", "Industry 4.0", "i monitoring"],
            ["◎", "Aplikacje", "high-tech"]
          ].map(([icon, title, subtitle]) => (
            <div className="metric" key={title}>
              <strong>{icon} {title}</strong>
              <span>{subtitle}</span>
            </div>
          ))}
        </div>
      </section>

      <main>
        <section className="section" id="produkty">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="kicker">Nasze produkty</div>
                <h2>Kompletny system ruchu liniowego</h2>
              </div>
              <p className="muted">
                Od standardowych prowadnic po precyzyjne stoły i monitoring predykcyjny.
              </p>
            </div>

            <div className="products">
              {products.map((product) => (
                <article className="card" key={product.title}>
                  <div className="num">{product.number}</div>
                  <img
                    className="product-photo"
                    src={product.image}
                    alt={product.alt}
                    loading="lazy"
                  />
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <button className="text-link" onClick={openQuote}>Zapytaj o ofertę →</button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section dark" id="rozwiazania">
          <div className="container">
            <div className="section-head dark-head">
              <div>
                <div className="kicker">Rozwiązania</div>
                <h2>Precyzyjny ruch. Jedna platforma technologiczna.</h2>
              </div>
              <p className="muted">
                Dobór komponentów, wsparcie inżynierskie, modernizacja układów ruchu
                i technologie monitoringu.
              </p>
            </div>

            <div className="techgrid">
              <article className="tech">
                <div className="kicker">THK</div>
                <h3>Linear Motion<br />for a Smarter World</h3>
                <p>
                  Prowadnice, śruby kulowe, stoły i elementy ruchu liniowego
                  oraz OMNIedge™ — od komponentu do danych.
                </p>
                <div className="orb" />
              </article>

              <article className="tech" id="nb">
                <div className="kicker">Nippon Bearing</div>
                <h3>Precision Motion<br />for High-Tech</h3>
                <p>
                  Slide Way, stoły precyzyjne, prowadnice krzyżowo-wałeczkowe
                  i tuleje liniowe dla wymagających aplikacji.
                </p>
                <div className="orb" />
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="thk">
          <div className="container">
            <div className="section-head">
              <div>
                <div className="kicker">Maintenance / Predictive Maintenance</div>
                <h2>OMNIedge™ THK</h2>
              </div>
              <p className="muted">
                Monitoring stanu prowadnic i wsparcie predykcyjnego utrzymania ruchu.
              </p>
            </div>

            <div className="omni-card">
              <div>
                <div className="kicker">THK OMNIedge™</div>
                <h3>Od komponentu do danych o stanie maszyny.</h3>
                <p>
                  Rozwiązanie dla zakładów, które chcą obserwować stan elementów
                  ruchu i planować działania serwisowe na podstawie danych.
                </p>
                <button className="btn primary" onClick={openQuote}>Zapytaj o ofertę →</button>
              </div>
              <div className="omni-graphic">
                <div className="omni-node">Sensor</div>
                <div className="omni-arrow">→</div>
                <div className="omni-node">Cloud</div>
                <div className="omni-arrow">→</div>
                <div className="omni-node">AI / KPI</div>
                <div className="omni-arrow">→</div>
                <div className="omni-node">Service</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="aplikacje">
          <div className="container">
            <div className="kicker">Aplikacje</div>
            <h2>Technologie dla wymagających branż</h2>

            <div className="appgrid">
              {applications.map(([title, description]) => (
                <div className="app" key={title}>
                  <b>{title}</b>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="kontakt">
          <div className="container">
            <div className="cta">
              <div>
                <div className="kicker">B2B / Engineering</div>
                <h2>Projektujesz maszynę?</h2>
                <p>
                  Wyślij symbol, parametry, rysunek lub opis aplikacji.
                  Przygotujemy dobór i ofertę.
                </p>
              </div>
              <button className="btn primary" onClick={openQuote}>
                Zapytaj o ofertę →
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand">
              GRAMO
              <small>MOTION FOR A BETTER TOMORROW</small>
            </div>
            <p>Precision Motion Technology<br />THK × Nippon Bearing</p>
          </div>

          <div>
            <h4>Produkty</h4>
            <a href="#produkty">OMNIedge™</a>
            <a href="#produkty">Prowadnice</a>
            <a href="#produkty">Śruby kulowe</a>
            <a href="#produkty">Stoły precyzyjne</a>
          </div>

          <div>
            <h4>Rozwiązania</h4>
            <a href="#rozwiazania">Automatyka</a>
            <a href="#aplikacje">Fotonika</a>
            <a href="#aplikacje">Medical</a>
            <a href="#aplikacje">Deep Tech</a>
          </div>

          <div>
            <h4>Kontakt</h4>
            <a href="mailto:biuro@gramo.com.pl">biuro@gramo.com.pl</a>
            <a href="tel:+48609007076">+48 609 007 076</a>
            <button className="footer-link-button" onClick={openQuote}>Zapytanie ofertowe</button>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>GRAMO • Bytom • Polska</span>
          <span>THK × Nippon Bearing</span>
        </div>
      </footer>

      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
