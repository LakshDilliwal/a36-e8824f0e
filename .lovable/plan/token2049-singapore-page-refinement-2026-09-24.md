# TOKEN2049 Singapore Page Refinement

## Scope
- Update only `/token2049sg` and add local asset pointers for the two supplied images.
- Preserve the existing hero, event details, GIF, Luma links, partnership copy, navigation, footer, and all other pages.

## Implementation
1. Upload the previous-week collage and past-attendees graphic through the project asset system, then render them as responsive, uncropped, lazy-loaded images.
2. Widen the page’s responsive content system for large displays while keeping readable text measures and balanced spacing.
3. Refine hero typography, buttons, event cards, audience cards, partnership layout, partner types, and final contact actions so content wraps naturally without clipping or overlap.
4. Add the two proof sections in the requested order, including the exact supplied headings, copy, and attendee disclaimer.
5. Add the sponsorship deck as a secondary partnership action and a tertiary final-contact link.
6. Preserve existing motion while adding restrained proof-image depth/parallax that disables on touch and reduced-motion devices.

## Validation
- Test 2560×1440, 1920×1080, 1536×864, 1440×900, 1366×768, 1280×800, 1024, 768, 430, 390, 375, 360, and 320 widths.
- Confirm no horizontal overflow, clipping, overlap, or cropped proof graphics.
- Confirm all three Luma URLs, the unchanged Run the Bay GIF, placeholder readiness, and sponsorship deck destination.
- Run TypeScript checks and the production build.
