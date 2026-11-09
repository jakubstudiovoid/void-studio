import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { ImageLock } from "@/components/image-lock";
import { JsonLd } from "@/components/json-ld";
import { NotFound } from "@/components/not-found";
import { pageTitle, site } from "@/data/site";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: pageTitle() },
      { name: "description", content: site.description },
      { name: "theme-color", content: "#f5f4f0" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "geo.region", content: "CZ-LI" },
      { name: "geo.placename", content: site.address.city },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="cs" suppressHydrationWarning className="antialiased">
      <head>
        <HeadContent />
      </head>
      <body className="bg-bg text-fg">
        <Outlet />
        <ImageLock />
        <JsonLd />
        <Scripts />
      </body>
    </html>
  );
}
