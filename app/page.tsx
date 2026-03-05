import Image from "next/image";
import MenaceClient from "@/components/MenaceClient";

const BURGERS = [
  { name: "MENACE CHEESE",     single: "14.00", menu: "19.90", img: "/images/burger-menace-cheese.jpg" },
  { name: "MENACE CHEESE TS",  single: "15.00", menu: "20.90", img: "/images/burger-menace-cheese-ts.jpg" },
  { name: "MENACE CHEESE HOT", single: "15.00", menu: "20.90", img: "/images/burger-menace-cheese-hot.jpg" },
  { name: "LITTLE CHEESE",     single: "10.00", menu: "15.90", img: "/images/burger-little-cheese.jpg" },
  { name: "CLASSIC CHICKEN",   single: "13.00", menu: "18.90", img: "/images/burger-classic-chicken.jpg" },
  { name: "BUFFALO CHICKEN",   single: "14.00", menu: "19.90", img: "/images/burger-buffalo-chicken.jpg" },
  { name: "NASHVILLE CHICKEN", single: "15.00", menu: "20.90", img: "/images/burger-nashville-chicken.jpg" },
];

const IG_IMAGES = [
  { src: "/images/hero-burger.png",             alt: "Menace Signature Burger" },
  { src: "/images/burger-menace-cheese.jpg",    alt: "Menace Cheese" },
  { src: "/images/burger-buffalo-chicken.jpg",  alt: "Buffalo Chicken" },
  { src: "/images/burger-classic-chicken.jpg",  alt: "Classic Chicken" },
  { src: "/images/burger-nashville-chicken.jpg",alt: "Nashville Chicken" },
  { src: "/images/location-1.jpg",              alt: "Menace Location Dietikon" },
];

