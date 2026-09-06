## Suman Singh — Reliable AI Systems site (V2 starter)

This static GitHub Pages package contains a full 65-day visual field guide, five production-problem articles, and a starter Guides/Threads section. No build step is required — drop the files into the root of a `username.github.io` repository and GitHub Pages will serve them.

## Quick publish (GitHub Pages)
1. Upload `index.html`, `styles.css`, `script.js`, and `.nojekyll` to the root of `sumansinghs71/sumansinghs71.github.io`.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Branch: `main`, folder: `/ (root)`.
5. Save and wait for GitHub Pages to publish. The site will appear at `https://sumansinghs71.github.io/`.

## Folders
- `index.html` — homepage
- `days/` — index + 65 individual lesson pages
- `problems/` — problem hub + five detailed production articles
- `guides/` — cross-topic teaching threads
- `assets/days/` — optimized WebP versions of D1–D65
- `content/days.json` — editable structured data for all 65 lessons
- `content/problems.json` — editable structured data for production problems

## Every day page includes
1. Original visual
2. Easy-English explanation
3. Simple example
4. Trade-offs
5. Production-readiness checks

## Add Day 66+
1. Add the image as `assets/days/day-66.webp`.
2. Add the title/content to `content/days.json`.
3. Copy the closest `days/day-65.html` page and update the content.

This package intentionally stays build-free so it can be uploaded directly to GitHub Pages; future iterations may automate page generation.

## Add a production problem
Follow the existing problem pages as a template:
- What it looks like
- Why this happens
- A simple real-world example
- What teams usually get wrong
- What I would put in production
- What I would monitor
- Related lessons
- One-sentence takeaway

Tone: practical and human — start from the incident, not from a definition.

