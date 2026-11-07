/* ==========================================================================
   Home page (index.html): renders every section from js/data.js
   ========================================================================== */
(function () {
  "use strict";

  const D = window.PORTFOLIO;
  const S = window.Site;
  if (!D || !S) {
    if (S) S.showDataError(document.getElementById("hero-content"));
    return;
  }
  const { esc, icon, tagList, socialLinks, projectUrl, projectCover, externalAttrs } = S;
  const $ = (id) => document.getElementById(id);

  /* ---------- Hero ---------- */
  function codeValue(v) {
    if (Array.isArray(v)) {
      const items = v.map((x) => `<span class="tok-str">"${esc(x)}"</span>`).join('<span class="tok-punc">, </span>');
      return `<span class="tok-punc">[</span>${items}<span class="tok-punc">]</span>`;
    }
    return `<span class="tok-str">"${esc(v)}"</span>`;
  }

  function codeCard(c, extraClass) {
    const lines = c.fields
      .map(([k, v]) => `  <span class="tok-key">${esc(k)}</span><span class="tok-punc">:</span> ${codeValue(v)}<span class="tok-punc">,</span>`)
      .join("\n");
    return `
      <figure class="code-card${extraClass ? " " + extraClass : ""}" aria-hidden="true">
        <div class="code-card-bar"><span class="dot dot-r"></span><span class="dot dot-y"></span><span class="dot dot-g"></span><span class="code-card-file">${esc(c.fileName)}</span></div>
<pre><code><span class="tok-com">${esc(c.comment)}</span>
<span class="tok-kw">const</span> <span class="tok-var">${esc(c.variable)}</span> <span class="tok-punc">= {</span>
${lines}
<span class="tok-punc">};</span></code></pre>
      </figure>`;
  }

  function heroVisual(p) {
    const card = D.codeCard;
    if (!p.photo) return card ? codeCard(card) : "";
    return `
      <div class="portrait-wrap">
        <span class="portrait-backdrop" aria-hidden="true"></span>
        <img class="portrait" src="${esc(p.photo)}" alt="${esc(p.photoAlt || p.name)}" width="800" height="1000" fetchpriority="high">
        ${card ? codeCard(card, "is-floating") : ""}
      </div>`;
  }

  function renderHero() {
    const p = D.profile;
    const status = p.status
      ? `<p class="status-pill"><span class="pulse" aria-hidden="true"></span>${esc(p.status)}</p>`
      : "";
    $("hero-content").innerHTML = `
      <div class="hero-grid">
        <div class="hero-copy">
          ${status}
          <h1 class="hero-title">Hi, I'm <span class="grad-text">${esc(p.name)}</span><span class="accent-dot">.</span></h1>
          <p class="hero-headline">${esc(p.headline)}</p>
          <p class="hero-intro">${esc(p.intro)}</p>
          <div class="hero-ctas">
            <a class="btn btn-primary" href="#projects">See my projects ${icon("arrowRight")}</a>
            ${p.resumePdf ? `<a class="btn btn-ghost" href="${esc(p.resumePdf)}" target="_blank" rel="noopener">${icon("download")} Resume</a>` : ""}
          </div>
          ${socialLinks(p, "social-row")}
        </div>
        <div class="hero-visual">${heroVisual(p)}</div>
      </div>
      ${
        D.stats && D.stats.length
          ? `<ul class="stats">${D.stats
              .map((s) => `<li class="stat reveal"><span class="stat-value">${esc(s.value)}</span><span class="stat-label">${esc(s.label)}</span></li>`)
              .join("")}</ul>`
          : ""
      }`;
  }

  /* ---------- About ---------- */
  function renderAbout() {
    const a = D.about;
    $("about-content").innerHTML = `
      <div class="about-grid">
        <div class="about-copy reveal">${a.paragraphs.map((t) => `<p>${esc(t)}</p>`).join("")}</div>
        <ul class="focus-list">
          ${a.focus
            .map(
              (f) => `
            <li class="focus-card reveal">
              <span class="focus-icon">${icon(f.icon)}</span>
              <div><h3>${esc(f.title)}</h3><p>${esc(f.text)}</p></div>
            </li>`
            )
            .join("")}
        </ul>
      </div>`;
  }

  /* ---------- Experience ---------- */
  function logoBadge(item, extra) {
    const cls = `org-logo${extra ? " " + extra : ""}`;
    // Decorative: the organization's name is always printed right next to it
    if (item.logoImg) {
      const pad = Number.isFinite(item.logoPad) ? ` style="padding:${item.logoPad}px"` : "";
      return `<span class="${cls} has-img"${pad} aria-hidden="true"><img src="${esc(item.logoImg)}" alt="" loading="lazy"></span>`;
    }
    const style = `--logo-bg:${esc(item.logoBg || "var(--primary)")};--logo-fg:${esc(item.logoFg || "#fff")}`;
    return `<span class="${cls}" style="${style}" aria-hidden="true">${esc(item.logo)}</span>`;
  }

  function renderExperience() {
    $("experience-list").innerHTML = D.experience
      .map(
        (org) => `
      <article class="org reveal">
        <header class="org-head">
          ${logoBadge(org)}
          <div>
            <h3 class="org-name">${esc(org.org)}</h3>
            <p class="org-meta">${icon("mapPin")}<span>${esc(org.location)}</span></p>
          </div>
        </header>
        ${org.summary ? `<p class="org-summary">${esc(org.summary)}</p>` : ""}
        <ol class="roles">
          ${org.roles
            .map(
              (r) => `
            <li class="role">
              <div class="role-head">
                <h4 class="role-title">${esc(r.title)}</h4>
                <span class="role-dates">${esc(r.start)} – ${esc(r.end)}</span>
              </div>
              <ul class="bullets">${r.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
              ${tagList(r.tags, "tags tags-neutral")}
            </li>`
            )
            .join("")}
        </ol>
      </article>`
      )
      .join("");
  }

  /* ---------- Projects ---------- */
  function renderProjects() {
    $("projects-grid").innerHTML = D.projects
      .map(
        (p) => `
      <article class="project-card reveal${p.featured ? " is-featured" : ""}">
        ${projectCover(p)}
        <div class="project-body">
          <p class="project-meta">
            ${p.featured ? '<span class="featured-badge">Featured</span>' : ""}
            <span>${esc(p.period)}</span>
            ${p.context ? `<span aria-hidden="true">·</span><span>${esc(p.context)}</span>` : ""}
          </p>
          <h3 class="project-title"><a class="stretched-link" href="${projectUrl(p)}">${esc(p.title)}</a></h3>
          <p class="project-tagline">${esc(p.tagline)}</p>
          ${tagList(p.tags)}
          <span class="project-cta" aria-hidden="true">Read the case study ${icon("arrowRight")}</span>
        </div>
      </article>`
      )
      .join("");
  }

  /* ---------- Skills ---------- */
  function renderSkills() {
    $("skills-grid").innerHTML = D.skills
      .map(
        (g) => `
      <div class="skill-group reveal">
        <h3><span class="swatch" aria-hidden="true"></span>${esc(g.group)}</h3>
        <ul class="chips">${g.items.map((i) => `<li class="chip">${esc(i)}</li>`).join("")}</ul>
      </div>`
      )
      .join("");
  }

  /* ---------- Education ---------- */
  function renderEducation() {
    const e = D.education;
    $("education-card").innerHTML = `
      <article class="edu-card reveal">
        ${logoBadge(e, "edu-logo")}
        <div class="edu-main">
          <div class="edu-head">
            <div>
              <h3 class="edu-school">${esc(e.school)}</h3>
              <p class="edu-degree">${esc(e.degree)}</p>
              ${e.minor ? `<p class="edu-minor">${esc(e.minor)}</p>` : ""}
            </div>
            <ul class="edu-facts">
              <li class="fact">${icon("calendar")}<span>${esc(e.period)}</span></li>
              ${e.gpa ? `<li class="fact fact-gpa">GPA <strong>${esc(e.gpa)}</strong></li>` : ""}
            </ul>
          </div>
          <div class="edu-cols">
            <div>
              <h4 class="mini-label">Relevant coursework</h4>
              <ul class="chips">${e.coursework.map((c) => `<li class="chip">${esc(c)}</li>`).join("")}</ul>
            </div>
            <div>
              <h4 class="mini-label">Honors &amp; roles</h4>
              <ul class="honors">${e.honors.map((h) => `<li>${icon("award")}<span>${esc(h)}</span></li>`).join("")}</ul>
            </div>
          </div>
        </div>
      </article>`;
  }

  /* ---------- Contact ---------- */
  function renderContact() {
    const p = D.profile;
    const c = D.contact || {};
    $("contact-content").innerHTML = `
      <div class="contact-panel reveal">
        <p class="eyebrow eyebrow-light">Contact</p>
        <h2 class="contact-title" id="contact-title">${esc(c.title || "Get in touch")}</h2>
        ${c.blurb ? `<p class="contact-lead">${esc(c.blurb)}</p>` : ""}
        <div class="contact-actions">
          <a class="btn btn-light" href="mailto:${esc(p.email)}">${icon("mail")} ${esc(p.email)}</a>
          <button class="btn btn-outline-light" type="button" data-copy="${esc(p.email)}">${icon("copy")}<span>Copy email</span></button>
          ${p.linkedin ? `<a class="btn btn-outline-light" href="${esc(p.linkedin)}"${externalAttrs(p.linkedin)}>${icon("linkedin")} LinkedIn</a>` : ""}
          ${p.github ? `<a class="btn btn-outline-light" href="${esc(p.github)}"${externalAttrs(p.github)}>${icon("github")} GitHub</a>` : ""}
        </div>
        <p class="sr-only" id="copy-status" aria-live="polite"></p>
      </div>`;
  }

  renderHero();
  renderAbout();
  renderExperience();
  renderProjects();
  renderSkills();
  renderEducation();
  renderContact();
  S.boot(D);
})();
