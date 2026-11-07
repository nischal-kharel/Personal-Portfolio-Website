/* ==========================================================================
   Shared helpers used by both index.html and project.html
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Icons (inline SVG, inherit currentColor) ---------- */
  const STROKE = {
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    arrowRight: '<path d="M5 12h14M13 5l7 7-7 7"/>',
    arrowLeft: '<path d="M19 12H5M11 19l-7-7 7-7"/>',
    external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/>',
    server: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  };
  const FILL = {
    github:
      '<path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3"/>',
    linkedin:
      '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/>',
  };

  function icon(name, cls) {
    const c = cls ? ` class="${cls}"` : "";
    if (FILL[name]) {
      return `<svg${c} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">${FILL[name]}</svg>`;
    }
    return `<svg${c} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${STROKE[name] || ""}</svg>`;
  }

  /* ---------- Small utilities ---------- */
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function tagList(items, cls) {
    if (!items || !items.length) return "";
    return `<ul class="${cls || "tags"}">${items.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>`;
  }

  function externalAttrs(href) {
    return /^https?:/i.test(href) ? ' target="_blank" rel="noopener noreferrer"' : "";
  }

  function socialLinks(p, cls) {
    const items = [];
    if (p.github) items.push({ href: p.github, label: "GitHub", icon: "github" });
    if (p.linkedin) items.push({ href: p.linkedin, label: "LinkedIn", icon: "linkedin" });
    if (p.email) items.push({ href: "mailto:" + p.email, label: "Email", icon: "mail" });
    return `<ul class="${cls}">${items
      .map(
        (i) =>
          `<li><a class="icon-btn" href="${esc(i.href)}" aria-label="${i.label}" title="${i.label}"${externalAttrs(i.href)}>${icon(i.icon)}</a></li>`
      )
      .join("")}</ul>`;
  }

  function projectUrl(p) {
    return `project.html?id=${encodeURIComponent(p.id)}`;
  }

  /* ---------- Project cover illustrations (decorative SVG) ---------- */
  const W = "rgba(255,255,255,";

  function starPoints(cx, cy, outer, inner) {
    const pts = [];
    for (let i = 0; i < 10; i++) {
      const r = i % 2 ? inner : outer;
      const a = (Math.PI / 5) * i - Math.PI / 2;
      pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
    }
    return pts.join(" ");
  }

  const ART = {
    // Knowledge graph with a highlighted "cited" path
    graph() {
      const n = [[62, 72], [150, 40], [238, 92], [338, 52], [424, 108], [112, 160], [206, 196], [304, 164], [392, 222], [44, 226], [250, 252]];
      const e = [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [1, 5], [5, 6], [2, 6], [6, 7], [7, 4], [7, 8], [5, 9], [6, 10], [10, 8], [3, 7]];
      const hot = [2, 7];
      const lines = e
        .map(([a, b]) => `<line x1="${n[a][0]}" y1="${n[a][1]}" x2="${n[b][0]}" y2="${n[b][1]}"/>`)
        .join("");
      const nodes = n
        .map(([x, y], i) =>
          hot.includes(i)
            ? `<circle cx="${x}" cy="${y}" r="20" fill="rgba(252,211,77,.28)"/><circle cx="${x}" cy="${y}" r="11" fill="#FCD34D" stroke="#fff" stroke-width="3"/>`
            : `<circle cx="${x}" cy="${y}" r="${i % 3 === 0 ? 9 : 7}" fill="${W}.92)" stroke="${W}.28)" stroke-width="7" paint-order="stroke"/>`
        )
        .join("");
      return `<svg viewBox="0 0 480 270" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g stroke="${W}.42)" stroke-width="2">${lines}</g>
        <line x1="${n[2][0]}" y1="${n[2][1]}" x2="${n[7][0]}" y2="${n[7][1]}" stroke="#FCD34D" stroke-width="4" stroke-linecap="round"/>
        ${nodes}
      </svg>`;
    },

    // Stylized Pittsburgh map: three rivers, street grid, and pins
    map() {
      const pin = (x, y, s, fill, dot) =>
        `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="2" rx="9" ry="3" fill="rgba(0,0,0,.18)"/><path d="M0 0C-4-8-14-16-14-26a14 14 0 1 1 28 0C14-16 4-8 0 0Z" fill="${fill}"/><circle cx="0" cy="-26" r="5.5" fill="${dot}"/></g>`;
      return `<svg viewBox="0 0 480 270" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g stroke="${W}.22)" stroke-width="2" fill="none">
          <path d="M0 40 480 20M0 112 480 92M0 196 480 176M0 250 480 236"/>
          <path d="M70 0 100 270M168 0 186 270M286 0 300 270M392 0 404 270"/>
        </g>
        <g fill="${W}.13)"><rect x="104" y="26" width="58" height="62" rx="6"/><rect x="312" y="186" width="70" height="44" rx="6"/><rect x="22" y="128" width="40" height="56" rx="6"/></g>
        <g stroke="${W}.38)" stroke-width="16" fill="none" stroke-linecap="round">
          <path d="M210 150C160 126 92 120-20 72"/>
          <path d="M210 150C284 120 364 100 500 96"/>
          <path d="M210 150C282 190 384 230 500 248"/>
        </g>
        ${pin(132, 112, 1, "#13234A", "#FCD34D")}
        ${pin(372, 82, 0.9, "#13234A", "#fff")}
        ${pin(276, 182, 1.25, "#fff", "#EF6C4D")}
      </svg>`;
    },

    // Bar chart with the "winning" neighborhood highlighted
    bars() {
      const heights = [70, 112, 86, 152, 58, 126, 96, 44];
      const base = 228;
      const best = heights.indexOf(Math.max(...heights));
      const r = 6;
      const w = 30;
      const bars = heights
        .map((h, i) => {
          const x = 66 + i * 48;
          const top = base - h;
          const fill = i === best ? "#FCD34D" : `${W}.82)`;
          // Rounded top corners, square bottom sitting on the baseline
          return `<path d="M${x} ${base}V${top + r}Q${x} ${top} ${x + r} ${top}H${x + w - r}Q${x + w} ${top} ${x + w} ${top + r}V${base}Z" fill="${fill}"/>`;
        })
        .join("");
      const bx = 66 + best * 48 + 15;
      return `<svg viewBox="0 0 480 270" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <g stroke="${W}.22)" stroke-width="2" stroke-dasharray="4 8"><path d="M40 78H440M40 128H440M40 178H440"/></g>
        <path d="M74 186 122 146 170 168 218 108 266 200 314 132 362 160 410 204" fill="none" stroke="${W}.45)" stroke-width="2.5" stroke-linejoin="round"/>
        ${bars}
        <line x1="40" y1="${base}" x2="440" y2="${base}" stroke="${W}.7)" stroke-width="2.5" stroke-linecap="round"/>
        <polygon points="${starPoints(bx, base - heights[best] - 26, 12, 5)}" fill="#FCD34D" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>
      </svg>`;
    },
  };

  function projectCover(p, extraClass) {
    const c = p.cover || {};
    const art = ART[c.art] ? ART[c.art]() : "";
    const img = c.image ? `<img class="cover-img" src="${esc(c.image)}" alt="" loading="lazy">` : "";
    const style = `--from:${esc(c.from || "#2459E0")};--to:${esc(c.to || "#0E9F8E")}`;
    return `<div class="cover${extraClass ? " " + extraClass : ""}" style="${style}" aria-hidden="true">${art}${img}</div>`;
  }

  /* ---------- Theme (light / dark) ---------- */
  function currentTheme() {
    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0A1120" : "#F7F9FC");
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
      btn.setAttribute("aria-label", label);
      btn.setAttribute("title", label);
    });
  }

  function initTheme() {
    applyTheme(currentTheme());
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      btn.innerHTML = icon("sun", "icon-sun") + icon("moon", "icon-moon");
      btn.addEventListener("click", () => {
        const next = currentTheme() === "dark" ? "light" : "dark";
        applyTheme(next);
        try {
          localStorage.setItem("theme", next);
        } catch (_) {
          /* storage unavailable: theme still applies for this visit */
        }
      });
    });
    // Follow the OS setting unless the visitor picked a theme themselves
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (ev) => {
      let stored = null;
      try {
        stored = localStorage.getItem("theme");
      } catch (_) {}
      if (!stored) applyTheme(ev.matches ? "dark" : "light");
    };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
  }

  /* ---------- Header: scroll state + mobile menu ---------- */
  function initNav() {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.getElementById("nav-menu");

    if (header) {
      const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    if (toggle && menu) {
      const setOpen = (open) => {
        menu.classList.toggle("is-open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      };
      toggle.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));
      menu.addEventListener("click", (ev) => {
        if (ev.target.closest("a")) setOpen(false);
      });
      document.addEventListener("keydown", (ev) => {
        if (ev.key === "Escape" && menu.classList.contains("is-open")) {
          setOpen(false);
          toggle.focus();
        }
      });
    }
  }

  /* ---------- Highlight the nav link for the section in view ---------- */
  function initActiveNav() {
    const links = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
    if (!links.length || !("IntersectionObserver" in window)) return;
    const byId = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
    const sections = Array.from(byId.keys())
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((a) => a.classList.remove("is-active"));
          const link = byId.get(entry.target.id);
          if (link) link.classList.add("is-active");
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => io.observe(s));
  }

  /* ---------- Fade-in on scroll ---------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---------- Copy-to-clipboard buttons ---------- */
  function initCopyButtons() {
    const status = document.getElementById("copy-status");
    document.querySelectorAll("[data-copy]").forEach((btn) => {
      const label = btn.querySelector("span");
      const original = label ? label.textContent : "";
      btn.addEventListener("click", async () => {
        const text = btn.getAttribute("data-copy");
        let ok = false;
        try {
          await navigator.clipboard.writeText(text);
          ok = true;
        } catch (_) {
          ok = false;
        }
        if (label) label.textContent = ok ? "Copied!" : "Press Ctrl+C";
        if (status) status.textContent = ok ? `${text} copied to clipboard` : "";
        setTimeout(() => {
          if (label) label.textContent = original;
        }, 2000);
      });
    });
  }

  /* ---------- Resume links + footer ---------- */
  function setResumeLinks(profile) {
    document.querySelectorAll("[data-resume-link]").forEach((a) => {
      if (profile.resumePdf) a.setAttribute("href", profile.resumePdf);
      else a.hidden = true;
    });
  }

  function renderFooter(profile) {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    footer.innerHTML = `
      <div class="container footer-inner">
        <p>© ${new Date().getFullYear()} ${esc(profile.name)} · Built with HTML, CSS &amp; vanilla JavaScript</p>
        ${socialLinks(profile, "social-row")}
      </div>`;
  }

  /* ---------- Shown if data.js fails to load (e.g. a typo while editing) ---------- */
  function showDataError(target) {
    document.documentElement.classList.remove("js");
    if (target) {
      target.innerHTML =
        '<div class="data-error"><strong>Content failed to load.</strong> There is probably a syntax error in <code>js/data.js</code>. Open the browser console (F12) to see the line number.</div>';
    }
  }

  /* ---------- Boot everything that's shared ---------- */
  function boot(data) {
    initTheme();
    initNav();
    if (data) {
      setResumeLinks(data.profile);
      renderFooter(data.profile);
    }
    initCopyButtons();
    initActiveNav();
    initReveal();
  }

  window.Site = { icon, esc, tagList, socialLinks, projectUrl, projectCover, externalAttrs, boot, showDataError };
})();
