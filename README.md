# Portfolio Site

Personal portfolio built with [Astro](https://astro.build) and hosted on GitHub Pages.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
```

## Add a project

1. Create `src/content/projects/my-project.md` (copy an existing one as a template).
2. Put images in `src/assets/projects/` and reference them with a relative path, e.g. `cover: ../../assets/projects/my-photo.jpg`.
3. Set `featured: 1`, `2`, or `3` to show it on the home page in that position.
4. Set `tags` to one or more of `mechatronics`, `design and manufacturing`, `medical device development`. These are the filters on the projects page.
5. Commit and push to `main`. The site redeploys automatically.

Front-matter fields: `title`, `summary`, `date`, `end` (optional end month), `context` (course or organization), `tags`, `cover`, `coverAlt`, `role`, `stack`, `featured`, `links.site`, `links.report`, `links.code`, `links.video`, `links.cad`.

PDFs and videos go in `public/files/my-project/` and are linked as `/files/my-project/report.pdf`.

## Customize

- Name, tagline, and links: `src/site.config.ts`
- Bio, research, publications, experience, and skills: `src/pages/about.astro`
- Colors and fonts: `src/styles/global.css`
- Resume: add `public/resume.pdf`, then set `resume: '/resume.pdf'` in `src/site.config.ts`

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
One-time setup: in the repo, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
