# Adding new content to the site

This update keeps the site static and GitHub-Pages friendly. You do not need a database or CMS.

## Add Day 66+
1. Put the new image in `assets/days/day-66.webp`.
2. Copy `days/day-65.html` to `days/day-66.html`.
3. Change the title, description, image path, simple example, trade-offs and production checks.
4. Add the day to `content/days.json` so the content source stays complete.
5. Add the card to `days/index.html`.

## Add a production problem
Use an existing page in `problems/` as the model. Keep the human-written order:

**What it looks like → Why it happens → Simple example → What teams get wrong → Production fix → What to monitor → Related lessons → Takeaway**

Also add the entry to `content/problems.json` and the card to `problems/index.html`.

## Add a teaching thread / guide
1. Copy a page in `guides/`.
2. Give it one strong system-level idea, not a generic topic.
3. Link 4–10 relevant days.
4. Link the production problems where the idea shows up.
5. Use one existing day visual as the hero image.
6. Add the guide to `content/guides.json` and `guides/index.html`.

## Writing rule
Write like an engineer explaining an incident to another engineer. Start with the symptom and a concrete example. Use technical terms only after the reader understands the problem.

## Current production-problem coverage
This update expands the field guide from 5 to 15 detailed problems across reliability, security, RAG, integrations, evals and human operations.
