# NineAPI Blog

Source for **https://blog.nineapi.com**, an Astro static site styled with the nineapi.com tokens.

## Write a post

1. Start a draft in `src/content/drafts/`, e.g. `my-post.md`. This folder is git-ignored, so drafts never reach the public repo. The file name becomes the URL: `/posts/my-post/`.
2. Start it with front matter:

   ```yaml
   ---
   title: "Post title"
   description: "One sentence shown in the list, RSS and link previews."
   date: 2026-11-19
   tags: [evals]
   draft: true
   ---
   ```

3. Preview with `npm run dev` (drafts show with a "draft" badge, locally only).
4. To publish: move the file to `src/content/posts/`, set `draft: false`, commit and push to `main`. GitHub Actions builds and deploys.

Drafts (anything in `drafts/` or with `draft: true`) are never built into the published site.

## Commands

```bash
npm install      # once
npm run dev      # http://localhost:4321, includes drafts
npm run build    # production build into dist/, drafts excluded
npm run preview  # serve dist/
```

## Hosting

- GitHub Pages, deployed by `.github/workflows/deploy.yml` on every push to `main`.
- `public/CNAME` sets the custom domain `blog.nineapi.com`.
- DNS: a `CNAME` record `blog.nineapi.com → <github-user>.github.io` in the nineapi.com Route 53 hosted zone.
