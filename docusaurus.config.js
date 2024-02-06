// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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
  plugins: [
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_4R2lYaOKLfigdGBp2pFjeec6PSriHHEr1tIkidUsDsk",
        appUrl: "https://eu.posthog.com",
        enableInDevelopment: false,
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  onBrokenLinks: "ignore",
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          id: "docs",
          routeBasePath: "/",
          breadcrumbs: false,
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars-default.js"),
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
      image: "img/favicon.png",
      algolia: {
        appId: "E70L5PUFYT",
        apiKey: "f27eb312aa7906e875559a1c1b2126cd",
        indexName: "first_index",
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: false,
      },

      metadata: [
        { name: "keywords", content: "Algomo, Algomo documentation" },
        {
          name: "description",
          content:
            "Learning resources to help you get started on Algomo. Here you will learn how to use the Algomo chatbot and improve your users experience.",
        },
        { property: "og:type", content: "website" },
      ],

      navbar: {
        logo: {
          alt: "Algomo Logo",
          src: "img/logo-black.svg",
          srcDark: "img/logo-white.svg",
        },
        items: [
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
                href: "https://www.algomo.com",
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
          href: "https://www.algomo.com",
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
