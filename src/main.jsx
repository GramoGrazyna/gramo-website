import './styles.css';
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const products = [
  ['01','OMNIedge™','Monitoring predykcyjny dla prowadnic THK i inteligentnej diagnostyki maszyn.'],
  ['02','Prowadnice liniowe','THK / NB — rozwiązania od automatyki po aplikacje o wysokiej precyzji.'],
  ['03','Śruby kulowe','Precyzyjny ruch osi dla CNC, automatyki, robotyki i maszyn specjalnych.'],
  ['04','Stoły precyzyjne','THK / NB — VRU, SVT i rozwiązania do pozycjonowania.'],
  ['05','Slide Way – prowadnice wałeczkowo-krzyżowe','Nippon Bearing — precyzyjne prowadzenie wałeczkowo-krzyżowe dla wymagających mechanizmów.'],
  ['06','Tuleje liniowe','NB — kompaktowe rozwiązania prowadzenia dla wielu aplikacji przemysłowych.']
];

const emptyForm = { company:'', name:'', email:'', phone:'', product:'', quantity:'', message:'' };

function QuoteModal({ onClose }) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const mailtoFallback = () => {
    const body = [
      `Firma: ${form.company}`,
      `Osoba: ${form.name}`,
      `E-mail: ${form.email}`,
      `Telefon: ${form.phone}`,
      `Produkt / model: ${form.product}`,
      `Ilość: ${form.quantity}`,
      '',
      'Wiadomość:',
      form.message
    ].join('\n');
    window.location.href = `mailto:biuro@gramo.com.pl?subject=${encodeURIComponent('Zapytanie ofertowe – GRAMO')}&body=${encodeURIComponent(body)}`;
    setStatus('Otwieramy wiadomość e-mail z przygotowanym zapytaniem.');
  };

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');
    try {
      const response = await fetch('/api/rfq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!response.ok) throw new Error('API unavailable');
      setStatus('Zapytanie zostało wysłane. Skontaktujemy się z Tobą.');
      setForm(emptyForm);
    } catch {
      mailtoFallback();
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="quote-modal" role="dialog" aria-modal="true" aria-labelledby="quote-title">
        <button className="modal-close" onClick={onClose} aria-label="Zamknij">×</button>
        <div className="kicker">B2B / ENGINEERING</div>
        <h2 id="quote-title">Zapytanie ofertowe</h2>
        <p className="modal-intro">Wyślij symbol produktu, parametry lub opis aplikacji. Przygotujemy dobór i ofertę THK / NB.</p>
        <form onSubmit={submit}>
          <div className="quote-grid">
            <label>Firma*<input required name="company" value={form.company} onChange={update} placeholder="Nazwa firmy" /></label>
            <label>Imię i nazwisko*<input required name="name" value={form.name} onChange={update} placeholder="Imię i nazwisko" /></label>
            <label>E-mail*<input required type="email" name="email" value={form.email} onChange={update} placeholder="email@firma.pl" /></label>
            <label>Telefon<input name="phone" value={form.phone} onChange={update} placeholder="+48 ..." /></label>
            <label>Produkt / model<input name="product" value={form.product} onChange={update} placeholder="np. THK HSR20" /></label>
            <label>Ilość<input name="quantity" value={form.quantity} onChange={update} placeholder="np. 4 wózki + 2 szyny" /></label>
          </div>
          <label>Opis aplikacji / parametry<textarea name="message" value={form.message} onChange={update} rows="5" placeholder="Obciążenie, długość osi, prędkość, przyspieszenie, środowisko pracy, termin..." /></label>
          <div className="quote-actions">
            <button className="btn primary" type="submit" disabled={sending}>{sending ? 'Wysyłanie…' : 'Wyślij zapytanie →'}</button>
            <button className="btn modal-secondary" type="button" onClick={mailtoFallback}>Otwórz e-mail</button>
          </div>
          {status && <div className="form-status">{status}</div>}
          <div className="privacy-note">Dane wykorzystamy wyłącznie do obsługi zapytania ofertowego.</div>
        </form>
      </div>
    </div>
  );
}

