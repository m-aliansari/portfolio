<template>
  <div class="portfolio-page">
    <Hero />
    <LazyReviews hydrate-on-idle />
    <LazyHighlights hydrate-on-idle />
    <LazyAbout hydrate-on-idle />
    <LazySkills hydrate-on-idle />
    <LazyExperience hydrate-on-idle />
    <LazyContact hydrate-on-idle />
  </div>
</template>

<script setup>
import { SEO_CONFIG } from "~/constants/seo";

// SEO meta tags
useHead({
  title: SEO_CONFIG.title,
  meta: [
    { name: "description", content: SEO_CONFIG.description },
    { name: "keywords", content: SEO_CONFIG.keywords },
    { name: "author", content: SEO_CONFIG.additional.author },
    { name: "robots", content: SEO_CONFIG.additional.robots },
    { name: "language", content: SEO_CONFIG.additional.language },
    { name: "geo.region", content: SEO_CONFIG.additional.geo.region },
    { name: "geo.position", content: SEO_CONFIG.additional.geo.position },
    { name: "geo.placename", content: SEO_CONFIG.additional.geo.placename },
    {
      name: "google-site-verification",
      content: SEO_CONFIG.additional.verification.google,
    },
    { name: "msvalidate.01", content: SEO_CONFIG.additional.verification.bing },
    { property: "og:title", content: SEO_CONFIG.og.title },
    { property: "og:description", content: SEO_CONFIG.og.description },
    { property: "og:type", content: SEO_CONFIG.og.type },
    { property: "og:url", content: SEO_CONFIG.og.url },
    { property: "og:image", content: SEO_CONFIG.og.image },
    { property: "og:site_name", content: SEO_CONFIG.og.siteName },
    { name: "twitter:card", content: SEO_CONFIG.twitter.card },
    { name: "twitter:title", content: SEO_CONFIG.twitter.title },
    { name: "twitter:description", content: SEO_CONFIG.twitter.description },
    { name: "twitter:creator", content: SEO_CONFIG.twitter.creator },
    { name: "twitter:site", content: SEO_CONFIG.twitter.site },
  ],
  link: [{ rel: "canonical", href: SEO_CONFIG.og.url }],
});
</script>

<style lang="scss" scoped>
@use "~/assets/scss/main.scss";
</style>
