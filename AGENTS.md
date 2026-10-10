# Architecture rules

- Keep directory-specific taxonomy and optional engagement types in the ecosystem configuration, extending the shared taxonomy without changing it, so other pages retain their existing categories.
- Read ecosystem entries from the existing source without copying records or interpreting historical feature flags as current relationships; optional engagement context must be explicitly supplied.
- Use the existing accessible Sheet and Checkbox controls for ecosystem filtering, and a local text fallback for missing logos, to preserve keyboard access without fetching unapproved assets.