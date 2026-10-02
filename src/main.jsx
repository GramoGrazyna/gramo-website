import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const products = [
  {
    no: "01",
    name: "OMNIedge™",
    brand: "THK",
    desc: "Monitoring predykcyjny prowadnic, śrub kulowych i elementów ruchu.",
    image: "/hero.png",
    className: "omni",
  },
  {
    no: "02",
    name: "Prowadnice liniowe",
    brand: "THK HSR",
    desc: "Precyzyjny ruch liniowy dla maszyn CNC, automatyki i robotyki.",
    image: "https://www.thk.com/eu/assets/images/products/full_ball_hsr.png",
  },
  {
    no: "03",
    name: "Śruby kulowe",
    brand: "THK",
    desc: "Precyzyjne napędy osi dla CNC, automatyki i maszyn specjalnych.",
    image: "https://www.thk.com/in/assets/images/products/ISO_3408_Compliant.png",
  },
  {
    no: "04",
    name: "Stoły precyzyjne",
    brand: "THK VRU / VRT",
    desc: "Kompaktowe pozycjonowanie o wysokiej dokładności i sztywności.",
    image: "https://www.thk.com/eu/assets/images/products/cross_roller_table_vru.png",
  },
  {
    no: "05",
    name: "Slide Way",
    brand: "Nippon Bearing",
    desc: "Prowadnice krzyżowo-wałeczkowe do optyki, pomiarów i precyzyjnej mechaniki.",
    image: "https://www.nipponbearing.com/assets/images/products/slideway/slideway.jpg",
  },
  {
    no: "06",
    name: "Tuleje liniowe",
    brand: "NB Slide Bush",
    desc: "Niskotarciowe prowadzenie na wałku dla automatyki i maszyn przemysłowych.",
    image: "https://www.nipponbearing.com/assets/images/home/products_slidebush.jpg",
  },
];

const applications = [
  ["Automatyka i robotyka", "Osie liniowe, moduły pozycjonowania i układy ruchu."],
  ["Maszyny CNC", "Prowadnice liniowe, śruby kulowe i modernizacja osi."],
  ["Fotonika i optyka", "Mikropozycjonowanie, stoły precyzyjne i Slide Way."],
  ["Medycyna i laboratoria", "Precyzyjne mechanizmy i aparatura badawcza."],
  ["Semiconductor / Cleanroom", "Precyzja, powtarzalność i rozwiązania do wymagających środowisk."],
  ["Urządzenia pomiarowe", "Stabilny ruch, małe tarcie i wysoka dokładność."],
  ["Aerospace", "Precyzyjne mechanizmy i stanowiska testowe."],
  ["R&D / Deep Tech", "Mikrorobotyka, fotonika i nanopozycjonowanie."],
];

