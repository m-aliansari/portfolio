import { SEO_CONFIG } from "./seo";

export const META_PROPERTIES = [
    { name: "description", content: SEO_CONFIG.description },
    { name: "keywords", content: SEO_CONFIG.keywords },
    { name: "author", content: SEO_CONFIG.additional.author },
    { name: "robots", content: SEO_CONFIG.additional.robots },
    { property: "og:title", content: SEO_CONFIG.og.title },
    { property: "og:description", content: SEO_CONFIG.og.description },
    { property: "og:type", content: SEO_CONFIG.og.type },
    { property: "og:url", content: SEO_CONFIG.og.url },
    { property: "og:image", content: SEO_CONFIG.og.image.path },
    {
        property: "og:image:secure_url",
        content: SEO_CONFIG.og.image.secure_url,
    },
    { property: "og:image:alt", content: SEO_CONFIG.og.image.alt },
    { property: "og:image:type", content: SEO_CONFIG.og.image.type },
    { property: "og:image:width", content: SEO_CONFIG.og.image.width },
    { property: "og:image:height", content: SEO_CONFIG.og.image.height },
    { property: "og:site_name", content: SEO_CONFIG.og.siteName },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: SEO_CONFIG.twitter.card },
    { name: "twitter:title", content: SEO_CONFIG.twitter.title },
    { name: "twitter:description", content: SEO_CONFIG.twitter.description },
    { name: "twitter:image", content: SEO_CONFIG.twitter.image },
    { name: "twitter:image:alt", content: SEO_CONFIG.og.image.alt },
]