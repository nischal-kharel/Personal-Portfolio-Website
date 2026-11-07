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

## Deploy to GitHub Pages (free)

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, pick `main` and `/ (root)`, then click **Save**.
4. The site will be live at `https://<your-username>.github.io/Personal-Portfolio-Website/` within a minute or two.

To get the shorter `https://<your-username>.github.io` URL, rename the repo to `<your-username>.github.io`.
You can also add a custom domain (e.g. `nischalkharel.dev`) in the same Pages settings.

## File structure

```
index.html          Home page
project.html        Project case-study template
css/styles.css      All styles (color system at the top)
js/data.js          ← all site content
js/common.js        Shared helpers: icons, theme, nav, cover art
js/main.js          Renders the home page
js/project.js       Renders a project page
assets/             Favicon, resume PDF, project images
```
