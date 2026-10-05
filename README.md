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
The Getting Started section mirrors the Companion App's Guided Setup: one landing page with a bike picker, then one linear page per bike. Shared steps live in `_includes/gs/*.md` so they are written once.

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
