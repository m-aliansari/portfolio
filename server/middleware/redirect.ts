import { defineEventHandler, sendRedirect } from "h3";

export default defineEventHandler((event) => {
  const { req } = event.node;

  const host = req.headers.host || "";
  const url = event.node.req.url || "/";

  // Redirect Netlify subdomain to custom domain
  if (host === "muhammadaliansari-portfolio.netlify.app") {
    return sendRedirect(event, `https://muhammadaliansari.com${url}`, 301);
  }
});
