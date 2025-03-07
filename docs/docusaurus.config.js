const path = require("path");
const { withUrl } = require("./src/utils");

const title = "Plaiceholder: Docs";
const github = "https://github.com/joe-bell/plaiceholder";

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title,
  tagline: "Documentation for Plaiceholder.co",
  url: withUrl(),
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: withUrl("/assets/images/favicon/favicon@192px.png"),
  organizationName: "joe-bell",
  projectName: "plaiceholder",
  themeConfig: {
    algolia: {
      apiKey: "826807810a2151450376d6c710bd76c7",
      indexName: "plaiceholder",
    },
    metaTags: [{ name: "data-title", content: title }],
    navbar: {
      title: "Plaiceholder",
      logo: {
        href: withUrl(),
        alt: "Plaice Fish",
        src: "img/logo-light.png",
        srcDark: "img/logo-dark.png",
      },
      items: [
        { to: "/", label: "Docs", position: "left" },
        {
          href: withUrl(),
          label: "Studio",
          position: "left",
        },
        {
          href: github,
          position: "right",
          label: "GitHub",
          className: "navbar__github-link",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Learn",
          items: [
            {
              label: "Introduction",
              to: "/",
            },
            {
              label: "Usage",
              to: "/usage",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: github,
            },
            {
              label: "Twitter",
              href: "https://twitter.com/joebell_",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy",
              href: withUrl("/privacy"),
            },
            {
              label: "Terms",
              href: withUrl("/terms"),
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Joe Bell`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: path.join(github, "/edit/main/docs/"),
          path: "docs",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
