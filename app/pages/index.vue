<template>
  <div>
    <Hero />
    <LazyAbout hydrate-on-idle />
    <LazySkills hydrate-on-idle />
    <LazyHighlights hydrate-on-idle />
    <LazyExperience hydrate-on-idle />
    <LazyReviews hydrate-on-idle />
    <LazyContact hydrate-on-idle />
  </div>
</template>

<script setup>
import { JSON_LD } from "~/constants/jsonld";
import { META_PROPERTIES } from "~/constants/meta";
import { SEO_CONFIG } from "~/constants/seo";

// SEO meta tags
useHead({
  title: SEO_CONFIG.title,
  meta: META_PROPERTIES,
  link: [
    { rel: "canonical", href: SEO_CONFIG.og.url },
    { rel: "alternate", hreflang: "en", href: SEO_CONFIG.og.url },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify(JSON_LD),
    },
  ],
});
</script>
<style lang="scss">
@use "~/assets/scss/main.scss";
</style>
