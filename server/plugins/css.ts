export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html) => {
    // let dev run as normal

    if (import.meta.dev) return;

    html.head.forEach((item, index) => {
      html.head[index] = item.replaceAll(
        /^(<link rel="stylesheet".+>)/gm,
        "<!-- $1 -->"
      );
    });
  });
});
