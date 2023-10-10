// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  {
    id: "docs",
    path: "docs/docs",
    routeBasePath: "/docs",
  },
  {
    id: "quick_start",
    path: "docs/quick_start",
    routeBasePath: "/quick_start",
  },
  // {
  //   id: "changelog",
  //   path: "docs/changelog",
  //   routeBasePath: "/changelog",
  // },
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  // breadcrumbs: false,
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
  title: "Algomo documentation",
  tagline: "",
  favicon: "img/favicon-32x32.png",
  url: "https://help.algomo.com",
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

  // trailingSlash: false,
  themes: ["@docusaurus/theme-live-codeblock"],
  onBrokenLinks: "ignore",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs/guides",
          id: "guides",
          routeBasePath: "/guides",
          ...defaultSettings,
        },
        blog: {
          showReadingTime: true,
          path: "docs/changelog",
          routeBasePath: "/changelog",
        },
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
    {
      // Replace with your project's social card
      image: "img/favicon.png",
      // docs: {
      //   sidebar: {
      //     hideable: true,
      //   },
      // },
      algolia: {
        appId: "E70L5PUFYT",
        apiKey: "f27eb312aa7906e875559a1c1b2126cd",
        indexName: "first_index",
        contextualSearch: true,
        searchParameters: {},
      },

      metadata: [
        { name: "keywords", content: "Algomo, Algomo documentation" },
        { property: "og:url", content: "https://help.algomo.com/" },
      ],

      navbar: {
        title: "",
        logo: {
          alt: "Algomo Logo",
          src: "img/logo-black.svg",
          srcDark: "img/logo-white.svg",
        },
        items: [
          {
            to: "guides/",
            position: "left",
            label: "Guides",
          },
          {
            to: "docs/",
            position: "left",
            label: "Documentation",
          },
          {
            to: "changelog/",
            position: "left",
            label: "Changelog",
          },
          {
            type: "search",
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
                label: "Guides",
                to: "/guides",
              },
              {
                label: "Documentation",
                to: "/docs",
              },
              {
                label: "Changelog",
                to: "/changelog",
              },
            ],
          },
          {
            title: "Industries",
            items: [
              {
                label: "E-Commerce",
                href: "https://www.algomo.com/industries/ecommerce-chatbot",
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
    },
  scripts: [
    {
      src: "https://app.algomo.com/algomo.min.js",
      async: true,
      widget: "64b26869eccc94a185db7f18",
      defer: true,
    },
    {
      src: "/js/amplitude.js",
      async: false,
    },
  ],
};

module.exports = config;
