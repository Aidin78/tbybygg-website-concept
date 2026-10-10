# Täby Bygg & Montage

Website for Täby Bygg & Montage AB – a Stockholm construction company (renovation, bathrooms, kitchens, roofing, decks and carpentry). Built with Next.js 16 (App Router, Cache Components), React 19 and Tailwind CSS 4.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script          | Purpose                    |
| --------------- | -------------------------- |
| `npm run dev`   | Development server         |
| `npm run build` | Production build           |
| `npm run start` | Serve the production build |
| `npm run lint`  | ESLint                     |

## Environment variables

See [.env.example](.env.example).

| Variable               | Required | Description                                                                 |
| ---------------------- | -------- | --------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | No       | Canonical URL. Defaults to `https://www.tbybygg.se`.                        |
| `RESEND_API_KEY`       | Yes\*    | [Resend](https://resend.com) API key for the quote form.                    |
| `QUOTE_FROM_EMAIL`     | Yes\*    | Sender address on a domain verified in Resend.                              |
| `QUOTE_TO_EMAIL`       | No       | Where quote requests are delivered. Defaults to `site.email`.               |

\* Without these the quote form stays visible but tells visitors to call or email instead.

## Project structure

```
src/
  app/          Routes: /, /tjanster, /tjanster/[slug], /projekt, /om-oss, /kontakt, /integritetspolicy
  components/   UI, grouped by page area (home, services, projects, contact, layout, sections, ui)
  content/      All site copy and images – edit here, not in components
  lib/          Metadata, structured data (JSON-LD), quote form schema, helpers
  proxy.ts      Returns a real 404 for unknown /tjanster/<slug> paths
```

## Editing content

- **Company details** (phone, email, org.nr, social links): `src/content/site.ts`
- **Services**: `src/content/services.ts` – each entry gets a page at `/tjanster/<slug>` and appears in the sitemap and quote form automatically.
- **Projects**: `src/content/projects.ts`
- **ROT deduction**: `src/content/rot.ts`
- **Images**: add the file to `src/content/images/` and export it from `src/content/images/index.ts`.

### Before launch: replace example photos

Most project photos are illustrative stock images marked `verified: false` and labelled as examples on the site. Replace them with the company's own photos and set `verified: true`.

## Legacy URLs

Old URLs from the previous site redirect permanently (308) to their new paths – see `redirects()` in `next.config.ts`.
