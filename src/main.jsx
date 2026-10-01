import "./styles.css";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const products = [
  {
    no: "01",
    name: "OMNIedge™",
    desc: "Monitoring stanu prowadnic i predykcyjne utrzymanie ruchu THK.",
    image: "/hero.png",
  },
  {
    no: "02",
    name: "Prowadnice liniowe",
    desc: "THK HSR, SSR, SHS, SR, SRG – precyzyjny ruch liniowy.",
    image: "/hero.png",
  },
  {
    no: "03",
    name: "Śruby kulowe",
    desc: "Precyzyjne rozwiązania do osi CNC, automatyki i maszyn.",
    image: "/hero.png",
  },
  {
    no: "04",
    name: "Stoły precyzyjne",
    desc: "Precyzyjne pozycjonowanie dla automatyki, optyki i R&D.",
    image: "/hero.png",
  },
  {
    no: "05",
    name: "Slide Way – prowadnice wałeczkowo-krzyżowe",
    desc: "Wysoka dokładność, sztywność i płynność ruchu NB.",
    image: "/slide-way.jpg",
  },
  {
    no: "06",
    name: "Tuleje liniowe",
    desc: "Tuleje i łożyska liniowe NB do precyzyjnego prowadzenia.",
    image: "/hero.png",
  },
];

const applications = [
  "Automatyka",
  "Maszyny CNC",
  "Fotonika i optyka",
  "Medical & Laboratory",
  "Semiconductor",
  "Urządzenia pomiarowe",
  "Aerospace",
  "R&D / Deep Tech",
];