export default function Home() {
  return (
    <>
      <div id="grain" />

      {/* PRELOADER */}
      <div id="preloader">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.png" alt="Menace Burger" id="preloader-logo" width={200} height={200} />
        <div id="preloader-text">LOADING THE EXPERIENCE</div>
      </div>

      {/* HUD */}
      <div id="hud">
        <div className="corner tl" /><div className="corner tr" />
        <div className="corner bl" /><div className="corner br" />
        <div className="hud-label hud-tl"><a href="#menu">BURGERS</a></div>
        <div className="hud-label hud-tr">
          <button id="menu-btn" aria-label="Navigation öffnen">
            <span /><span /><span />
          </button>
        </div>
        <div className="hud-label hud-bl">
          <span id="hud-date" />&nbsp;<span id="hud-time" />
        </div>
        <div className="hud-label hud-br" id="hud-open" />
      </div>

      {/* NAV OVERLAY */}
      <nav id="nav-overlay" aria-hidden="true">
        <a href="#menu">MENU</a>
        <a href="#about">ÜBER UNS</a>
        <a href="#instagram">INSTAGRAM</a>
        <a href="#location">LOCATION</a>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-cross" />
        <div className="hero-bg-text" id="hero-bg">MENACE</div>
        <div className="hero-title" id="hero-title">MENACE</div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-burger"
          id="hero-burger"
          src="/images/hero-burger.png"
          alt="Menace Smashburger"
        />
        <div className="hero-sub">[ SCROLL DOWN ↓ ]</div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track" id="marquee-track" />
      </div>

      {/* MENU SECTION */}
      <section id="menu">
        <div className="section-label reveal">OUR LINEUP</div>
        <div className="section-title reveal">THE<br />GOODS.</div>
        <div className="menu-scroll-wrap">
          <div className="menu-scroll" id="burger-scroll">
            {BURGERS.map((b) => (
              <div key={b.name} className="burger-card reveal">
                <div className="burger-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={b.img} alt={b.name} loading="lazy" />
                </div>
                <div className="card-body">
                  <div className="card-name">{b.name}</div>
                  <div className="card-prices">
                    <span className="price-tag">CHF {b.single}</span>
                    <span className="price-tag menu-p">MENÜ {b.menu}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="scroll-bar"><div className="scroll-fill" id="scroll-fill" /></div>
          <div className="scroll-hint">DRAG TO EXPLORE →</div>
        </div>
        <div className="menu-cta reveal">
          <button className="btn-primary" id="open-menu-modal">VIEW FULL MENU</button>
        </div>
      </section>

      {/* MENU MODAL */}
      <div id="menu-modal">
        <button id="menu-modal-close">✕</button>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/menu-full.jpg" alt="Menace Burger Full Menu" loading="lazy" />
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="about-text reveal-left">
          <div className="section-label">WER WIR SIND</div>
          <div className="about-title">THE<br />CREW.</div>
          <p className="about-body">
            Dennis und Fabian – zwei Typen aus Dietikon, eine Mission:
            Den besten Smashburger der Schweiz bauen. Kein Bullshit, kein Kompromiss.
            Frisches Fleisch, täglich geliefert. Perfekt gesmasht auf 250°C heissem Stahl.
            Menace Burger ist keine Kette – es ist eine Ansage. Wir sind hier. Und wir bleiben.
          </p>
        </div>
        <div className="about-img-wrap reveal-right">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/crew.jpg" alt="Dennis und Fabian – Gründer Menace Burger" loading="lazy" />
        </div>
      </section>

      {/* INSTAGRAM CCTV */}
      <section id="instagram">
        <div className="section-label reveal">HIGHLIGHTS</div>
        <div className="section-title reveal">ON THE<br />GRAM.</div>
        <div className="cctv-grid">
          {IG_IMAGES.map((item, i) => (
            <div key={i} className="cctv-cell reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="cctv-ov">
                <div className="rec-dot">REC</div>
                <div className="cam-id">CAM-0{i + 1} // MENACE</div>
              </div>
            </div>
          ))}
        </div>
        <div className="ig-link-wrap reveal">
          <a href="https://www.instagram.com/menaceburger/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            @MENACEBURGER ↗
          </a>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location">
        <div className="location-info">
          <div className="section-label reveal">FIND US</div>
          <div className="section-title reveal">THE BASE.</div>
          <div className="open-badge" id="open-badge">–</div>
          <div className="address reveal">
            Menace Burger<br />Schulgutstrasse 4<br />8953 Dietikon
          </div>
          <table className="hours-table reveal">
            <tbody id="hours-body">
              <tr data-days="1,2,3,4"><td>Montag – Donnerstag</td><td>11:00 – 21:30</td></tr>
              <tr data-days="5"><td>Freitag</td><td>11:00 – 23:00</td></tr>
              <tr data-days="6"><td>Samstag</td><td>12:00 – 23:00</td></tr>
              <tr data-days="0"><td>Sonntag</td><td>13:00 – 21:00</td></tr>
            </tbody>
          </table>
        </div>
        <div className="location-visual">
          <div className="location-imgs reveal-right">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/location-1.jpg" alt="Menace Burger Aussen" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/location-2.jpg" alt="Menace Burger Innen" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/location-3.jpg" alt="Menace Burger Neon" loading="lazy" />
          </div>
          <div className="map-wrap">
            <div className="map-label">[ GPS: 47.4082° N, 8.4031° E ]</div>
            <iframe
              title="Menace Burger Standort Dietikon"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.387!2d8.400714!3d47.408424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b3fdb3c1a65%3A0x5f2b2b2b2b2b2b2b!2sSchulgutstrasse%204%2C%208953%20Dietikon%2C%20Schweiz!5e0!3m2!1sde!2sch!4v1718000000000!5m2!1sde!2sch"
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="footer-logo" src="/images/logo.png" alt="Menace Burger Logo" />
        <div className="social-icons">
          <a href="https://www.instagram.com/menaceburger/" target="_blank" rel="noopener noreferrer" title="Instagram">IG</a>
          <a href="https://www.tiktok.com/@menaceburger"    target="_blank" rel="noopener noreferrer" title="TikTok">TK</a>
        </div>
        <div className="footer-links">
          <a href="#menu">Menu</a>
          <a href="#about">Über uns</a>
          <a href="#location">Location</a>
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
        </div>
        <div className="footer-copy">© 2025 MENACE BURGER – DIETIKON, ZÜRICH</div>
      </footer>

      <MenaceClient />
    </>
  );
}
