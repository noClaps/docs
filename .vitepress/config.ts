import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ZeroLimits Docs",
  description: "Documentation for ZeroLimits projects",
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      {
        text: "Documentation",
        items: [
          { text: "The Blog of Random", link: "/blog/writing-posts" },
          { text: "Znak", link: "/znak" },
        ],
      },
    ],
    sidebar: {
      "/blog/": [
        {
          text: "The Blog of Random",
          items: [{ text: "Writing posts", link: "/blog/writing-posts" }],
        },
      ],
      "/znak/": [
        {
          text: "Znak",
          link: "/znak",
          items: [
            { text: "Syntax", link: "/znak/syntax" },
            { text: "Types", link: "/znak/types" },
          ],
        },
      ],
    },
    socialLinks: [{ icon: "github", link: "https://github.com/noClaps/docs" }],
    footer: {
      copyright: "Copyright © 2024 noClaps",
      message: "Released under the 0BSD license.",
    },
    search: {
      provider: "local",
    },
  },
});
