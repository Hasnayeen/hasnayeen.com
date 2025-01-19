import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import umami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  site: "https://hasnayeen.com",
  integrations: [
    mdx(),
    sitemap(),
    solidJs(),
    tailwind({ applyBaseStyles: false }),
    umami({
      id: "1561df43-ed2b-45c1-8f4c-d35b83b0059b",
    })
  ],
})