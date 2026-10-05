# SmartSpin2k Documentation

SmartSpin2k is a platform designed to enhance indoor cycling experiences by integrating smart sensor data and user-friendly software.  
This repository contains the source files for the documentation site hosted at [docs.smartspin2k.com](https://docs.smartspin2k.com).

## Overview
- Built using [Jekyll](https://jekyllrb.com/) with the *just-the-docs* theme.
- Configured via `_config.yml` for navigation, color scheme, and various plugins such as `jekyll-spaceship`.

## Local Development
1. Install Ruby and Bundler.
2. Run `bundle install`.
3. Use `bundle exec jekyll serve` to preview the documentation locally at `http://localhost:4000`.

### Preview with Docker (no local Ruby)
The `dockerfile` matches CI (Ruby 3.3). From the repo root:

```sh
docker build -t ss2k-docs .
docker run --rm -p 4000:4000 -v "$PWD:/site" -w /site -e BUNDLE_PATH=/site/vendor/bundle ss2k-docs \
  sh -c "bundle install && bundle exec jekyll serve --host 0.0.0.0"
```

On Git Bash for Windows, prefix the `docker run` line with `MSYS_NO_PATHCONV=1` and write the volume as `-v "D:/path/to/SS2K-Documentation:/site"`.

## Getting Started pages
The Getting Started section mirrors the Companion App's Guided Setup: a landing page with four bike cards, then one setup page (`getting-started/setup.md`) that filters itself to the reader's bike. Shared steps live in `_includes/gs/*.md` so they are written once.

How the setup page works (`assets/js/setup-guide.js`):
- **Bike filter.** Wrap bike-specific content in an element with `data-bikes` listing the bikes it applies to: `spin`, `pm`, `peloton`, `bikeplus` (e.g. `<div data-bikes="spin pm" markdown="1">` for blocks, `<span data-bikes="peloton">` for a few words). The picker sets the bike; `?bike=` in the URL preselects it and the last choice is remembered.
- **Parts.** Each `## Part N · Title {#part-N}` heading, plus `## Before you start`, becomes a collapsible card running up to the next H2. Don't put an H2 anywhere else on the page, including inside `_includes/gs/*.md` (use H3), or it will split a Part.
- **Deep links.** Link with `{% link getting-started/setup.md %}#part-N` for generic steps and add `?bike=` when the link is bike-specific. A reader who arrives without a bike sees which Part they were sent to, and picking a bike opens it.
- Without JavaScript every bike's content shows, with inline variants separated by " / ".

Includes:
- `_includes/gs/pair-power-meter.md` emits the Saved Power Meter steps as list items that continue the surrounding list (parameters: `device`, `note`).
- `_includes/youtube.html` embeds a no-cookie YouTube player (parameters: `id`, `title`, `start` in seconds) that `assets/js/video.js` loads only once it is on screen. Use it instead of `![](youtube link)` or a raw iframe: `loading="lazy"` alone still loads videos hidden in other bikes' content.
- `_includes/step.html` renders a numbered step card (parameters: `n`, `title`, `img` under `/images/`, `alt`, `body` in markdown, `photo=true` for photos). Call it at column 0 with a blank line before and after.
- `_includes/shot.html` renders a phone screenshot from `images/app/` at a fixed width; group several inside `<div class="gs-shots">`.
- `images/wizard/` holds the Guided Setup drawings copied from the app. Refresh them with `sh scripts/sync-wizard-images.sh` (set `SS2K_APP_DIR` if the app checkout is not at `/c/git/ss2kconfigapp`).
- `images/app/` holds app screenshots generated headlessly from the app's own widgets. Regenerate them from the app repo with:

```sh
flutter test tool/docs_screenshot_capture_test.dart --dart-define=DOCS_IMAGES_DIR="D:/git/SS2K-Documentation/images/app"
```

Internal links use `{% link path/to/page.md %}` so the build fails on a broken target. Images use `{{ '/images/...' | relative_url }}`, never `../images/`.

## Contributing
- Fork this repository, make changes, and open a pull request.
- Check the [@about.md](./@about.md) file for more details on SmartSpin2k.

## Useful Links
- [SmartSpin2k.com](https://www.smartspin2k.com)
- [GitHub Repo](https://www.github.com/doudar/SmartSpin2k)
- [Facebook Group](https://www.facebook.com/groups/smartspin2k)
