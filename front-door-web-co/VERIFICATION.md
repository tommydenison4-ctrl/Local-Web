# Verification

Checked in installed Chrome on October 14, 2026 against the local HTTP server.

- Responsive layouts at 375, 390, 768, and 1440 pixels: no horizontal overflow.
- Mobile menu opens, follows section links, and closes.
- Pricing CTA selects the matching quote package.
- Valid enquiry in preview mode clearly says it has not been sent.
- Download produces front-door-quote-request.txt.
- Unconfigured server endpoint returns HTTP 503, with no false delivery success.
- Invalid server request returns HTTP 400.
- No browser JavaScript errors during these flows.
- Both JavaScript files pass syntax checks.
- Desktop and mobile full-page screenshots reviewed visually.

Accessibility provisions: semantic landmarks, labeled controls, native validation, native FAQ disclosure, visible keyboard focus, skip link, menu expanded state, live form status, reduced-motion preference, no external fonts or trackers. A comprehensive assistive-technology audit has not been performed.

Not verified: live webhook delivery, production hosting, domain ownership/DNS, real contact details, account deployment. These require the intended account and service configuration.
