import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Replay Documentation",
  description: "Learn how to record, manage, and watch Flarial replays.",
  lang: "en-US",
  base: "/",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: "https://flarial.xyz/logo.svg" }],
    ["meta", { name: "theme-color", content: "#e11d48" }]
  ],
  themeConfig: {
    logo: "https://flarial.xyz/logo.svg",
    siteTitle: "Flarial Replay",
    search: { provider: "local" },
    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/getting-started" },
      { text: "Controls", link: "/playback-controls" }
    ],
    sidebar: [
      {
        text: "Replay",
        items: [
          { text: "Overview", link: "/" },
          { text: "Getting Started", link: "/getting-started" },
          { text: "Replay Manager", link: "/replay-manager" },
          { text: "Playback Controls", link: "/playback-controls" },
          { text: "Troubleshooting", link: "/troubleshooting" }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/flarialmc/replay-docs" }
    ],
    footer: {
      message: "Built for Flarial Client",
      copyright: "Flarial"
    },
    outline: { level: [2, 3] },
    lastUpdated: { text: "Updated" }
  }
});
