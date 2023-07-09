// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  // {
  //   id: "getting-started",
  //   path: "docs/getting-started",
  //   routeBasePath: "/getting-started",
  // },
  {
    id: "widgets",
    path: "docs/widgets",
    routeBasePath: "/widgets",
  },
  {
    id: "chatbots",
    path: "docs/chatbots",
    routeBasePath: "/chatbots",
  },
  {
    id: "data-sources",
    path: "docs/data-sources",
    routeBasePath: "/data-sources",
  },
  {
    id: "tools",
    path: "docs/tools",
    routeBasePath: "/tools",
  },
  {
    id: "inbox",
    path: "docs/inbox",
    routeBasePath: "/inbox",
  },
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: false,
  showLastUpdateTime: true,
  // remarkPlugins: [
  //   [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  // ],
  sidebarPath: require.resolve("./sidebars-default.js"),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve("./sidebars-default.js"),
  ...options
}) {
  return [
    "@docusaurus/plugin-content-docs",
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const plugins = [...docs_plugins];

/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: "Knowledge Base",
  tagline: "",
  favicon: "img/favicon-32x32.png",
  url: "https://algomo.com",
  baseUrl: "/",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,

  trailingSlash: false,
  themes: ["@docusaurus/theme-live-codeblock"],
  onBrokenLinks: "ignore",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs/getting-started",
          id: "getting-started",
          routeBasePath: "/getting-started",
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          ignorePatterns: ["/tags/**"],
        },
        // TODO: Add your google analytics key
        googleTagManager: {
          containerId: "GTM-5FDFFSS",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/favicon.png",
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "",
        logo: {
          alt: "Algomo Logo",
          src: "img/logo-black.svg",
          srcDark: "img/logo-white.svg",
        },
        items: [
          {
            to: "getting-started/",
            position: "left",
            label: "Getting Started",
          },
          {
            to: "widgets/",
            position: "left",
            label: "Widgets",
          },
          {
            to: "chatbots/",
            position: "left",
            label: "Chatbots",
          },
          {
            to: "data-sources/",
            position: "left",
            label: "Data Sources",
          },
          {
            to: "tools/",
            position: "left",
            label: "Tools",
          },
          {
            to: "inbox/",
            position: "left",
            label: "Inbox",
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
                label: "Getting Started",
                to: "/getting-started",
              },
              {
                label: "Widgets",
                to: "/widgets",
              },
              {
                label: "Chatbots",
                to: "/chatbots",
              },
              {
                label: "Data Sources",
                to: "/data-sources",
              },
              {
                label: "Tools",
                to: "/tools",
              },
              {
                label: "Inbox",
                to: "/inbox",
              },
            ],
          },
          {
            title: "Industries",
            items: [
              {
                label: "E-Commerce",
                href: "https://www.algomo.com/industries/ecommerce",
              },
              {
                label: "SaaS",
                href: "https://www.algomo.com/industries/saas",
              },
              {
                label: "FinTech",
                href: "https://www.algomo.com/industries/fintech",
              },
              {
                label: "Travel",
                href: "https://www.algomo.com/industries/travel",
              },
            ],
          },

          {
            title: "Community",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/algomo",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/algomocom",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/Algomocom",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/algomo/",
              },
            ],
          },
          {
            title: "Check More",
            items: [
              {
                label: "Our Website",
                href: "https://algomo.com",
              },
              {
                label: "Privacy Policy",
                href: "https://www.algomo.com/privacy-policy",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Algomo, Inc.`,
        logo: {
          alt: "Algomo Logo",
          src: "img/logo-white.svg",
          style: {
            width: "200px",
          },
          href: "https://algomo.com",
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