function QuoteModal({ onClose }) {
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Zapytanie ofertowe GRAMO – ${data.get("product") || "produkt"}`;
    const body = [
      `Firma: ${data.get("company") || ""}`,
      `Imię i nazwisko: ${data.get("name") || ""}`,
      `E-mail: ${data.get("email") || ""}`,
      `Telefon: ${data.get("phone") || ""}`,
      `Produkt / model: ${data.get("product") || ""}`,
      `Ilość: ${data.get("qty") || ""}`,
      "",
      "Opis zapytania:",
      data.get("message") || "",
    ].join("\n");

    window.location.href =
      `mailto:biuro@gramo.com.pl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <div className="modal-overlay" onMouseDown={onClose}>
      <div className="quote-modal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="eyebrow blue">B2B / ENGINEERING</div>
        <h2>Zapytaj o ofertę</h2>
        <p>Podaj model, ilość lub parametry aplikacji. Możesz również opisać problem albo przesłać rysunek w kolejnym kontakcie.</p>

        {sent ? (
          <div className="success-box">
            <strong>Gotowe.</strong>
            <span>Otworzyliśmy przygotowaną wiadomość e-mail do GRAMO.</span>
            <button className="btn primary" onClick={onClose}>Zamknij</button>
          </div>
        ) : (
          <form onSubmit={submit}>
            <div className="form-grid">
              <input name="company" placeholder="Firma" />
              <input name="name" placeholder="Imię i nazwisko" required />
              <input name="email" type="email" placeholder="E-mail" required />
              <input name="phone" placeholder="Telefon" />
              <input name="product" placeholder="Produkt / model" />
              <input name="qty" placeholder="Ilość" />
            </div>
            <textarea name="message" placeholder="Opis aplikacji / zapytania" rows="5" />
            <button className="btn primary form-submit" type="submit">Przygotuj zapytanie →</button>
          </form>
        )}
      </div>
    </div>
  );
}

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <div className="site">
      <header className="hero" id="top">
        <img className="hero-img" src="/hero.png" alt="" />
        <div className="hero-overlay" />

        <nav className="navbar">
          <div className="nav-inner">
            <a className="logo" href="#top">
              GRAMO
              <small>MOTION FOR A BETTER TOMORROW</small>
            </a>

            <div className="nav-links">
              <a href="#produkty">Produkty</a>
              <a href="#thk">THK</a>
              <a href="#nb">Nippon Bearing</a>
              <a href="#rozwiazania">Rozwiązania</a>
              <a href="#aplikacje">Aplikacje</a>
              <a href="#wsparcie">Wsparcie</a>
              <a href="#kontakt">Kontakt</a>
            </div>

            <button className="btn primary nav-cta" onClick={() => setQuoteOpen(true)}>
              Zapytaj o ofertę →
            </button>
          </div>
        </nav>

        <div className="hero-content container">
          <div className="eyebrow">PRECISION MOTION TECHNOLOGY</div>
          <h1>
            Technologia,<br />
            która napędza <span>przyszłość</span>
          </h1>
          <p>
            THK i Nippon Bearing – precyzyjny ruch dla nowoczesnych maszyn,
            automatyki i aplikacji high-tech.
          </p>

          <button className="btn primary hero-cta" onClick={() => setQuoteOpen(true)}>
            Zapytaj o ofertę →
          </button>

          <div className="brand-lockup">
            <strong>THK</strong>
            <i />
            <strong>NB</strong>
          </div>
        </div>

        <div className="hero-badge">
          <b>OMNIedge™</b>
          <span>MONITORING PREDYKCYJNY</span>
          <div className="wave">∿∿∿∿∿∿</div>
          <small>VIBRATION <em>OK</em></small>
          <small>TEMPERATURE <em>OK</em></small>
          <small>LUBRICATION <em>OK</em></small>
          <small>LOAD <em>OK</em></small>
          <small>STATUS <em>ONLINE</em></small>
        </div>
      </header>

      <section className="value-strip">
        <div className="container value-grid">
          <div><b>◎</b><span><strong>Wysoka</strong> dokładność</span></div>
          <div><b>◇</b><span><strong>Niezawodność</strong> i długa żywotność</span></div>
          <div><b>↕</b><span><strong>Wsparcie</strong> inżynierskie</span></div>
          <div><b>⌘</b><span><strong>Rozwiązania</strong> dla Industry 4.0</span></div>
          <div><b>◌</b><span><strong>Aplikacje</strong> high-tech</span></div>
        </div>
      </section>

      <section className="section products-section" id="produkty">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow blue">NASZE PRODUKTY</div>
              <h2>Kompletny system ruchu liniowego</h2>
            </div>
            <p>Precyzja w każdym detalu.</p>
          </div>

          <div className="product-grid">
            {products.map((p) => (
              <article className="product-card" key={p.no}>
                <div className={`product-image ${p.className || ""}`}>
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="product-body">
                  <span className="product-no">{p.no}</span>
                  <h3>{p.name}</h3>
                  <b>{p.brand}</b>
                  <p>{p.desc}</p>
                  <button onClick={() => setQuoteOpen(true)}>Zapytaj o ofertę →</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section brand-section" id="rozwiazania">
        <div className="container brand-grid">
          <article className="brand-panel thk-panel" id="thk">
            <div className="eyebrow">THK</div>
            <h2>Linear Motion<br />for a Smarter World</h2>
            <p>Prowadnice, śruby kulowe, stoły, elementy ruchu liniowego oraz OMNIedge™ – od komponentu do danych.</p>
            <button onClick={() => setQuoteOpen(true)}>Zapytaj o rozwiązanie →</button>
          </article>

          <article className="brand-panel nb-panel" id="nb">
            <div className="eyebrow">NIPPON BEARING (NB)</div>
            <h2>Precision Motion<br />for High-Tech</h2>
            <p>Slide Way, stoły precyzyjne, prowadnice krzyżowo-wałeczkowe i tuleje liniowe dla wymagających aplikacji.</p>
            <button onClick={() => setQuoteOpen(true)}>Zapytaj o rozwiązanie →</button>
          </article>
        </div>
      </section>

      <section className="section omni-section" id="wsparcie">
        <div className="container omni-grid">
          <div>
            <div className="eyebrow blue">THK OMNIedge™</div>
            <h2>Przejdź od utrzymania reaktywnego do predykcyjnego.</h2>
            <p>
              OMNIedge pozwala monitorować stan elementów ruchu liniowego,
              wizualizować dane i wykrywać oznaki problemów przed awarią.
            </p>
            <ul>
              <li>Monitoring prowadnic liniowych i śrub kulowych</li>
              <li>Ocena stanu smarowania i uszkodzeń</li>
              <li>Predykcyjne utrzymanie ruchu</li>
              <li>Możliwość retrofit na istniejących maszynach</li>
            </ul>
            <button className="btn primary" onClick={() => setQuoteOpen(true)}>Zapytaj o OMNIedge →</button>
          </div>

          <div className="omni-card">
            <img src="/hero.png" alt="THK OMNIedge" />
            <div className="omni-screen">
              <b>OMNIedge™</b>
              <span>CONDITION MONITORING</span>
              <div className="mini-wave">╱╲╱╲╱╲╱╲</div>
              <strong>ONLINE</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section applications-section" id="aplikacje">
        <div className="container">
          <div className="eyebrow blue">APLIKACJE</div>
          <div className="section-heading compact">
            <h2>Technologie dla wymagających branż</h2>
            <span>Wiele zastosowań →</span>
          </div>

          <div className="application-grid">
            {applications.map(([title, text], index) => {
  const images = [
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1517976547714-720226b864c1?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=900&q=80"
  ];

  return (
    <article className="application-card" key={title}>
      <div
        className="application-photo"
        style={{ backgroundImage: `url(${images[index]})` }}
      />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
})}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="kontakt">
        <div className="container contact-box">
          <div>
            <div className="eyebrow">B2B / ENGINEERING</div>
            <h2>Projektujesz maszynę?</h2>
            <p>Wyślij symbol, parametry, rysunek lub opis aplikacji. Przygotujemy odpowiedź techniczno-handlową.</p>
          </div>
          <button className="btn primary" onClick={() => setQuoteOpen(true)}>Zapytaj o ofertę →</button>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="logo">GRAMO<small>MOTION FOR A BETTER TOMORROW</small></div>
            <p>Precision Motion Technology<br />THK × Nippon Bearing</p>
          </div>
          <div>
            <h4>Produkty</h4>
            <a href="#produkty">Prowadnice liniowe</a>
            <a href="#produkty">Śruby kulowe</a>
            <a href="#produkty">Stoły precyzyjne</a>
            <a href="#produkty">Slide Way</a>
            <a href="#produkty">Tuleje liniowe</a>
          </div>
          <div>
            <h4>Rozwiązania</h4>
            <a href="#thk">THK</a>
            <a href="#nb">Nippon Bearing</a>
            <a href="#wsparcie">OMNIedge™</a>
            <a href="#aplikacje">Aplikacje</a>
          </div>
          <div>
            <h4>Kontakt</h4>
            <a href="mailto:biuro@gramo.com.pl">biuro@gramo.com.pl</a>
            <a href="tel:+48609007076">+48 609 007 076</a>
            <span>ul. Energetyki 11<br />41-908 Bytom</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© GRAMO Motion Systems</span>
          <button onClick={() => setQuoteOpen(true)}>Zapytaj o ofertę →</button>
        </div>
      </footer>

      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
