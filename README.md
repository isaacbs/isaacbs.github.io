# isaacblainesauer.com

Personal site of Isaac Blaine-Sauer, hosted on GitHub Pages and built with Jekyll
(GitHub builds it automatically on every push; there is no build step to run).

## Layout

```
_config.yml           Site settings and plugins
_data/navigation.yml  Top-nav links
_includes/nav.html    Shared navbar
_layouts/default.html Shared page shell (head, background, nav, scripts)
assets/               CSS, JS, and images for the main site
index.html            Home
portfolio.html        Projects
resume.html           Resume
contact.html          Contact / about
photos.html           Photo carousel (unlisted)
italy/                "An Italian Excursion" photo blog (standalone pages)
games/                Snake games (standalone pages)
sports/               Sports Calendar Builder (standalone app)
```

To add a page to the main site, create an `.html` or `.md` file with front matter
(`layout: default` and a `title`) and, if it belongs in the nav, add it to
`_data/navigation.yml`.

## Sports Calendar Builder

`sports/index.html` is a self-contained page served at `/sports/`. It calls ESPN's public
API directly from the browser. `sports/worker.js` is an optional Cloudflare Worker proxy
(not published to the site) for use if ESPN ever stops allowing cross-origin requests.

## Local preview

```sh
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

All rights reserved. Isaac Blaine-Sauer, 2022
