# Nischal Kharel · Personal Portfolio

A fast, dependency-free portfolio site built with plain HTML, CSS, and JavaScript.

- **Home page** (`index.html`): hero, about, experience timeline, projects, skills, education, contact
- **Project pages** (`project.html?id=...`): a case-study page for each project
- **Light & dark mode**, responsive layout, keyboard and screen-reader friendly

## Editing content

All text lives in **[`js/data.js`](js/data.js)**. Edit that one file and both pages update.

| To do this | Edit this in `js/data.js` |
| --- | --- |
| Change headline, bio, links, status badge | `profile`, `about` |
| Add or edit a job | `experience` |
| Change a company or school logo | Put the image in `assets/logos/`, then set `logoImg` (and optionally `logoPad`) |
| Add a project | Copy an object in `projects` and give it a unique `id` |
| Add a project screenshot | Put the image in `assets/projects/` and set `cover.image` |
| Link a repo or live demo | `links.github` / `links.demo` on the project |

## Resume PDF & headshot

- **Resume:** `assets/Nischal_Kharel_Resume.pdf`. To update it, overwrite that file with your new export, keeping the same name.
- **Headshot:** `assets/nischal-headshot.jpg` (800×1000, 4:5). To swap it, replace the file or change `profile.photo`.

## Preview locally

Run the included preview server, then open http://127.0.0.1:8000:

```bash
python serve.py
```

It turns off browser caching, so a normal refresh always shows your latest edits.
With `python -m http.server` or by double-clicking `index.html`, the browser may cache old JS and CSS. Press **Ctrl + Shift + R** to force a reload.

## Hosting (GitHub Pages)

The site is live at **https://nischal-kharel.github.io/** and is served for free by GitHub Pages from the `main` branch of the
`nischal-kharel/nischal-kharel.github.io` repo.

**To update the live site,** commit and push to `main`. GitHub redeploys in about a minute.
Check progress under the repo's **Actions** tab, then hard-refresh with **Ctrl + Shift + R**.

One-time setup (already done):

1. Rename the repo to `nischal-kharel.github.io` under **Settings → General**. That repo name is what gives the short URL.
2. Make the repo public under **Settings → General → Danger Zone**. Free Pages requires a public repo.
3. Under **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then click **Save**.

Notes:

- `.nojekyll` tells Pages to serve the files as they are, skipping its Jekyll build step.
- **Link previews:** `index.html` and `project.html` point at `assets/og-image.jpg` with absolute URLs.
  - If the site URL changes, update `og:url`, `og:image`, and `canonical` in both files.
  - If you change the photo or headline, regenerate the image.
  - To re-scrape a preview after changes, use [LinkedIn's Post Inspector](https://www.linkedin.com/post-inspector/).
- **Custom domain (optional):** buy one (e.g. `nischalkharel.dev`), then add it under **Settings → Pages → Custom domain** and follow GitHub's DNS instructions.

## File structure

```
index.html          Home page
project.html        Project case-study template
css/styles.css      All styles (color system at the top)
js/data.js          ← all site content
js/common.js        Shared helpers: icons, theme, nav, cover art
js/main.js          Renders the home page
js/project.js       Renders a project page
assets/             Favicon, resume PDF, headshot, logos, link-preview image
.nojekyll           Tells GitHub Pages to serve files as-is
serve.py            Local no-cache preview server
```
