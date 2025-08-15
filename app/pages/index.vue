<template>
  <div class="portfolio-page">
    <Hero />
    <LazyReviews hydrate-on-idle />
    <LazyHighlights hydrate-on-visible />
    <LazyAbout hydrate-on-visible />
    <LazySkills hydrate-on-visible />
    <LazyExperience hydrate-on-visible />
    <ClientOnly>
      <LazyContact hydrate-on-visible />
    </ClientOnly>
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
  ],
  link: [
    { rel: "canonical", href: SEO_CONFIG.og.url },
    { rel: "alternate", hreflang: "en", href: SEO_CONFIG.og.url },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://muhammadaliansari.com/",
            url: "https://muhammadaliansari.com/",
            name: "Muhammad Ali Ansari Portfolio",
            description:
              "Portfolio of Muhammad Ali Ansari, Full Stack Developer specializing in Vue.js, Nuxt.js, React, Node.js, and cloud solutions.",
            publisher: {
              "@type": "Person",
              "@id": "https://muhammadaliansari.com/#person",
            },
          },
          {
            "@type": "Person",
            "@id": "https://muhammadaliansari.com/#person",
            name: "Muhammad Ali Ansari",
            url: "https://muhammadaliansari.com/",
            image:
              "https://muhammadaliansari.com/images/muhammad-ali-ansari-profile-picture.webp",
            description:
              "Full Stack Developer with 4+ years of experience in Vue.js, Nuxt.js, React, Node.js, and cloud solutions. Skilled in performance optimization, SEO, and cutting-edge web technologies.",
            jobTitle: "Full Stack Developer",
            worksFor: {
              "@type": "Organization",
              name: "Awards Box",
              url: "https://awardsbox.com",
            },
            knowsAbout: [
              "Full Stack Development",
              "Frontend Development",
              "Backend Development",
              "Vue.js",
              "Nuxt.js",
              "React",
              "Node.js",
              "JavaScript",
              "TypeScript",
              "PostgreSQL",
              "Google Cloud Platform",
              "Performance Optimization",
              "SEO Strategies",
              "Memory Leak Prevention",
              "Search Engine Development",
              "Chatbot Development",
              "Database Optimization",
              "API Development",
              "RESTful APIs",
              "GraphQL",
              "Python",
              "Docker",
              "Kubernetes",
              "Microservices",
              "Serverless Architecture",
              "CI/CD",
              "Git",
              "Agile Development",
              "Scrum",
            ],
            sameAs: [
              "https://github.com/m-aliansari",
              "https://www.linkedin.com/in/muhammad-ali-ansari-61304a1b3/",
              "https://www.fiverr.com/maa_coding",
            ],
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://muhammadaliansari.com/",
            },
          },
        ],
      }),
    },
  ],
});
</script>
<style lang="scss">
@use "./main.scss";
</style>
