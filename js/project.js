/* ==========================================================================
   Project detail page (project.html?id=<project-id>)
   ========================================================================== */
(function () {
  "use strict";

  const D = window.PORTFOLIO;
  const S = window.Site;
  const root = document.getElementById("case");
  if (!D || !S) {
    if (S) S.showDataError(root);
    return;
  }
  const { esc, icon, tagList, projectUrl, projectCover, externalAttrs } = S;

  const id = new URLSearchParams(window.location.search).get("id");
  const index = D.projects.findIndex((p) => p.id === id);

  if (index === -1) {
    document.title = `Project not found · ${D.profile.name}`;
    root.innerHTML = `
      <div class="container case not-found">
        <p class="eyebrow">404</p>
        <h1 class="case-title">That project doesn't exist (yet).</h1>
        <p class="case-tagline">It may have been renamed or moved.</p>
        <p><a class="btn btn-primary" href="index.html#projects">${icon("arrowLeft")} Back to all projects</a></p>
      </div>`;
    S.boot(D);
    return;
  }

  const p = D.projects[index];
  const prev = D.projects[index - 1];
  const next = D.projects[index + 1];

  document.title = `${p.title} · ${D.profile.name}`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", p.tagline);

  function bulletItem(b) {
    if (typeof b === "string") return `<li>${esc(b)}</li>`;
    return `<li><strong>${esc(b.title)}</strong> ${esc(b.text)}</li>`;
  }

  function section(s) {
    const paragraphs = (s.paragraphs || []).map((t) => `<p>${esc(t)}</p>`).join("");
    const pipeline = s.pipeline
      ? `<ol class="pipeline">${s.pipeline
          .map(
            (step, i) => `
          <li>
            <span class="step-num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
            <div><h3>${esc(step.title)}</h3><p>${esc(step.text)}</p></div>
          </li>`
          )
          .join("")}</ol>`
      : "";
    const bullets = s.bullets ? `<ul class="bullets bullets-lg">${s.bullets.map(bulletItem).join("")}</ul>` : "";
    return `<section class="case-section reveal"><h2>${esc(s.heading)}</h2>${paragraphs}${pipeline}${bullets}</section>`;
  }

  function linkButtons() {
    const l = p.links || {};
    const out = [];
    if (l.demo) out.push(`<a class="btn btn-primary" href="${esc(l.demo)}"${externalAttrs(l.demo)}>${icon("external")} Live demo</a>`);
    if (l.github) out.push(`<a class="btn btn-ghost" href="${esc(l.github)}"${externalAttrs(l.github)}>${icon("github")} View code</a>`);
    return out.length ? `<div class="case-links">${out.join("")}</div>` : "";
  }

  function pagerLink(proj, dir) {
    if (!proj) return "";
    const isNext = dir === "next";
    return `
      <a class="pager-link ${isNext ? "is-next" : "is-prev"}" href="${projectUrl(proj)}">
        <span class="pager-dir">${isNext ? `Next project ${icon("arrowRight")}` : `${icon("arrowLeft")} Previous project`}</span>
        <span class="pager-title">${esc(proj.title)}</span>
      </a>`;
  }

  const facts = [
    p.role && ["Role", p.role],
    p.period && ["Timeline", p.period],
    p.context && ["Context", p.context],
  ].filter(Boolean);

  const highlights =
    p.highlights && p.highlights.length
      ? `<div class="aside-card">
          <h2 class="mini-label">By the numbers</h2>
          <ul class="highlights">${p.highlights
            .map((h) => `<li><span class="highlight-value">${esc(h.value)}</span><span class="highlight-label">${esc(h.label)}</span></li>`)
            .join("")}</ul>
        </div>`
      : "";

  root.innerHTML = `
    <div class="container case">
      <a class="back-link" href="index.html#projects">${icon("arrowLeft")} All projects</a>

      <header class="case-header reveal">
        <p class="eyebrow">Case study</p>
        <h1 class="case-title">${esc(p.title)}</h1>
        <p class="case-tagline">${esc(p.tagline)}</p>
        <dl class="case-facts">
          ${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}
        </dl>
        ${linkButtons()}
      </header>

      ${projectCover(p, "cover-lg reveal")}

      <div class="case-body">
        <div class="case-content">${(p.sections || []).map(section).join("")}</div>
        <aside class="case-aside" aria-label="Project summary">
          ${highlights}
          <div class="aside-card">
            <h2 class="mini-label">Tech stack</h2>
            ${tagList(p.tags)}
          </div>
        </aside>
      </div>

      <nav class="case-pager" aria-label="More projects">
        ${pagerLink(prev, "prev")}
        ${pagerLink(next, "next")}
      </nav>
    </div>`;

  S.boot(D);
})();
