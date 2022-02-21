/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Baitech Wiki',
  tagline: '百工链存',
  url: 'https://wiki.baitech-ipfs.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'baitech', // Usually your GitHub org/user name.
  projectName: 'baitech-wiki', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  themeConfig: {
    prism: {
      additionalLanguages: ['java'],
    },
    navbar: {
      title: 'wiki',
      logo: {
        alt: 'Baitech Logo',
        src: 'img/logo.png',
        width: 110,
        height: 46,
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.

          editUrl: 'https://github.com/baitech-ipfs/baitech-wiki/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/baitech-ipfs/baitech-wiki/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
