# A36 Links Hub

## Scope
- Add a permanent public `/links` route without changing the main navigation or any existing page.
- Add one `Links` item to the existing footer.
- Reuse only destinations already verified in the current project.

## Build
1. Create a small shared links configuration for verified community, social, event, newsletter, and application destinations.
2. Update the existing footer to consume its social destinations from that configuration and add `/links` to the Content column.
3. Build a lightweight, mobile-first links page using the existing A36 logo, colors, typography, sharp corners, and icons.
4. Include compact identity, primary community action, Community, Social, Content, Work With A36, event calendar, and utility footer sections.
5. Use semantic internal/external links, focus states, 44px+ targets, safe-area spacing, fast entrance/reveal motion, touch feedback, and reduced-motion behavior.
6. Register `/links` with the existing SEO system and exact canonical path.

## Verified destinations to reuse
- Community: WhatsApp, Telegram, Discord, `/community`, and A36 Luma calendar.
- Social: X, LinkedIn, Instagram, YouTube, Telegram, and Luma from the footer/community page.
- Content: `/newsletter`, existing A36 Signal Substack, `/podcast`, `/media-kit`.
- Work: `/earn`, `/residency`, `/cohort`, `/careers`, plus the existing partnership and operator Google Forms.

## Validation
- Check TypeScript/build output and runtime console.
- Verify `/links` and `/links?utm_source=qr&utm_medium=offline`.
- Test 320, 360, 375, 390, 430, and desktop widths for overflow, tap targets, logo rendering, link behavior, focus order, and absence of embeds.
- Confirm existing pages remain untouched except the requested footer item and shared social configuration.
