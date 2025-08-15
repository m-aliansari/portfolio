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
        { name: "theme-color", content: "#ffffff" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "default" },
        {
          name: "apple-mobile-web-app-title",
          content: "Muhammad Ali Ansari Portfolio",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/icons/apple-touch-icon.png" },
        { rel: "manifest", href: "/manifest.json" },
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

  //   features: {
  //     inlineStyles: false,
  //   },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@vueuse/motion/nuxt",
    "nuxt-viewport",
  ],

  viewport: {
    breakpoints: {
      desktop: 1024,
      desktopMedium: 1280,
      desktopWide: 1600,

      mobile: 320,
      mobileMedium: 375,
      mobileWide: 425,
      mobileStart: 500,

      tabletSmall: 652,

      tablet: 768,
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
  //   hooks: {
  //     "build:manifest": (manifest) => {
  //       // find the app entry, css list
  //       const css = Object.values(manifest).find(
  //         (options) => options.isEntry
  //       )?.css;
  //       if (css) {
  //         // start from the end of the array and go to the beginning
  //         for (let i = css.length - 1; i >= 0; i--) {
  //           // if it starts with 'entry', remove it from the list
  //           if (css[i]?.startsWith("entry") || css[i]?.startsWith("default"))
  //             css.splice(i, 1);
  //         }
  //       }
  //     },
  //   },

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
          //   assetFileNames(assetInfo) {
          //     // prevent empty entry.css
          //     const fileNames = assetInfo.names || []; // new Rollup API
          //     const firstName = fileNames[0] || "";

          //     // console.log({fileNames});

          //     // Skip writing if it's an empty CSS file
          //     if (firstName === "style.css" || firstName.endsWith(".css")) {
          //       if (assetInfo.source?.toString().trim().length === 0) {
          //         return null; // returning empty prevents writing
          //       }
          //     }
          //     return firstName || "[name].[hash][extname]";
          //   },
        },
      },
    },
    // plugins: [
    //   {
    //     name: "remove-empty-css",
    //     generateBundle(_, bundle) {
    //       for (const file in bundle) {
    //         const asset = bundle[file];

    //         // Check if it's an asset and a CSS file
    //         if (
    //           asset?.type === "asset" &&
    //           file.endsWith(".css") &&
    //           asset.source.toString().trim() === ""
    //         ) {
    //           // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    //           delete bundle[file];
    //         }
    //       }
    //     },
    //   },
    // ],
  },
});
