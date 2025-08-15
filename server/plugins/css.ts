export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html) => {
    html.head.forEach((item, index) => {
      //<link rel="stylesheet" href="/_nuxt/layouts/default.vue?vue&type=style&index=0&lang.scss" crossorigin>
      html.head[index] = item.replace(
        /<link rel="stylesheet".+css" crossorigin>/g,
        "<!-- $1 -->"
      );
    });
  });
});
