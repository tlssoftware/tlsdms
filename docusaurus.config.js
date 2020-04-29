module.exports = {
  title: 'Documentation',
  tagline: 'Easy - Fast - Delivered',
  url: 'http://docs.tlssoftwarevn.com/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'tlssoftware', // Usually your GitHub org/user name.
  projectName: 'tlsdms', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'TLS Software',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo_stroke.png',
      },
      links: [
        // {
        //   to: 'docs/doc1',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        {to: 'blog', 
        label: 'Blog', 
        position: 'left'
        },
        // {
        //   href: '',
        //   label: 'Switch Me',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TLS Software, Ltd.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
