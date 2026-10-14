# Neutralize Upcoming Residency Details

## Scope
- Update only the existing `/residency` page and its route metadata.
- Preserve the current layout, sections, interactions, forms, links, typography, motion, colors, and responsive behavior.

## Changes
1. Replace every visible residency date and date range with `DATES COMING SOON`.
2. Replace every visible location label with `LOCATION COMING SOON` and remove Mumbai/India wording from hero copy, labels, FAQ answers, alt text, iframe title, and the mobile action bar.
3. Keep the 16-day program model unchanged: 15 build days followed by Day 16 Demo Day.
4. Rewrite only location-dependent travel guidance to say guidance will follow after the location announcement.
5. Neutralize city-specific decorative labels and artwork treatments using the page’s existing A36 styles; retain all non-city-specific visuals and motion.
6. Update the `/residency` title and description to neutral upcoming-residency wording, without changing metadata for other routes.

## Validation
- Confirm `/residency` contains no `Mumbai`, `India`, old October/November date range, or numeric date stamp.
- Confirm the required coming-soon date and location labels render in the page.
- Verify the existing Luma form, calls to action, sections, animation behavior, and responsive layout remain intact.
- Run TypeScript validation, production build, and a browser check of the page with no runtime errors.