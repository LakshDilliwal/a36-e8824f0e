import { Helmet } from "react-helmet-async";

export type SeoProps = {
  title: string;
  description: string;
  path: string; // e.g. "/events"
  image?: string; // absolute URL
  type?: "website" | "article";
  breadcrumbs?: { name: string; path: string }[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const SITE = "https://www.a36labs.com";
const DEFAULT_IMAGE = `${SITE}/og-image.jpg`;

const Seo = ({ title, description, path, image, type = "website", breadcrumbs, jsonLd }: SeoProps) => {
  const url = `${SITE}${path === "/" ? "" : path}`;
  const ogImage = image || DEFAULT_IMAGE;

  const ldList: Record<string, unknown>[] = [];
  if (breadcrumbs && breadcrumbs.length) {
    ldList.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: `${SITE}${b.path === "/" ? "" : b.path}`,
      })),
    });
  }
  ldList.push({
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: "A36 Labs", url: SITE },
  });
  if (jsonLd) {
    if (Array.isArray(jsonLd)) ldList.push(...jsonLd);
    else ldList.push(jsonLd);
  }

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="A36 Labs" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@a36labs" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {ldList.map((obj, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(obj)}</script>
      ))}
    </Helmet>
  );
};

export default Seo;
