// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cool Request',
  tagline: '新一代 IDEA 接口调试工具(v2024.5.1)',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://coolrequest.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'houxinlin', // Usually your GitHub org/user name.
  projectName: 'houxinlin', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsible: false,
          sidebarPath: './sidebars.js'
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        blog: {
          showReadingTime: true
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Cool Request',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '教程',
          },
          {
            href: 'https://vip.coolrequest.dev',
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'VIP',
          },
          {
            href: 'https://github.com/houxinlin/cool-request',
            html: `
            <img
              src="https://img.shields.io/github/stars/houxinlin/cool-request?style=social"
              alt="GitHub Stars"
              style="vertical-align: middle"
            />
          `,
            position: 'right',
          },

        ],
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java'],
      },
    }),
};

export default config;
