'use client';

import { useEffect } from 'react';

const SCHEDULE: Record<number, { open: number; close: number; str: string }> = {
  0: { open: 13,   close: 21,   str: "21:00" },
  1: { open: 11,   close: 21.5, str: "21:30" },
  2: { open: 11,   close: 21.5, str: "21:30" },
  3: { open: 11,   close: 21.5, str: "21:30" },
  4: { open: 11,   close: 21.5, str: "21:30" },
  5: { open: 11,   close: 23,   str: "23:00" },
  6: { open: 12,   close: 23,   str: "23:00" },
};

const MARQUEE_TEXT = "THE BEST SMASHBURGER IN ZÜRICH";
const MARQUEE_SEP  = "NEW LOCATION COMING SOON";

export default function MenaceClient() {
  useEffect(() => {
    // ── PRELOADER ──────────────────────────────
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader?.classList.add('hide');
        document.body.classList.remove('no-scroll');
      }, 1500);
    });
    // Fallback
    setTimeout(() => {
      preloader?.classList.add('hide');
      document.body.classList.remove('no-scroll');
    }, 2500);

    // ── MARQUEE ────────────────────────────────
    const track = document.getElementById('marquee-track');
    if (track) {
      let html = '';
      for (let i = 0; i < 10; i++) {
        html += `<span>${MARQUEE_TEXT}</span><span class="sep"> +++ </span><span>${MARQUEE_SEP}</span><span class="sep"> +++ </span>`;
      }
      track.innerHTML = html + html;
    }

    // ── SCROLL PROGRESS ────────────────────────
    const scrollEl = document.getElementById('burger-scroll');
    const fillEl   = document.getElementById('scroll-fill');
    if (scrollEl && fillEl) {
      scrollEl.addEventListener('scroll', () => {
        const pct = scrollEl.scrollLeft / (scrollEl.scrollWidth - scrollEl.clientWidth);
        fillEl.style.width = (10 + pct * 90) + '%';
      });
      // Drag scroll
      let down = false, startX = 0, startLeft = 0;
      scrollEl.addEventListener('mousedown', (e) => { down = true; startX = e.pageX - scrollEl.offsetLeft; startLeft = scrollEl.scrollLeft; });
      scrollEl.addEventListener('mouseleave', () => { down = false; });
      scrollEl.addEventListener('mouseup', () => { down = false; });
      scrollEl.addEventListener('mousemove', (e) => {
        if (!down) return;
        e.preventDefault();
        scrollEl.scrollLeft = startLeft - (e.pageX - scrollEl.offsetLeft - startX);
      });
    }

    // ── NAV ────────────────────────────────────
    const menuBtn = document.getElementById('menu-btn');
    const navOv   = document.getElementById('nav-overlay');

    const openNav = () => {
      menuBtn?.classList.add('open');
      navOv?.classList.add('open');
      navOv?.setAttribute('aria-hidden', 'false');
      document.body.classList.add('no-scroll');
    };
    const closeMenu = () => {
      menuBtn?.classList.remove('open');
      navOv?.classList.remove('open');
      navOv?.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
    };

    menuBtn?.addEventListener('click', () => {
      navOv?.classList.contains('open') ? closeMenu() : openNav();
    });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

    // Nav links close menu
    navOv?.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeMenu);
    });

    // ── MENU MODAL ─────────────────────────────
    const modal      = document.getElementById('menu-modal');
    const openBtn    = document.getElementById('open-menu-modal');
    const closeBtn   = document.getElementById('menu-modal-close');

    openBtn?.addEventListener('click', () => { modal?.classList.add('open'); document.body.classList.add('no-scroll'); });
    closeBtn?.addEventListener('click', () => { modal?.classList.remove('open'); document.body.classList.remove('no-scroll'); });
    modal?.addEventListener('click', (e) => { if (e.target === modal) { modal.classList.remove('open'); document.body.classList.remove('no-scroll'); } });

    // ── HUD CLOCK & OPEN STATUS ────────────────
    const updateHUD = () => {
      const now  = new Date();
      const day  = now.getDay();
      const dec  = now.getHours() + now.getMinutes() / 60;
      const s    = SCHEDULE[day];
      const open = s && dec >= s.open && dec < s.close;

      const timeEl = document.getElementById('hud-time');
      const dateEl = document.getElementById('hud-date');
      const hudO   = document.getElementById('hud-open');
      const badge  = document.getElementById('open-badge');

      if (timeEl) timeEl.textContent = now.toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      if (dateEl) dateEl.textContent = now.toLocaleDateString('de-CH', { day: '2-digit', month: '2-digit', year: 'numeric' });
      if (hudO) { hudO.textContent = open ? `OPEN UNTIL ${s.str}` : 'CLOSED'; hudO.style.color = open ? 'var(--red)' : 'rgba(227,26,30,0.38)'; }
      if (badge) { badge.textContent = open ? `● JETZT GEÖFFNET – BIS ${s.str}` : '● AKTUELL GESCHLOSSEN'; badge.className = open ? 'open-badge' : 'open-badge closed'; }

      document.querySelectorAll<HTMLTableRowElement>('#hours-body tr').forEach(row => {
        const days = (row.dataset.days || '').split(',').map(Number);
        row.classList.toggle('today', days.includes(day));
      });
    };
    updateHUD();
    const clockInterval = setInterval(updateHUD, 1000);

    // ── PARALLAX ───────────────────────────────
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      requestAnimationFrame(() => {
        const y      = window.scrollY;
        const burger = document.getElementById('hero-burger');
        const bg     = document.getElementById('hero-bg');
        const title  = document.getElementById('hero-title');
        // On desktop: burger scrolls up faster than text → flies over section below
        const isMobile = window.innerWidth < 768;
        if (burger) burger.style.transform = `translateY(${-y * (isMobile ? 0.1 : 0.35)}px)`;
        if (bg)     bg.style.transform     = `translate(-50%, calc(-50% + ${y * 0.05}px))`;
        if (title)  title.style.transform  = `translate(-50%, calc(-50% + ${y * 0.12}px))`;
        ticking = false;
      });
      ticking = true;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // ── SCROLL REVEAL ──────────────────────────
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

    const observe = () => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el));
    };
    observe();
    setTimeout(observe, 500);

    // ── CLEANUP ────────────────────────────────
    return () => {
      clearInterval(clockInterval);
      window.removeEventListener('scroll', onScroll);
      obs.disconnect();
    };
  }, []);

  return null;
}