function App(){
  const [quoteOpen, setQuoteOpen] = useState(false);
  const openQuote = (e) => { e?.preventDefault(); setQuoteOpen(true); };

  return <>
    <header className="hero">
      <img className="hero-img" src="/hero.png" alt="GRAMO Precision Motion Technology"/>
      <nav className="nav container">
        <div className="brand">GRAMO<small>MOTION FOR A BETTER TOMORROW</small></div>
        <div className="links"><a href="#produkty">Produkty</a><a href="#thk">THK</a><a href="#nb">Nippon Bearing</a><a href="#rozwiazania">Rozwiązania</a><a href="#aplikacje">Aplikacje</a><a href="#kontakt">Kontakt</a></div>
        <a className="btn primary" href="#kontakt" onClick={openQuote}>Zapytaj o ofertę →</a>
      </nav>
      <div className="container hero-content">
        <div className="eyebrow">Precision Motion Technology</div>
        <h1>Technologia,<br/>która napędza <span>przyszłość</span></h1>
        <p>THK i Nippon Bearing — precyzyjny ruch dla nowoczesnych maszyn, automatyki i aplikacji high-tech.</p>
        <div className="actions">
          <a className="btn primary" href="#dobor">Dobierz produkt →</a>
          <a className="btn" href="#kontakt" onClick={openQuote}>Znajdź zamiennik</a>
          <a className="btn" href="#kontakt" onClick={openQuote}>Zapytaj o ofertę</a>
        </div>
        <div className="brands"><span>THK</span><span>NB</span></div>
      </div>
    </header>

    <div className="strip"><div className="container">{[['±','Wysoka','dokładność'],['◇','Niezawodność','i długa żywotność'],['↕','Wsparcie','inżynierskie'],['⌘','Industry 4.0','i monitoring'],['◎','Aplikacje','high-tech']].map(x=><div className="metric" key={x[1]}><strong>{x[0]} &nbsp; {x[1]}</strong><span>{x[2]}</span></div>)}</div></div>

    <section className="section" id="produkty"><div className="container"><div className="section-head"><div><div className="kicker">Nasze produkty</div><h2>Kompletny system ruchu liniowego</h2></div><div className="muted">Od standardowych prowadnic po precyzyjne stoły i monitoring predykcyjny.</div></div><div className="products">{products.map(p=><article className="card" key={p[1]}><div className="num">{p[0]}</div>{p[0]==='05'&&<img className="product-photo" src="/slide-way.jpg" alt="NB Slide Way – prowadnice wałeczkowo-krzyżowe"/>}<h3>{p[1]}</h3><p>{p[2]}</p><a href="#kontakt" onClick={openQuote}>Więcej →</a></article>)}</div></div></section>

    <section className="section" id="dobor"><div className="container"><div className="finder"><div className="kicker">Dobierz rozwiązanie</div><h2>Podaj parametry.<br/>My dobierzemy produkt.</h2><p className="muted">Podaj podstawowe parametry, a następnie wyślij zapytanie do naszego zespołu inżynierskiego.</p><div className="finder-grid">{['Obciążenie (kg)','Długość osi (mm)','Prędkość (m/s)','Przyspieszenie (m/s²)','Dokładność','Środowisko pracy'].map((l,i)=><div className="field" key={l}><label>{l}</label>{i>3?<select><option>{i===4?'Standardowa':'Standard'}</option><option>Wysoka</option><option>Cleanroom / vacuum</option></select>:<input placeholder={i===0?'40':i===1?'1200':'np. 1.0'}/>}</div>)}</div><a className="btn primary" href="#kontakt" onClick={openQuote}>Rozpocznij dobór →</a></div></div></section>

    <section className="section dark" id="thk"><div className="container"><div className="techgrid"><article className="tech"><div className="kicker">THK</div><h3>Linear Motion<br/>for a Smarter World</h3><p>Prowadnice, śruby kulowe, stoły, elementy ruchu liniowego oraz OMNIedge™ — od komponentu do danych.</p><div className="orb"/></article><article className="tech" id="nb"><div className="kicker">Nippon Bearing</div><h3>Precision Motion<br/>for High-Tech</h3><p>Slide Way, stoły precyzyjne, prowadnice krzyżowo-wałeczkowe i tuleje liniowe dla wymagających aplikacji.</p><div className="orb"/></article></div></div></section>

    <section className="section" id="aplikacje"><div className="container"><div className="kicker">Aplikacje</div><h2>Technologie dla wymagających branż</h2><div className="appgrid">{[['Automatyka','Robotyka, osie liniowe i systemy pozycjonowania.'],['Maszyny CNC','Prowadzenie osi i śruby kulowe.'],['Fotonika i optyka','Precyzyjne pozycjonowanie elementów optycznych.'],['Medical & Laboratory','Mechanizmy precyzyjne i aparatura.'],['Semiconductor','Cleanroom i wysoka powtarzalność.'],['Urządzenia pomiarowe','Ruch o wysokiej dokładności.'],['Aerospace','Precyzyjne mechanizmy i testy.'],['R&D / Deep Tech','Mikrorobotyka, fotonika, nanopozycjonowanie.']].map(a=><div className="app" key={a[0]}><b>{a[0]}</b><p>{a[1]}</p></div>)}</div></div></section>

    <section className="section" id="kontakt"><div className="container"><div className="cta"><div><div className="kicker">B2B / Engineering</div><h2>Projektujesz maszynę?</h2><p className="muted">Wyślij symbol, parametry lub rysunek. Przygotujemy dobór i ofertę.</p></div><button className="btn primary" onClick={openQuote}>Wyślij zapytanie →</button></div></div></section>

    <footer className="footer"><div className="container footer-grid"><div><div className="brand">GRAMO<small>MOTION FOR A BETTER TOMORROW</small></div><p>Precision Motion Technology<br/>THK × Nippon Bearing</p></div><div><h4>Produkty</h4><a href="#produkty">OMNIedge™</a><a href="#produkty">Prowadnice</a><a href="#produkty">Śruby kulowe</a><a href="#produkty">Stoły precyzyjne</a></div><div><h4>Rozwiązania</h4><a href="#aplikacje">Automatyka</a><a href="#aplikacje">Fotonika</a><a href="#aplikacje">Medical</a><a href="#aplikacje">Deep Tech</a></div><div><h4>Kontakt</h4><a href="#kontakt" onClick={openQuote}>Zapytanie ofertowe</a><a href="#dobor">Dobór produktu</a><a href="#kontakt" onClick={openQuote}>Zamiennik</a></div></div></footer>

    {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
