# Front Door Web Co.

A dependency-free responsive website, with an optional Vercel quote endpoint. All prices and examples are explicitly illustrative. No domain ownership has been verified. No remote project was changed or deployed, per your request to use another Vercel account.

## Run locally

Install Node.js 22 or newer, then from this directory:

```sh
npm run dev
```

Open http://127.0.0.1:3000. `npm run check` checks JavaScript syntax. There is no install or build step.

## Deploy to your other Vercel account

1. Sign into the intended account at https://vercel.com and verify the account/team shown in the dashboard.
2. Put this folder into a **new** GitHub repository you control (do not replace another website's repository). Commit all files except any `.env` or `.vercel` files.
3. In Vercel select **Add New → Project**, import that new repository, and name the new project `front-door-web-co`. Check that you are in the intended account/team.
4. Select framework preset **Other**. Leave build and install commands blank; set **Output Directory** to `public`. Keep Root Directory at the repository root, where `api/` and `vercel.json` live.
5. Deploy and review the generated `vercel.app` URL on your phone and desktop. Test the form's save flow before enabling live delivery.

Alternative CLI flow, from this folder on your machine:

```sh
npx vercel login
npx vercel whoami
npx vercel
```

Choose the correct account/team and create a **new** project. Do not link to an unrelated existing project. Use Other, no build command, and output `public`. Review that preview, then `npx vercel --prod` to publish to the new project's production URL.

## Contact details and live form delivery

Edit `CONFIG` at the top of `public/app.js`: set your business’s real `phone` (international format for tel links) and `email`. Null values deliberately display marked placeholders.

The form initially prepares a downloadable text request locally. It does not claim to send or silently upload personal details. The server returns HTTP 503 when delivery is unconfigured.

To enable actual delivery:

1. Configure a trusted HTTPS enquiry webhook that accepts JSON, persists the enquiry or delivers it to your team, and responds with a successful HTTP status **only after accepting it**. Choose a service with spam controls, rate limits, delivery monitoring, and appropriate privacy handling. An arbitrary URL that returns 200 is not proof of email delivery.
2. In Vercel Project Settings → Environment Variables add `LEAD_WEBHOOK_URL`; optionally add secret `LEAD_WEBHOOK_TOKEN`. Keep these server-only. Never put credentials in app.js or commit them. Configure the correct preview and production environments.
3. Update the privacy notice in `public/index.html` with the chosen provider, contact address, and retention period. The existing notice is explicitly a preview notice.
4. Redeploy and verify an actual test enquiry arrives at the intended destination. Check error handling with a temporarily invalid destination. Then set `deliveryEnabled:true` in `public/app.js` and redeploy.

The endpoint validates required fields and consent, uses a honeypot, limits accepted field lengths, times out upstream requests, and displays delivery failures honestly. It has no database, dashboard, CAPTCHA, or application-level rate limiter; apply provider/platform spam controls before public form launch. No marketing list is created.

## Domain & search setup

Only after you confirm you own `frontdoorwebco.com`:

1. Open the **new** project's Settings → Domains. Add `frontdoorwebco.com` and optionally `www.frontdoorwebco.com`.
2. Follow Vercel's exact DNS and ownership verification instructions at your registrar. Do not replace unrelated DNS or mail records. If another project already uses the domain, investigate before moving it.
3. Confirm both domains show valid configuration and HTTPS works. Choose one canonical hostname and redirect the other using the dashboard.
4. Add an absolute canonical link and `og:url` in `public/index.html` for the verified hostname. Set `og:image` to the absolute URL of `/og.png`. Add a sitemap with the verified homepage URL and its reference in robots.txt. No unverified canonical or domain ownership claim is included now.

Edit illustrative prices, package inclusions, and sample layouts in `public/index.html`. Confirm these offers and any applicable tax details before launch. The artwork is original CSS/SVG; no external font, analytics, stock-photo or tracking dependency is loaded.
