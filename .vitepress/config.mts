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
      { text: "Controls", link: "/playback-controls" },
      { text: "Common", link: "/common/" }
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
      },
      {
        text: "Common",
        items: [
          { text: "Start Here", link: "/common/" },
          {
            text: "Editor Basics",
            collapsed: false,
            items: [
              { text: "Workspace and Projects", link: "/common/editor-basics/workspace" },
              { text: "Timeline Anatomy", link: "/common/editor-basics/timeline" },
              { text: "Tracks and Properties", link: "/common/editor-basics/tracks" },
              { text: "Navigation and Selection", link: "/common/editor-basics/navigation" },
              { text: "Replay Time and Speed", link: "/common/editor-basics/replay-time" }
            ]
          },
          {
            text: "Keyframes",
            collapsed: false,
            items: [
              { text: "Keyframes", link: "/common/keyframes/" },
              { text: "Interpolation", link: "/common/keyframes/interpolation" },
              { text: "Easing", link: "/common/keyframes/easing" },
              { text: "Graphs and Bézier Curves", link: "/common/keyframes/graphs" }
            ]
          },
          {
            text: "Camera",
            collapsed: true,
            items: [
              { text: "Camera Paths", link: "/common/camera/paths" },
              { text: "Framing and FOV", link: "/common/camera/framing" },
              { text: "Smooth Motion", link: "/common/camera/smooth-motion" },
              { text: "Orbit, Follow, and Shake", link: "/common/camera/targets-effects" }
            ]
          },
          {
            text: "World",
            collapsed: true,
            items: [
              { text: "Time and Weather", link: "/common/world/time-weather" },
              { text: "Entity and Object Visibility", link: "/common/world/visibility" }
            ]
          },
          { text: "Audio Import and Sync", link: "/common/audio" },
          { text: "Editing Workflow", link: "/common/workflow" },
          { text: "Glossary", link: "/common/glossary" }
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
