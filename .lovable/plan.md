# A36 Links Refinement

## Scope
- Replace every A36-owned Discord invite with `https://discord.gg/8rzpt4tCqE`, using the existing shared links configuration as the canonical source where possible.
- Visually change only `/links`; inspect but do not edit the Media Kit page.

## Build
1. Update the shared Discord URL and point the Community page at that shared value without altering its presentation.
2. Rebuild `/links` with the exact requested sections, copy, routes, forms, and non-duplicated destinations.
3. Reuse the exact dark Media Kit wordmark asset at the top and bottom of `/links`.
4. Keep the narrow mobile-first layout, compact cards, 44px targets, visible focus states, and sharp A36 styling.
5. Add fast opening and one-time scroll reveals, stronger card feedback, reduced-motion support, and subtle ambient CSS fields confined to `/links`.

## Validation
- Confirm no old A36 Discord invite remains and third-party Discord links are unchanged.
- Verify `/links` and `/links?utm_source=qr&utm_medium=offline` without runtime errors.
- Test 320, 360, 375, 390, 412, 430, and desktop widths for overflow, tap targets, layout, wordmark rendering, and reduced motion.
- Run TypeScript checks and a production build.
