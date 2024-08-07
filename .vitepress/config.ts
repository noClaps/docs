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
          { text: "NC", link: "/nc/" },
          { text: "CLI", link: "/cli" },
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
      "/nc/": [
        {
          text: "NC",
          link: "/nc",
          items: [{ text: "Design", link: "/nc/design" }],
        },
      ],
      "/cli/": [
        {
          text: "CLI",
          link: "/cli",
          items: [
            { text: "random", link: "/cli/random" },
            { text: "lsdeps", link: "/cli/lsdeps" },
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
