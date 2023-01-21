// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Outpost platform",
  tagline: "A new kind of service directory",
  url: "https://outpost-platform.wearefuturegov.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "icons/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "wearefuturegov", // Usually your GitHub org/user name.
  projectName: "outpost-docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/wearefuturegov/outpost-docs/tree/main/",
          sidebarCollapsed: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/wearefuturegov/outpost-docs/tree/main/",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    "@docusaurus/plugin-ideal-image",
    () => ({
      name: "inject-tag",
      injectHtmlTags() {
        return {
          headTags: [
            {
              tagName: "link",
              attributes: {
                rel: "stylesheet",
                href: "/shame.css",
              },
            },
            {
              tagName: "link",
              attributes: {
                rel: "stylesheet",
                href: "https://use.typekit.net/wsk4rpc.css",
              },
            },
            {
              tagName: "link",
              attributes: {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/icons/apple-touch-icon.png",
              },
            },
            {
              tagName: "link",
              attributes: {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/icons/favicon-32x32.png",
              },
            },
            {
              tagName: "link",
              attributes: {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/icons/favicon-16x16.png",
              },
            },
            {
              tagName: "link",
              attributes: {
                rel: "manifest",
                href: "/site.webmanifest",
              },
            },
          ],
        };
      },
    }),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Outpost platform",
        logo: {
          alt: "Outpost Icon Logo",
          src: "img/logos/logo-icon-outpost-main.svg",
          srcDark: "img/logos/logo-icon-outpost-white.svg",
        },
        items: [
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/wearefuturegov/outpost",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discussion board",
                href: "https://github.com/wearefuturegov/outpost/discussions",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/TPXImpact",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Archive",
                to: "/blog/archive",
              },
              {
                label: "GitHub",
                href: "https://github.com/wearefuturegov/outpost",
              },
            ],
          },
        ],
        copyright: `<br />Copyright © ${new Date().getFullYear()} TPXimpact Ltd. Company Number: 06472420. Registered in England and Wales.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["bash", "ruby"],
      },
    }),
};

module.exports = config;
