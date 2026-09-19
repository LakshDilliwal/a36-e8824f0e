export const A36_LINKS = {
  site: {
    home: "/",
    community: "/community",
    newsletter: "/newsletter",
    podcast: "/podcast",
    mediaKit: "/media-kit",
    earn: "/earn",
    residency: "/residency",
    cohort: "/cohort",
    careers: "/careers",
  },
  community: {
    whatsapp: "https://chat.whatsapp.com/CdyFYIzDSMj17jWfGJGtkw",
    telegram: "https://t.me/+sqfR_6vZCdZhY2Fl",
    discord: "https://discord.gg/Ha5yvx3R",
  },
  social: {
    x: "https://x.com/A36Labs",
    linkedin: "https://linkedin.com/company/a36labs",
    instagram: "https://www.instagram.com/a36labs",
    youtube: "https://www.youtube.com/@a36labs",
  },
  content: {
    substack: "https://a36signal.substack.com/",
  },
  events: {
    calendar: "https://luma.com/a36",
  },
  applications: {
    partner: "https://forms.gle/ww6WThmuo5vLupQ96",
    operator: "https://forms.gle/72NttXRmytK4uH1z7",
  },
} as const;

export const FOOTER_SOCIAL_LINKS = [
  { id: "x", label: "X", href: A36_LINKS.social.x },
  { id: "linkedin", label: "LinkedIn", href: A36_LINKS.social.linkedin },
  { id: "instagram", label: "Instagram", href: A36_LINKS.social.instagram },
  { id: "youtube", label: "YouTube", href: A36_LINKS.social.youtube },
  { id: "telegram", label: "Telegram", href: A36_LINKS.community.telegram },
  { id: "luma", label: "Luma", href: A36_LINKS.events.calendar },
] as const;