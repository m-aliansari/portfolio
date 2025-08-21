// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true, timeline: { enabled: true } },
  css: undefined,
  app: {
    baseURL: "/",
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "preload",
          as: "font",
          href: "/fonts/Inter/Inter-Medium.woff2",
          type: "font/woff2",
          crossorigin: "", // keep empty attribute; safe for caching and same/any origin
        },
        {
          rel: "preload",
          as: "font",
          href: "/fonts/Inter/Inter-SemiBold.woff2",
          type: "font/woff2",
          crossorigin: "", // keep empty attribute; safe for caching and same/any origin
        },
        {
          rel: "preload",
          as: "font",
          href: "/fonts/Inter/Inter-Bold.woff2",
          type: "font/woff2",
          crossorigin: "", // keep empty attribute; safe for caching and same/any origin
        },
        {
          rel: "preload",
          as: "font",
          href: "/fonts/Inter/Inter-ExtraBold.woff2",
          type: "font/woff2",
          crossorigin: "", // keep empty attribute; safe for caching and same/any origin
        },
      ],
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@vueuse/motion/nuxt",
    "nuxt-viewport",
  ],

  viewport: {
    breakpoints: {
      desktopWide: 1600,
      desktopMedium: 1280,
      desktop: 1024,

      tabletWide: 870,
      tablet: 768,
      tabletSmall: 652,

      mobileStart: 500,
      mobileWide: 425,
      mobileMedium: 375,
      mobile: 320,
      mobileSmall: 300,
    },
  },

  // Performance optimizations
  nitro: {
    minify: true,
    compressPublicAssets: {
      brotli: true,
      gzip: true,
    },
  },

  // Runtime config
  runtimeConfig: {
    public: {
      siteUrl: process.env.SITE_URL || "http://localhost:3000",
    },
  },

  // SSR for better SEO
  ssr: true,

  // Vite optimizations
  vite: {
    build: {
      cssCodeSplit: true,
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["vue", "vue-router"],
          },
        },
      },
    },
  },
});