function QuoteModal({ onClose }) {
  const [form, setForm] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `
Firma: ${form.company}
Imię i nazwisko: ${form.name}
E-mail: ${form.email}
Telefon: ${form.phone}
Produkt / model: ${form.product}
Ilość: ${form.quantity}

Opis zapytania:
${form.message}
`;

    window.location.href =
      "mailto:biuro@gramo.com.pl" +
      "?subject=" +
      encodeURIComponent("Zapytanie ofertowe – GRAMO") +
      "&body=" +
      encodeURIComponent(body);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="quote-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="eyebrow">GRAMO MOTION SYSTEMS</div>
        <h2>Zapytaj o ofertę</h2>
        <p>
          Prześlij parametry aplikacji lub numer produktu. Przygotujemy
          odpowiednie rozwiązanie THK / Nippon Bearing.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            name="company"
            placeholder="Firma"
            value={form.company}
            onChange={handleChange}
            required
          />

          <input
            name="name"
            placeholder="Imię i nazwisko"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            placeholder="Telefon"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            name="product"
            placeholder="Produkt / model"
            value={form.product}
            onChange={handleChange}
          />

          <input
            name="quantity"
            placeholder="Ilość"
            value={form.quantity}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Opis aplikacji / zapytania"
            rows="5"
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="primary-button">
            Wyślij zapytanie →
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const openQuote = () => setQuoteOpen(true);
  const closeQuote = () => setQuoteOpen(false);

  return (
    <div className="site">

      <header className="navbar">
        <div className="nav-inner">
          <a href="#" className="logo">
            GRAMO
            <span>MOTION SYSTEMS</span>
          </a>

          <nav>
            <a href="#produkty">Produkty</a>
            <a href="#thk">THK</a>
            <a href="#nb">Nippon Bearing</a>
            <a href="#rozwiazania">Rozwiązania</a>
            <a href="#aplikacje">Aplikacje</a>
            <a href="#kontakt">Kontakt</a>
          </nav>

          <button className="nav-cta" onClick={openQuote}>
            Zapytaj o ofertę
          </button>
        </div>
      </header>

      <main>

        <section className="hero">
          <div className="hero-content">
            <div className="eyebrow">
              THK × NIPPON BEARING
            </div>

            <h1>
              Inteligentny ruch.
              <br />
              <span>Precyzja bez kompromisów.</span>
            </h1>

            <p>
              Technologie ruchu liniowego dla automatyki, CNC,
              fotoniki, medtech, semiconductor i przemysłu 4.0.
            </p>

            <button className="primary-button" onClick={openQuote}>
              Zapytaj o ofertę →
            </button>
          </div>

          <div className="hero-image">
            <img
              src="/hero.png"
              alt="Technologia ruchu liniowego THK"
            />
          </div>
        </section>

        <section className="value-strip">
          <div>
            <strong>THK</strong>
            <span>Japanese Linear Motion</span>
          </div>

          <div>
            <strong>NB</strong>
            <span>Precision Motion</span>
          </div>

          <div>
            <strong>01</strong>
            <span>Dobór rozwiązania</span>
          </div>

          <div>
            <strong>02</strong>
            <span>Oferta techniczna</span>
          </div>

          <div>
            <strong>03</strong>
            <span>Wsparcie aplikacyjne</span>
          </div>
        </section>

        <section id="produkty" className="section">
          <div className="section-heading">
            <div>
              <div className="eyebrow">PRODUCT SYSTEM</div>
              <h2>Kompletny system ruchu liniowego</h2>
            </div>

            <p>
              Rozwiązania THK i Nippon Bearing dla aplikacji wymagających
              precyzji, sztywności i niezawodności.
            </p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.no}>

                <div className="product-photo">
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <div className="product-number">
                  {product.no}
                </div>

                <h3>{product.name}</h3>

                <p>{product.desc}</p>

                <button
                  className="text-button"
                  onClick={openQuote}
                >
                  Zapytaj o ofertę →
                </button>

              </article>
            ))}
          </div>
        </section>

        <section id="rozwiazania" className="dark-section">
          <div className="section-heading light">
            <div>
              <div className="eyebrow">ENGINEERING</div>
              <h2>Rozwiązania dla wymagających aplikacji</h2>
            </div>

            <p>
              Od standardowych prowadnic liniowych po precyzyjne
              systemy pozycjonowania i rozwiązania dla Deep Tech.
            </p>
          </div>

          <div className="solution-grid">

            <div className="solution-card">
              <span>01</span>
              <h3>Precision Motion</h3>
              <p>
                Precyzyjne prowadzenie i pozycjonowanie dla aplikacji
                wymagających wysokiej dokładności.
              </p>
            </div>

            <div className="solution-card">
              <span>02</span>
              <h3>Machine Automation</h3>
              <p>
                Prowadnice, śruby kulowe i komponenty ruchu
                dla maszyn i automatyki.
              </p>
            </div>

            <div className="solution-card">
              <span>03</span>
              <h3>High-Tech Motion</h3>
              <p>
                Rozwiązania dla fotoniki, optyki, semiconductor,
                laboratory i R&D.
              </p>
            </div>

          </div>
        </section>

        <section id="thk" className="omni-section">
          <div className="omni-image">
            <img
              src="/hero.png"
              alt="THK OMNIedge"
            />
          </div>

          <div className="omni-content">
            <div className="eyebrow">THK OMNIedge™</div>

            <h2>
              Predictive Maintenance
              <br />
              dla ruchu liniowego.
            </h2>

            <p>
              Monitorowanie stanu komponentów ruchu liniowego pozwala
              wcześniej wykrywać anomalie i ograniczać ryzyko
              nieplanowanych przestojów.
            </p>

            <button className="primary-button" onClick={openQuote}>
              Zapytaj o ofertę →
            </button>
          </div>
        </section>

        <section id="nb" className="section">
          <div className="section-heading">
            <div>
              <div className="eyebrow">NIPPON BEARING</div>
              <h2>Precision Motion Technology</h2>
            </div>

            <p>
              Stoły precyzyjne, Slide Way, prowadnice wałeczkowo-
              krzyżowe oraz tuleje liniowe NB.
            </p>
          </div>

          <div className="nb-feature">
            <img
              src="/slide-way.jpg"
              alt="Nippon Bearing Slide Way"
            />

            <div>
              <div className="eyebrow">SLIDE WAY</div>
              <h3>Ruch bez kompromisów</h3>
              <p>
                Wysoka dokładność, sztywność i płynność ruchu
                w aplikacjach wymagających precyzyjnego pozycjonowania.
              </p>

              <button className="text-button" onClick={openQuote}>
                Zapytaj o ofertę →
              </button>
            </div>
          </div>
        </section>

        <section id="aplikacje" className="section applications">
          <div className="section-heading">
            <div>
              <div className="eyebrow">APPLICATIONS</div>
              <h2>Branże i zastosowania</h2>
            </div>

            <p>
              Komponenty ruchu liniowego dla przemysłu,
              automatyki i technologii przyszłości.
            </p>
          </div>

          <div className="application-grid">
            {applications.map((application, index) => (
              <div className="application-card" key={application}>
                <span>0{index + 1}</span>
                <strong>{application}</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="kontakt" className="contact-section">
          <div>
            <div className="eyebrow">GRAMO MOTION SYSTEMS</div>

            <h2>
              Masz aplikację?
              <br />
              Porozmawiajmy o rozwiązaniu.
            </h2>

            <p>
              Prześlij model produktu, parametry osi lub opis
              aplikacji. Przygotujemy odpowiednią propozycję.
            </p>
          </div>

          <button className="primary-button" onClick={openQuote}>
            Zapytaj o ofertę →
          </button>
        </section>

      </main>

      <footer className="footer">
        <div>
          <div className="logo">
            GRAMO
            <span>MOTION SYSTEMS</span>
          </div>

          <p>
            THK & Nippon Bearing
            <br />
            Smart Motion • Precision Positioning
          </p>
        </div>

        <div>
          <strong>Kontakt</strong>
          <p>
            ul. Energetyki 11
            <br />
            41-908 Bytom
            <br />
            +48 609 007 076
            <br />
            biuro@gramo.com.pl
          </p>
        </div>
      </footer>

      {quoteOpen && <QuoteModal onClose={closeQuote} />}

    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
